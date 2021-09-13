class Home {
  init() {
    this.bindEventsListeners();
  }

  bindEventsListeners() {
    $('.video__play').on('click', e => {
      $(e.currentTarget).closest('.video').find('video')[0].play();
      $(e.currentTarget).addClass('video__play_hidden');
    });

    $('.video video').on('click', e => {
      if (e.currentTarget.playing) {
        e.currentTarget.pause();
        console.log($(e.currentTarget).find('.video__play'));
        $(e.currentTarget)
          .closest('.video')
          .find('.video__play')
          .removeClass('video__play_hidden');
      }
    });

    $('.video__play').on('click', e => {
      $(e.currentTarget).closest('.video').find('video')[0].play();
    });

    $('.video video').on('ended', e => {
      e.currentTarget.currentTime = 0;
      $(e.currentTarget)
        .closest('.video')
        .find('.video__play')
        .removeClass('video__play_hidden');
    });
  }
}
