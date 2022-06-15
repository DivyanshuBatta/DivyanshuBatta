function dark() {
    var element = document.body;
  element.classList.toggle("dark-mode");
  var light = document.querySelector(".dark");
  light.classList.toggle("light");
    var input = document.getElementById('name');
    input.classList.toggle('input');
}
function loginpage() {
    let welcome = document.getElementById('welcome')
    let login = document.getElementById('login-page');
    welcome.style.display = 'none';
    login.style.display = 'block';
}
function mainpage() {
document.getElementById('login-page').style.display='none';
document.getElementById('main').style.display='block';
let username = document.getElementById("name").value;
var time = new Date().getHours();
  console.log(time);
  if (time < 12) {
    document.getElementById(
      "salutation"
    ).innerHTML = `<h2>Good Morning, ${username}👋</h2>`;
  } 
  else if (time > 12 && time <= 16) {
    document.getElementById(
      "salutation"
    ).innerHTML = `<h2>Good Afternoon, ${username}👋</h2>`;
  } 
  else if (time >= 16 && time <= 24) {
    document.getElementById(
      "salutation"
    ).innerHTML = `<h2>Good Evening, ${username}👋</h2>`;
  }
}
function animation() {
  var welcome = document.getElementById('welcome');
  welcome.classList.toggle('animate');
}
var animation_loader = document.getElementById("loader");
window.addEventListener("load", function(){
    animation_loader.style.display = "none";
})
let profile = document.getElementById("profile");
let randomNum = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
];

function random() {
  return parseInt(Math.random() * randomNum.length);
}
profile.src = `https://avatars.dicebear.com/4.9/api/micah/:seed${random()}.svg`;


let button_finance_1_calc = document.getElementById("button_finance_1_calc");
let Finance_1_result = document.getElementById("Finance_1_result");
let calculate = () => {
  let p = Number(document.getElementById("Finance_1_input_1").value);
  let r = Number(document.getElementById("Finance_1_input_2").value);
  let t = Number(document.getElementById("Finance_1_input_3").value);
  let duration = document.getElementById("duration").value;

  if (duration == "year") {
    amount = p * (Math.pow((1 + r / 100), t));
  } 
  else if (duration == "month") {
    amount = p * (Math.pow((1 + r / 100), (t/12)));
  } 
  else if (duration == "day") {
    amount = p * (Math.pow((1 + r / 100), (t/365)));
  } 
let compoundInterest = amount - p;

  Finance_1_result.innerHTML = `<div>Principal Amount: <span><i class="fa-solid fa-indian-rupee-sign"></i>${p.toFixed(2)}</span></div>
  <div>Total Compound Interest: <span><i class="fa-solid fa-indian-rupee-sign"></i>${compoundInterest.toFixed(2)}</span></div>
  <div>Total Amount: <span><i class="fa-solid fa-indian-rupee-sign"></i>${amount.toFixed(2)}</span></div>`;
Finance_1_result.addEventListener("load", calculate);
}

function buttonDisappear() {
  let button = document.getElementById("button_finance_1_calc");
   button.style.display = "none";
   }