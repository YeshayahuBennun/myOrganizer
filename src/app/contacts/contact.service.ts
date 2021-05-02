import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { StorageService } from '../common/storage.service';
import { Contact } from './contact-list/contact.model';
import { ContactsComponent } from './contacts.component';

@Injectable()
export class ContactService {
    /*Initialize an empty array of type Contact */
    private contacts: Contact[]
    contactSelected = new EventEmitter<Contact>()
    contactsChanged = new EventEmitter<Contact[]>()
    errorChanel = new Subject<string>()

    contact: Contact

    constructor(private storageService: StorageService, private router: Router) {

    }

    fetchAllContacts() {
        this.storageService.getAllContacts()
            .subscribe(contacts => {
                this.contacts = contacts
                this.onContacsChanged()
            }, error => {
                this.errorChanel.next("There was a error trying to fetch contacts from the cloud!")
            })
    }

    getContacts() {
        return this.contacts.slice()
    }

    onContacsChanged() {
        this.contactsChanged.emit(this.getContacts())
    }

    getContactById(id: number) {
        this.contacts.forEach(element => {
            if (element.id === id) {
                this.contact = new Contact(element.id, element.name,
                    element.description, element.imagePath)
            }
        });

        return this.contact
    }

    appendContact(contact: Contact) {
        this.storageService.postContact(contact)
            .subscribe(contact => {
                this.contacts.unshift(contact)
                this.onContacsChanged()
            }, error => {
                this.errorChanel.next("Somthing went wrong while trying to add a new contact! ")
            })

    }
    replaceContactAt(id: number, contact: Contact) {
        for (var i = 0; i < this.contacts.length; i++) {
            if (id === this.contacts[i].id) {
                this.contacts[i] = contact
                this.storageService.updateContact(contact)
                    .subscribe(contact => {
                        this.contacts.unshift(contact)
                        this.onContacsChanged()
                        this.fetchAllContacts()
                        this.router.navigate(["/contacts"])
                    })

                /* this.onContacsChanged() */
            }
        }
    }

    deleteContact(id: number) {
        this.storageService.removeContact(id)
            .subscribe(() => {
                console.log("Delete success")
                this.onContacsChanged()
                this.fetchAllContacts()
                this.router.navigate(["/contacts"])
            })
    }
}