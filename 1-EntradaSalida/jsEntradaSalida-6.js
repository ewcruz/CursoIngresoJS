/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumeros;
	var segundoNumero;
	var suma;
	
	primerNumero = numeroUno.value;
	segundoNumero = numeroDos.value;

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	suma=primerNumero+segundoNumero;

	alert(" el resultado de la suma es " + suma ); 
}

