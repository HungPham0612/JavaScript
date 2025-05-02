//array = a variable like sturcture that can hold more than 1 value

let fruits = ["apple", "orange", "banana"];

// fruit[3] = "coconut"

// fruit.push("coconut")
// fruit.pop();
// fruit.unshift("mango");
// fruit.shift();

// console.log(fruit)[0];
// console.log(fruit)[1];
// console.log(fruit)[2];
// console.log(fruit)[3];
// console.log(fruit)[4];

// let numOfFruit = fruit.length;
// let index = fruit.indexOf("apple");

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruit[i]);
// }

// console.log(index);

fruits.sort().reverse(); 

for(let fruit of fruits ){
    console.log(fruit);
}