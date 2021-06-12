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
// SELECTORS:
const nav = document.querySelector(".sticky-nav");
const header = document.querySelector("header");
const navItems = document.querySelector(".nav-items");
const contactBtn = document.querySelector(".contact");
const contactForm = document.querySelector(".form-box");
const overlay = document.querySelector(".overlay");
const closeContact = document.querySelector(".close-contact");
//STICKY NAV:
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);
const stickyNav = function (entries) {
  console.log(entries);
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.remove("hidden");
  else nav.classList.add("hidden");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
////////////////////////////////////////////////////////////////////
// SMOOTH SCROLL:
navItems.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-item")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
//CONTACT FORM:
contactBtn.addEventListener("click", function () {
  contactForm.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});
closeContact.addEventListener("click", function (e) {
  e.preventDefault();
  contactForm.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});
overlay.addEventListener("click", function () {
  closeContact.click();
});
