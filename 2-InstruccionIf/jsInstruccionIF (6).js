function mostrar()
{
	var años;
	var mensaje;

	años=document.getElementById('edad').value;

	if(años>17)
	{
		mensaje="Usted es mayor de edad.";
	}
	else
	{
		if(años>12&&años<18)
		{
			mensaje="Usted es adolescente.";
		}
		else
		{
			mensaje="Usted es un niño";
		}
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN