/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var nroUno;
	var nroDos;
	var resultado;

	nroUno=document.getElementById('numeroUno').value;
	nroDos=document.getElementById('numeroDos').value;

	nroUno=parseInt(nroUno);
	nroDos=parseInt(nroDos);

	resultado=nroUno+nroDos;

	alert("El resultado de la suma es "+resultado+".");
	
}

function restar()
{
	var nroUno;
	var nroDos;
	var resultado;

	nroUno=document.getElementById('numeroUno').value;
	nroDos=document.getElementById('numeroDos').value;

	nroUno=parseInt(nroUno);
	nroDos=parseInt(nroDos);

	resultado=nroUno-nroDos;

	alert("El resultado de la resta es "+resultado+".");
	
}

function multiplicar()
{ 
	var nroUno;
	var nroDos;
	var resultado;

	nroUno=document.getElementById('numeroUno').value;
	nroDos=document.getElementById('numeroDos').value;

	nroUno=parseInt(nroUno);
	nroDos=parseInt(nroDos);

	resultado=nroUno*nroDos;

	alert("El resultado de la multiplicacion es "+resultado+".");
	
}

function dividir()
{
	var nroUno;
	var nroDos;
	var resultado;

	nroUno=document.getElementById('numeroUno').value;
	nroDos=document.getElementById('numeroDos').value;

	nroUno=parseInt(nroUno);
	nroDos=parseInt(nroDos);

	resultado=nroUno/nroDos;

	alert("El resultado de la division es "+resultado+".");
	
}

