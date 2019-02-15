function mostrar()
{
	var compra;
	var descuento;
	var preciodescuento;
	var iva;
	var preciofinal;

	compra=prompt("Importe");
	descuento=compra*10/100;
    preciodescuento=compra-descuento;
	iva=preciodescuento*21/100;

	compra=parseInt(compra);
	descuento=parseInt(descuento);
	preciodescuento=parseInt(preciodescuento);

  alert("Tu compra es de " +compra+ ", tenes un descuento del 10%, queda en $" +descuento+ ", mas el IVA es " )
}
