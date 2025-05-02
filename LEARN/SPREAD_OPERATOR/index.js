// spread operator =  ... allows an iterable such as an
//                                  array or string to be expanded
//                                  into separate elements
//                                 (unpacks the elements)





// let number = [1, 2, 3, 4, 5];
// let matrix = Math.max(...number);
// let minimum = Math.min(...number);

// console.log(number);

// let username = "Hung Pham"
// let letters = [...username];

// console.log(letters);

let fruit = ["apple", "orange", "banana"];
let veg = ['carrots', 'celery', 'potatoes']
let food = [...fruit, ...veg, "eggs", "milk"]
console.log(food);
