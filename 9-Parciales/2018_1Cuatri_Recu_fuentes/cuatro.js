function mostrar()
{
	var primerNro;
	var segundoNro;
	var tercerNro;
	var cuartoNro;
	var montoCompra;
	var descuento;
	var montoFinal;
	var mensaje;

	primerNro=prompt("ingrese el precio","0");
	segundoNro=prompt("ingrese el precio","0");
	tercerNro=prompt("ingrese el precio","0");
	cuartoNro=prompt("ingrese el precio","0");

	primerNro=parseInt(primerNro);
	segundoNro=parseInt(segundoNro);
	tercerNro=parseInt(tercerNro);
	cuartoNro=parseInt(cuartoNro);

	montoCompra=primerNro+segundoNro+tercerNro+cuartoNro;

	if(montoCompra>99)
	{
		mensaje=montoCompra*0.90;
	}
	else
	{
		if(montoCompra>50&&montoCompra<100)
		{
			mensaje=montoCompra*0.95;
		}
		else
		{
			mensaje=montoCompra*1.15;
		}		

	}
			alert("Su precio final "+mensaje);

}

	