function mostrar()
{
	var precio;
	var descuento;
	var precioDescuento;
	var precioFinal;

	precio=prompt("Ingrese aqui el precio de su producto.");
	descuento=prompt("Ingrese aqui el descuento correspondiente.");

	precio=parseInt(precio);
	descuento=parseInt(descuento);

	precioDescuento=precio*descuento/100;
	precioFinal=precio-precioDescuento;

	document.getElementById('elPrecioFinal').value="$"+precioFinal;

}
