function mostrar()
{
//tomo la edad  
	var años;
	var estCivil;

	años=document.getElementById('edad').value;
	estCivil=document.getElementById('estadoCivil').value;

	if(años>17&&estCivil=="Soltero")
	{
		alert("Usted es soltero y no es menor de edad. Replanteate las cosas amigo.");
	}
	
}//FIN DE LA FUNCIÓN