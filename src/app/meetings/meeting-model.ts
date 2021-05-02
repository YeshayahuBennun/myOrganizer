
export class Meeting {
    
    contactName: string
    date= new Date()

    constructor(contactName: string,date:Date) {
        this.contactName = contactName
         this.date=date       
    }
}