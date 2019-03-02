function mostrar()
{
 var contador;
 var velocidad;
 var acumulador;
 var combustible;
 var velocidadMinima;
 var cantidadCombustibleLiquido;
 var tipoCombustibleMin;
 var maximoCombustibleSolido;

 cantidadCombustibleLiquido=0;
 contador=0;
 acumulador=0;
 maximoCombustibleSolido=0;

 while(contador<5)
 {
 	contador=contador++;

 	while(velocidad<0||velocidad>250)
 	{
 		velocidad=prompt(velocidad);
 		velocidad=parseInt(velocidad);
 	}
 	while(combustible!="l"&&combustible!="s")
 	{
 		combustible=prompt(combustible);
 	}

 	acumulador=acumulador+velocidad;
 	//punto 2 (no se si aca va el if)
 	if(contador==1)
 	{
 		velocidadMinima=velocidad;
 		tipoCombustibleMin=combustible;
 	}
 	else
 	{
 		if(velocidad<velocidadMinima)
 		{
 			velocidadMinima=velocidad;
 			tipoCombustibleMin=combustible;
 		}
 	}
 	//punto 3 (no se si aca va el if)
 	 if(velocidad>100&&combustible=="l")
 	 {
 	 	cantidadCombustibleLiquido=cantidadCombustibleLiquido++;
 	 }

 	 //punto 4 (no se si aca va el if)
 	 if(velocidad>maximoCombustibleSolido&&combustible=="s")
 	 {
 	 	maximoCombustibleSolido=
 	 }

 	 contador=contador+1;

 }
	promedio=acumulador/contador; 
 
 	
}
