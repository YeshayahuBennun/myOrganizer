import { Component, OnInit } from '@angular/core';
import { Contact } from './contact-list/contact.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[ContactService]
})
export class ContactsComponent implements OnInit {

  selectedContact:Contact
  //...
  errorMessage: string;
  //...
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    this.contactService.contactSelected.subscribe((contact:Contact)=>{
      this.selectedContact=contact
    })
    this.contactService.errorChanel.subscribe(errorMessage=>{
      this.errorMessage=errorMessage;
    })
  }

  onClickDismissError(){
    this.errorMessage=""
  }

}
