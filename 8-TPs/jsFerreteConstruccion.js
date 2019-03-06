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

	alert("La cantidad de alambre que vas a necesitar es de "+alambreTotal+" metros.");

}
function Circulo () 
{
	var radioTerreno;
	var circunferenciaTerreno;
	var alambreTotal;

	radioTerreno=document.getElementById('Radio').value;
	radioTerreno=parseInt(radioTerreno);

	circunferenciaTerreno=3.14*2*radioTerreno;
	alambreTotal=3*circunferenciaTerreno;

	alert("La cantidad de alambre que vas a necesitar es de "+alambreTotal+" metros.");

}
function Materiales () 
{
	var largoTerreno;
	var anchoTerreno;
	var superficieTerreno;
	var bolsasCemento;
	var bolsasCal;

	largoTerreno=document.getElementById('Largo').value;
	anchoTerreno=document.getElementById('Ancho').value;
	largoTerreno=parseInt(largoTerreno);
	anchoTerreno=parseInt(anchoTerreno);

	superficieTerreno=largoTerreno*anchoTerreno;

	bolsasCemento=superficieTerreno*2;
	bolsasCal=superficieTerreno*3;

	alert("Para hacer el contrapiso vas a necesitar "+bolsasCemento+" bolsas de cemento y "+bolsasCal+" bolsas de cal.");
	
}