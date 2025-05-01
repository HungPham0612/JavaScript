// let time = 9;

// if(time < 12){
//     console.log("Good morning");
// } 
// else{
//     console.log("Good afternoon");
// }


// let isStudent = false;

// if(isStudent){
//     console.log("You are a student");
// }
// else{
//     console.log("You are a notx student");
// }

// let age = 16;
// let hasLicense = false;

// if(age >= 16){
//     console.log("You are old enough to drive");

//     if(hasLicense){
//         console.log("You have you license");
        
//     }
//     else{
//         console.log("You don't have a license yet");
//     }
    
// }
// else{
//     console.log("You must 16+ to have a license");
// }

// let age = 18;

// if(age >= 18){
//     console.log("You are old enough to enter this site");
// }
// else if(age < 0){
//     console.log("Your age can't not below 0");
// }
// else if(age >= 100){
//     console.log("You are too old to enter this site");
    
// }
// else{
//     console.log("You must be 18+ to enter this site");
    
// }

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);

    if(age >= 18){
        resultElement.textContent = `You are old enough to enter this site`;
}
else if(age < 0){
    resultElement.textContent =`Your age can't not below 0`;
}
else{
    resultElement.textContent = `You must be 18+ to enter this site`;
}
}