import * as helpers from "./helpers.js"

export function createContactPage() {
    const content = document.querySelector("#content")
    let contactContainer = helpers.createElement("div", content, "contactContainer")

    contactList.forEach((item) => {
        let contactItem = helpers.createElement("div", contactContainer, "contactItem");
        let contactType = helpers.createElement("div", contactItem, "contactType");
        helpers.changeText(contactType, item.type);
        let contactValue = helpers.createElement("div", contactItem, "contactValue");
        helpers.changeText(contactValue, item.value);
    });



}

function contactMethod(type, value,) {
    this.type = type;
    this.value = value;
}

const hours = new contactMethod("Hours", "10:00AM - 9:00PM")
const phone = new contactMethod("Phone", "555-555-5555");
const email = new contactMethod("email", "BubbaRaysBurgers@customercare.com");
const store = new contactMethod("Address", "Suite 7312 Cathy Mountain, Botsfordshire, WY 19937");

const contactList = []
contactList.push(hours, phone, email, store);