// rest parameters = (...rest) allow a function work with a variable
//                                  number of arguments by bundling them into an array

//                                  spread = expands an array into separate elements
//                                  rest = bundles separate elements into an array

// function openFridge(...foods){
//     console.log(...foods);
    
// }
// function getFood(...foods){
//     return foods;
// }

// const food1 = "pizza"
// const food2 = "hamburger"
// const food3 = "hotdog"
// const food4 = "sushi"

// // openFridge(food1, food2, food3, food4);

// const foods = getFood(food1, food2, food3, food4)

// console.log(foods);


// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }

// const total = sum(1, 2, 3, 4, 5);

// console.log(`Your total is $${total}`);



// function getAver(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result / numbers.length;
// }

// const total = getAver(75, 100, 85, 90, 50)
// console.log(total);

// function combineString(...strings){
//     return strings.join(" ")
// }

// const fullName = combineString("Mr.", "Sam", "Nathan", "Kyle");
// console.log(fullName);
