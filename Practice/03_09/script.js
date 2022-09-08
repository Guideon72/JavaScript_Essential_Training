/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

// eslint-disable-next-line no-unused-vars
const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },

  updateName: function (newNameStr) {
    this.name = newNameStr;
  },

  updateVolume: function (newVolumeInt) {
    this.volume = newVolumeInt;
  },

  changeColor: function (newColorStr) {
    this.color = newColorStr;
  },

  setPocketNum: function (newPocketNumInt) {
    this.pocketNum = newPocketNumInt;
  },

  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("Baseline Backpack: ", backpack);

backpack.updateName("Every otherday Backpack");
backpack.changeColor("red");
backpack.setPocketNum(8);

console.log("New backpack config: ", backpack);
