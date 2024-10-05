let myList = ["cookie", "cheesecake", "pudding", "brownie", "ice-cream"];

let first = myList[0];
let middle = myList[2];
let last = myList[myList.length-1];
console.log(first, middle, last);

console.log(myList.length);
console.log(myList);

myList.pop();
console.log(myList);

myList.push("muffin", "ice-cream");
console.log(myList);

let n = myList.slice(1,4);
console.log(n);
console.log(myList);

myList.shift();
console.log(myList);

myList.unshift("doughnut", "cookie", "puffs");
console.log(myList);

for (let i = 0; i < myList.length; i++) {
    console.log(myList[i], "This is a traditional loop");
}

myList.forEach((value, index) => { 
    console.log(`${index}: ${value} this is a loop using forEach`);
});

let [firstDessert, secondDessert, ...rest] = myList;
console.log(firstDessert);
console.log(secondDessert);
console.log(rest);

console.log(myList);