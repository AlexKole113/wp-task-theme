import './style.css'
import mobileMainMenuToggle from "./components/main-menu/scripts/mobileMainMenuToggle";
import googleMapCustomization from "./components/contacts/scripts/googleMapCustomization";
import formInputClassChanger from "./components/form/scripts/formInputClassChanger";
import counterNumbersMap from "./components/counter/scripts/counterNumbersMap";
import createCounterNumber from "./components/counter/scripts/createCounterNumber";
import loadingIndicator from "./components/testimonials/scripts/loadingIndicator";
import Testimonials from "./components/testimonials/scripts/Testimonials";
import modalToggler from "./components/modal-additional/scripts/modalToggler";



window.addEventListener('load', () => {

    // mobile menu toggle
    mobileMainMenuToggle('.header .menu-toggle');

    // build Google Map
    googleMapCustomization({
        // apiKey: '------' ,
        // containerCSSSelector: '#contact-map',
        // options: {
        //     zoom: 11,
        //     coords: [-18.899225, 47.543967],
        //     icon: 'https://alex-kole.com/test/pin.png'
        // }

    });

    //  Counter in Footer (here we pass the number of visitors and render the counter)
    createCounterNumber({ visitors: 101, imagesFromNumbers: counterNumbersMap, containerCSSSelector:  '.counter__numbers'   });

    // animation of contact form field labels
    formInputClassChanger({
        formCSSSelector: '.wpcf7-form',
        labelTextSelector: '.single-input-group__text',
        inputsCssSelector: ['.single-input-group__input', '.single-input-group__textarea'],
        actionCssClass: 'go-top'
    })


    modalToggler('[href^="#modal-"]')

    //Testimonials from Rest + Testimonials Pagination
    document.querySelectorAll('.testimonials__group').forEach((group) => {
        const container = group.querySelector('.testimonials-collection');
        const form = group.querySelector('.testimonials-form');
        const perPage = container.getAttribute('data-perpage') * 1

        const testimonials = new Testimonials({container, loadingIndicator, perPage: perPage ? perPage: 5, form});
        testimonials.build();
        testimonials.sendListener();
    })



})




