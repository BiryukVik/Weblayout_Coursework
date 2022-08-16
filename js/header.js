// HEADER BURGER

$(document).ready(function() {
  $('.header-burger').click(function(event) {
    $('.header-burger,.header__burger-menu').toggleClass('active');
  });
});

// HEADER SUB MENU

document.querySelectorAll(".dropdown__simplebar").forEach(dropdown =>
  {
    new SimpleBar(dropdown, {
      autoHide: false,
      scrollbarMaxSize: 28,
    });
  })

const btns = document.querySelectorAll(".artstyle-list__button");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown-active";
const activeClassbtns = "artstyle-list__button-active";

btns.forEach(item => {
  item.addEventListener("click", function() {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})

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

