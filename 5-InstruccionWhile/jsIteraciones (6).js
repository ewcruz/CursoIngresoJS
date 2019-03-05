function mostrar()
{
	var numero;
	var contador;
	var acumulador;
	var contadorNumeros;

	contador=0;
	acumulador=0;
	contadorNumeros=0;

	while(contador<5)
	{
		contadorNumeros=contadorNumeros+1;
		numero=prompt("Ingrese el "+contadorNumeros+"º numero.");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		contador=contador+1;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN