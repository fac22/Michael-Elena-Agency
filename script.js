// -------------- Input Validation for Members --------------

const nameId = document.querySelector('#name');
const avatar = document.querySelector('#avatar');
const description = document.querySelector('#description');
const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const warningTxt = document.querySelectorAll('.span-text');
const memberSubmit = document.querySelector('#member-submit');
const currentMembers = document.querySelector('#members-list');

function init() {
  warningTxt.forEach((x) => {
    x.classList.add('hide');
  });
  nameId.value = '';
  avatar.value = '';
  description.value = '';
  email.value = '';
}

function validateName() {
  if (nameId.value.length < 3 || nameId.value.length > 20) {
    nameId.classList.add('warning');
    warningTxt[0].classList.remove('hide');
  } else {
    nameId.classList.remove('warning');
    warningTxt[0].classList.add('hide');
  }
}

function validateDescription() {
  if (description.value.length > 149) {
    description.classList.add('warning');
    warningTxt[1].classList.remove('hide');
  } else {
    description.classList.remove('warning');
    warningTxt[1].classList.add('hide');
  }
}

function validateEmail() {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(email.value)) {
    email.classList.add('warning');
    warningTxt[2].classList.remove('hide');
  } else {
    email.classList.remove('warning');
    warningTxt[2].classList.add('hide');
  }
}

function validatePass() {
  if (pass.value.length < 8) {
    pass.classList.add('warning');
    warningTxt[3].classList.remove('hide');
  } else {
    pass.classList.remove('warning');
    warningTxt[3].classList.add('hide');
  }
}

function loadFile(event) {
  // var selectedFile = event.target.files[0];
  // var reader = new FileReader();

  // avatar.title = selectedFile.name;
  

  // reader.onload = function (event) {
  //   avatar.src = event.target.result;
  // };

  // reader.readAsDataURL(selectedFile);
  console.log('i*m here!');
  avatar.src = URL.createObjectURL(event.target.files[0]);
}

function submitMemberApp() {
  const template = document.querySelector('#new-member');
  const domFragment = template.content.cloneNode(true);

  domFragment.querySelector('img').src = avatar.src;
  domFragment.querySelector('h3').textContent = nameId.value;
  domFragment.querySelector('p').textContent = description.value;

  currentMembers.appendChild(domFragment);
}

window.addEventListener('load', init);
description.addEventListener('input', validateDescription);
nameId.addEventListener('input', validateName);
email.addEventListener('input', validateEmail);
pass.addEventListener('input', validatePass);
memberSubmit.addEventListener('click', submitMemberApp);
