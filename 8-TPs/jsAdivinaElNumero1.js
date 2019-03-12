/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
	var numeroSecreto;
	var contadorIntentos;

function comenzar()
{
	
	numeroSecreto=Math.floor((Math.random() * 100) + 1);
	console.log(numeroSecreto);
	contadorIntentos=0;

}

function verificar()
{
	
	var numeroIngresado;
	var mensaje;

	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);
	contadorIntentos=contadorIntentos+1;
	contadorIntentos=parseInt(contadorIntentos);

	if(numeroIngresado==numeroSecreto)
	{
		switch(contadorIntentos)
		{
			case 1:
				mensaje="Sos un winner!! acertaste en el "+contadorIntentos+"º intento.";
				break;

			case 2:
				mensaje="Casi de una!! acertaste en el "+contadorIntentos+"º intento.";
				break;

			case 3:
				mensaje="Nada mal!! acertaste en el "+contadorIntentos+"º intento.";
				break;

			default:
				mensaje="Muy bien, acertaste en el "+contadorIntentos+"º intento.";		
		}
	}
	else
	{
		if(numeroIngresado<numeroSecreto)
		{
			mensaje="Falta...";
		}
		else
		{
			if(numeroIngresado>numeroSecreto)
			{
				mensaje="Te pasaste...";
			}
		}
	}

	document.getElementById('intentos').value=contadorIntentos;
	alert(mensaje);
		
}