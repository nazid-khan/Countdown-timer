const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date( 2024, 10, 24, 11, 30, 0 );
// console.log(futureDate);

// get full date 
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

const weekDay = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekDay} ${date} ${month} ${year} ${hours}: ${minutes}am`;


// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  // console.log(t);

  // 1sec = 1000ms
  // 1min = 60sec
  // 1hr = 60min
  // 1day = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all value
  let days = t / oneDay;
  days = Math.floor(days);

  let hours = Math.floor( (t % oneDay) / oneHour);
  let minutes = Math.floor( (t % oneHour) / oneMinute);
  let seconds = Math.floor( (t % oneMinute) / 1000 );

  // set value array
  const values = [days,hours,minutes,seconds];

  function format(item){
    if(item < 10){
      return `0${item}`;
    }
    return item
  }

  items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
  });

}

// countdown
let countdown = setInterval(getRemainingTime,1000);

getRemainingTime();