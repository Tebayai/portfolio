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

// Typewriter effect for roles
const subtitle = document.querySelector('.hero_subtitle_highlight');
const roles = ['Développeur', 'Designer UI/UX'];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isPaused = false;

// Créer le curseur s'il n'existe pas
if (!document.querySelector('.typewriter-cursor')) {
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    subtitle.appendChild(cursor);
}

function type() {
    const currentRole = roles[roleIndex];
    const cursor = document.querySelector('.typewriter-cursor');
    
    if (isDeleting) {
        subtitle.textContent = currentRole.substring(0, charIndex - 1);
        subtitle.appendChild(cursor);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    } else {
        subtitle.textContent = currentRole.substring(0, charIndex + 1);
        subtitle.appendChild(cursor);
        charIndex++;
        if (charIndex === currentRole.length) {
            isPaused = true;
            setTimeout(() => {
                isDeleting = true;
                isPaused = false;
                type();
            }, 1500);
            return;
        }
    }
    setTimeout(type, isDeleting ? 50 : 100);
}

type();