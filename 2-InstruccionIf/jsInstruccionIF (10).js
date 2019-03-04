function mostrar()
{
//Genero el número RANDOM entre 1 y 10 
	var nota;
	var mensaje;

	nota=Math.floor(Math.random() * 10) + 1;

	if(nota>8)
	{
		mensaje="EXCELENTE, su nota es un "+nota+".";
	}
	else
	{
		if(nota>4&&nota<9)
		{
			mensaje="APROBO, su nota es un "+nota+".";
		}
		else
		{
			mensaje="Vamos la proxima se puede!! su nota es un "+nota+".";
		}
	}

	console.log(nota);
	alert(mensaje);	

}//FIN dE LA FUNCIÓN