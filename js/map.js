var mapLink = document.querySelector('.contacts-map');
var mapModal = document.querySelector('.modal-map');
var mapClose = mapModal.querySelector('.modal-close');

mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapModal.classList.add('modal-show');
  mapModal.classList.remove('modal-exit');
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal-show");
  mapModal.classList.add('modal-exit');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (mapModal.classList.contains('modal-show')) {
      evt.preventDefault();
      mapModal.classList.remove('modal-show');
      mapModal.classList.add('modal-exit');
    }
  }
});
