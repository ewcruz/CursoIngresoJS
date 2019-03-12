/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temp;
	var conversionFaC;

	temp=document.getElementById('Temperatura').value;
	temp=parseInt(temp);

	conversionFaC=(temp-32)*5/9;

	alert(temp+"ºF son "+conversionFaC+"ºC.");
}

function CentigradosFahrenheit () 
{
	var temp;
	var conversionCaF;

	temp=document.getElementById('Temperatura').value;
	temp=parseInt(temp);

	conversionCaF=(temp*9/5)+32;

	alert(temp+"ºC son "+conversionCaF+"ºF.");

}
