// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

function dark() {
  var element = document.body;
element.classList.toggle("dark-mode");
var light = document.querySelector(".dark");
light.classList.toggle("light");
  var input = document.getElementById('name');
  input.classList.toggle('input');
}
function loginpage() {
  let welcome = document.getElementById('welcome');
  let login = document.getElementById('login-page');
  welcome.style.display = 'none';
  login.style.display = 'flex';
}
function mainpage() {
document.getElementById('login-page').style.display='none';
document.getElementById('main').style.display='flex';
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
function finance_calc_1() {
document.getElementById('main').style.display='none';
document.getElementById('Finance_1_calc').style.display='flex';

colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let hexCode='#';
for(let i = 0;i < 6;i++) {
    hexCode += colors[getRandomNumber()];
}console.log(hexCode)
  document.getElementById("Finance_1_calc").style.background = hexCode;
  document.getElementById("edge_finance_1_calc").style.background = `linear-gradient(
    to left,
    ${hexCode} 0%,
    ${hexCode} 8%,
    ${hexCode} 92%,
    ${hexCode} 100%
  )`;
  document.getElementById("button_finance_1_calc").style.background = hexCode;
  document.getElementById("front_finance_1_calc").style.backgroundColor = hexCode;
    document.querySelectorAll(".Finance_1_radio_1_checkmark").style.backgroundColor = hexCode;
}
function getRandomNumber() {
return Math.floor(Math.random() * colors.length);
}
var animation_loader = document.getElementById("loader");
window.addEventListener("load", function(){
  animation_loader.style.display = "none";
});
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
let Finance_1_radio_4 = document.getElementById("Finance_1_radio_4");
Finance_1_radio_4.checked = "true";
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
Finance_1_result.style.position = "relative";
 Finance_1_result.style.top = "7.5vh";
// Finance_1_result.style.backgroundColor = "#fff";
button_finance_1_calc.style.bottom = "13.5vh";
let card = document.getElementById("Finance_1_card");
Finance_1_card.style.height = "60vh";
Finance_1_result.addEventListener("load", calculate);
};

// function buttonDisappear() {
//   let button = document.getElementById("button_finance_1_calc");
//    button.style.display = "none";
//    }

  let principal = document.getElementById("Finance_1_radio_1");
  let rate = document.getElementById("Finance_1_radio_2");
  let time = document.getElementById("Finance_1_radio_3");
  let c_interest = document.getElementById("Finance_1_radio_4");
  let p_input = document.getElementById("Finance_1_input_1");
  let r_input = document.getElementById("Finance_1_input_2");
  let t_input = document.getElementById("Finance_1_input_3");
  let duration = document.getElementById("duration").value;
  let result = document.getElementById("Finance_1_result");
  let p_label = document.getElementById("Finance_1_label_1");
  let r_label = document.getElementById("Finance_1_label_2");
  let t_label = document.getElementById("Finance_1_label_3");

 
principal.addEventListener("click",function() {
        p_label.innerHTML = `Amount(<i class="fa-solid fa-indian-rupee-sign"></i>):`;
        p_input.placeholder = "Enter Amount";
        r_label.innerHTML = `Rate of Interest(%):`;
        r_input.placeholder = "Enter Rate of Interest:";
        t_label.innerHTML = "Time:";
t_input.placeholder = "Enter Time";
document.getElementById("f_option").textContent = "Year";
      document.getElementById("s_option").textContent = "Month";
      document.getElementById("t_option").textContent = "Day";
        // console.log(duration)
var p_result;
        button_finance_1_calc.addEventListener("click",function() {
        if (duration == "year") {
        p_result = p_input.value / (Math.pow((1 + r_input.value / 100), t_input.value));
        }
        else if (duration == "month") {
         p_result = p_input.value / (Math.pow((1 + r_input.value / 100), (t_input.value/12)));
        }
        else if (duration == "day") {
        p_result = p_input.value / (Math.pow((1 + r_input.value / 100), (t_input.value/365)));
        }
button_finance_1_calc.style.bottom = "8vh";
        result.innerHTML = `<div>Principal Amount: <span><i class="fa-solid fa-indian-rupee-sign"></i>${p_result.toFixed(2)}</span></div>`;
      });
  });
  rate.addEventListener("click",function() {
      p_label.innerHTML = `Amount(<i class="fa-solid fa-indian-rupee-sign"></i>):`;
              p_input.placeholder = "Enter Amount";
      r_label.innerHTML = `Principal(<i class="fa-solid fa-indian-rupee-sign"></i>):`;
      r_input.placeholder = "Enter Principal Amount";
      t_label.innerHTML = "Time:";
      t_input.placeholder = "Enter Time";
      t_label.style.width = "5vw";
      document.getElementById("f_option").textContent = "Year";
      document.getElementById("s_option").textContent = "Month";
      document.getElementById("t_option").textContent = "Day";
      button_finance_1_calc.addEventListener("click",function() {
        if (duration == "year") {
          let base = (p_input.value / r_input.value); 
          let power = t_input.value;
          power_even = power % 2;
            if ((power_even == 1) || base<0)
              base = -base;
               r = Math.pow(base, 1 / power);
              n = Math.pow(r, power);
           r_result;
          if(Math.abs(base - power) < 1 && (base > 0 === power > 0))
            z = power_even ? -r : r; 
            r_result = (z * 100) - 100;
          }
        else if (duration == "month") {
          let base = (p_input.value / r_input.value); 
          let power = t_input.value / 12;
        power_even = power % 2;
        if((power_even == 1) || base<0)
           base = -base;
         r = Math.pow(base, 1 / power);
        n = Math.pow(r, power);
        if(Math.abs(base - power) < 1 && (base > 0 === power > 0))
            z = power_even ? -r : r; 
            r_result = (z * 100) - 100;
        }
        else if (duration == "day") {
          let base = (p_input.value / r_input.value); 
          let power = t_input.value / 365;
        power_even = power % 2;
        if((power_even == 1) || base<0)
           base = -base;
         r = Math.pow(base, 1 / power);
        n = Math.pow(r, power);
        if(Math.abs(base - power) < 1 && (base > 0 === power > 0))
             z = power_even ? -r : r; 
            r_result = (z * 100) - 100;
        }
    button_finance_1_calc.style.bottom = "8vh";
        result.innerHTML = `<div>Rate of Interest: <span>${parseInt(r_result)}%</span></div>`;
      });
    });
    time.addEventListener("click",function() {
      p_label.innerHTML = `Amount(<i class="fa-solid fa-indian-rupee-sign"></i>):`;
      p_input.placeholder = "Enter Amount";
      r_label.innerHTML = `Principal(<i class="fa-solid fa-indian-rupee-sign"></i>):`;
      r_input.placeholder = "Enter Principal Amount";
      t_label.innerHTML = "Rate of Interest:";
      t_input.placeholder = "Enter Rate of Interest";
      t_label.style.width = "15vw";
      document.getElementById("f_option").textContent = "Yearly";
      document.getElementById("s_option").textContent = "Monthly";
      document.getElementById("t_option").textContent = "Daily";
      var t_result;
      button_finance_1_calc.addEventListener("click",function() {
        
        if (duration == "Yearly") {
          t_result = Math.log(p_input.value / r_input.value) / Math.log(1 + (t_input.value / 100) / 1);
        result.innerHTML = `<div>Time: <span>${Math.round(t_result)} Years</span></div>`;
          }
        else if (duration == "Monthly") {
          t_result = Math.log(p_input.value / r_input.value) / 12[Math.log(1 + (t_input.value / 100) / 12)];
        result.innerHTML = `<div>Time: <span>${Math.round(t_result)} Months</span></div>`;
        }
        else if (duration == "Daily") {
          t_result = Math.log(p_input.value / r_input.value) / 365[Math.log(1 + (t_input.value / 100) / 365)];
        result.innerHTML = `<div>Time: <span>${Math.round(t_result)} Days</span></div>`;
        }
    button_finance_1_calc.style.bottom = "8vh";     
  });
});
c_interest.addEventListener("click",function() {
  p_label.innerHTML = `Amount(<i class="fa-solid fa-indian-rupee-sign"></i>):`;
  p_input.placeholder = "Enter Amount";
  r_label.innerHTML = `Principal(<i class="fa-solid fa-indian-rupee-sign"></i>):`;
  r_input.placeholder = "Enter Principal Amount";
  t_label.innerHTML = "Rate of Interest:";
  t_input.placeholder = "Enter Rate of Interest";
  t_label.style.width = "13.5vw";
  document.getElementById("f_option").textContent = "Yearly";
  document.getElementById("s_option").textContent = "Monthly";
  document.getElementById("t_option").textContent = "Daily";
  var t_result;
  button_finance_1_calc.addEventListener("click",function() {
    
    if (duration == "Yearly") {
      t_result = Math.log(p_input.value / r_input.value) / Math.log(1 + (t_input.value / 100) / 1);
    result.innerHTML = `<div>Time: <span>${Math.round(t_result)} Years</span></div>`;
      }
    else if (duration == "Monthly") {
      t_result = Math.log(p_input.value / r_input.value) / 12[Math.log(1 + (t_input.value / 100) / 12)];
    result.innerHTML = `<div>Time: <span>${Math.round(t_result)} Months</span></div>`;
    }
    else if (duration == "Daily") {
      t_result = Math.log(p_input.value / r_input.value) / 365[Math.log(1 + (t_input.value / 100) / 365)];
    result.innerHTML = `<div>Time: <span>${Math.round(t_result)} Days</span></div>`;
    }
button_finance_1_calc.style.bottom = "8vh";     
});
});
// if (document.querySelector('input[class="radio"]')) {
//   document.querySelectorAll('input[class="radio"]').forEach((elem) => {
//     elem.addEventListener("change", function(event) {
//       let item2 = event.target.value;
//     });
//   })
// } 
// if (document.querySelector('input[class="radio"]')) {
//   document.querySelectorAll('input[class="radio"]').forEach((elem) => {
//     elem.addEventListener("change", function(event) {
//       let item3 = event.target.value;
//     });
//   });
//