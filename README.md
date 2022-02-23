# Montichello

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Screenshot

<img width="205" alt="Screen Shot 2022-02-19 at 6 20 32 PM" src="https://user-images.githubusercontent.com/69512496/154863771-0ba9779c-9654-4271-89f8-269c011dcf81.png">

### Links

- Solution URL: https://github.com/hassanidris/montichello
- Live Site URL: https://hassanidris.github.io/montichello/

## My process

### Built with

- HTML, CSS & JavaScript
- Mobile-first workflow
- Bootstrap 5
- CSS Variables
- Semantic HTML5 markup
- SCSS custom properties
- Vnilla CSS Grid for the Gallery
- Map with Google API and JS
- Smooth Scrolling with JS
- Slick Slider JS

### What I learned

- CSS Variables

```scss
--clr-catalinaBlue: hsl(213, 33%, 26%);
--clr-white: hsl(0, 0%, 100%);
```

- Nesting media queries inside the classes

```scss
.card-title {
  font-family: var(--ff-montserrat);
  font-size: var(--fs-400);
  font-weight: var(--fw-700);

  @media screen and (max-width: 991px) {
    font-size: var(--fs-300);
  }
}
```

## Author

- Github - [hassanidris](https://github.com/hassanidris)
- Frontend Mentor - [@hassanidris](https://www.frontendmentor.io/profile/hassanidris)
