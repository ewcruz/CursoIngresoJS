function mostrar()
{
	var numero;
	var contador;
	var acumulador;
	var contadorNumero;

	contador=0;
	acumulador=0;
	contadorNumero=0;

	while(contador<5)
	{
		contadorNumero=contadorNumero+1;
		numero=prompt("Ingrese aqui el "+contadorNumero+"º numero.");
		numero=parseInt(numero);

		acumulador=acumulador+numero;
		contador=contador+1;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN