/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var nroDivisor;
	var nroDividendo;
	var resto;

	nroDividendo=document.getElementById('numeroDividendo').value;
	nroDivisor=document.getElementById('numeroDivisor').value;

	nroDividendo=parseInt(nroDividendo);
	nroDivisor=parseInt(nroDivisor);

	resto=nroDividendo%nroDivisor;

	alert("El resto entre estos dos numeros es = "+resto+".");

}
