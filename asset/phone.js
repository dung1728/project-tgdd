$(document).ready(function() {
    $('.slider-top-item-img').slick();
    $(window).scroll(function(){
        var sticky = $('.nav-filter'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 300) sticky.addClass('fixed-phone');
        else sticky.removeClass('fixed-phone');
      });
})


var iphone13promax128Gb = document.querySelector('.iphone13-promax_128GB');
var iphone13promax256Gb = document.querySelector('.iphone13-promax_256GB');
var iphone13promax512Gb = document.querySelector('.iphone13-promax_512GB');
var iphone13promax1T = document.querySelector('.iphone13-promax_1T');
iphone13promax128Gb.addEventListener('click',function() {
    document.querySelector('.iphone13prm-256gb').style.display = 'none';
    document.querySelector('.iphone13prm-128gb').style.display = 'block';
    document.querySelector('.iphone13prm-512gb').style.display = 'none';
    document.querySelector('.iphone13prm-1T').style.display = 'none';
    document.querySelector('.img-iphone13promax128').style.display = 'block';
    document.querySelector('.img-iphone13promax256').style.display = 'none';
    document.querySelector('.img-iphone13promax512').style.display = 'none';
    document.querySelector('.img-iphone13promax1T').style.display = 'none';
});
iphone13promax256Gb.addEventListener('click',function() {
    document.querySelector('.iphone13prm-256gb').style.display = 'block';
    document.querySelector('.iphone13prm-128gb').style.display = 'none';
    document.querySelector('.iphone13prm-512gb').style.display = 'none';
    document.querySelector('.iphone13prm-1T').style.display = 'none';
    document.querySelector('.img-iphone13promax128').style.display = 'none';
    document.querySelector('.img-iphone13promax256').style.display = 'block';
    document.querySelector('.img-iphone13promax512').style.display = 'none';
    document.querySelector('.img-iphone13promax1T').style.display = 'none';
});
iphone13promax512Gb.addEventListener('click',function() {
    document.querySelector('.iphone13prm-256gb').style.display = 'none';
    document.querySelector('.iphone13prm-128gb').style.display = 'none';
    document.querySelector('.iphone13prm-512gb').style.display = 'block';
    document.querySelector('.iphone13prm-1T').style.display = 'none';
    document.querySelector('.img-iphone13promax128').style.display = 'none';
    document.querySelector('.img-iphone13promax256').style.display = 'none';
    document.querySelector('.img-iphone13promax512').style.display = 'block';
    document.querySelector('.img-iphone13promax1T').style.display = 'none';
});
iphone13promax1T.addEventListener('click',function() {
    document.querySelector('.iphone13prm-256gb').style.display = 'none';
    document.querySelector('.iphone13prm-128gb').style.display = 'none';
    document.querySelector('.iphone13prm-512gb').style.display = 'none';
    document.querySelector('.iphone13prm-1T').style.display = 'block';
    document.querySelector('.img-iphone13promax128').style.display = 'none';
    document.querySelector('.img-iphone13promax256').style.display = 'none';
    document.querySelector('.img-iphone13promax512').style.display = 'none';
    document.querySelector('.img-iphone13promax1T').style.display = 'block';
});


var iphone12mini128gb = document.querySelector('.iphone12mini_128GB');
var iphone12mini256gb = document.querySelector('.iphone12mini_256GB');
var iphone12mini512gb = document.querySelector('.iphone12mini_512GB');
iphone12mini128gb.addEventListener('click',function() {
    document.querySelector('.iphone12mini-128gb').style.display = 'block';
    document.querySelector('.iphone12mini-256gb').style.display = 'none';
    document.querySelector('.iphone12mini-512gb').style.display = 'none';
    document.querySelector('.img-iphone12mini128').style.display = 'block';
    document.querySelector('.img-iphone12mini256').style.display = 'none';
    document.querySelector('.img-iphone12mini512').style.display = 'none';
    
});
iphone12mini256gb.addEventListener('click',function() {
    document.querySelector('.iphone12mini-256gb').style.display = 'block';
    document.querySelector('.iphone12mini-128gb').style.display = 'none';
    document.querySelector('.iphone12mini-512gb').style.display = 'none';
    document.querySelector('.img-iphone12mini128').style.display = 'none';
    document.querySelector('.img-iphone12mini256').style.display = 'block';
    document.querySelector('.img-iphone12mini512').style.display = 'none';

})
iphone12mini512gb.addEventListener('click',function() {
    document.querySelector('.iphone12mini-256gb').style.display = 'none';
    document.querySelector('.iphone12mini-128gb').style.display = 'none';
    document.querySelector('.iphone12mini-512gb').style.display = 'block';
    document.querySelector('.img-iphone12mini128').style.display = 'none';
    document.querySelector('.img-iphone12mini256').style.display = 'none';
    document.querySelector('.img-iphone12mini512').style.display = 'block';

})



var click_Filter = document.querySelector('.filter-paren');
click_Filter.addEventListener('click', function(){
    document.querySelector('.filter-dropdown').style.display = 'block'
})



var exit = document.querySelector('.exit-res');
var wrapPhone = document.querySelector('#wrap-phone');
console.log(wrapPhone)
var navbar = document.querySelector('.navbar');
var iconNav = document.querySelector('.nav-res');
 exit.addEventListener('click',function(){
  wrapPhone.style.display = 'none';
  navbar.style.display = 'block'
})
iconNav.addEventListener('click', function(){
  wrapPhone.style.display = 'none';
  navbar.style.display = 'block'
})