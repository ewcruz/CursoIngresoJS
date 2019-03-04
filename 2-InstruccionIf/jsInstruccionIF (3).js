function mostrar()
{
//tomo la edad  
	var años;
	var mensaje;

	años=document.getElementById('edad').value

	if(años>17)
	{
		mensaje="Usted es mayor de edad, bienvenido!";
	}
	else
	{
		mensaje="Usted NO es mayor de edad, larguese de aquì.";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN