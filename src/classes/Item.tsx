export default class Item {
    isDone : boolean= false
    name : string = ""

    constructor(done : boolean, name : string) {
        this.name=name
        this.isDone=done
    }
}
