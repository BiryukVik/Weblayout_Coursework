$(document).ready(function() {
  $('.header-upper__form-enable').click(function(event) {
    $('.header-upper__form').toggleClass('active');
    $('.header-upper__form-enable').toggleClass('disabled');
  });
});

  const mediaQuery = window.matchMedia('(min-width: 576px) and (max-width: 992px)');
  if (mediaQuery.matches) {
    $(document).ready(function() {
      $('.header-upper__form-enable').click(function(event) {
        $('.header-burger,.header__logo').toggleClass('hidden');
      });
    });
  }

