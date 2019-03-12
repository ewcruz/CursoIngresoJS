function mostrar()
{  
	var horaDia;
	var mensaje;

	horaDia=document.getElementById('hora').value;

	switch(horaDia)
	{
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			mensaje="Es de mañana.";
			break;

		case "12":
		case "13":
		case "14":
		case "15":
		case "16":
		case "17":
		case "18":
		case "19":
			mensaje="Es de tarde.";
			break;

		default:
			if(horaDia<0||horaDia>24)
			{
				mensaje="Ingrese una hora valida";
			}
			else
			{
				mensaje="Es de noche.";
			}
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN