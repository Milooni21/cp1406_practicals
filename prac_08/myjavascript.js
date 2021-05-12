alert("Send pizza, we\'re starving!")

let message = "Hello";
alert(message);
message = "What is your name?";

let userName = prompt(message)
alert("You said: " + userName);   

while (userName.length < 2) {
    userName = prompt("Please enter a user name that has more than two letters.");
}

if (userName.length < 2) {
    userName = prompt("I see you are using an initial");
}
else {
    alert("Your userName is now updated");
}   

 

alert("Your correct userName is: " + userName);
 
function showMessage(prompt) {
    alert(prompt); 
}

function myFunction() {
    confirm("Are you sure?");
}

let local_date = new Date();
alert("it is " + local_date + "!")

