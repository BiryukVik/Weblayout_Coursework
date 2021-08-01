$(document).ready(function() {
  $('.search-box__icon_upper').click(function(event) {
    $('.header__form-upper,.search-box__input_upper').toggleClass('active');
    $('.header-burger,.header__logo').toggleClass('closed');
  });
});