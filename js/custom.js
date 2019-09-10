//Animate on scrool
$(function () {
  new WOW().init();
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

// Lucklaend-nav-effect color to transparent //
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() < 80) {
      $("nav").removeClass("lucklaend-nav");
    } else {
      $("nav").addClass("lucklaend-nav");
    }

  });


});

// to close movile menu on click
$(function () {
  $(".navbar-collapse ul li a").on("click touch", function () {
    $(".navbar-toggler").click();
  });

});

// Activate Owl Carousel- Clientes //
$(function () {

  $("#clientes-list").owlCarousel({
    items: 5,
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    dots: false,
    autoplayHoverPause: true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1
      },
      // breakpoint from 480 up
      480: {
        items: 3
      },
      // breakpoint from 768 up
      768: {
        items: 3
      },
      // breakpoint from 992 up
      992: {
        items: 5
      }
    }
  })
})