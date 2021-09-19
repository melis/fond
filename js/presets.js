(() => {
    Object.defineProperty(HTMLMediaElement.prototype, "playing", {
        get: function() {
            return !!(
                this.currentTime > 0 &&
                !this.paused &&
                !this.ended &&
                this.readyState > 2
            );
        },
    });
})();

$(document).ready(function() {
    const video = $(" video")[0]
    $(".burger, .shtor,  .close_menu").click(function(event) {
        $(".burger").toggleClass("burger_active");
        $(".nav").toggleClass("active_nav");
        $(".shtor").toggleClass("active_shtor");
        $("body").toggleClass("body_scrl");
        $(".close_menu").toggleClass("close_menu_active ");
        $(".language").toggleClass("language_active");
    });

    $(".video_modal__close").on('click', function() {

        $(".video_modal").removeClass("video_modal__active");
        $("body").removeClass("body_scrl");
        video.pause()

    });

    $('.play').on('click', e => {
        if (e.currentTarget.dataset.movie__link) {
            video.src = e.currentTarget.dataset.movie__link;
        } else {
            video.src = "./images/movie.mp4"
        }

        $(".video_modal").addClass("video_modal__active");
        $("body").addClass("body_scrl");
        $(".video__play").addClass('video__play_hidden')
        video.play()
    })



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
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });
    button.on("click", function() {
        $("body, html").animate({
                scrollTop: 0,
            },
            800
        );
        return false;
    });
});