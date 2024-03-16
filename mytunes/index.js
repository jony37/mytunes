let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};

//responsive menu
// $(function() {
//     menu = $('nav ul');
  
//     $('#openup').on('click', e => {
//       e.preventDefault();
//       menu.slideToggle();
//     });
  
//     $(window).resize(() => {
//       var width = $(this).width();
//       if (width > 480 && menu.is(':hidden')) {
//         menu.removeAttr('style');
//       }
//     });
  
//     $('nav li').on('click', e => {
//       var width = $(window).width();
//       if (width < 480) {
//         menu.slideToggle();
//       }
//     });
//     $('.open-menu').height($(window).height());
//   });