/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

