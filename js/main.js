var numAto;
var mass;

popup = document.getElementById('popup');
closeBtn = document.getElementById('popup-close');

let closePopup = () => {
  popup.style.display = 'none';
}
let openPopup = () => {
  popup.style.display = 'block';
}

closeBtn.addEventListener('click', function() {
  closePopup();
  $(".masa").val("");
  $(".atomico").val("");
  $(".neutrones").val("");
  $(".check").css("display","none");
});

function addClassOnRandom() {
  var rndmClass = "select animated tada";
  var rndmElement = ".element";
  var randNum = Math.floor(Math.random() * $(rndmElement).length);
  $(rndmElement).eq(randNum).addClass(rndmClass);
  $(rndmElement).eq(randNum).siblings().removeClass(rndmClass);
};

function getInfoElement() {
  numAto = $('.select .front i').text();
  var simbol = $('.select .front strong').text();
  var name = $('.select .back p').text();
  mass  = $('.select .back span').text();
  var background = $('.select .front').css("background-image");

  $('.popup-element i').text(numAto);
  $('.popup-element strong').text(simbol);
  $('.popup-element p').text(name);
  $('.popup-element span').text(mass);
  $('.popup-element').css("background-image",background);
}

$(document).ready(function() {
  $(".spin").click(function(){
    var spin = setInterval(function(){ addClassOnRandom(); }, 400);
    setTimeout(function(){ window.clearInterval(spin); getInfoElement(); openPopup();}, 5000);
  });

  $(".validate").click(function(){
    var uMass = Math.round(parseFloat($(".masa").val())*1)/1;
    var uAtom = parseInt($(".atomico").val());
    var uNeut = parseInt($(".neutrones").val());

    var rMass = Math.round(parseFloat(mass)*1)/1;
    var rAtom = parseInt(numAto);
    var rNeut = rMass - rAtom;

    if (uMass == rMass) { $(".check .1").attr("src","img/good.png"); } else { $(".check .1").attr("src","img/wrong.png"); }
    if (uAtom == rAtom) { $(".check .2").attr("src","img/good.png"); } else { $(".check .2").attr("src","img/wrong.png"); }
    if (uNeut == rNeut) { $(".check .3").attr("src","img/good.png"); } else { $(".check .3").attr("src","img/wrong.png"); }

    $(".check").css("display","inline-block");
  });
});
