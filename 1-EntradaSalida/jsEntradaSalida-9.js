/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var salario;
	var aumento;
	var salariofinal;

	primerNumero=sueldo.value;
	segundoNumero=resultado.value;
	aumento=salario*10/100 

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	salariofinal=salario+aumento;

	resultado.value=salariofinal;


	
}
