function mostrar()
{
	var precioHabitacion;
	var mensaje;

	precioHabitacion=prompt("Indique el monto a cobrar ","");
	precioHabitacion=parseInt(precioHabitacion);

	switch(precioHabitacion)
	{
		case "Visa":
		mensaje=precioHabitacion*0.9;
		break;

		case "Paypal"
		mensaje=precioHabitacion*0.85;
		break;

		case "mercadoPago"
		mensaje=precioHabitacion*0.9;
		break;

		case "todoIncluido"
		mensaje= 

	}
