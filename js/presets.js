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

    $(".burger, .shtor,  .close_menu").click(function(event) {
        console.log(event);
        $(".burger").toggleClass("burger_active");
        $(".nav").toggleClass("active_nav");
        $(".shtor").toggleClass("active_shtor");
        $("body").toggleClass("body_scrl");
        $(".close_menu").toggleClass("close_menu_active ");
        $('.language').toggleClass('language_active')
    });

    $('.video_card__img, .video_modal__close').click(function() {
        $('.video_modal').toggleClass('video_modal__active')
        $("body").toggleClass("body_scrl");

    })

    var button = $('#button-up');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });
    button.on('click', function() {
        $('body, html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});