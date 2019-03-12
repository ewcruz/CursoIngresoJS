function mostrar()
{
	var años;
	var mensaje;

	años=document.getElementById('edad').value;

	if(años==15)
	{
		mensaje="La niña bonita.";
	}
	else
	{
		mensaje="Vos debes ser feo/a.";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN