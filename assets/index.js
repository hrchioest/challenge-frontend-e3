$(function () {
  $(".js-add-cart").click(function () {
    $(".js-alert-add-cart").addClass("show");
    setTimeout(function () {
      $(".js-alert-add-cart").fadeOut("slow");
    }, 2000);

    $(".js-count-cart").text(parseInt($(".js-count-cart").text()) + 1);
    $(window).scrollTop(0);
  });

  setTimeout(function () {
    $(".js-loading").fadeOut("slow");
  }, 2000);
});
