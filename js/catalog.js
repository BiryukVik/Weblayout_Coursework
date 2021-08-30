// ACCORDION

$( function() {
  $( ".time-table__content" ).accordion({
    active: false,
    collapsible: true
  });
} );

// TABS LANGUAGE/COUNTRY

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("catalog__tab_big");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("catalog__button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// TABS ARTISTS

document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.time-table__list-button').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.time-table__list-button').forEach((e) => e.classList.remove('time-table__list-button_active'))

      document.querySelectorAll('.catalog-artist').forEach(function(tabContent) {
        tabContent.classList.remove('catalog-artist_active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog-artist_active')
      event.target.classList.add('time-table__list-button_active');
    })
  })
})