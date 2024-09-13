import * as helpers from "./helpers.js"

export function createMenuPage() {
    const content = document.querySelector("#content")
    let menu = helpers.createElement("div", content, "menuContainer")

    menuItems.forEach((item, index) => {
        let menuItem = helpers.createElement("div", menu, "menuItem");
        menuItem.id = `item${index + 1}`;
        let itemHeader = helpers.createElement("div", menuItem, "itemHeader");
        helpers.changeText(itemHeader, item.name)
        let itemText = helpers.createElement("div", menuItem, "itemText");
        helpers.changeText(itemText, item.description)
        let itemPrice = helpers.createElement("div", menuItem, "itemPrice");
        helpers.changeText(itemPrice, item.price)
    });

}



function item(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
}

const item1 = new item("The Big Bubba", "A monster-sized, flavor-packed burger featuring a juicy 1/2 lb beef patty,\
    crispy bacon, melted cheddar cheese, and grilled onions. It’s topped with house-made BBQ sauce and served on a toasted \
    brioche bun for the ultimate burger experience", "$16");

const item2 = new item("The Spicy Inferno", "For those who enjoy a little heat, the Spicy Inferno offers a spicy beef patty infused \
    with jalapeños, pepper jack cheese, fresh lettuce, and tomatoes. It’s drizzled with sriracha mayo and a dash of habanero sauce, \
    all inside a sesame seed bun.", "$15");

const item3 = new item("The Rancher", "A savory treat with a 1/3 lb beef patty, smoked gouda cheese, \
        BBQ pulled pork, pickles, and onions. It’s finished with creamy ranch dressing and served on a toasted pretzel bun for that \
        perfect smoky flavor combination.", "$15");

const item4 = new item("Classic All-American", "A timeless favorite featuring a 1/3 lb beef patty, melted American cheese, crisp lettuce, \
            fresh tomato, pickles, and onions. It’s topped with ketchup, mustard, and mayo, all served on a soft sesame seed bun for a traditional, \
            comforting burger experience.", "$14");

const item5 = new item("", "All Burgers Served with a side of fries","");

const menuItems = []
menuItems.push(item1, item2, item3, item4, item5)

