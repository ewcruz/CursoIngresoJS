function mostrar()
{
	var precio;
	var descuento;
	var precioDescuento;
	var precioFinal;

	precio=prompt("Ingrese el precio aqui");
	descuento=prompt("Ingrese el descuento correspondiente","0 a 100");
	precio=parseInt(precio);
	descuento=parseInt(descuento);

	precioDescuento=precio*descuento/100;
	precioFinal=precio-precioDescuento;

	document.getElementById('elPrecioFinal').value=precioFinal;
}
