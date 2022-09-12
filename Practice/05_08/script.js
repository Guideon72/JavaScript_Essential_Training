/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */
//use queryselectorall to identify all list buttons on the page and then use a forEach loop and .setAttribute to add 'type = button' to all

const buttons = document.querySelectorAll("li button");
buttons.forEach((button) => {button.setAttribute("type", "button")});


//Use querySelectorAll to identify all Backpacks on the page and give them additional class of "accessory"
const backpacks = document.querySelectorAll('article');
backpacks.forEach((pack) => {pack.classList.add("accessory")});


//remove the accessory class from the Frog Backpack and change text of the name to green
const pack02 = document.querySelector("#pack02");
pack02.classList.remove("accessory");
pack02.getElementsByClassName("backpack__name")[0].setAttribute("style", "color: green");
//frog.getElementsByClassName("backpack__name")[0].setAttribute("style", "color: red")

//let pack02Name = document.querySelector("#pack02 .backpack__name");
//pack02Name.setAttribute("style", "color: green");

