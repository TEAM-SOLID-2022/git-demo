var attempts = 0;
var login = false;

do{
userName = prompt("Input Username","");
password = prompt("Input Password:", "");

if ( userName == "abc" && password == "123") {
    alert("Welcome abc!");
    login = true;
}
else {
    alert(`${userName} and ${password} is not valid.`);
    attempts += 1;
    if(attempts < 3){alert(`Wrong credentials! Try again. ${3-attempts} remaining tries.`)

    }else if(attempts = 3) {alert("Exceeded tries! Account is locked.")};
}
} while ( login != true );

console.log(attempts);
//allow user to enter username and password
// max of 3 attempts
// if max attempt on credentials (username and password)
// disable input credentials
// reset after 30 seconds (include countdown timer)
// repeat.

