/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Bob",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

//Create a template literal by setting a constant and filling in the template data between two backticks.  This allows the script to inject a combination of text (html) and code (JS). Template code is denoted by ${}
const content = `
  <main>
    <article>
      <h1>${everydayPack.name}</h1>
      <ul>
        <li>Volume: ${everydayPack.volume}</li>
        <li>Color: ${everydayPack.color}</li>
        <li>Age:</li>
        <li>Number of pockets:</li>
        <li>Left strap length: ${everydayPack.strapLength.left}</li>
        <li>Right strap length:</li>
        <li>Lid status:</li>
      </ul>
    </article>
  </main>;
`;

document.body.innerHTML = content;









console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
