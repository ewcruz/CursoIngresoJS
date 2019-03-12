var eleccionMaquina;
var ContadorDeEmpates;
var ContadorDeGanadas;
var ContadorDePerdidas;

function comenzar()
{
	eleccionMaquina=Math.floor((Math.random() * 3) + 1);
	console.log(eleccionMaquina);
	 	
}//FIN DE LA FUNCIÓN
function piedra()
{
	var mensaje;

	ContadorDeEmpates=0;
	ContadorDeGanadas=0;
	ContadorDePerdidas=0;

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

	if(mensaje=="ganaste")
	{
		ContadorDeGanadas=ContadorDeGanadas+1;
	}
	else
	{
		if(mensaje=="perdiste")
		{
			ContadorDePerdidas=ContadorDePerdidas+1;			
		}
		else
		{
			ContadorDeEmpates=ContadorDeEmpates+1;			
		}
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
function papel()
{
	var mensaje;

	ContadorDeEmpates=0;
	ContadorDeGanadas=0;
	ContadorDePerdidas=0;

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

	if(mensaje=="ganaste")
	{
		ContadorDeGanadas=ContadorDeGanadas+1;
	}
	else
	{
		if(mensaje=="perdiste")
		{
			ContadorDePerdidas=ContadorDePerdidas+1;			
		}
		else
		{
			ContadorDeEmpates=ContadorDeEmpates+1;			
		}
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
function tijera()
{
	var mensaje;

	ContadorDeEmpates=0;
	ContadorDeGanadas=0;
	ContadorDePerdidas=0;

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

	if(mensaje=="ganaste")
	{
		ContadorDeGanadas=ContadorDeGanadas+1;
	}
	else
	{
		if(mensaje=="perdiste")
		{
			ContadorDePerdidas=ContadorDePerdidas+1;			
		}
		else
		{
			ContadorDeEmpates=ContadorDeEmpates+1;			
		}
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById('ganadas').value=ContadorDeGanadas;
	document.getElementById('perdidas').value=ContadorDePerdidas;
	document.getElementById('empatadas').value=ContadorDeEmpates;
}