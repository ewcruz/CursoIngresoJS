function mostrar()
{
 	var numero;
 	var contador;
 	var respuesta;
 	var acumuladorNegativo;
 	var acumuladorPositivo;


 	contador=0;
 	acumuladorNegativo=1;
 	acumuladorPositivo=0;
 	respuesta="si";

 	while(respuesta=="si")
 	{
 		contador=contador+1;
 		numero=prompt("Ingrese el "+contador+"º numero.");
 		numero=parseInt(numero);

 		if(numero<0)
 		{
 			acumuladorNegativo=acumuladorNegativo*numero;
 		}
 		else
 		{
 			acumuladorPositivo=acumuladorPositivo+numero;
 		}
 		respuesta=prompt("Desea ingresar otro numero?","si o no");
 	}

 	document.getElementById('suma').value=acumuladorPositivo;
 	document.getElementById('producto').value=acumuladorNegativo;
}//FIN DE LA FUNCIÓN"