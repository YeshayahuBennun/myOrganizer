import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Meeting } from '../meeting-model';
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'app-meeting-edit',
  templateUrl: './meeting-edit.component.html',
  styleUrls: ['./meeting-edit.component.css']
})
export class MeetingEditComponent implements OnInit {

  @ViewChild("f") meetingsForm: NgForm

  meeting: Meeting = {
    contactName: "",
    date: null
  }

  constructor(private meetingService: MeetingService) {
  }

  ngOnInit() { }

  onSubmit() {
    this.meetingService.appendMeetings(this.meeting)
  }

  onMeetingClear(){
    this.meetingsForm.reset()
  }
}
