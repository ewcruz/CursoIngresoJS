
function mostrar()
{
	var pesomascota1;
	var pesomascota2;
	var mascota1;
	var mascota2;
	//no anda esto
	

	mascota1=prompt("Mascota 1");
	mascota2=prompt("Mascota 2");
	pesomascota1=prompt("peso Mascota 1");
	pesomascota2=prompt("peso Mascota 2");

	
	pesomascota1=parseInt(pesomascota1);
	pesomascota2=parseInt(pesomascota2);

	var suma;
	suma=pesomascota1+pesomascota2;
	
	alert ("Tenes dos mascotas: " +mascota1+ " y " +mascota2+ ", que pesan " +pesomascota1+ " y " +pesomascota2+ " kilos, la suma de los kilos es " +suma+ " kilos.");
}