function mostrar()
{
	var años;

	años=document.getElementById('edad').value;

	if(años<13||años>17)
	{
		alert("Usted NO es adolescente.");
	}

}//FIN DE LA FUNCIÓN