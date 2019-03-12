function mostrar()
{
	var genero;

	genero=prompt("Indique su sexo aqui.","f o m");

	while(genero!="f"&&genero!="m")
	{
		genero=prompt("Error, ingrese un sexo correcto.","f o m");
	}

	document.getElementById('Sexo').value=genero;
}//FIN DE LA FUNCIÓN