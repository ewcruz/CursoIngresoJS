function mostrar()
{
	var numero;
	var contador;
	var contadorNumero;
	var acumuladorMaximos;
	var acumuladorMinimos;
	var respuesta;

	contador=0;
	contadorNumero=0;
	acumuladorMaximos=0;
	acumuladorMinimos=0;
	respuesta="si";

	while(respuesta=="si")
	{
		contadorNumero=contadorNumero+1;
		numero=prompt("Ingrese aqui el "+contadorNumero+"º numero.");
		numero=parseInt(numero);

		if(contador==0)
		{
			acumuladorMaximos=numero;
			acumuladorMinimos=numero;
		}
		else
		{
			if(numero>acumuladorMaximos)
			{
				acumuladorMaximos=numero;
			}
			else
			{
				if(numero<acumuladorMinimos)
				{
					acumuladorMinimos=numero;
				}
			}
		}

		contador=contador+1;
		respuesta=prompt("Desea ingresar otro numero.","si o no");

	}

	document.getElementById('maximo').value=acumuladorMaximos;
	document.getElementById('minimo').value=acumuladorMinimos;

}//FIN DE LA FUNCIÓN