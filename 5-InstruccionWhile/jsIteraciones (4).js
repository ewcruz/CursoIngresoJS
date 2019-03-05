function mostrar()
{
	var nro;

	nro=prompt("Ingrese un numero.")

	while(nro<0||nro>9)
	{
		nro=prompt("Ingrese un numero entre 0 y 9.");
	}

	document.getElementById('Numero').value=nro;
	
}//FIN DE LA FUNCIÓN