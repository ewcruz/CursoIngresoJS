function mostrar()
{
	var numero;
	var contadorNumero;
	var contadorPositivos;
	var contadorNegativos;
	var acumuladorPositivos;
	var acumuladorNegativos;
	var contadorCeros;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;	
	var respuesta;

	contadorNumero=0;
	contadorPositivos=0;
	contadorNegativos=0;
	acumuladorPositivos=0;
	acumuladorNegativos=0;
	contadorCeros=0;
	contadorPares=0;
	respuesta="si";

	while(respuesta=="si")
	{
		contadorNumero=contadorNumero+1;
		numero=prompt("Ingrese el "+contadorNumero+"º numero.");
		numero=parseInt(numero);

		if(numero==0)
		{
			contadorCeros=contadorCeros+1;
		}
		if(numero<0)
		{
			acumuladorNegativos=acumuladorNegativos+numero;
			contadorNegativos=contadorNegativos+1;
		}
		if(numero>0)
		{
			acumuladorPositivos=acumuladorPositivos+numero;
			contadorPositivos=contadorPositivos+1;
		}
		if(numero%2==0&&numero!=0)
		{
			contadorPares=contadorPares+1;
		}

		respuesta=prompt("Desea ingresar otro numero?","si o no");
	
	}
		promedioPositivos=acumuladorPositivos/contadorPositivos;
		promedioNegativos=acumuladorNegativos/contadorNegativos;
		diferencia=acumuladorPositivos-acumuladorNegativos;

		document.write("1) Suma de los negativos = "+acumuladorNegativos+"<br>"+
					   "2) Suma de los positivos = "+acumuladorPositivos+"<br>"+
					   "3) Cantidad de postivos = "+contadorPositivos+"<br>"+
					   "4) Cantidad de negativos = "+contadorNegativos+"<br>"+
					   "5) Cantidad de ceros = "+contadorCeros+"<br>"+
					   "6) Cantidad de numeros pares = "+contadorPares+"<br>"+
					   "7) Promedio de positivos = "+promedioPositivos+"<br>"+
					   "8) Promedio de negativos = "+promedioNegativos+"<br>"+
					   "9) Diferencia entre positivos y negativos = "+diferencia+"<br>");


}//FIN DE LA FUNCIÓN