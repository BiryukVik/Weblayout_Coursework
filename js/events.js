document.querySelector(".events__all-button").addEventListener("click", function() {

  this.classList.add("active-btn");

  document.querySelectorAll(".events-list__item").forEach(item => {

    item.classList.add("active");
});
});