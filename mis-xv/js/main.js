$(document).ready(function() {
  //Cuenta regresiva
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let countDown = new Date('May 18, 2024 17:00:00').getTime(),
    x = setInterval(function() {
      let now = new Date().getTime(),
      distance = countDown - now;

      document.getElementById('dias').innerText = Math.floor(distance / (day)),
      document.getElementById('horas').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutos').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('segundos').innerText = Math.floor((distance % (minute)) / second);
    }, second);

    //reproducir audio
    var audio = document.getElementById("audio");

    $(".play").on("click", function(){
      audio.play();
    });
});
