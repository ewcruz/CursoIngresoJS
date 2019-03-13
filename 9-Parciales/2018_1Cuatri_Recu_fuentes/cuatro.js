function mostrar()
{
	var primerNro;
	var segundoNro;
	var mensaje;
	var suma;
	var division;

	primerNro=prompt("Ingrese aqui el primer numero.");
	segundoNro=prompt("Ingrese aqui el segundo numero.");

	primerNro=parseInt(primerNro);
	segundoNro=parseInt(segundoNro);

	if(primerNro==segundoNro)
	{
		mensaje="Ingresaste dos numeros iguales, el primer numero es "+primerNro+", y el segundo numero es "+segundoNro+".";
	}
	else
	{
		if(primerNro>segundoNro)
		{
			division=primerNro/segundoNro;
			mensaje="Como el primer numero es mayor que el segundo los dividimos y el resultado es = "+division+".";
		}
		else
		{
			suma=primerNro+segundoNro;
			mensaje="Como el primer numero es menor que el segundo los sumamos y el resultado es = "+suma+".";
		}
		if(suma<50)
		{
			mensaje="La suma es = "+suma+", y es menor a 50.";
		}

	}

	alert(mensaje);

}

	