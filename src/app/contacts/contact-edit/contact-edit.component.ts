import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Contact } from '../contact-list/contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  @ViewChild("f") contactForm: NgForm

  id: number
  editMode: boolean

  contact: Contact = {
    id: 0,
    name: "",
    description: "",
    imagePath: ""
  }

  constructor(private route: ActivatedRoute, private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"]
      this.editMode = params["id"] != null

      if (this.editMode) {
        this.contact = this.contactService.getContactById(this.id)
      }

    })
  }

  onSubmit() {
    if (this.editMode) {
      this.contactService.replaceContactAt(this.id, this.contact)
      
    } else {
      this.contactService.appendContact(this.contact)
    }
  }

  onContactClear() {
    this.contactForm.reset()
  }

  onContactCancel(){
    this.router.navigate(["/contacts"],{relativeTo:this.route})
  }

}
