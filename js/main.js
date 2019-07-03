//Animate on scrool
$(function () {
 new WOW().init();
});


//NavTop transparent

$(function () {
 $(window).scroll(function () {
  if ($(this).scrollTop() < 80) {
   $("nav").removeClass("lucklaend-top-nav");
  } else {
   $("nav").addClass("lucklaend-top-nav");
  }



 });


});

//Smooth scrolling
$(function () {
 $("a.smooth-scroll").click(function (event) {
  event.preventDefault();

  //get/return id #abour #contact
  var section = $(this).attr("href");
  $('html,body').animate({
   scrollTop: $(section).offset().top - 55
  }, 1450, "easeInOutExpo");

 });

});

// to close movile menu on click
$(function () {

 $(".navbar-collapse ul li a").on("click touch", function () {
  $(".navbar-toggler").click();
 });

});