$(document).ready(function() {
  //Redimensionar el Banner
  document.getElementById('banner').style.height = (window.innerWidth + 60) + "px";

  window.addEventListener("resize", function() {
    document.getElementById('banner').style.height = (window.innerWidth + 60) + "px";
  });

  //Cuenta regresiva
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let countDown = new Date('Nov 09, 2024 19:30:00').getTime(),
    x = setInterval(function() {
      let now = new Date().getTime(),
      distance = countDown - now;

      document.getElementById('dias').innerText = Math.floor(distance / (day)),
      document.getElementById('horas').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutos').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('segundos').innerText = Math.floor((distance % (minute)) / second);
    }, second);
});

jQuery(document).ready(function($){
	var $timeline_block = $('.item');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
      $(this).find('.item-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.item-content').hasClass('is-hidden') ) {
        $(this).find('.item-content').removeClass('is-hidden').addClass('bounce-in');
				$(this).find('.item-icon').css('color','#d0b19b');
			}
		});
	});
});
