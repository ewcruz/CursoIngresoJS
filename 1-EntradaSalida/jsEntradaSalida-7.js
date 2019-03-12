/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNro;
	var segundoNro;
	var suma;

	primerNro=document.getElementById('numeroUno').value;
	segundoNro=document.getElementById('numeroDos').value;

	primerNro=parseInt(primerNro);
	segundoNro=parseInt(segundoNro);

	suma=primerNro+segundoNro;

	alert("El resultado de la suma es = "+suma+".");

}

function restar()
{
	var primerNro;
	var segundoNro;
	var resta;

	primerNro=document.getElementById('numeroUno').value;
	segundoNro=document.getElementById('numeroDos').value;

	primerNro=parseInt(primerNro);
	segundoNro=parseInt(segundoNro);

	resta=primerNro-segundoNro;

	alert("El resultado de la resta es = "+resta+".");

}

function multiplicar()
{ 
	var primerNro;
	var segundoNro;
	var multiplicacion;

	primerNro=document.getElementById('numeroUno').value;
	segundoNro=document.getElementById('numeroDos').value;

	primerNro=parseInt(primerNro);
	segundoNro=parseInt(segundoNro);

	multiplicacion=primerNro*segundoNro;

	alert("El resultado de la multiplicacion es = "+multiplicacion+".");
	
}

function dividir()
{
	var primerNro;
	var segundoNro;
	var division;

	primerNro=document.getElementById('numeroUno').value;
	segundoNro=document.getElementById('numeroDos').value;

	primerNro=parseInt(primerNro);
	segundoNro=parseInt(segundoNro);

	division=primerNro/segundoNro;

	alert("El resultado de la division es = "+division+".");
	
}

