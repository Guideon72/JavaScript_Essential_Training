/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
// eslint-disable-next-line no-unused-vars





const cropCam = {
  name: "Canon 7D MkII",
  type: "Digital SLR",
  sensorType: "APS-C",
  exposureSettings: {
    focalLength: 35,
    aperture: 1.0,
    iso: 100,
  },
  setExposure: function (focalLength, aperture, iso) {
    this.exposureSettings.focalLength = focalLength;
    this.exposureSettings.aperture = aperture;
    this.exposureSettings.iso = iso;
  },

  power: "Off",
  togglePower: function (powerStatus) {
    this.power = powerStatus;
  },

  batteryCharge: 100,
  setCharge: function (chargePrcnt) {
    this.batteryCharge = chargePrcnt;
  },
};

// eslint-disable-next-line no-unused-vars
const fFCam = {
  name: "Canon 5D MkIV",
  type: "Digital SLR",
  sensorType: "APS-C",
  
  exposureSettings: {
    focalLength: 50,
    aperture: 1.0,
    iso: 100,
  },
  setExposure: function (focalLength, aperture, iso) {
    this.exposureSettings.focalLength = focalLength;
    this.exposureSettings.aperture = aperture;
    this.exposureSettings.iso = iso;
  },

  power: "Off",
  togglePower: function (powerStatus) {
    this.power = powerStatus;
  },

  batteryCharge: 100,
  setCharge: function (chargePrcnt) {
    this.batteryCharge = chargePrcnt;
  },
};

console.log("I have one APS-C camera: ", cropCam);
console.log("And I have one full frame camera: ", fFCam);

console.log("cropCam is currently: ", cropCam.power);
