function mostrar()
{  
  var mesDelAño;
  var mensaje;

  mesDelAño=document.getElementById('mes').value;

  switch(mesDelAño)
  {
      case "Julio":
      case "Agosto":
        mensaje="Abrigate que hace frio!!";
        break;

      case "Septiembre":
      case "Octubre":
      case "Noviembre":
      case "Diciembre":
      case "Enero":
      case "Febrero":
      case "Marzo":
        mensaje="Ya pasamos el frio, ahora el calor!!";
        break;

      default:
        mensaje="Falta para el invierno...";  
  }

  alert(mensaje);

}//FIN DE LA FUNCIÓN