import burgerImage from './assets/burger.png'
import fryImage from './assets/fries.png'

export function createMainPage() {
    const content = document.querySelector("#content");

    const logo = createElement("div", content, "mainLogo");
    changeText(logo, "Bubba Ray's Burgers");

    const fryContainer = createElement("div", content, "fryContainer");
    const frytext = createElement("div", fryContainer);
    changeHTML(frytext, "Free fry with your next purchase of the big bubba");
    handleImage(fryImage, "fryImage", fryContainer);


    const reviews = createElement("div", content, "reviews");
    const reviewHead = createElement("div", reviews, "reviewHead")
    changeText(reviewHead, "What our customers think")

    const review1 = createElement("div", reviews, "review");
    const review2 = createElement("div", reviews, "review");
    const review3 = createElement("div", reviews, "review");
    changeHTML(review1, `Sarah L.  ⭐⭐⭐⭐⭐ <br>“The beef patty was juicy and seasoned to perfection, and the toppings were fresh and plentiful!”`);
    changeHTML(review2, `Jake M.  ⭐⭐⭐⭐⭐ <br>
                “This is the burger to beat! The Big Bubba has it all – juicy beef, crispy bacon, gooey cheese, and a perfect toasted bun.`);
    changeHTML(review3, `Tina R.  ⭐⭐⭐⭐⭐ <br> "Perfectly grilled patty! If you’re looking for a filling, delicious burger, this is it!`);

    const imgContainer = createElement("div", content, "imgContainer")
    const burgerCaption = createElement("div", imgContainer, "burgerCaption")
    const redLogo = createElement("span", imgContainer, "blackBubba", "blinking-text");
    changeText(burgerCaption, "Introducing")
    changeText(redLogo, "THE BIG BUBBA")

    handleImage(burgerImage, "burgerImg", imgContainer)


}

function createElement(tag, parent, ...className) {
    let element = document.createElement(tag);
    if (arguments.length > 2) {
        className.forEach((item) => element.classList.add(item))
    }
    if (parent)
        appendElement(parent, element)
    return element;
}


function appendElement(parent, child) {
    parent.appendChild(child);
}

function handleImage(theImage, className, parent) {
    let image = new Image();
    image.classList.add(className)
    image.src = theImage;

    parent.appendChild(image);
}

function changeHTML(element, newText) {
    element.innerHTML = newText;
}

function changeText(element, newText) {
    element.textContent = newText;
}