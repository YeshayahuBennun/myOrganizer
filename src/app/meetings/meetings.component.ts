import { Component, OnInit } from '@angular/core';
import { Meeting } from './meeting-model';
import { MeetingService } from './meeting.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  meetings: Meeting[]

  constructor(private meetingService: MeetingService) {

  }

  ngOnInit(): void {
    this.meetingService.fetchAllMeetings()
    this.meetingService.meetingsChanged.subscribe((meetings:Meeting[])=>{
      this.meetings = meetings
    })

  }
}
