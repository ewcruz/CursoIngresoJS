function mostrar()
{
	var notas;
	var sexo;
	var acumulador;
	var contador;
	var promedioNotas;
	var notaMinima;
	var varonesAprobados;
	var contadorVarones;
	var mensaje;

	sexo="f"||"m";

	contador=0;
	acumulador=0;
	contadorVarones=0;

	while(contador<5)
	{
		contador=contador+1;
		notas=prompt("ingrese la nota " +contador);
		notas=parseInt(notas);
		sexo=prompt("ingrese su sexo");
		acumulador=acumulador+notas;

		if(contador==0)
		{
			notaMinima=notas
			mensaje="La nota mas baja fue "+notaMinima+" y el sexo de quien la obtuvo es "+sexo);
		}

		if(notas>5&&sexo==m)
		{
			contadorVarones=contadorVarones+1
			mensaje= "La cantidad de varones aprobados es "+contadorVarones;
		}

		
	}
	promedioNotas=acumulador/contador;

	alert(promedioNotas+notaMinima+sexo+varonesAprobados);

}

