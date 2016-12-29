$(document).ready(function() {
  var mercurio = 2.8;
  var venus = 8.9;
  var tierra = 9.81;
  var marte = 3.71;
  var jupiter = 22.9;
  var saturno = 9.1;
  var urano = 7.8;
  var neptuno = 11.0;
  var pluton = 0.6;

  var calcular_peso = function(peso,opcion)
  {
    var resultado;
    var planeta;

    if(opcion == "mercurio")
    {
      planeta = mercurio;
    }
    else if(opcion == "venus")
    {
      planeta = venus;
    }
    else if(opcion == "tierra")
    {
      planeta = tierra;
    }
    else if(opcion == "marte")
    {
      planeta = marte;
    }
    else if(opcion == "jupiter")
    {
      planeta = jupiter;
    }
    else if(opcion == "saturno")
    {
      planeta = saturno;
    }
    else if(opcion == "urano")
    {
      planeta = urano;
    }
    else if(opcion == "neptuno")
    {
      planeta = neptuno;
    }
    else if(opcion == "pluton")
    {
      planeta = pluton;
    }

    resultado = peso * planeta / tierra;

    return resultado;
  }

  $('.datos a').on('click',function(e){
		e.stopPropagation();
		e.preventDefault();

    if($('#peso').val() == "" )
    {
      $(".resultado h2").text("Introduce tu peso");
    }
    else if(!parseFloat($('#peso').val()))
    {
      $(".resultado h2").text("Introduce un peso valido");
    }
    else
    {
      var peso = parseFloat($('#peso').val());
      var planeta = $(this).attr("id");
      var resultado = calcular_peso(peso,planeta).toFixed(2);

      $(".resultado h2").text("Tu peso en " + planeta + " es:");
      $("#resultado").text(resultado + " kg");
    }
	});
});
