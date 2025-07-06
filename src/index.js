console.log("Server check");
console.log("Serve check done. Server up and running");
import "./style.css";
import createHomePage from "./home-page.js";
import createContactPage from "./assets/contact-page.js";
import createAboutPage from "./assets/about-page.js";
import createMenuPage from "./assets/menu-page.js";

 export function manageContentDiv(element) {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  contentDiv.appendChild(element)
}
// trivial change to force deploy

function activePageLoad() {
  const contactBtn = document.querySelector(".contact-btn");
  const aboutBtn = document.querySelector(".about-btn");
  const menuBtn = document.querySelector(".menu-btn")
  const headerElement = document.querySelector("header");
 
  document.addEventListener("DOMContentLoaded", createHomePage);

   contactBtn.addEventListener("click", () => {
    headerElement.classList.add("hide");     
    createContactPage();
  });

  aboutBtn.addEventListener("click", () => {
    headerElement.classList.add("hide");    
     createAboutPage();
  });

  menuBtn.addEventListener("click", () => {
    headerElement.classList.add("hide");
    createMenuPage();
  })
  
}
activePageLoad()