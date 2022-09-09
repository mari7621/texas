$(function ($) {
  $(".firstview").bgSwitcher({
    images: [
      "images/texasimage.jpg",
      "images/texasimage2.jpg",
      "images/texasimage3.jpg",
    ],
    interval: 6000,
    loop: true,
  });

  $(window).scroll(function () {
    var targetElement = $(".texas").offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 200) {
      $(".profile-text").css("opacity", "1");
      $(".profile-text").css("transform", "translateY(0)");
    }
  });
});
