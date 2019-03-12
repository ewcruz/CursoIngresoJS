function mostrar()
{
	var años;
	var estCivil;

	años=document.getElementById('edad').value;
	estCivil=document.getElementById('estadoCivil').value;

	if(años<18&&estCivil!="Soltero")
	{
		alert("Usted es muy pequeño para NO ser soltero.");
	}

}//FIN DE LA FUNCIÓN