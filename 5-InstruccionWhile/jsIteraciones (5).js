function mostrar()
{
	var genero;

	genero=prompt("Ingrese su sexo","f o m");

	while(genero!="f"&&genero!="m")
	{
		genero=prompt("Incorrecto, ingrese su sexo nuevamente");	
	}

	document.getElementById('Sexo').value=genero;
}//FIN DE LA FUNCIÓN