function validateInput() {
  const description = document.querySelector('#description');
  const warningTxt = document.querySelector('#span-text');

  if (description.value.length > 149) {
    description.classList.add('warning');
    warningTxt.classList.remove('hide');
  } else {
    description.classList.remove('warning');
    warningTxt.classList.add('hide');
  }
}

document.addEventListener('keydown', validateInput);
