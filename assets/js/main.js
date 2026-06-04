// ===================================================
// MAIN JS
// ===================================================

'use strict';

// Change nav background on scroll
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Toggle mobile menu
const openMenu = document.querySelector('.nav_toggle');

openMenu.addEventListener('click', () =>{
    const navList = document.querySelector('.nav_list');
    const closeicon = document.querySelector('.nav_toggle i');

    if (navList.classList.contains('active')) {
        closeicon.classList.remove('fa-xmark');
        closeicon.classList.add('fa-bars');
    } else {
        closeicon.classList.remove('fa-bars');
        closeicon.classList.add('fa-xmark');
    }

    navList.classList.toggle('active');
})