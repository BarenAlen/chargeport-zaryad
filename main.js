import "./style.scss";

import orderCallback from './js/blocks/callback-form';
import Spoiler from './js/ui/spoiler';

// import chargeAnimation from './js/blocks/charge';


document.addEventListener("DOMContentLoaded", async () => {
    new Spoiler();
    orderCallback()

    // chargeAnimation()
    
    const mainNavToggler = document.getElementById('main-nav-toggler')
    const pageHeader = document.querySelector('.page-header')

    mainNavToggler.addEventListener('click', (e) => {
        pageHeader.classList.toggle('collapse-expanded')
        mainNavToggler.classList.toggle('menu-opened')
        document.body.classList.toggle('overflow-hidden')
    })

    const introSlider = document.querySelector('.js-intro-bg')

    setInterval(() => {
        let idx = null;

        [...introSlider.children].forEach((slide, index) => {
            if (slide.classList.contains('visible')) {
                idx = index
            }
        })

        introSlider.children.item(idx).classList.remove('visible')
        if (idx + 1 == introSlider.children.length) {
            introSlider.children.item(0).classList.add('visible')
        } else {
            introSlider.children.item(idx + 1).classList.add('visible')
        }
    }, 3000)

    const formModal = document.querySelector('.form-modal')
    const formModalClose = formModal.querySelector('.modal__close')

    formModalClose.addEventListener('click', () => {
        document.body.classList.remove('overflow-hidden')
        formModal.classList.remove('opened')
    })

    document.querySelectorAll('.js-btn-callback').forEach((item) => {
        item.addEventListener('click', () => {
            document.body.classList.add('overflow-hidden')
            formModal.classList.add('opened')
        })
    })
})
