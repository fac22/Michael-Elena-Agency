const cName = document.querySelector('#client-name');
const request = document.getElementById('request');
const cEmail = document.querySelector('#client-email');
const robot = document.getElementById('robot');
const error = document.querySelectorAll('.error-text');

const newSection = document.querySelector("#new-client")
function init() {
  error.forEach((x) => {
    x.classList.add('hide');
  });
  cName.value = '';
  request.value = '';
  robot.value = '';
  cEmail.value = '';
}
function validateName() {
  if (cName.value.length < 3 || cName.value.length > 20) {
    cName.classList.add('warning');
    error[0].classList.remove('hide');
  } else {
    cName.classList.remove('warning');
    error[0].classList.add('hide');
  }
}
function validateRequest() {
  if (request.value.length > 200) {
    request.classList.add('warning');
    error[1].classList.remove('hide');
  } else {
    request.classList.remove('warning');
    error[1].classList.add('hide');
  }
}
function validateEmail() {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
  if (!re.test(cEmail.value)) {
    cEmail.classList.add('warning');
    error[2].classList.remove('hide');
  } else {
    cEmail.classList.remove('warning');
    error[2].classList.add('hide');
  }
}
function checkRobot() {
  let robotChoice = robot.options[robot.selectedIndex].value;
  if(robotChoice == "none"){
    robotChoice = "no robot";
  }
}
// function allValues(){
//   let client = [cName.value, cEmail.value, checkRobot(), request.value];
//   return client;
// }
let output = [
  cName.value,
  cEmail.value,
  robot.options[robot.selectedIndex].value,
  request.value
]
function resetForm(){
  document.getElementById("client-form").reset();
}

function allInfo(){
  const [name, email, newRobot, desires] = [cName.value,
    cEmail.value,
    robot.options[robot.selectedIndex].value,
    request.value];
  const template = document.querySelector("#review-client");
  const domFragment = template.content.cloneNode(true);
  domFragment.querySelector("h2").textContent += name;
  domFragment.querySelector("h3").textContent += email;
  domFragment.querySelector("h1").textContent += newRobot;
  domFragment.querySelector("p").textContent += desires;
  
  if(!desires.length || !name.length || !newRobot.length){
    alert("Please fill out all sections")
  }else{
    newSection.appendChild(domFragment);
  }
}


window.addEventListener('load', init);
request.addEventListener('input', validateRequest);
cName.addEventListener('input', validateName);
cEmail.addEventListener('input', validateEmail);
robot.addEventListener('change', checkRobot);
// document.getElementById("button").addEventListener('click', allInfo.reset());
document.getElementById("button").addEventListener("click", allInfo);
document.getElementById("button").addEventListener("click", resetForm);


