/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var precio;
	var descuento;
	var precioFinal;

	precio=document.getElementById('importe').value;
	precio=parseInt(precio);

	descuento=precio*25/100;

	precioFinal=precio-descuento;

	document.getElementById('resultado').value=precioFinal;

}
