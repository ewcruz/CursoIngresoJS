
function mostrar()
{
	var anchoRectangulo;
	var largoRectangulo;
	var perimetroRectangulo;

	anchoRectangulo=prompt("Ingrese el ancho del rectangulo aqui");
	largoRectangulo=prompt("Ingrese el largo del rectangulo aqui");
	anchoRectangulo=parseInt(anchoRectangulo);
	largoRectangulo=parseInt(largoRectangulo);

	perimetroRectangulo=2*(anchoRectangulo+largoRectangulo);

	alert("El perimetro del rectangulo es "+perimetroRectangulo+" metros.");

}