import burgerImage from './assets/burger.png'
import fryImage from './assets/fries.png'
import * as helpers from "./helpers.js"

export function createMainPage() {
    const content = document.querySelector("#content");

    const logo = helpers.createElement("div", content, "mainLogo");
    helpers.changeText(logo, "Bubba Ray's Burgers");

    const fryContainer = helpers.createElement("div", content, "fryContainer");
    const frytext = helpers.createElement("div", fryContainer);
    helpers.changeHTML(frytext, "Free fry with your next purchase of the big bubba");
    helpers.handleImage(fryImage, "fryImage", fryContainer);


    const reviews = helpers.createElement("div", content, "reviews");
    const reviewHead = helpers.createElement("div", reviews, "reviewHead")
    helpers.changeText(reviewHead, "What our customers think")

    const review1 = helpers.createElement("div", reviews, "review");
    const review2 = helpers.createElement("div", reviews, "review");
    const review3 = helpers.createElement("div", reviews, "review");
    helpers.changeHTML(review1, `Sarah L.  ⭐⭐⭐⭐⭐ <br>“The beef patty was juicy and seasoned to perfection, and the toppings were fresh and plentiful!”`);
    helpers.changeHTML(review2, `Jake M.  ⭐⭐⭐⭐⭐ <br>
                “This is the burger to beat! The Big Bubba has it all – juicy beef, crispy bacon, gooey cheese, and a perfect toasted bun.`);
                helpers.changeHTML(review3, `Tina R.  ⭐⭐⭐⭐⭐ <br> "Perfectly grilled patty! If you’re looking for a filling, delicious burger, this is it!`);

    const imgContainer = helpers.createElement("div", content, "imgContainer")
    const burgerCaption = helpers.createElement("div", imgContainer, "burgerCaption")
    const redLogo = helpers.createElement("span", imgContainer, "blackBubba", "blinking-text");
    helpers.changeText(burgerCaption, "Introducing")
    helpers.changeText(redLogo, "THE BIG BUBBA")

    helpers.handleImage(burgerImage, "burgerImg", imgContainer)


}

