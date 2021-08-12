// HEADER BURGER

$(document).ready(function() {
  $('.header-burger').click(function(event) {
    $('.header-burger,.header__burger-menu').toggleClass('active');
  });
});

// HEADER SUB MENU

document.querySelectorAll(".artstyle-list__link").forEach(item => {
  item.addEventListener("click", function() {
    let listOpen = this.parentElement.querySelector(".artstyle__container");
    this.classList.toggle("active-art-list-item");
    listOpen.classList.toggle("active-sub-list");
    document.querySelectorAll(".artstyle__container").forEach(element => {
      if (listOpen !=element) {
        element.classList.remove("active-sub-list");
      }
    });
  });
});

// HEADER SEARCH FORM

$(document).ready(function() {
  $('.header-upper__form-enable').click(function(event) {
    $('.header-upper__form').toggleClass('active');
    $('.header-upper__form-enable').toggleClass('disabled');
  });
});

$(document).ready(function() {
  $('.search-box__close').click(function(event) {
    $('.header-upper__form').removeClass('active');
    $('.header-upper__form-enable').removeClass('disabled');
  });
});

