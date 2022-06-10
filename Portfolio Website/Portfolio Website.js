let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let time_period = document.getElementById('time_period');

let datehour = new Date().getHours();
let dateminute = new Date().getMinutes();

hours.innerHTML = Number(datehour);
minutes.innerHTML = dateminute;

if (Number(datehour) > 12) {
    hours.innerHTML = Number(datehour) - 12;
    time_period.innerHTML = " P.M";
}
else {
    time_period.innerHTML = " A.M";
}
if (datehour < 10) {
minutes.innerHTML = "0" + dateminute;
}
let dayTxt = document.getElementById("day");
let dateTxt = document.getElementById("date");

let day = new Date().getDay();
if (day == 0) {
    dayTxt.innerHTML = "Monday, ";
}
else if (day == 1) {
    dayTxt.innerHTML = "Tuesday, ";
}
else if (day == 2) {
    dayTxt.innerHTML = "Wednesday, ";
}
else if (day == 3) {
    dayTxt.innerHTML = "Thursday, ";
}
else if (day == 4) {
    dayTxt.innerHTML = "Friday, ";
}
else if (day == 5) {
    dayTxt.innerHTML = "Saturday, ";
}
else if (day == 6) {
    dayTxt.innerHTML = "Sunday, ";
}
let date = new Date().getDate();
let month = new Date().getMonth();
let year = new Date().getFullYear();
if (date == 1) {
    dateTxt.innerHTML = `${date}st`;
}
else if (date == 2) {
    dateTxt.innerHTML = `${date}nd`;
}
else if (date == 3) {
    dateTxt.innerHTML = `${date}rd`;
}
else if (date >= 4) {
    dateTxt.innerHTML = `${date}th`;
}

if (month == 0) {
    dateTxt.innerHTML += " January" + " " + year;
}
else if (month == 1) {
    dateTxt.innerHTML += " February" + " " + year;
}
else if (month == 2) {
    dateTxt.innerHTML += " March" + " " + year;
}
else if (month == 3) {
    dateTxt.innerHTML += " April" + " " + year;
}
else if (month == 4) {
    dateTxt.innerHTML += " May" + " " + year;
}
else if (month == 5) {
    dateTxt.innerHTML += "June" + " " + year;
}
else if (month == 6) {
    dateTxt.innerHTML += "July" + " " + year;
}
else if (month == 7) {
    dateTxt.innerHTML += "August" + " " + year;
}
else if (month == 8) {
    dateTxt.innerHTML += "September" + " " + year;
}
else if (month == 9) {
    dateTxt.innerHTML += "October" + " " + year;
}
else if (month == 10) {
    dateTxt.innerHTML += "November" + " " + year;
}
else if (month == 11) {
    dateTxt.innerHTML += "December" + " " + year;
}