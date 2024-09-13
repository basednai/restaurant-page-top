import "./styles.css";
import { createMainPage } from "./main-page.js";
import { createMenuPage } from "./menu.js";
import { createContactPage } from "./contact.js";

const content = document.querySelector("#content")

const home = document.querySelector("#home");
home.addEventListener("click", () => {
    content.innerHTML = "";
    createMainPage();

});

const menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
    content.innerHTML = "";
    createMenuPage();


});

const contact = document.querySelector("#contact");
contact.addEventListener("click", () => {
    content.innerHTML = "";
    createContactPage();

});

createMainPage()
