"use strict";
import { Authentication } from "./Authentication.class.js";
const Auth = new Authentication();

const formElement = document.getElementById("login-form");

formElement.addEventListener("submit", login);

function login(e) {
    e.preventDefault();
    const uname = formElement.uname.value;
    const pwd = formElement.pwd.value;
    const auth_status = Auth.login(uname, pwd);
    console.log(auth_status)
}

function logout() {
    console.log("logout")
}









