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
  $(".burger").click(function (event) {
    console.log(event);
    $(".burger").toggleClass("active");
    $(".nav").toggleClass("active_nav");
    $(".shtor").toggleClass("active_shtor");
  });

  $(".shtor").click(function (event) {
    console.log(event);
    $(".burger").toggleClass("active");
    $(".nav").toggleClass("active_nav");
    $(".shtor").toggleClass("active_shtor");
  });
});
