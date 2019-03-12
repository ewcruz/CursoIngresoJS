function mostrar()
{ 
	var mesDelAño;
	var mensaje;

	mesDelAño=document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case "Febrero":
			mensaje="Este mes tiene 28 dias.";
			break;

		case "Enero ":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje="Este mes tiene 31 dias.";
			break;

		default:
			mensaje="Este mes tiene 30 dias.";
	}

	alert(mensaje);
	
}//FIN DE LA FUNCIÓN