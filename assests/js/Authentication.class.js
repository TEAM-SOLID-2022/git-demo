export class Authentication {
    _username = "admin"
    _password = "admin"
    _auth_status = false;

    constructor() {
    }

    // Method to authenticate user

    login(uname, pwd) {
        console.log(uname, pwd)
        if (this.isExisting(uname, pwd)) {
            this._auth_status = true;
            return this._auth_status;
        }
        return false;
    }

    // Method to logout user

    logout() {
        this.username = "";
        this.password = "";
        this._auth_status = false;
        return this._auth_status;
    }

    isExisting(uname, pwd) {
        // code to check if user exists
        if (this._username == uname && this._password == pwd) {
            this.name = "Wave"
            return true
        }
    }

}