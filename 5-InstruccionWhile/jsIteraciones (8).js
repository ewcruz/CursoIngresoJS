function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=0;
	
	var respuesta='si';

		while(1)
	{
		contador=contador+1;
		numero=prompt("ingrese el numero " +contador+" # : ");
		numero=parseInt(numero);
		
		if(numero>0);
		{
			positivo=positivo+numero;
		}
		else 
		{
			negativo=negativo+numero;
		}

		respuesta=prompt("si, para continuar");


		if(respuesta!="si")
		{
			break;
		}
		
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN