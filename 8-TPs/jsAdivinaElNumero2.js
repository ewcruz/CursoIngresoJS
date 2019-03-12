/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	numeroSecreto=Math.floor((Math.random() * 100) + 1);
	numeroSecreto=parseInt(numeroSecreto);
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

	if(numeroIngresado==numeroSecreto)
	{
		switch(contadorIntentos)
		{
			case 1:
				mensaje="Usted es un psiquico. Acertaste en el "+contadorIntentos+"º intento.";
				break;

			case 2:
				mensaje="Excelente percepción. Acertaste en el "+contadorIntentos+"º intento.";
				break;

			case 3:
				mensaje="Esto es suerte. Acertaste en el "+contadorIntentos+"º intento.";
				break;

			case 4:
				mensaje="Excelente tecnica. Acertaste en el "+contadorIntentos+"º intento.";
				break;

			case 5:
				mensaje="Usted esta en la media. Acertaste en el "+contadorIntentos+"º intento.";
				break;

			default:
				if(contadorIntentos>5&&contadorIntentos<=10)	
				{
					mensaje="Falta tecnica. Acertaste en el "+contadorIntentos+"º intento.";
					break;
				}
				else
				{
					mensaje="Afortunado en el amor!! Acertaste en el "+contadorIntentos+"º intento.";
					break;
				}
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
			mensaje="Te pasaste...";
		}
	}

	document.getElementById('intentos').value=contadorIntentos;
	alert(mensaje);

}