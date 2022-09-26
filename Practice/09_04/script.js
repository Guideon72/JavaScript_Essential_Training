/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

//Identify the elements that I want the listeners to apply to
const myGrid = document.querySelector(".grid");
const gridCells = document.querySelectorAll("li");
const page = document.querySelector("body");

//Create event listeners that will switch the grid background to green when the mouse is over it or any children (cells) and clear
//when the mouse leaves the grid area
myGrid.addEventListener(
  "mouseenter",
  () => {
    //console.log("mouseenter event triggered");
    myGrid.style.background = myGrid.style.background = "green";
  },
  false
);

myGrid.addEventListener(
  "mouseleave",
  () => {
    //console.log("mouseout event triggered");
    myGrid.style.background = "";
  },
  false
);

//Create event listeners to highlight cells when the mouse is hovered over them and to toggle the color to/from purple on click
gridCells.forEach((cell) => {
  cell.addEventListener(
    "mouseover",
    () => {
      console.log("Entered background color: ", cell.style.background);
      cell.style.backgroundColor = "yellow";
    },
    false
  );
});

gridCells.forEach((cell) => {
  cell.addEventListener(
    "mouseout",
    () => {
      console.log("Exited background color: ", cell.style.background);
      cell.style.backgroundColor = "";
    },
    false
  );
});

gridCells.forEach((cell) => {
    cell.addEventListener("click", () => {
        //console.log("Mouseclick event fired");
        cell.style.backgroundColor = "purple"
    })});

//Create event listener that will toggle the background color of the page on a specific key press (b key)
page.addEventListener("keydown", (e) => {
  //console.log(e.key);
  //console.log(e.code);
  if (e.code === "KeyB") {
    //console.log(e.code);
    page.style.background === ""
      ? (page.style.background = "black")
      : (page.style.background = "");
  }
});