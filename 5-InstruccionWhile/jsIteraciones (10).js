function mostrar()
{
	var numero;
	var acumuladorPositivos;
	var acumuladorNegativos;
	var contadorNumero;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPosNeg;
	var respuesta;

	acumuladorPositivos=0;
	acumuladorNegativos=0;
	contadorNumero=0;
	contadorPositivos=0;
	contadorNegativos=0;
	contadorCeros=0;
	contadorPares=0;
	respuesta="si";

	while(respuesta=="si")
	{
		contadorNumero=contadorNumero+1;
		numero=prompt("Ingrese aqui el "+contadorNumero+"º numero.");
		numero=parseInt(numero);

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
					contadorNegativos=contadorNegativos+1;
				}
			}
		}

		if(numero%2==0&&numero!=0)
			{
				contadorPares=contadorPares+1;
			}

		respuesta=prompt("Desea ingresar otro numero?","si o no");
	}

	promedioPositivos=acumuladorPositivos/contadorPositivos;
	promedioNegativos=acumuladorNegativos/contadorNegativos;
	diferenciaPosNeg=acumuladorPositivos-acumuladorNegativos;

	document.write( "1-Suma de los negativos es = "+acumuladorNegativos+"<br>"+
				    "2-Suma de los positivos es = "+acumuladorPositivos+"<br>"+
					"3-Cantidad de positivos es = "+contadorPositivos+"<br>"+
					"4-Cantidad de negativos es = "+contadorNegativos+"<br>"+
					"5-Cantidad de ceros es = "+contadorCeros+"<br>"+
					"6-Cantidad de números pares es = "+contadorPares+"<br>"+
					"7-Promedio de positivos es = "+promedioPositivos+"<br>"+
					"8-Promedios de negativos es = "+promedioNegativos+"<br>"+
					"9-Diferencia entre positivos y negativos es = "+diferenciaPosNeg+"<br>");


}//FIN DE LA FUNCIÓN