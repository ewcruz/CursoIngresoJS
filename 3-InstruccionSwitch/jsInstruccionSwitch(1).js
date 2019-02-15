function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje

switch(mesDelAño)
{
  	case "Enero":
  	mensaje="Que comiences bien el año!!";
    break;
  
  	case "Marzo":
  	mensaje="A Clases!!";
    break;
  

  	case "Julio":
  	mensaje="Se vienen las vacaciones!!";
  	break;

  	case "Diciembre":
  	mensaje="Felices Fiestas!!";
  	break;
    
}

alert(mensaje);


}//FIN DE LA FUNCIÓN