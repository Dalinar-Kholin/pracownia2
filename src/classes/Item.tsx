export default class Item {
    isDone : boolean= false
    name : string = ""
    date : number

    constructor(done : boolean, name : string, date : number) {
        this.name=name
        this.isDone=done
        this.date = date
    }
}
