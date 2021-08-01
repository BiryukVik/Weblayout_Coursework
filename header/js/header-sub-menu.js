document.querySelectorAll(".artstyle-list__link").forEach(item => {
  item.addEventListener("click", function() {
    let listOpen = this.parentElement.querySelector(".artstyle-sub-list");
    this.classList.toggle("active-art-list-item");
    listOpen.classList.toggle("active-sub-list");
    document.querySelectorAll(".artstyle-sub-list").forEach(element => {
      if (listOpen !=element) {
        element.classList.remove("active-sub-list");
      }
    });
  });
});