let body = document.getElementsByTagName("body")[0];
let divDate = document.getElementById("countdownBday");
let title = document.getElementById("title");
let messageTag = document.createElement("h1");
let daysTag = document.getElementById('dias');
let hoursTag = document.getElementById('horas');
let minsTag = document.getElementById('minutos');
let divMain = document.getElementById("divMain");
let goalYear = 1998;
let goalMonth = 1; // Cambiado a 1 para representar febrero
let goalDay = 14;

let currentDate = new Date(); // Se obtiene la fecha actual
let birtdDayDate = new Date(currentDate.getFullYear(), goalMonth, goalDay); // Año actual, mes (enero==0), día, hora, minutos
let days, hours, mins, totalSeconds;

// Crea un intervalo que llama a la función cada segundo
let countdownInterval = setInterval(countdown, 1000); // Con intervalo se llama a una función cada X tiempo especificado en ms
showSeason();
countdown();

function countdown() {
  currentDate = new Date(); // Actualiza la fecha actual

  // Verifica si la fecha actual ha superado la fecha objetivo
  if (currentDate.getTime() > birtdDayDate.getTime()) {
    birtdDayDate.setFullYear(currentDate.getFullYear() + 1);
  }

  // Calculate the total seconds correctly
  totalSeconds = Math.floor((birtdDayDate - currentDate) / 1000);

  if (totalSeconds <= 0) {
    showMessage();
    daysTag.innerHTML = 0;
    hoursTag.innerHTML = 0;
    minsTag.innerHTML = 0;
    return;
  }

  days = Math.floor(totalSeconds / 3600 / 24);
  hours = Math.floor(totalSeconds / 3600) % 24;
  mins = Math.floor(totalSeconds / 60) % 60;

  daysTag.innerHTML = days;
  hoursTag.innerHTML = hours;
  minsTag.innerHTML = mins;
}

function showSeason() {
  let currentMonth = currentDate.getMonth();
  if (currentMonth >= 8 && currentMonth <= 10) {
    body.style.backgroundImage = "URL('pictures/autumn.jpg')";
    body.style.color = "rgb(255,255,255)";
    console.log("autum");
  } else if (currentMonth >= 11 || currentMonth <= 1) {
    body.style.backgroundImage = "URL('pictures/winter.jpg')";
    console.log("winter");
    body.style.color = "rgb(255, 255, 0)";
  } else if (currentMonth >= 2 && currentMonth <= 4) {
    body.style.backgroundImage = "URL('pictures/spring.jpg')";
    console.log("spring");
  } else {
    body.style.backgroundImage = "URL('pictures/summer.jpg')";
    body.style.color = "rgb(255, 111, 5)";
    console.log("summer");
  }
}

function showMessage() {
  divDate.classList.toggle("hide");
  body.style.backgroundImage = "URL('pictures/birthday.jpg')";
  title.classList.toggle("hide");
  body.style.color = "rgb(255,255,255)";
  messageTag.innerText = "¡FELICIDADES!";
  body.appendChild(messageTag);
  clearInterval(countdownInterval);
}
