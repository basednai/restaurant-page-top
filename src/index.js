import "./styles.css";
import { createMainPage } from "./main-page";

const content = document.querySelector("#content")

const home = document.querySelector("#home");
home.addEventListener("click", () => {
    content.innerHTML = ""
    createMainPage()

});

const menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
    content.innerHTML = ""


});

const contact = document.querySelector("#contact");
contact.addEventListener("click", () => {
    content.innerHTML = ""

});

createMainPage()
