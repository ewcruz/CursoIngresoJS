function mostrar()
{

	var contador;
	var maximo;
	var minimo;
	var numero;
	var respuesta='si';
	
	contador=0;
	acumulador=0;

	while(respuesta!="no")
	{
		
		contador=contador+1;
		numero=prompt("ingrese el numero " +contador+" # : ");
		numero=parseInt(numero);

		if(contador==0)
		{
			maximo=numero;
			minimo=numero;
		}
		else
		{
			if(numero<maximo)
			{
				maximo=numero;
			}
			if(numero<minimo)
			{
				minimo=numero;
			}
		}

	
		respuesta=prompt("si, para continuar");

	
	}
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;




}//FIN DE LA FUNCIÓN