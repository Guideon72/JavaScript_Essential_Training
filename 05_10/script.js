/**
 * Challenge: Add a new element
 * - In JavaScript, create a new element to hold a navigation menu
 * - Add an unordered list and a series of no less than five links to the list 
 * - Use single words like “home”, “about”, etc for the list items and set the src attribute to # for simplicity
 * - Add the new navigation element to the DOM directly after the header
 * - Write basic CSS and add classes as necessary to create a horizontal layout for the menu. 
 * - A tip: Use either display flex or display grid to create the horizontal menu.
 */

import Backpack from "./Backpack.js";
import TopNav from "./topNav.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

//build new navigation element
const navBar = new TopNav(
  "Our Products",
  "Our Services",
  "Our Company",
  "Our People",
  "Contact Us"
);

const content = `
  
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" />
    </figure>
    <h1 class="backpack__name">Everyday Backpack</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        everydayPack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="packprop backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen
      }</span></li>
    </ul>
  
`;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;

main.append(newArticle);
// Separator////////////////////////////////////////////////////////////////////////////////////////

//Define  the template information to insert into the document
const NavContent = `
<ul>
  <li><a href = #>${navBar.products}</a></li>
  <li><a href = #>${navBar.services}</a></li>
  <li><a href = #>${navBar.company}</a></li>
  <li><a href = #>${navBar.people}</a></li>
  <li><a href = #>${navBar.contact}</a></li>
  </ul>
`;

//Insert the new element in to the document; intended to appear before the Header, in this case
const header = document.querySelector(".siteheader");
const newElement = document.createElement("div");
newElement.innerHTML = NavContent;
header.parentNode.insertBefore(newElement, header);

//Add classes, elements and attributes to the new element
newElement.classList.add("linkList");
newElement.setAttribute("id", "newNavElement");
newElement
  .querySelector("#newNavElement ul")
  .setAttribute("style", "list-style-type: none; background-color: black");

//Use classes, elements and attributes to style and display the new element (top nav bar, in this case)
const menuItem = newElement.querySelectorAll("#newNavElement li");
menuItem.forEach((item) => item.setAttribute("style", "display: inline; background-color: blue"));

const menuLinks = newElement.querySelectorAll("a");
menuLinks.forEach((link) => link.setAttribute("style", "color: red"));





