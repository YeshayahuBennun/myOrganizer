import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Contact } from '../contact-list/contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact
  id: number
  


  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"]
      this.contact = this.contactService.getContactById(this.id)
    })
  }

  onMeetContact() {
    this.router.navigate(["/meetings"], { relativeTo: this.route })
    
  }

  onEditContact() {
    this.router.navigate(["edit"], { relativeTo: this.route })
  }

  removeContact() {
    this.contactService.deleteContact(this.id)
  }
}
