function mostrar()
{
	var numero;
	var contador;
	var acumulador;
	var contadorNumero;
	var respuesta;

	contador=0;
	acumulador=0;
	contadorNumero=0;
	respuesta="si";

	while(respuesta=="si")
	{
		contadorNumero=contadorNumero+1;
		numero=prompt("Ingrese aqui el "+contadorNumero+"º numero.");
		numero=parseInt(numero);

		acumulador=acumulador+numero;
		contador=contador+1;
		respuesta=prompt("Desea ingresar otro numero?","si o no");
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN