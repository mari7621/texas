$(function ($) {
  $(".firstview").bgSwitcher({
    images: ["images/texasimage.jpeg", "images/texasimage2.jpeg"],
    interval: 7000,
    loop: true,
  });

  $(window).scroll(function () {
    var targetElement = $(".profile-text").offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 200) {
      $(".profile-text").css("opacity", "1");
      $(".profile-text").css("transform", "translateY(0)");
    }
  });
});
