/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuestaCorrecta;
function comenzar()
{
	var primerNro;
	var segundoNro;
	var operadorRandom;
	var operaciones;

	primerNro=Math.floor((Math.random() * 10) + 1);
	segundoNro=Math.floor((Math.random() * 10) + 1);
	operadorRandom=Math.floor((Math.random() * 4) + 1);

	primerNro=parseInt(primerNro);
	segundoNro=parseInt(segundoNro);
	operadorRandom=parseInt(operadorRandom);
	
	switch(operadorRandom)
	{
		case 1:
			operaciones="+";
			break;

		case 2:
			operaciones="-";
			break;

		case 3:
			operaciones="*";
			break;

		case 4:
			operaciones="/";
			break;		
	}

	switch(operaciones)
	{
		case "+":
			respuestaCorrecta=primerNro+segundoNro;
			break;

		case "-":
			respuestaCorrecta=primerNro-segundoNro;
			break;

		case "*":
			respuestaCorrecta=primerNro*segundoNro;
			break;

		case "/":
			respuestaCorrecta=primerNro/segundoNro;
			break;
	}

	console.log(respuestaCorrecta);

	document.getElementById('PrimerNumero').value=primerNro;
	document.getElementById('SegundoNumero').value=segundoNro;
	document.getElementById('Operador').value=operaciones;
	

}//FIN DE LA FUNCIÓN
function Responder()
{
	var respuestaPropia;
	var mensaje;

	respuestaPropia=document.getElementById('Respuesta').value;
	respuestaPropia=parseInt(respuestaPropia);

	if(respuestaPropia==respuestaCorrecta)
	{
		mensaje="El resultado que sacaste es correcto.";
	}
	else
	{
		mensaje="El resultado que sacaste es INCORRECTO.";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
