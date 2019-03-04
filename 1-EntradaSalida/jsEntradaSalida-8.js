/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var nroUno;
	var nroDos;
	var resultado;

	nroUno=document.getElementById('numeroDividendo').value;
	nroDos=document.getElementById('numeroDivisor').value;

	nroUno=parseInt(nroUno);
	nroDos=parseInt(nroDos);

	resultado=nroUno%nroDos;

	alert("El resto es "+resultado+".");

}
