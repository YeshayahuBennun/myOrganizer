import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Contact } from "../contacts/contact-list/contact.model";
import { ContactService } from "../contacts/contact.service";
import { Meeting } from "../meetings/meeting-model";
@Injectable()
export class StorageService {
    
    
    constructor(private http: HttpClient) {
        
    }
    
    getAllContacts(): Observable<Contact[]> {
        return this.http.get<Contact[]>("http://localhost:8080/api/contacts/all")
    }
    
    postContact(contact: Contact) {
        return this.http.post<Contact>("http://localhost:8080/api/contacts/new", contact)
    }
    
    removeContact(id: number) {
        return this.http.delete("http://localhost:8080/api/contacts/delete/" + id)
    }
    
    updateContact(contact: Contact): Observable<Contact> {
        return this.http.put<Contact>("http://localhost:8080/api/contacts/update",contact)
    }
    
    getAllMeetings():Observable<Meeting[]> {
        return this.http.get<Meeting[]>("http://localhost:8080/api/meetings/all")
    }
    
    postMeeting(meeting: Meeting) {
        return this.http.post<Meeting>("http://localhost:8080/api/meetings/add",meeting)
    }
}