// function happyBirthday(username, age){
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday to you!");
//     console.log(`Happy birthday dear ${username} !`);
//     console.log("Happy birthday to you!");
//     console.log(`You are ${age} years old`);
// }

// happyBirthday("Hung", 23);


function add(x, y){
    // let result = x + y;
    // return result;
    return x + y;
}

// let answer = add(2, 3);
// console.log(answer);
console.log(add(2, 3));

function subtract(x, y){
    return x - y;
}
console.log(subtract(2, 3));

function multiphy(x, y){
    return x * y;
}
console.log(multiphy(2, 3));


function divide(x, y){
    return x / y;
}
console.log(divide(2, 3));

function isEven(number){
    return number % 2 === 0 ? true : false;
}

console.log(isEven(12));

function isValidEmail(email){
    return email.includes("@") ? true : false;
}

console.log(isValidEmail("example@example.com"));
