AOS.init();

console.log('412')
// const galleryItems = document.querySelectorAll('.gallery-item');
//
// galleryItems.forEach(item => {
//     item.classList.remove('gallery-item_relative');
// });
// const test = document.querySelector('.testfff');
// const rel = document.querySelector('.gallery-item_relative');
// test.parentNode.removeChild(rel);
// console.log(test);


const allElements = document.querySelectorAll('.gallery-item_relative');
const mediaQuery = window.matchMedia('(max-width: 768px)');
const elements = {
    headerWrapper: document.querySelector('.header-wrapper__logo'),
    headerBlur: document.querySelector('.header-wrapper__blur'),
    exhibitionWrapper: document.querySelector('.exhibition-container'),
    exhibitionTitle: document.querySelector('.exhibition__title'),
    exhibitionBlur: document.querySelector('.exhibition__blur'),
    teleportBtn: document.querySelector('.teleport-btn'),
    headerBurger: document.querySelector('.header-nav__burger'),
    headerWrapperMenu: document.querySelector('.header-wrapper__menu'),
    headerCloseMenu: document.querySelector('.menu-header__close'),
    exhibitions: {
        exhibition: document.querySelector('.plan-item_exhibition'),
        metauniverse: document.querySelector('.plan-item_metauniverse'),
        city: document.querySelector('.plan-item_city'),
    },
};

const menuNavItems = document.querySelectorAll('.menu-nav__item');
menuNavItems.forEach(item => {
    item.addEventListener('click', () => elements.headerWrapperMenu.style.top = '-100%');
});

const setupDesktopInteractions = () => {
    elements.headerWrapper.addEventListener('mouseout', () => {
        elements.headerBlur.style.cssText = '-webkit-backdrop-filter: blur(0); filter: blur(0px);';
        elements.headerBlur.style.zIndex = '0';
    });

    elements.headerWrapper.addEventListener('mouseover', () => {
        elements.headerBlur.style.cssText = '-webkit-backdrop-filter: blur(1.5rem); filter: blur(1.5rem);';
        elements.headerBlur.style.zIndex = '10';
    });

    elements.exhibitionWrapper.addEventListener('mouseout', () => {
        elements.exhibitionBlur.style.cssText = '-webkit-backdrop-filter: blur(0px); filter: blur(0px);';
        elements.exhibitionTitle.style.opacity = '0';
        elements.teleportBtn.style.opacity = '1';
    });

    elements.exhibitionWrapper.addEventListener('mouseover', () => {
        elements.exhibitionBlur.style.cssText = '-webkit-backdrop-filter: blur(5px); filter: blur(5px);';
        elements.exhibitionTitle.style.opacity = '1';
        elements.teleportBtn.style.opacity = '0';
    });
};

const setupMobileInteractions = () => {
    const handleItemClick = (item) => {
        const descr = item.querySelector('.plan-item__descr');
        const text = item.querySelector('.plan-item__text');
        const text2 = item.querySelector('.plan-item__text2');

        item.style.cssText = 'width: 100%; background: rgba(0, 0, 0, 0)';
        descr.style.display = 'block';
        text.style.display = 'block';
        text2.style.display = 'none';
    };

    Object.values(elements.exhibitions).forEach(item => {
        item.addEventListener('click', () => handleItemClick(item));
    });

    elements.exhibitionBlur.style.cssText= '-webkit-backdrop-filter: blur(5px); filter: blur(5px);';
    elements.exhibitionTitle.style.opacity = '1';
};

elements.headerBurger.addEventListener('click', () =>  elements.headerWrapperMenu.style.top = '0');
elements.headerCloseMenu.addEventListener('click', () =>  elements.headerWrapperMenu.style.top = '-100%');


if (mediaQuery.matches) {
    allElements.forEach((element) => {
        console.log(element)
        element.classList.remove('gallery-item_relative');
    });
    setupMobileInteractions();
} else {
    setupDesktopInteractions();
}

const slider = tns({
    container: '.my-slider',
    responsive: {
        1920: { edgePadding: 0, gutter: 0, items: 5 },
        1600: { edgePadding: 0, gutter: 0, items: 5 },
        1400: { edgePadding: 0, gutter: 0, items: 4 },
        1200: { items: 3 },
        1024: { edgePadding: 100, items: 2 },
        768: { edgePadding: 50, items: 2 },
        660: { edgePadding: 20, items: 3 },
        550: { edgePadding: 50, items: 2 },
        480: { gutter: 0, items: 2 },
        375: { edgePadding: 0, gutter: 40, items: 2 },
        320: { edgePadding: 0, gutter: 110, items: 2 },
    },
    slideBy: 'page',
    controls: false,
    autoplay: false,
    mouseDrag: true,
});
