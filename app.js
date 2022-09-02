/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/



/**
 * Define Global Variables
 *
*/

//-----------------------------------------------//
// CALCULATE TIME THAT CODE TAKEN
const startingTime = performance.now();
// HERE DECLARE VARIABLES
const sections = document.querySelectorAll('section');
const navbarList = document.getElementById('navbar__list');
const fragment = document.createDocumentFragment();

//-----------------------------------------------//

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
//-----------------------------------------------//
// ADD STYLE [your-active-class] TO SECTIONS
// Add class 'active' to section when near top of viewport
// Set sections as active

// function sectionView(elem) {
//     let view = elem.getBoundingClientRect();
//     return (view.top >= 0);
// }

// function YourActiveClass() {
//     const links = document.querySelectorAll('a');
//     sections.forEach((section) => {
//         if (sectionView(section)) {
//             if(!section.classList.contains('your-active-class')) {
//                section.classList.add('your-active-class');
//             }
//             } else {
//                  section.classList.remove('your-active-class');
//             }
//         })
//     }
// document.addEventListener('scroll', YourActiveClass);

window.onscroll = () =>{
	document.querySelectorAll("section").forEach((YourActiveClass) =>{
	if(YourActiveClass.getBoundingClientRect().top >= -400 && YourActiveClass.getBoundingClientRect().top <= 150){

        YourActiveClass.classList.add("your-active-class");
    }
    else{
        YourActiveClass.classList.remove("your-active-class");
    }
	});
}

//-----------------------------------------------//
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
//-----------------------------------------------//
// HERE MAKING NAVIGATION BAR
// build the nav
// Scroll to anchor ID using scrollTO event
// Build menu
// Scroll to section on link click

function navbarLinks() {
    sections.forEach((section, index) => {
        // dataNav = section.getAttribute('data-nav');
        // id = section.getAttribute('id');
        const navbarItem = document.createElement('li');
        const navbarLink = document.createElement('a');
        navbarLink.innerHTML = section.getAttribute('data-nav');
        navbarLink.classList = 'menu__link'
        navbarItem.appendChild(navbarLink);
        navbarLink.addEventListener('click', ()=>{
            section.scrollIntoView({behavior: 'smooth'});
        });
        fragment.appendChild(navbarItem);
        // navbarItem.innerHTML= `<a href='#${id}' class="menu__link">${dataNav}</a>`;
        // navbarList.appendChild(navbarItem);
    })
navbarList.appendChild(fragment);

}
//----------------------------------------------//
/**
 * End Main Functions
 * Begin Events
 *
*/
//-----------------------------------------------//

// RUN
navbarLinks();
// YourActiveClass();

// END
const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');

//-----------------THANKS-Udacity--------------//