$(document).ready(function() {
  //Cuenta regresiva
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let countDown = new Date('Mar 16, 2024 20:00:00').getTime(),
    x = setInterval(function() {
      let now = new Date().getTime(),
      distance = countDown - now;

      document.getElementById('dias').innerText = Math.floor(distance / (day)),
      document.getElementById('horas').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutos').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('segundos').innerText = Math.floor((distance % (minute)) / second);
    }, second)

    //Scroll parallax
    function scrollFooter(scrollY, heightFooter)
    {
        if(scrollY >= heightFooter)
        {
            $('footer').css({
                'bottom' : '0px'
            });
        }
        else
        {
            $('footer').css({
                'bottom' : '-' + heightFooter + 'px'
            });
        }
    }

    $(window).load(function(){
        var windowHeight        = $(window).height(),
            footerHeight        = $('footer').height(),
            heightDocument      = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 480;

        // Definir el tamaño del elemento a animar.
        $('#scroll-animate, #scroll-animate-main').css({
            'height' :  heightDocument + 'px'
        });

        // Establecer el tamaño del encabezado y los elementos de contenido
        $('.main-container').css({
            'margin-top' : '480px'
        });

        scrollFooter(window.scrollY, footerHeight);

        // Al desplazarse
        window.onscroll = function(){
            var scroll = window.scrollY;

            $('#scroll-animate-main').css({
                'top' : '-' + scroll + 'px'
            });

            $('header').css({
                'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
            });

            scrollFooter(scroll, footerHeight);
        }
    });

    //reproducir audio
    var audio = document.getElementById("audio");

    $("body").on("click", function(){
      audio.play();
    });
});
