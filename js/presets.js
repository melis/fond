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
    $(".burger").toggleClass("burger_active");
    $(".nav").toggleClass("active_nav");
    $(".shtor").toggleClass("active_shtor");
    $("body").toggleClass("body_scrl");
    $(".close_menu").toggleClass("close_menu_active ");
    $(".language").toggleClass("language_active");
  });

  $(".video_card__img, .video_modal__close").click(function () {
    $(".video_modal").toggleClass("video_modal__active");
    $("body").toggleClass("body_scrl");

    // let e = $(".video__play")
    // console.log(e)
    // if (e.currentTarget.playing) {
    //     e.currentTarget.pause();
    // console.log($(e.currentTarget).find(".video__play"));
    // $(e.currentTarget)
    //     .closest(".video")
    //     .find(".video__play")
    //     .removeClass("video__play_hidden");
    // }
  });

  $(".copy_link").on("click", (e) => {
    if (e.target.dataset.link) {
      navigator.clipboard.writeText(e.target.dataset.link).then(() => {
        e.target.className = "primary";
        e.target.innerText = "Скопировано";
      });
    } else {
      e.target.className = "danger";
      e.target.innerText = "Ссылка пуста";
    }
    setTimeout(() => {
      e.target.className = "copy_link";
      e.target.innerHTML = 'Копировать <img src="/images/copy.svg" alt="">';
    }, 2000);
  });

  var button = $("#button-up");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  button.on("click", function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
});
