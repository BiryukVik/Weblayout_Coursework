// ACCORDION

const accordion = document.getElementsByClassName ('time-table__content');

for (i = 0; i<accordion.length; i++){
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active')
  })
}

// TABS

document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.time-table__button').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.time-table__button').forEach((e) => e.classList.remove('time-table__button_active'))

      document.querySelectorAll('.catalog-artist').forEach(function(tabContent) {
        tabContent.classList.remove('catalog-artist_active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog-artist_active')
      event.target.classList.add('time-table__button_active');
    })
  })
})