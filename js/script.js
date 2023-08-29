const headerWrapper = document.querySelector('.header-wrapper__logo');
const mediaQuery = window.matchMedia('(max-width: 768px)');
if(!mediaQuery.matches){
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
            // edgePadding: 50,
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
            // edgePadding: 100,
            // gutter: 100,
            edgePadding: 50,
            items:2
        },
        480: {
            // edgePadding: 40,
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