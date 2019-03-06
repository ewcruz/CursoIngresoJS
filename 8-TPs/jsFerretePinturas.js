/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var tempe;
	var fahrenheitCentigrados;

	tempe=document.getElementById('Temperatura').value;
	tempe=parseInt(tempe);	

	fahrenheitCentigrados=(tempe-32)*100/180;

	alert("La temperatura ingresada en Fahrenheit es de "+fahrenheitCentigrados+"ºC.");
}

function CentigradosFahrenheit () 
{
	var tempe;
	var centigradosFahrenheit;

	tempe=document.getElementById('Temperatura').value;
	tempe=parseInt(tempe);

	centigradosFahrenheit=(tempe*180/100)+32;

	alert("La temperatura ingresada en Celsius es de "+centigradosFahrenheit+"ºF.");

}
