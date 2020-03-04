var link = document.querySelector('.contacts-button');
var contact = document.querySelector('.modal-contacts');
var close = contact.querySelector('.modal-close');
var form = contact.querySelector('.modal-contacts form');
var user = contact.querySelector('[name="name"]');
var email = contact.querySelector('[name="email"]');

var isStorageSupport = true;
  var storage = "";

try {
  storage = localStorage.getItem("user");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  contact.classList.add('modal-show');

  if (storage) {
    user.value = storage;
    email.focus();
  } else {
    user.focus();
  }
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  contact.classList.remove('modal-show');
  contact.classList.remove('modal-error');
});

form.addEventListener("submit", function (evt) {

  if (!user.value || !email.value) {
    evt.preventDefault();
    contact.classList.remove("modal-error");
    contact.offsetWidth = contact.offsetWidth;
    contact.classList.add('modal-error');
    console.log(user.placeholder);
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', name.value);
      console.log(email.placeholder);
    }
  }

});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (contact.classList.contains('modal-show')) {
      evt.preventDefault();
      contact.classList.remove('modal-show');
      contact.classList.remove('modal-error');
    }
  }
});
