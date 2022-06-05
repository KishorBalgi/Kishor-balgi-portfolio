// JavaScript:
// SELECTORS:
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const sections = document.querySelectorAll("section");
const logo = document.querySelector(".logo");
const navItems = document.querySelector(".nav-items");
const navMobBtn = document.querySelector(".nav-icon");
const navMobBtnImg = document.querySelector(".nav-icon img");
const projectsMore = document.querySelector(".projects-more");
const projectsHidden = document.querySelectorAll(".projects-hidden");
const contactBtn = document.querySelector(".contact");
const contactForm = document.querySelector(".form-box");
const overlay = document.querySelector(".overlay");
const closeContact = document.querySelector(".close-contact");
let click = 0;
//STICKY NAV:
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky-nav");
  } else {
    nav.classList.remove("sticky-nav");
  }
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
    if (click) navMobBtn.click();
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
// SECTION REVEAL:
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
sections.forEach(function (section) {
  sectionObserver.observe(section);
});
// PROJECTS MORE:
projectsMore.addEventListener("click", function () {
  if (projectsMore.innerHTML == "MORE") {
    projectsHidden.forEach((p) => p.classList.remove("hidden"));
    projectsMore.innerHTML = "LESS";
  } else {
    projectsHidden.forEach((p) => p.classList.add("hidden"));
    projectsMore.innerHTML = "MORE";
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  }
});
// NAV MOBILE:
navMobBtn.addEventListener("click", function () {
  logo.classList.toggle("hidden");
  navItems.classList.toggle("nav-mobile");
  if (navMobBtnImg.getAttribute("src") === "Vendors/Icons/008-nav-icon.png") {
    navMobBtnImg.setAttribute("src", "Vendors/Icons/009-nav-close.png");
    navMobBtnImg.style.margin = "0";
    navItems.style.display = "contents";
    nav.style.height = "50vh";
    nav.style.paddingTop = "50px";
    nav.style.justifyContent = "flex-start";
    nav.style.flexDirection = "column";
    click = 1;
  } else {
    navMobBtnImg.setAttribute("src", "Vendors/Icons/008-nav-icon.png");
    navMobBtnImg.style.margin = "0 20px";
    navItems.style.display = "none";
    nav.style.height = "fit-content";
    nav.style.paddingTop = "0";
    nav.style.justifyContent = "space-between";
    nav.style.flexDirection = "row";
    click = 0;
  }
});
window.addEventListener("load", function () {
  const width = screen.width;
  if (width <= 950) {
    nav.classList.add("sticky-nav");
  }
});
