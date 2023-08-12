document.querySelector('.header-wrapper__logo').addEventListener('mouseout', function()
{

    document.querySelector('.header-wrapper__blur').style.filter = 'blur(0px)';
    document.querySelector('.header-wrapper__blur').style.zIndex = '0';
}, false);


document.querySelector('.header-wrapper__logo').addEventListener('mouseover', function()
{
    document.querySelector('.header-wrapper__blur').style.filter = 'blur(1.5rem)';
    document.querySelector('.header-wrapper__blur').style.zIndex = '10';
}, false);



// let mediaQuery = window.matchMedia('(max-width: 768px)');
//
// if (mediaQuery.matches) {
//     document.querySelector('.header-wrapper__blur').style.filter = 'blur(1.5rem)';
// } else {
//     document.querySelector('.header-wrapper__blur').style.filter = 'blur(0px)';
// }