function mostrar()
{
 	var numero;
 	var contadorNumero;
 	var acumuladorPositivos;
 	var acumuladorNegativos;
 	var respuesta;

 	contadorNumero=0;
 	acumuladorPositivos=0;
 	acumuladorNegativos=1;
 	respuesta="si";

 	while(respuesta=="si")
 	{
 		contadorNumero=contadorNumero+1;
 		numero=prompt("Ingrese aqui el "+contadorNumero+"º numero.");
 		numero=parseInt(numero);

 		if(numero<0)
 		{
 			acumuladorNegativos=acumuladorNegativos*numero;
 		}
 		else
 		{
 			acumuladorPositivos=acumuladorPositivos+numero;
 		}

 		respuesta=prompt("Desea ingresar otro numero?","si o no");
 	}

 	document.getElementById('suma').value=acumuladorPositivos;
 	document.getElementById('producto').value=acumuladorNegativos;
}//FIN DE LA FUNCIÓN"