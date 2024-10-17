const date = document.querySelector("#date");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const week = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

const allmonth = ["january", "febuary", "march", "April", "May", "june", "july", "Agust", "september", "october", "november", "December"];

const today = new Date();

date.innerHTML =(today.getDate()< 10 ?"0":"" ) + today.getDate();
day.innerHTML =week [today.getDay()];
month.innerHTML =allmonth [today.getMonth()];
year.innerHTML = today.getFullYear();