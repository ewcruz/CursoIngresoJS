function mostrar()
{
	var primerNro;
	var segundoNro;
	var suma;
	var resta;
	var mensaje;

	primerNro=prompt("Ingrese el primer numero aqui");
	segundoNro=prompt("Ingrese el segundo numero aqui");
	primerNro=parseInt(primerNro);
	segundoNro=parseInt(segundoNro);

	if(primerNro==segundoNro)
	{
		alert("Usted ingreso el mismo numero,"+primerNro+" como primer numero, y "+segundoNro+" como segundo numero." );

	}
	else
	{
		if(primerNro>segundoNro)
		{
			resta=primerNro-segundoNro;
			mensaje="Su primer numero es mayor que el segundo por lo que la resta es = "+resta;
		}
		else
		{
			suma=primerNro+segundoNro;
			mensaje="Su segundo numero es mayor que el primero por lo que la suma es = "+suma;
		}
	}
	if(suma>10)
	{
		mensaje="La suma es "+suma+" y supero el 10";
	}

	alert(mensaje);
}
