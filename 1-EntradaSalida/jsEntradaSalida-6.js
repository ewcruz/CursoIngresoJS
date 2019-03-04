/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

