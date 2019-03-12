/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var perimetroTerreno;
	var alambreTotal;

	largoTerreno=document.getElementById('Largo').value;	
	anchoTerreno=document.getElementById('Ancho').value;

	largoTerreno=parseInt(largoTerreno);
	anchoTerreno=parseInt(anchoTerreno);

	perimetroTerreno=2*(largoTerreno+anchoTerreno);
	alambreTotal=perimetroTerreno*3;

	alert("La cantidad de alambre necesaria para darle 3 vueltas al perimetro del terreno es de "+alambreTotal+" metros.");

}
function Circulo () 
{
	var radioTerreno;
	var circunferenciaTerreno;
	var alambreTotal;

	radioTerreno=document.getElementById('Radio').value;
	radioTerreno=parseInt(radioTerreno);

	circunferenciaTerreno=2*3.14*radioTerreno;
	alambreTotal=circunferenciaTerreno*3;

	alert("La cantidad de alambre necesaria para darle 3 vueltas a la circunferencia del terreno es de "+alambreTotal+" metros.");
}
function Materiales () 
{
	var largoTerreno;
	var anchoTerreno;
	var superficieTerreno;
	var cementoTotal;
	var calTotal;

	largoTerreno=document.getElementById('Largo').value;	
	anchoTerreno=document.getElementById('Ancho').value;

	largoTerreno=parseInt(largoTerreno);
	anchoTerreno=parseInt(anchoTerreno);

	superficieTerreno=largoTerreno*anchoTerreno;
	cementoTotal=superficieTerreno*2;
	calTotal=superficieTerreno*3;

	alert("La cantidad de cemento necesaria para el contrapiso del terreno es de "+cementoTotal+" bolsas, y la cantidad de cal necesaria es de "+calTotal+" bolsas.");
	
}