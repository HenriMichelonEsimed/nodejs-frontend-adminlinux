class Car {
    constructor(make, model, isrunning, price, buildate) {
        this.make = make
        this.model = model
        this.isrunning = isrunning
        this.price = price
        this.builddate = buildate
    }
    toString() {
        return `${this.make} ${this.model}`
    }
}

class UserAccount {
    constructor(displayname, login, password) {
        this.displayname = displayname
        this.login = login
        this.password = password
    }
}