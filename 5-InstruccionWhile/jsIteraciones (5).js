function mostrar()
{

	var sexo; 
	sexo = prompt("ingrese f ó m .");
	
	while(sexo!="f" && sexo !="m")  
	{
       sexo = prompt("error")

	}	


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN