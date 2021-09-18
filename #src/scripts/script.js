'use strict'

let body = document.body;
let doc = document;
let innerWindowWidth = () => window.innerWidth;
let innerWindowHeight = () => window.innerHeight;

@@include('_modalWindow.js');
@@include('_fsNavmenu.js');

// ? THIS IS functions and variables for showing the SUBMENU. //
function showOrHideSubmenu(e) {
    const menuButton = e.currentTarget;
    const allSubmenu = doc.querySelectorAll('.navmenu__submenu');
    const allMenuButtons = doc.querySelectorAll('.submenu-open-button');

    // Hides all previously active menus and menu buttons.
    for (let i = 0; i < allSubmenu.length; i++) {

        if (allSubmenu[i] !== menuButton.firstElementChild &&
            allMenuButtons[i] !== menuButton) {

            allMenuButtons[i].classList.remove('show');
            allSubmenu[i].classList.remove('show');
        }
    }

    if (menuButton.firstElementChild !== undefined) {
        menuButton.classList.toggle('active');
        menuButton.firstElementChild.classList.toggle('show');
    }
}
const activateSubmenuButtons = doc.querySelectorAll('.submenu-open-button');
for (let submenuButton of activateSubmenuButtons) {
    submenuButton.addEventListener('click', showOrHideSubmenu);
}
// ? THIS IS functions and variables for showing the SUBMENU. //


// ? THIS IS functions and variables for showing the EVENTWINDOW. //
function showEventWindow(e) {
    let eventWindow = document.querySelector('#eventWindow');

    eventWindow.classList.add('active');
    eventWindowIsVisible = true;

    setTimeout(() => {
        eventWindow.classList.remove('active');
        eventWindowIsVisible = false;
    }, 1000)
}
let eventWindowIsVisible = false;

// Add an data-event-button (in HTML) attribute for all buttons that should activate the eventWindow. //
let eventButtons = document.querySelectorAll('[data-event-button]');
for (const eventButton of eventButtons) {
    eventButton.addEventListener('click', (evArgs) => {
        if (eventWindowIsVisible) {
            return;
        } else {
            showEventWindow(evArgs);
        }
    });
}
// ? THIS IS functions and variables for showing the EVENTWINDOW. //