'use strict';

const toggleMenu = (event) => {
  menuButtons.forEach((button) => button.classList.toggle('opacity-0'));
  ['h-screen', 'h-0'].forEach((cls) => menu.classList.toggle(cls));
};

const menu = document.querySelector('.js-menu');
const menuButtons = [...document.querySelectorAll('.js-menu-button')];

const navLinks = [...document.querySelectorAll('.js-nav-link')];

menuButtons.forEach((button) => button.addEventListener('click', toggleMenu));

// hides the menu when a link on the menu is clicked to show the section it goes to
navLinks.forEach((link) => link.addEventListener('click', toggleMenu))