
$(window).scroll(function(){
  var header = $('.header'),
    scroll = $(window).scrollTop();

    if (scroll >= 70) header.addClass('animated wow animate__fadeInDown fixed');
    else header.removeClass('animated wow animate__fadeInDown fixed');
});

$(document).ready(function() {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    }
  });
});



let navItem = document.querySelectorAll('ul li a');

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector('.active').classList.remove('active')
    item.classList.add('active')
  });
});


let toggle = document.querySelector(".toggle");
let close = document.querySelector(".close");
let navBar = document.querySelector(".nav-bar");
let canvasOverlay = document.querySelector(".canvas-overlay");

toggle.addEventListener("click", () => {
  navBar.classList.add("active");
  
});
close.addEventListener("click", () => {
  navBar.classList.remove("active");
});
canvasOverlay.addEventListener("click", () => {
  navBar.classList.remove("active");
});

new WOW().init();

$('.count').counterUp({
  delay:10,
  time:1000
});

$('.filterr').on('click', function() {
  var selector = $(this).attr('data-filter');
  $('.portfolio-item-list').isotope({
    filter: selector
  });
  $('.portfolio-menu ul li').removeClass("active");
  $(this).addClass("active");
});
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active-progress");
  }else{
    toTop.classList.remove("active-progress");
  }
});

$('.single-clients-list').owlCarousel({
  loop:true,
  nav:true,
  navText:['<i class="fa fa-long-arrow-up"></i>', '<i class="fa fa-long-arrow-down"></i>'],
  responsive:{
      0:{
          items:1
      },
      768:{
          items:2,
          margin:35,
      },
      1000:{
          items:2,
          margin:25,
      }
  }
});
$('.brand-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});
