function mostrar()
{
	var sistemaSolar;
	var mensaje;

	sistemaSolar=prompt("Ingrese aqui el planeta.");

	switch(sistemaSolar)
	{
		case "mercurio":
		case "venus":
			mensaje="aca hace mas calor";
			break;

		case "tierra":
			mensaje="aca vivimos";
			break;

		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
			mensaje="aca hace mas frio";
			break;

		default:
			mensaje="Error, ingrese un planeta valido";			
	}

	alert(mensaje);
}
