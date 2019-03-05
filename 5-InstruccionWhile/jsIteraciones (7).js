function mostrar()
{
	var numero;
	var contador;
	var acumulador;
	var respuesta;

	contador=0;
	acumulador=0;
	respuesta="si";

	while(respuesta=="si")
	{
		contador=contador+1;
		numero=prompt("Ingrese el "+contador+"º numero.");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		respuesta=prompt("Desea ingresar otro numero?","si o no");
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
	
}//FIN DE LA FUNCIÓN