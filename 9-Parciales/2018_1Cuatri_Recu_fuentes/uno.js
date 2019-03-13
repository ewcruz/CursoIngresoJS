
function mostrar()
{
	var largoPerimetro;
	var anchoPerimetro;
	var perimetroRectangulo;

	largoPerimetro=prompt("Ingrese aqui el largo del perimetro.");
	anchoPerimetro=prompt("Ingrese aqui el ancho del perimetro");

	largoPerimetro=parseInt(largoPerimetro);
	anchoPerimetro=parseInt(anchoPerimetro);

	perimetroRectangulo=2*(largoPerimetro+anchoPerimetro);

	alert("El perimetro del rectangulo es = "+perimetroRectangulo+" metros.");
}