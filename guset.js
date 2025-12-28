/* ========== LIGHTS ========== */
const lightRange = document.getElementById("lightRange");
const lightValue = document.getElementById("lightValue");
const lightBtn = document.getElementById("lightBtn");

let lightOn = true;

lightRange.addEventListener("input", () => {
  lightValue.innerText = lightRange.value + "%";
});

lightBtn.addEventListener("click", () => {
  lightOn = !lightOn;
  lightBtn.innerText = lightOn ? "ON" : "OFF";
  lightBtn.classList.toggle("on", lightOn);
});

/* ========== TEMPERATURE ========== */
const tempValue = document.getElementById("tempValue");
const plus = document.getElementById("tempPlus");
const minus = document.getElementById("tempMinus");

let temperature = 22;

plus.onclick = () => {
  temperature++;
  tempValue.innerText = temperature + "°C";
};

minus.onclick = () => {
  temperature--;
  tempValue.innerText = temperature + "°C";
};

/* ========== FAN ========== */
const fanBtn = document.getElementById("fanBtn");
let fanAuto = true;

fanBtn.onclick = () => {
  fanAuto = !fanAuto;
  fanBtn.innerText = fanAuto ? "Fan: Auto" : "Fan: Manual";
};

/* ========== CURTAINS ========== */
const curtainStatus = document.getElementById("curtainStatus");

document.getElementById("curtainOpen").onclick = () => {
  curtainStatus.innerText = "Opening...";
};

document.getElementById("curtainClose").onclick = () => {
  curtainStatus.innerText = "Closing...";
};

document.getElementById("curtainStop").onclick = () => {
  curtainStatus.innerText = "Stopped";
};

/* ========== TV ========== */
const tvStatus = document.getElementById("tvStatus");

document.getElementById("tvOn").onclick = () => {
  tvStatus.innerText = "TV is ON";
};

document.getElementById("tvOff").onclick = () => {
  tvStatus.innerText = "TV is OFF";
};

/* ========== DND ========== */
const dndBtn = document.getElementById("dndBtn");
const dndStatus = document.getElementById("dndStatus");

let dndActive = false;

dndBtn.onclick = () => {
  dndActive = !dndActive;
  dndBtn.innerText = dndActive ? "ON" : "OFF";
  dndStatus.innerText = dndActive ? "Active" : "Inactive";
};
