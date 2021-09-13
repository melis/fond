(() => {
  Object.defineProperty(HTMLMediaElement.prototype, "playing", {
    get: function () {
      return !!(
        this.currentTime > 0 &&
        !this.paused &&
        !this.ended &&
        this.readyState > 2
      );
    },
  });
})();

$(document).ready(function () {
  $(".burger, .shtor,  .close_menu").click(function (event) {
    console.log(event);
    $(".burger").toggleClass("active");
    $(".nav").toggleClass("active_nav");
    $(".shtor").toggleClass("active_shtor");
    $("body").toggleClass("body_scrl");
    $(".close_menu").toggleClass("close_menu_active ");
  });
});
