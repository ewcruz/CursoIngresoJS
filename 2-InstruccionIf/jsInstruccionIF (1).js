function mostrar()
{
//tomo la edad
	var edad;
	var mensaje;

	edad=document.getElementById('edad').value;

	if(edad==15)
	{
		mensaje="La niña bonita";
	}  
	else
	{
		mensaje="Seguro vos sos feo";
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN