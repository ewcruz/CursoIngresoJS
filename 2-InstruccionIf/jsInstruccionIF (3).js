function mostrar()
{
	var años;
	var mensaje;

	años=document.getElementById('edad').value;

	if(años>17)
	{
		mensaje="Usted es mayor de edad, bienvenido al sitio.";
	}
	else
	{
		mensaje="Usted tiene menos de 18 años, no puede permanecer en este sitio.";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN