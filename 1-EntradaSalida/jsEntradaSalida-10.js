/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var monto;
	var descuento;
	var montoFinal;

	monto=document.getElementById('importe').value;
	monto=parseInt(monto);

	descuento=monto*25/100;
	montoFinal=monto-descuento;

	document.getElementById('resultado').value=montoFinal;

}
