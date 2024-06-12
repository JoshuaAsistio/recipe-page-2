# Frontend Mentor - Recipe page solution

This is a solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

### Screenshot

![Project screenshot](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/JoshuaAsistio/recipe-page-2)
- Live Site URL: [Add live site URL here](https://recipe-page-2.onrender.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Typescript](https://www.typescriptlang.org/) - Javascript with typing
- [Tailwind](https://tailwindcss.com/) - For styles

### What I learned

When you're trying to import images into your project using Typescript with React, you will get an error saying "Cannot find module or its corresponding type declarations". To make this error go away, you need to create a {fileName}.d.ts file in the src directory of your project with filName standing in as a substitute for whatever you want to name your file. The only important thing is that it has the .d.ts file extension

Inside of the .d.ts file you created you need to put the following lines of code:

```js
declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  import React from "react";
  const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default value;
}

```

Doing this will make the error go away.

### Useful resources

- [ChatGPT](https://chatgpt.com/) - This helped me understand the error I mentioned in the previous section and it helped me make the error go away.

## Author

- Website - [Joshua Asistio](https://joshuaasistio.github.io/portfolio/)
- Frontend Mentor - [@JoshuaAsistio](https://www.frontendmentor.io/profile/JoshuaAsistio)
- Github - [@JoshuaAsistio](https://github.com/JoshuaAsistio)
