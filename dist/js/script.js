const headerWrapper = document.querySelector('.header-wrapper__logo');
const headerBlur = document.querySelector('.header-wrapper__blur');
const exhibitionWrapper = document.querySelector('.exhibition-container');
const exhibitionTitle = document.querySelector('.exhibition__title');
const exhibitionBlur = document.querySelector('.exhibition__blur');
const teleportBtn = document.querySelector('.teleport-btn');
const mediaQuery = window.matchMedia('(max-width: 768px)');
const headerBurger = document.querySelector('.header-nav__burger');
const headerWrapperMenu = document.querySelector('.header-wrapper__menu');
const headerCloseMenu = document.querySelector('.menu-header__close');

const exhibition = document.querySelector('.plan-item_exhibition');
const metauniverse = document.querySelector('.plan-item_metauniverse');
const city = document.querySelector('.plan-item_city');
let planItemDescrExhibition =  document.querySelector('.plan-item_exhibition .plan-item__descr');
let planItemTextExhibition = document.querySelector('.plan-item_exhibition .plan-item__text');
let planItemText2Exhibition =  document.querySelector('.plan-item__text2');

const planItemDescr = document.querySelector('.plan-item_metauniverse .plan-item__descr');
const planItemText = document.querySelector('.plan-item_metauniverse .plan-item__text');
const planItemText2 = document.querySelector('.plan-item_metauniverse .plan-item__text2');
headerBurger.addEventListener('click', function()
{

    headerWrapperMenu.style.top = '0';
});
headerCloseMenu.addEventListener('click', function()
{

    headerWrapperMenu.style.top = '-100%';
});

if(!mediaQuery.matches){
    headerWrapper.addEventListener('mouseout', function()
    {
        headerBlur.style.filter = 'blur(0px)';
        headerBlur.style.zIndex = '0';
    });

    headerWrapper.addEventListener('mouseover', function()
    {
        headerBlur.style.filter = 'blur(1.5rem)';
        headerBlur.style.zIndex = '10';
    });


}

if(!mediaQuery.matches){
    exhibitionWrapper.addEventListener('mouseout', function()
    {

        exhibitionBlur.style.filter = 'blur(0px)';
        exhibitionTitle.style.opacity = '0';
        teleportBtn.style.opacity = '1';
    });


    exhibitionWrapper.addEventListener('mouseover', function()
    {
        exhibitionBlur.style.filter = 'blur(5px)';
        exhibitionTitle.style.opacity = '1';
        teleportBtn.style.opacity = '0';
    });
}else{
    exhibitionBlur.style.filter = 'blur(5px)';
    exhibitionTitle.style.opacity = '1';

    exhibition.addEventListener('click', function () {
        exhibition.style.width = '100%';
        exhibition.style.background = 'rgba(0, 0, 0, 0)';
        planItemDescrExhibition.style.display = 'block';
        planItemTextExhibition.style.display = 'block';
        planItemText2Exhibition.style.display = 'none';
    });
    metauniverse.addEventListener('click', function () {

        metauniverse.style.width = '100%';
        metauniverse.style.background = 'rgba(0, 0, 0, 0)';
        planItemDescr.style.display = 'block';
        planItemText.style.display = 'block';
        planItemText2.style.display = 'none';

    });
    city.addEventListener('click', function () {
        const planItemDescr = document.querySelector('.plan-item_city .plan-item__descr');
        const planItemText = document.querySelector('.plan-item_city .plan-item__text');
        const planItemText2 = document.querySelector('.plan-item_city .plan-item__text2');
        city.style.width = '100%';
        city.style.background = 'rgba(0, 0, 0, 0)';
        planItemDescr.style.display = 'block';
        planItemText.style.display = 'block';
        planItemText2.style.display = 'none';

    });
}


const slider = tns({
    container: '.my-slider',
    responsive: {
        1920: {
            edgePadding: 0,
            gutter: 0,
            items: 5,
        },
        1600: {
            edgePadding: 0,
            gutter: 0,
            items: 5
        },
        1400: {
            edgePadding: 0,
            gutter: 0,
            items: 4
        },
        1200: {

            items: 3
        },
        1024: {
            edgePadding:100,
            items:2
        },
        768: {
            edgePadding:50,
            items:2
        },
        660: {
            edgePadding: 20,
            items:3
        },
        550: {
            edgePadding: 50,
            items:2
        },
        480: {
            gutter: 0,
            items:2
        },
        375: {
            edgePadding: 0,
            gutter: 40,
            items:2
        },
        320: {
            edgePadding: 0,
            gutter: 110,
            items:2
        },
    },
    slideBy: 'page',
    controls: false,
    autoplay: false,
    mouseDrag: true,
});



// if (mediaQuery.matches) {
//     document.querySelector('.header-wrapper__blur').style.filter = 'blur(1.5rem)';
// } else {
//     document.querySelector('.header-wrapper__blur').style.filter = 'blur(0px)';
// }