export class Contact {
    id:number
    name: string
    description: string
    imagePath: string

    constructor(id:number,name: string,desc:string,imagePath:string){
        this.id=id
        this.name=name
        this.description=desc
        this.imagePath=imagePath
    }
}