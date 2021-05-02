import { EventEmitter, Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { StorageService } from '../common/storage.service';
import { Contact } from '../contacts/contact-list/contact.model';
import { Meeting } from './meeting-model';

@Injectable()
export class MeetingService {

    private meetings: Meeting[]
    meetingsChanged = new EventEmitter<Meeting[]>()
    errorChanel2 = new Subject<string>()

    meeting: Meeting

    constructor(private storageService: StorageService, private router: Router) {

    }

    fetchAllMeetings() {
        this.storageService.getAllMeetings()
            .subscribe(meetings => {
                this.meetings = meetings
                this.onMeetingsChanged()

            })
    }   

    getMeetings() {
        return this.meetings.slice()
    }

    onMeetingsChanged() {
        this.meetingsChanged.emit(this.getMeetings())
    }



    appendMeetings(meeting: Meeting) {
        this.storageService.postMeeting(meeting)
            .subscribe(meeting => {
                this.meetings.unshift(meeting)
                this.onMeetingsChanged()
            })
    }
}