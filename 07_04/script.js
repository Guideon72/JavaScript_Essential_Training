/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */
let drink = "iced tea";

function addFunc(x) {
  return x + 1;
}

let myArray1 = [5, 10, 15, "camera", "cat", drink, 42, addFunc(7)];
document.body.append(myArray1.join(", ") + "\n");

console.log(
  "myArray1.pop will remove (and return) the last element of the array: \n",
  myArray1.pop(),
  myArray1
);

console.log(
  "myArray1.push(element) will add the specified element to the end of the array: \n",
  myArray1.push(addFunc(7)),
  myArray1
);

console.log(
  "myArray1.shift will remove (and return) the first element of the array: \n",
  myArray1.shift(),
  myArray1
);

console.log(
  "myArray1.unshift(element) will add the specified element to the front of the array: \n",
  myArray1.unshift(5),
  myArray1
);

console.log(
  "myArray1.unshift(myArray1.pop()) will remove the last element of the array, return it and add it to the front of the array: \n",
  myArray1.unshift(myArray1.pop()),
  myArray1
);

console.log(
  "myArray1.push(myArray1.shift()) will remove the first element of the array, return it and add it to the end of the array: \n",
  myArray1.push(myArray1.shift()),
  myArray1
);

console.log(
  "myArray1.sort() will loosely order the elements of the array in numerical/alphabetical order: \n",
  myArray1.sort()
);

const found = myArray1.find((item) => item == "iced tea");
console.log(
  "myArray1.find(item => item == iced tea) will search for and return the item if found in the array: ",
  found
);

const removed = 15;
//console.log(myArray1.indexOf(removed));
console.log(
  "myArray1.splice(myArray1.indexOf(element), 1 will remove one of the specified element from the array.",
  myArray1.splice(myArray1.indexOf(removed), 1),
  myArray1
);





