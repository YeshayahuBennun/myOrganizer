
import { Input } from '@angular/core';
import { Component} from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent{

  @Input() contact: Contact
  @Input() id:number
  
 }
