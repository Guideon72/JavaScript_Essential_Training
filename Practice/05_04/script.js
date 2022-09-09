/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */


//Set the Volume of Everyday Backpack from 30l to 20l

//Find and click the Update button for Left Strap length for Everyday Backpack; set Strap lengths to 42 inches

//Find and click the Open lid button for Frog Backpack. change Lid status to 'open'
const siteContent = `
<header class="siteheader">
      <div class="site-title">BackpackPacker</div>
      <div class="site-description">All backpack packing, all the time.</div>
    </header>
    <main class="maincontent">
      <div class="page-header">
        <h2 class="page-header__heading">A pack for every purpose</h2>
        <p>
          If you're carrying a heavy load, you can't find a better tool than a
          backpack. Distributing the weight evenly across your shoulders, back,
          and hips, the backpack lets you use the natural frame of your body to
          literally <em>shoulder</em> the weight while your legs do the
          carrying.
        </p>
      </div>
      <article class="backpack" id="pack01">
        <figure class="backpack__image">
          <img src="../../assets/images/everyday.svg" alt="" loading="lazy" />
        </figure>
        <h1 class="backpack__name">Everyday Backpack</h1>
        <ul class="backpack__features">
          <li class="feature backpack__volume">Volume:<span> 30l</span></li>
          <li class="feature backpack__color">Color:<span> grey</span></li>
          <li class="feature backpack__age">Age:<span> 684 days old</span></li>
          <li class="feature backpack__pockets">
            Number of pockets:<span> 15</span>
          </li>
          <li class="feature backpack__strap" data-side="left">
            Left strap length: <span>26 inches</span>
            <form class="leftlength" data-children-count="1">
              <input
                type="number"
                name="leftLength"
                placeholder="New left length"
              />
              <button>Update</button>
            </form>
          </li>
          <li class="feature backpack__strap" data-side="right">
            Right strap length: <span>26 inches</span>
            <form class="rightlength" data-children-count="1">
              <input
                type="number"
                name="rightLength"
                placeholder="New right length"
              />
              <button>Update</button>
            </form>
          </li>
          <li class="feature backpack__lid">Lid status: <span>closed</span></li>
        </ul>
        <button class="lid-toggle">Open lid</button>
      </article>
      <article class="backpack" id="pack02">
        <figure class="backpack__image">
          <img src="../../assets/images/frog.svg" alt="" loading="lazy" />
        </figure>
        <h1 class="backpack__name">Frog Backpack</h1>
        <ul class="backpack__features">
          <li class="feature backpack__volume">Volume:<span> 8l</span></li>
          <li class="feature backpack__color">Color:<span> green</span></li>
          <li class="feature backpack__age">Age:<span> 369 days old</span></li>
          <li class="feature backpack__pockets">
            Number of pockets:<span> 3</span>
          </li>
          <li class="feature backpack__strap" data-side="left">
            Left strap length: <span>10 inches</span>
            <form class="leftlength" data-children-count="1">
              <input
                type="number"
                name="leftLength"
                placeholder="New left length"
              />
              <button>Update</button>
            </form>
          </li>
          <li class="feature backpack__strap" data-side="right">
            Right strap length: <span>10 inches</span>
            <form class="rightlength" data-children-count="1">
              <input
                type="number"
                name="rightLength"
                placeholder="New right length"
              />
              <button>Update</button>
            </form>
          </li>
          <li class="feature backpack__lid">Lid status: <span>closed</span></li>
        </ul>
        <button class="lid-toggle">Open lid</button>
      </article>
    </main>
    <footer class="sitefooter">
      <p>
        Demo project for JavaScript Essential Training, a LinkedIn Learning
        course.
      </p>
    </footer>`;

document.body.innerHTML = siteContent;

//Find the paragraph under 'A pack for every purpose' and change the text to blue
const paragraph = document.querySelectorAll("p")[0];  //Used All to get all p tags and [0] to act on only the first element in the list
paragraph.style.color = 'blue';

const paragraph2 = document.querySelectorAll("p")[1]; //Used All to get all p tags and [1] to act on only the second element in the list
paragraph2.style.color = "orange";

