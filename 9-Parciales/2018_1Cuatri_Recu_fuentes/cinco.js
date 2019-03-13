function mostrar()
{
	var diaSemana;
	var mensaje;

	diaSemana=prompt("Ingrese aqui un dia de la semana.");

	switch(diaSemana)
	{
		case "sabado":
		case "domingo":
			mensaje="Buen finde!!";
			break;

		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
			mensaje="A trabajar!!";
			break;

		default:
			mensaje="Ingrese un dia valido";

	}	

	alert(mensaje);

}
