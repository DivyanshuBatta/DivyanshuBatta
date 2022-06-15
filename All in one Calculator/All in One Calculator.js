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
    ).innerHTML = `<h2>Good Morning, ${username}</h2>`;
  } 
  else if (time > 12 && time <= 16) {
    document.getElementById(
      "salutation"
    ).innerHTML = `<h2>Good Afternoon, ${username}</h2>`;
  } 
  else if (time >= 16 && time <= 24) {
    document.getElementById(
      "salutation"
    ).innerHTML = `<h2>Good Evening, ${username}</h2>`;
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