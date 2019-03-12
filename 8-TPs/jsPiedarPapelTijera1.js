/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	eleccionMaquina=Math.floor((Math.random()*3)+1);
	console.log(eleccionMaquina);
}
function piedra()
{
	var mensaje;
	
	switch(eleccionMaquina)
	{
		case 1:
			mensaje="empataste";
			break;

		case 2:
			mensaje="perdiste";
			break;

		case 3:
			mensaje="ganaste";
			break;	
	}
	
	alert(mensaje);

}
function papel()
{
	var mensaje;

	switch(eleccionMaquina)
	{
		case 1: 
			mensaje="ganaste";
			break;

		case 2:
			mensaje="empataste";
			break;

		case 3:
			mensaje="perdiste";
			break;
	}

	alert(mensaje);

} 
function tijera()
{
	var mensaje;

	switch(eleccionMaquina)
	{
		case 1: 
			mensaje="perdiste";
			break;

		case 2:
			mensaje="ganaste";
			break;

		case 3:
			mensaje="empataste";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN