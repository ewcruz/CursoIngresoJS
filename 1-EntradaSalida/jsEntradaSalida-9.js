/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var salario;
	var aumento;
	var salarioFinal;

	salario=document.getElementById('sueldo').value
	salario=parseInt(salario);

	aumento=salario*10/100;
	salarioFinal=salario+aumento;

	document.getElementById('resultado').value=salarioFinal;
	
}
