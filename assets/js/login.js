const loginForm = document.getElementById("login-form")

const successAlert = document.getElementById("success-alert")
const failureAlert = document.getElementById("failure-alert")
const warningAlert = document.getElementById("warning-alert")

const loginBtn = loginForm["login-btn"]

loginForm.addEventListener("submit", login)

const USERNAME = "admin"
const PASSWORD = "12345"
const MAX_ATTEMPTS = 3
const MAX_TIMEOUT = 30
const MAX_INTERVAL = 1000
let isResetting = false
let attempts = 0
let counter = 0

let timer = null


function login(e) {
    e.preventDefault()

    successAlert.classList.add("d-none")
    failureAlert.classList.add("d-none")
    warningAlert.classList.add("d-none")

    let uname = loginForm.uname.value
    let pword = loginForm.pwd.value


    if (uname === "" || uname === null) {
        warningAlert.innerText = "Enter Username"
        warningAlert.classList.remove("d-none")
        return
    }

    if (pword === "" || pword === null) {
        warningAlert.innerText = "Enter Password"
        warningAlert.classList.remove("d-none")
        return
    }

    if (attempts >= MAX_ATTEMPTS) {
        warningAlert.innerHTML = `Exceeded tries! Account is locked. Please try again in <strong> ${MAX_TIMEOUT - counter}</strong>s.`
        warningAlert.classList.remove("d-none")
        if (!isResetting) {
            isResetting = true
            timer = setInterval(incrementCounter, MAX_INTERVAL)
        }
        return
    }

    // check if username and password are correct
    if (uname === USERNAME && pword === PASSWORD) {
        successAlert.innerText = `Successfully logged in to account ${uname}`
        successAlert.classList.remove("d-none")
    }
    else {
        attempts++
        failureAlert.innerHTML = `<strong>Incorrect Username and/or Password.</strong><br> <p>You have <strong>${(MAX_ATTEMPTS - attempts)}</strong> attempts remaining</p>`
        failureAlert.classList.remove("d-none")
    }

}

function incrementCounter() {
    if (counter >= MAX_TIMEOUT) {
        clearInterval(timer)
        attempts = 0
        isResetting = false
        counter = 0
        warningAlert.classList.add("d-none")
        return
    }
    counter++
    warningAlert.innerHTML = `Exceeded tries! Account is locked. Please try again in <strong> ${MAX_TIMEOUT - counter}</strong>s.`

}



