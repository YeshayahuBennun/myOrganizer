import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactDetailComponent } from "./contacts/contact-detail/contact-detail.component";
import { ContactEditComponent } from "./contacts/contact-edit/contact-edit.component";
import { ContactStartComponent } from "./contacts/contact-start/contact-start.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { MeetingsComponent } from "./meetings/meetings.component";


const routes: Routes = [
  //localhost:4200/
  { path: "", redirectTo: "/contacts", pathMatch: "full" },
  //loalhost:4200/contacts
  {
    path: "contacts", component: ContactsComponent, children: [
      { path: "", component: ContactStartComponent },
      {path:"new",component:ContactEditComponent},
      {path:":id", component: ContactDetailComponent},
      {path:":id/edit",component:ContactEditComponent}
    ]
  },
  //localhost:4200/meetings
  { path: "meetings", component: MeetingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
