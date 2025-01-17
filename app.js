const yourDate = new Date("2024-09-28T04:46:00")
const endDate = new Date("2025-01-06T07:38:00"),
music = ['emdangnodau'];

document.addEventListener('DOMContentLoaded', function(){
      var rootTime = document.querySelector("time");

      document.querySelector("anni").textContent = `${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;
      
      document.querySelector("date").textContent = Math.floor( Math.floor((endDate - yourDate) / 1000) / 60 / 60 / 24)+" NGÀY";

      function olock() {
            // var today = new Date(),
            hrs = (Math.floor( Math.floor((endDate - yourDate) / 1000) / 60 / 60)) % 24,
            min = (Math.floor( Math.floor((endDate - yourDate) / 1000) / 60)) % 60,
            sec =  Math.floor((endDate - yourDate) / 1000) % 60;
            rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
      } olock();
      var timer = setInterval(function(){olock()}, 1000);
      // document.querySelector("audio").setAttribute("src", `music/${music[Math.floor(Math.random()*music.length)]}.mp3`);
      document.querySelector("audio").setAttribute("src", `music/${music[0]}.mp3`);

      document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<div id='mask'></div>"
      );

}, false);
