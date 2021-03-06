/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var cantidadLamparas;
	var precioLampara;
	var precioLamparaFinal;
	var marcaLampara;
	var descuento;
	var precioDescuento;
	var precioDescuentoFinal;
	var impuestoIIBB;
	var precioFinal;
	var mensaje;

	precioLampara=35;
	marcaLampara=document.getElementById('Marca').value;
	cantidadLamparas=document.getElementById('Cantidad').value;
	cantidadLamparas=parseInt(cantidadLamparas);

	switch(cantidadLamparas)
	{
		case 5:
			if(marcaLampara=="ArgentinaLuz")
			{
				descuento=0.40;
			}
			else
			{
				descuento=0.30;
			}
			break;

		case 4:
			if(marcaLampara=="ArgentinaLuz"||marcaLampara=="FelipeLamparas")
			{
				descuento=0.25;
			}
			else
			{
				descuento=0.20;
			}
			break;

		case 3:
			if(marcaLampara=="ArgentinaLuz")
			{
				descuento=0.15;
			}
			else
			{
				if(marcaLampara=="FelipeLamparas")
				{
					descuento=0.10;
				}
				else
				{
					descuento=0.05;
				}
			}
			break;

		default:
				if(cantidadLamparas>5)
				{
					descuento=0.50;
				}
				else
				{
					if(cantidadLamparas<3)
					{
						descuento=0;
					}
				}	
	}

	precioLamparaFinal=cantidadLamparas*precioLampara;
	precioDescuento=precioLamparaFinal*descuento;
	precioDescuentoFinal=precioLamparaFinal-precioDescuento;

	if(precioDescuentoFinal>120)
	{
		impuestoIIBB=precioDescuentoFinal*10/100;
		precioFinal=precioDescuentoFinal+impuestoIIBB;

		mensaje="Por impuesto de IIBB usted pagara $"+precioFinal+", siendo $"+impuestoIIBB+" el impuesto que se pago.";
		document.getElementById('precioDescuento').value="$"+precioFinal;
	}
	else
		{
			mensaje="El precio final de su compra con descuento es de $"+precioDescuentoFinal+".";
			document.getElementById('precioDescuento').value="$"+precioDescuentoFinal;
		}

		alert(mensaje);
}
