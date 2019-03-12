function mostrar()
{
	var años;
	var estCivil;

	años=document.getElementById('edad').value;
	estCivil=document.getElementById('estadoCivil').value;

	if(años>17&&estCivil=="Soltero")
	{
		alert("Usted es soltero y no es menor.");
	}
	
}//FIN DE LA FUNCIÓN