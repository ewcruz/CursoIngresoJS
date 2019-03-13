function mostrar()
{
	var letra;
	var numero;
	var contadorNumeros;
	var contadorLetras;
	var contadorPares;
	var contadorImpares;
	var contadorCeros;
	var acumuladorPares;
	var acumuladorLetraMinima;
	var acumuladorLetraMAxima;
	var contadorPositivos;
	var acumuladorPositivos;
	var acumuladorNegativos;
	var promedioPositivos;
	var sumaNegativos;
	var acumuladorNumeroMaximo;
	var acumuladorNumeroMinimo;
	var contador;
	var respuesta;

	contadorNumeros=0;
	contadorPares=0;
	contadorImpares=0;
	contadorCeros=0;
	contadorPositivos=0;
	acumuladorPositivos=0;
	acumuladorNegativos=0;
	contador=0;
	respuesta="si;"

	while(respuesta=="si")
	{
		contadorLetras=contadorLetras+1;
		letra=prompt("Ingrese la "+contadorLetras+" letra.");

		contadorNumeros=contadorNumeros+1;
		numero=prompt("Ingrese aqui el "+contadorNumeros+"º numero.");
		numero=parseInt(numero);

		while(numero<-100||numero>100)
		{
			numero=prompt("Ingrese un numero valido");
			numero=parseInt(numero);
		}

		if(numero==0)
		{
			contadorCeros=contadorCeros+1;
		}
		else
		{
			if(numero>0)
			{
				acumuladorPositivos=acumuladorPositivos+numero;
				contadorPositivos=contadorPositivos+1;
			}
			else
			{
				if(numero<0)
				{
					acumuladorNegativos=acumuladorNegativos+numero;
				}
		
		if(numero%2==0&&numero!=0 )
		{
			contadorPares=contadorPares+1;
		}
		else
		{
			if(numero%2==1)
			{
				contadorImpares=contadorImpares+1;
			}
															
		}
		
		if(contador==0)
		{
			acumuladorNumeroMaximo=numero;
			acumuladorNumeroMinimo=numero;
			acumuladorLetraMAxima=letra;
			acumuladorLetraMinima=letra;
		}
		else
		{
			if(numero>acumuladorNumeroMaximo)
			{
				acumuladorNumeroMaximo=numero;
				acumuladorLetraMAxima=letra;
			}
			else
			{
				if(numero<acumuladorNumeroMinimo)
				{
					acumuladorNumeroMinimo=numero;
					acumuladorLetraMinima=letra;
				}
																
			}
		}

		contador=contador+1;
		respuesta=prompt("Desea ingresar otra letra y otro numero?","si o no");

	}

	promedioPositivos=acumuladorPositivos/contadorPositivos;
	sumaNegativos=acumuladorNegativos;

	document.write( "La cantidad de números pares es ="+contadorPares+"."+"<br>"+
					"La cantidad de números impares es = "+contadorImpares+"."+"<br>"+
					"La cantidad de ceros es = "+contadorCeros+"."+"<br>"+
					"El promedio de todos los números positivos ingresados es = "+promedioPositivos+"."+"<br>"+
					"La suma de todos los números negativos es = "+sumaNegativos+"."+"<br>"+
					"El número y la letra del máximo son = "+acumuladorNumeroMaximo+" y "+acumuladorLetraMAxima+"."+"<br>"+
					"El número y la letra del minimo son = "+acumuladorNumeroMinimo+" y "+acumuladorLetraMinima+"."+"<br>");

}
