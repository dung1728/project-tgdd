$(document).ready(function() {
    $('.slider-laptop-item').slick({
        autoplay:true,
        autoplaySpeed:3000,
    })
    $(window).scroll(function(){
        var sticky = $('.function-laptop'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 300) sticky.addClass('fixed-laptop');
        else sticky.removeClass('fixed-laptop');
      });

})


var exit = document.querySelector('.exit-res');
var wrapLaptop = document.querySelector('.wrap-laptop');
var navbar = document.querySelector('.navbar');
var iconNav = document.querySelector('.nav-res');
 exit.addEventListener('click',function(){
  wrapLaptop.style.display = 'none';
  navbar.style.display = 'block'
})
iconNav.addEventListener('click', function(){
  wrapLaptop.style.display = 'none';
  navbar.style.display = 'block'
})