/*Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y 
un número entre -100 y 100 (validar) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos 
( d , -150(mal) , -50(bien)) 
( z , 0) 
( g , 20) 
( a , 150(mal) , 0(bien)) 
( b , 3) 
( k , 7)*/





function mostrar()
{
	var letra;
	var numero;
	var contadorPares;
	var contadorImpares;
	var contadorCeros;
	var contadorPositivos;
	var promedioPositivos;
	var acumuladorPositivos;
	var acumuladorNegativos;
	var acumuladorNumeroMaximo;
	var acumuladorNumeroMinimo;
	var acumuladorLetraMaxima;
	var acumuladorLetraMinima;
	var contadorNumero;
	var contador;
	var respuesta;

	contadorPares=0;
	contadorImpares=0;
	contadorCeros=0;
	contadorNumero=0;
	contador=0;
	contadorPositivos=0;
	acumuladorPositivos=0;
	acumuladorNegativos=0;
	respuesta="si";

	while(respuesta=="si")
	{
		letra=prompt("Ingrese una letra aqui","a...z");

		contadorNumero=contadorNumero+1;
		numero=prompt("Ingrese el "+contadorNumero+"º numero aqui.");
		numero=parseInt(numero);

		while(numero<-100||numero>100)
		{
			numero=prompt("Error, ingrese un numero valido","entre -100 y 100");
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
				contadorPositivos=contadorPositivos+1
			}
			else
			{
				acumuladorNegativos=acumuladorNegativos+numero;
			}
		}

		if(numero%2==0&&numero!=0)
		{
			contadorPares=contadorPares+1
		}
		else
		{
			if(numero%2!=0)
			{
				contadorImpares=contadorImpares+1;				
			}
		}

		if(contador==0)
		{
			acumuladorNumeroMinimo=numero;
			acumuladorNumeroMaximo=numero;
			acumuladorLetraMinima=letra;
			acumuladorLetraMaxima=letra;
		}
		else
		{
			if(numero>acumuladorNumeroMaximo)
			{
				acumuladorNumeroMaximo=numero;
				acumuladorLetraMaxima=letra;
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

	document.write( "a) La cantidad de números pares es = "+contadorPares+"."+"<br>"+
					"b) La cantidad de números impares es = "+contadorImpares+"."+"<br>"+
					"c) La cantidad de ceros es = "+contadorCeros+"."+"<br>"+
					"d) El promedio de todos los números positivos ingresados es = "+promedioPositivos+"."+"<br>"+
					"e) La suma de todos los números negativos es = "+acumuladorNegativos+"."+"<br>"+
					"f) El número y la letra del máximo son = "+acumuladorNumeroMaximo+" y "+acumuladorLetraMaxima+"."+"<br>"+
					"g) El número y la letra del minimo son = "+acumuladorNumeroMinimo+" y "+acumuladorLetraMinima+"."+"<br>");

}
