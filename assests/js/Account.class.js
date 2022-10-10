export class Account {
    constructor() {
        this.id;
        this.name;
        this.username;
        this.password;
        this.account_status;
    }

    // Method to register user

    register(name, uname, pwd) {
        this.id = Math.floor(Math.random() * 1000);
        this.name = name;
        this.username = uname;
        this.password = pwd;
        this.account_status = true;
        return this.account_status;
    }

}