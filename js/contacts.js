var link = document.querySelector('.contacts-button');
var contact = document.querySelector('.modal-contacts');
var close = contact.querySelector('.modal-close');
var form = contact.querySelector('.modal-contacts form');
var user = contact.querySelector('[name="name"]');
var email = contact.querySelector('[name="email"]');


link.addEventListener('click', function (evt) {
  evt.preventDefault();
  contact.classList.add('modal-show');
  user.focus();
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  contact.classList.remove('modal-show');
});

form.addEventListener('submit', function (evt) {
  if (user.value || email.value) {
    evt.preventDefault();
    console.log('Введи имя и почту');
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (contact.classList.contains('modal-show')) {
      evt.preventDefault();
      contact.classList.remove('modal-show');
    }
  }
});
