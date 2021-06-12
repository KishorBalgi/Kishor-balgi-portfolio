// JAVASCRIPT CODE:
const root = document.documentElement.style;
const color = document.querySelector(".color");
const colorAdd = document.querySelector(".color-add");
const themes = [
  { primary: "#ffa000", dark: "#ff8f00" },
  { primary: "#E74C3C", dark: "#CB4335" },
  { primary: "#3498db", dark: "#2e86c1" },
  { primary: "#9B59B6", dark: "#884EA0" },
  { primary: "#52BE80", dark: "#27AE60" },
  { primary: "#F4D03F", dark: "#F1C40F" },
  { primary: "#AB47BC", dark: "#9C27B0" },
];
const colorChange = function (i) {
  root.setProperty("--color-primary", themes[i].primary);
  root.setProperty("--color-primary-dark", themes[i].dark);
};
colorAdd.addEventListener("click", (e) => {
  e.preventDefault();
  colorChange(+color.value);
});
