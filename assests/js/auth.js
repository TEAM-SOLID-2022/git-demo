"use strict";
import { Authentication } from "./Authentication.class.js";
const Auth = new Authentication();

const formElement = document.getElementById("login-form");
const logout_btn = document.getElementById("logout_btn");

logout_btn.addEventListener("click", logout);
formElement.addEventListener("submit", login);

function login(e) {
    e.preventDefault();
    const uname = formElement.uname.value;
    const pwd = formElement.pwd.value;
    Auth.login(uname, pwd);
    if (Auth._auth_status) {
        logout_btn.style.display = "block";
        formElement.login.style.display = "none";
    }
    console.log("Authenticated", Auth._auth_status)
}

function logout() {
    Auth.logout();
    console.log("Authenticated", Auth._auth_status)

}









