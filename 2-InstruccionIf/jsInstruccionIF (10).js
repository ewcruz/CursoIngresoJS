function mostrar()
{
//Genero el número RANDOM entre 1 y 10 
	var notas;
	var mensaje;

	notas=Math.floor((Math.random() * 10) + 1);
	//notas=parseInt(notas);

	if(notas>8)
	{
		mensaje="Excelente!!, su nota es un "+notas+".";
		console.log(notas);
	}
	else
	{
		if(notas>3&&notas<9)
		{
			mensaje="Aprobo, su nota es un "+notas+".";
			console.log(notas);
		}
		else
		{
			mensaje="Vamos!! la proxima se puede; su nota es un "+notas+".";
			console.log(notas);
		}
	}

	alert(mensaje);

}//FIN dE LA FUNCIÓN