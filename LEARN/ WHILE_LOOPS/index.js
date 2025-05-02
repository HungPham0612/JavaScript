// while loop = repeat some code WHILE some condition is true

// let username = "";

// while(username === "" || username === null){
//     username = window.prompt("Enter your name")
// }

// console.log(`Hello ${username}`);
    
let LoggedIn = false;
let username;
let password;

while(!LoggedIn){
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if(username === "myUsername" && password === "myPassword"){
        LoggedIn = true;
        console.log("You are logged in!");    
    }
    else{
        console.log("Invalid credentials! Please try again");
        
    }
}