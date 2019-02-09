/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var salario;
	var aumento;
	var salariofinal;

	salario=sueldo.value;
	aumento=salario*10/100 

	salario=parseInt(salario);

	salariofinal=salario+aumento;

	resultado.value=salariofinal;


	
}
