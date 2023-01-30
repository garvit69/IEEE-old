$(document).ready(() => {
  $(window).on("scroll", () => {
    console.log($(this).scrollTop());
    console.log(window.innerHeight);
    if ($(this).scrollTop() > window.innerHeight / 2) {
      console.log("hello");
      $("nav.navbar").addClass("transparent");
    } else {
      $("nav.navbar").removeClass("transparent");
    }
  });
  $('#myModal').modal('show');
});