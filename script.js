let body = document.getElementsByTagName("body")[0];
let divDate=document.getElementById("countdownBday");
let title=document.getElementById("title");
let messageTag=document.createElement("h1");
let daysTag = document.getElementById('dias');
let hoursTag = document.getElementById('horas');
let minsTag = document.getElementById('minutos');
let divMain= document.getElementById("divMain");

let currentDate = new Date();/*Se obtiene la fecha actual */
let birtdDayDate = new Date(2024,1,14); // Año, mes (enero==0), día, hora, minutos¡
let days, hours, mins, totalSeconds;

//Crea un intervalo que llama a la función cada seAgundo
let countdownInterval = setInterval(countdown, 1000);//con intervalo se llama a una funcion cada X tiempo especificado en ms
showSeason();
countdown();


function countdown() {
  currentDate = new Date();//se actualiza la fecha actual
  totalSeconds = (birtdDayDate- currentDate) / 1000;

  if (Math.floor(totalSeconds) <= 0) {
    showMessage();
    secondsElement.innerHTML = 0;
    return;
  }

  days = Math.floor(totalSeconds / 3600 / 24);
  hours = Math.floor(totalSeconds / 3600) % 24;
  mins = Math.floor(totalSeconds / 60) % 60;

  daysTag.innerHTML = days;
  hoursTag.innerHTML = hours;
  minsTag.innerHTML = mins;
};


function showSeason(){

  let currentMonth = currentDate.getMonth();
  if (currentMonth >= 8 && currentMonth <= 10) {
    body.style.backgroundImage= "URL('pictures/autumn.jpg')";
    body.style.color="rgb(255,255,255)";
    console.log("autum");
  } else if (currentMonth >= 11 || currentMonth <= 1) {
    body.style.backgroundImage= "URL('pictures/winter.jpg')";
    console.log("winter");
    body.style.color="rgb(255, 255, 0)";
  } else if (currentMonth >= 2 && currentMonth <= 4) {
    body.style.backgroundImage= "URL('pictures/spring.jpg')";
    console.log("spring");
  } else {
    body.style.backgroundImage= "URL('pictures/summer.jpg')";
    body.style.color="rgb(255, 111, 5)";
    console.log("summer");
  }
  
}

function showMessage() {
  divDate.classList.toggle("hide");
  body.style.backgroundImage= "URL('pictures/birthday.jpg')";
  title.classList.toggle("hide");
  body.style.color="rgb(255,255,255)";
  messageTag.innerText="¡FELICIDADES!";
  body.appendChild(messageTag);
  clearInterval(countdownInterval);
}
