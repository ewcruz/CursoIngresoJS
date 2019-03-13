function mostrar()
{
	var notas;
	var sexo;
	var contador;
	var contadorNotas;
	var acumuladorNotas;
	var acumularNotaMinima;
	var sexoNotaMinima;
	var contadorVarones;
	var promedioTotal;

	contador=0;
	contadorNotas=0;
	acumuladorNotas=0;
	contadorVarones=0;

	while(contador<5)
	{
		contadorNotas=contadorNotas+1;
		notas=prompt("Ingrese aqui la "+contadorNotas+"º nota.");
		notas=parseInt(notas);

		while(notas<0||notas>10)
		{
			notas=prompt("Ingrese una nota valida");
			notas=parseInt(notas);
		}

		acumuladorNotas=acumuladorNotas+notas;

		sexo=prompt("Ingrese aqui su sexo","f o m");

		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("Ingrese un sexo valido","f o m");
		}

		switch(sexo)
		{
			case "f":
			sexo="femenino";
			break;

			case "m":
			sexo="masculino"
			break;
		}

		
		if(contador==0)
		{
			acumularNotaMinima=notas;
			sexoNotaMinima=sexo;
		}
		else
		{
			if(notas<acumularNotaMinima)
			{
				acumularNotaMinima=notas;
				sexoNotaMinima=sexo;
			}
		}


		if(sexo=="masculino"&&notas>=6)
		{
			contadorVarones=contadorVarones+1;
		}

		contador=contador+1;

	}

	promedioTotal=acumuladorNotas/contador;

	  alert("El promedio de las notas totales es = "+promedioTotal+"."+
			"\nLa nota más baja es = "+acumularNotaMinima+"."+
			"\nEl sexo de esa persona es "+sexoNotaMinima+"."+
			"\nLa cantidad de varones que su nota haya sido mayor o igual a 6 es = "+contadorVarones+".");


}
