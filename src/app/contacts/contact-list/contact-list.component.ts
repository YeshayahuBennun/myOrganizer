import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  /*We can also name the event by provinding it to the @Output decoration*/
  @Output("contactSelected") emitter = new EventEmitter<Contact>()

  /*Initialize an empty array of type Contacts */
  contacts: Contact[]

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.contactService.fetchAllContacts()
      this.contactService.contactsChanged.subscribe((contacts: Contact[]) => {
      this.contacts = contacts
    })
  }

  onNewContact() {
    /*Navigate to ContactEditComponent using the url: localhost:4200/contacts/new */
    /*TODO: Try to run this code only with this.router.navigate(["new"]) and see what happens*/
    this.router.navigate(["new"], { relativeTo: this.route })
  }

}
