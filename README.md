 ## TEMPLATE LANDING PAGE

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)
![Desktop View of the Final Webpage](images/desktop-design.jpg)
![Mobile View of the Final Webpage](images/mobile-design.jpg)
![Mobile Hamburger Menu](images/mobile-design.jpg)
![Active States of the Webpage](images/active-states.jpg)
### Links

- Solution URL: [Add solution URL here](https://github.com/Sauravionic/Template_Landing_page)
- Live Site URL: [Add live site URL here](https://sauravionic.github.io/Template_Landing_page/)

## About
 A template landing page of an hypotethical company.
 Made for the ease of the convinience of the user, the UI is user-friendly and 
 easy to use interface. It is a responsive Mobile-First WebPage made solely with
 pure HTML, CSS and vanilaa JavaScript using MediaQuery.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Media Query
- Absolute positioning
- Mobile-first workflow
- Vanilla JavaScript
- VSCode


### What I learned

This was a really helpful project. I was comfortable using HTML and CSS, Positioning was a little bit tricky 
overall it was fun to design and construct such a beautiful landing page. 

```html
<div class="cards">
          <div class="card">
            <img src="images/image-emily.jpg" alt="" class="photo" />
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <h4>Emily R.</h4>
            <p class="designation">Marketing Director</p>
          </div>
          <div class="card">
            <img src="images/image-thomas.jpg" alt="" class="photo" />
            <p>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <h4>Thomas S.</h4>
            <p class="designation">Chief Operating Officer</p>
          </div>
          <div class="card">
            <img src="images/image-jennie.jpg" alt="" class="photo" />
            <p>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <h4>Jennie F.</h4>
            <p class="designation">Business Owner</p>
          </div>
        </div>
      </div>
```
```css
.sub_content button {
    position:relative;
    margin-bottom: 20px;
    text-transform: uppercase;
    background: none;
    border: none;
    font-family: 'Fraunces',sans-serif;
    color: var(--vrydarkdeSatBlue);
    font-size: medium;
    overflow:visible;
    cursor: pointer;
}
.sub_content #learn_more_1::after {
    content: '';
    position: absolute;
    width:100%;
    height: 6px;
    left: 2px;
    bottom: 1px;
    background: hsl(51, 100%, 49%,0.3);
    border-radius: 3px;
}
.sub_content #learn_more_2::after {
    content: '';
    position: absolute;
    width:100%;
    height: 6px;
    left: 2px;
    bottom: 1px;
    background: hsl(7, 99%, 70%, 0.3);
    border-radius: 3px;
}
```
```js
const hamBurgerIcon = document.getElementById("hamburger_icon");
hamBurgerIcon.addEventListener("click", function() {
    const hamBurgerTriangle = document.getElementById("hamburger_menu_triangle");
    const hamBurgerMenu = document.getElementById("hamburger_menu");

    if(hamBurgerTriangle.style.visibility == "visible" && hamBurgerMenu.style.visibility == "visible") {
    hamBurgerTriangle.style.visibility = "hidden";
    hamBurgerMenu.style.visibility = "hidden";
    }
    else {
        hamBurgerTriangle.style.visibility = "visible";
        hamBurgerMenu.style.visibility = "visible";
    }
})
```


### Continued development

I will make more changes to this page later in the near future as much more can be done to 
improve this design.

## Author

- Website - [Saurav Srivastava](https://github.com/Sauravionic)
- Frontend Mentor - [@Sauravionic](https://www.frontendmentor.io/profile/Sauravionic)
- LinkedIn - [Saurav Srivastava](https://www.linkedin.com/in/saurav-srivastava-4b71b5188/)
