function mostrar()
{
	var numero;
	var contador;
	var contadorNumero;
	var acumuladorMaximo;
	var acumuladorMinimo;
	var respuesta;

	contador=0;
	contadorNumero=0;
	respuesta="si";

	while(respuesta=="si")
	{
		contadorNumero=contadorNumero+1;
		numero=prompt("Ingrese el "+contadorNumero+"º numero.");
		numero=parseInt(numero);

		if(contador==0)
		{
			acumuladorMaximo=numero;
			acumuladorMinimo=numero;
		}
				
		if(numero>acumuladorMaximo)
		{
			acumuladorMaximo=numero;
		}
		else
		{
			if(numero<acumuladorMinimo)
			{
				acumuladorMinimo=numero;
			}
		}

		contador=contador+1;
		respuesta=prompt("Desea ingresar otro numero?","si o no");
	}

	document.getElementById('maximo').value=acumuladorMaximo;
	document.getElementById('minimo').value=acumuladorMinimo;

}//FIN DE LA FUNCIÓN