var attempts = 0;
var login = "no";
var later = false;

do {
  var tries = 30;
  userName = prompt("Login Credentials \nUsername:", "");
  password = prompt("Login Credentials \nPassword:", "");

  if (userName == "Qwerty" && password == "12345") {
    alert("Successfully logged in to account " + userName + ".");
    var login = "yes";
  } else if (userName == "" || userName == null) {
    alert("Canceled");
    var login = "cancel";
  } else if (password == "" || password == null) {
    alert("Canceled");
    var login = "cancel";
  } else {
    alert(`Incorrect Username and/or Password.`);
    attempts += 1;
    if (attempts < 3) {
      alert(
        `Please input correct credentials. You only have ${
          3 - attempts
        } attempts remaining until account will be locked for security.`
      );
    } else if ((attempts = 3)) {
      alert("Exceeded tries! Account is locked. Please try again in 30s."); 
      var login = "again";
       do {
        alert(
          `Please press OK ${
            tries
          } times to reset login attempts.`
        );
        tries -= 1;
        if (tries == 0) {
          var login = "no";
          var attempts = 0; 
        }
       } while (login == "again")
      ; 

    }
  }
} while (login == "no");

console.log(attempts);
//allow user to enter username and password
// max of 3 attempts
// if max attempt on credentials (username and password)
// disable input credentials
// reset after 30 seconds (include countdown timer)
// repeat.
