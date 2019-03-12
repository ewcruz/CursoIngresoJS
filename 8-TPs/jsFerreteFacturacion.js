/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var sumaPrecios;

	primerPrecio=document.getElementById('PrecioUno').value;
	segundoPrecio=document.getElementById('PrecioDos').value;
	tercerPrecio=document.getElementById('PrecioTres').value;

	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=parseInt(tercerPrecio);

	sumaPrecios=primerPrecio+segundoPrecio+tercerPrecio;

	alert("El subtotal de la compra es "+sumaPrecios+".");
	
}
function Promedio () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var sumaPrecios;
	var promedioPrecios;

	primerPrecio=document.getElementById('PrecioUno').value;
	segundoPrecio=document.getElementById('PrecioDos').value;
	tercerPrecio=document.getElementById('PrecioTres').value;

	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=parseInt(tercerPrecio);

	sumaPrecios=primerPrecio+segundoPrecio+tercerPrecio;
	promedioPrecios=sumaPrecios/3;

	alert("El promedio de la compra es "+promedioPrecios+".");
}
function PrecioFinal () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var sumaPrecios;
	var precioIVA;
	var precioFinal;

	primerPrecio=document.getElementById('PrecioUno').value;
	segundoPrecio=document.getElementById('PrecioDos').value;
	tercerPrecio=document.getElementById('PrecioTres').value;

	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=parseInt(tercerPrecio);

	sumaPrecios=primerPrecio+segundoPrecio+tercerPrecio;
	precioIVA=sumaPrecios*21/100;
	precioFinal=sumaPrecios+precioIVA;

	alert("El precio final con IVA incluido es "+precioFinal+".");

}