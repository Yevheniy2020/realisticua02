const headerWrapper = document.querySelector('.header-wrapper__logo');
headerWrapper.addEventListener('mouseout', function()
{

    document.querySelector('.header-wrapper__blur').style.filter = 'blur(0px)';
    document.querySelector('.header-wrapper__blur').style.zIndex = '0';
});


headerWrapper.addEventListener('mouseover', function()
{
    document.querySelector('.header-wrapper__blur').style.filter = 'blur(1.5rem)';
    document.querySelector('.header-wrapper__blur').style.zIndex = '10';
});

const slider = tns({
    container: '.my-slider',
    items: 4,
    slideBy: 'page',
    controls: false,
    autoplay: false,
    mouseDrag: true,
});
// var slider = tns({
//     container: '.my-slider',
//     items: 1,
//     responsive: {
//         640: {
//             edgePadding: 20,
//             gutter: 20,
//             items: 2
//         },
//         700: {
//             gutter: 30
//         },
//         900: {
//             items: 3
//         }
//     }
// });


// let mediaQuery = window.matchMedia('(max-width: 768px)');
//
// if (mediaQuery.matches) {
//     document.querySelector('.header-wrapper__blur').style.filter = 'blur(1.5rem)';
// } else {
//     document.querySelector('.header-wrapper__blur').style.filter = 'blur(0px)';
// }