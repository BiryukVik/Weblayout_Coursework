if (window.matchMedia('(min-width: 768px)').matches) {
  document.querySelector(".events__all-button").addEventListener("click", function() {

    this.classList.add("active-btn");
  
    document.querySelectorAll(".events__swiper-slide").forEach(item => {
  
      item.classList.add("active");
  });
  });
}