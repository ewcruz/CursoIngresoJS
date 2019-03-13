/*Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, 
el peso el cual debe ser entre 1 y 1000 y la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.

Testeo con los siguientes valores 
(m=pepito;p = 50; t =-300(mal) ,-30(bien) ) 
(m=teem;p = 10; t =0 ) 
(m=llut;p = 150(mal), 15(bien); t =-13 ) 
(m=fpy;p = 45; t =-12 )*/

function mostrar()
{
	var animal;
	var pesoAnimal;
	var temperaturaHabitat;
	var contadorTemperaturasPares;
	var pesoMaximo;
	var animalPesado;
	var temperaturaMaxima;
	var contadorAnimalesBajoCero;
	var acumuladorPeso;
	var contadorPeso;
	var promedioPeso;
	var pesoMaximoBajoCero;
	var pesoMinimoBajoCero;
	var contador;
	var contadorNumero;
	var contadorTemperatura;
	var contadorNumeroPeso;
	var respuesta;

	contadorTemperaturasPares=0;
	contadorAnimalesBajoCero=0;
	contadorPeso=0;
	acumuladorPeso=0;
	contador=0;
	contadorNumero=0;
	contadorNumeroPeso=0
	contadorTemperatura=0;
	respuesta="si";

	while(respuesta=="si")
	{
		contadorNumero=contadorNumero+1;
		animal=prompt("Ingrese aqui el "+contadorNumero+"º animal del zoológico.");

		contadorNumeroPeso=contadorNumeroPeso+1;
		pesoAnimal=prompt("Ingrese aqui el "+contadorNumeroPeso+"º peso del animal.");
		pesoAnimal=parseInt(pesoAnimal);

		while(pesoAnimal<1||pesoAnimal>1000)
		{
			pesoAnimal=prompt("Error, ingrese un peso valido.");
			pesoAnimal=parseInt(pesoAnimal);
		}

		acumuladorPeso=acumuladorPeso+pesoAnimal;
		contadorPeso=contadorPeso+1;

		temperaturaHabitat=prompt("Ingrese la temperatura del hábitat aqui.","entre -30º y 30º");
		temperaturaHabitat=parseInt(temperaturaHabitat);

		while(temperaturaHabitat<-30||temperaturaHabitat>30)
		{
			temperaturaHabitat=prompt("Error, ingrese una temperatura valida.","entre -30º y 30º");
			temperaturaHabitat=parseInt(temperaturaHabitat);
		}

		if(temperaturaHabitat%2==0&&temperaturaHabitat!=0)
		{
			contadorTemperaturasPares=contadorTemperaturasPares+1;
		}

		if(temperaturaHabitat<0&&contador==0)
		{
			pesoMaximoBajoCero=pesoAnimal;
			pesoMinimoBajoCero=pesoAnimal;	
		}
		else
		{
			if(pesoAnimal>pesoMaximoBajoCero)
			{
				pesoMaximoBajoCero=pesoAnimal;
			}
			else
			{
				if(pesoAnimal<pesoMinimoBajoCero&&temperaturaHabitat<0)
				{
					pesoMinimoBajoCero=pesoAnimal;
				}
			}
		}
		
		if(temperaturaHabitat<0)
		{
			contadorAnimalesBajoCero=contadorAnimalesBajoCero+1;
		}
		
		if(contador==0)
		{
			pesoMaximo=pesoAnimal;
			animalPesado=animal;
			temperaturaMaxima=temperaturaHabitat;
		}
		else
		{
			if(pesoAnimal>pesoMaximo)
			{
				animalPesado=animal;
				temperaturaMaxima=temperaturaHabitat;
			}
		}

		contador=contador+1;
		respuesta=prompt("Desea ingresar mas datos?","si o no");

	}

	promedioPeso=acumuladorPeso/contadorPeso;

	document.write( "a) La cantidad de temperaturas pares es = "+contadorTemperaturasPares+"."+"<br>"+
					"b) El nombre y temperatura del animal más pesado son = "+animalPesado+" y la temperatura es "+temperaturaMaxima+"ºC."+"<br>"+
					"c) La cantidad de animales que viven a menos de 0 grados es = "+contadorAnimalesBajoCero+"."+"<br>"+
					"d) El promedio del peso de todos los animales es = "+promedioPeso+"kg."+"<br>"+
					"f) El peso máximo de todos los animales cuyas temperaturas sean bajo cero es = "+pesoMaximoBajoCero+"kg."+"<br>"+
					"g) El peso mínimo de todos los animales cuyas temperaturas sean bajo cero es = "+pesoMinimoBajoCero+"kg."+"<br>");
  	 
}
