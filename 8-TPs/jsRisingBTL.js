/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var años;
 	var genero;
 	var estCivil;
 	var sueldoBruto;
 	var nroLegajo;
 	var nacionalidades;
   	
 	años=prompt("Ingrese su edad aqui","entre 18 y 90 años");
 	años=parseInt(años);

 	while(años<18||años>90)
 	{
 		años=prompt("Ingrese una edad valida","entre 18 y 90 años");
 		años=parseInt(años);
 	}

 	document.getElementById('Edad').value=años+" años";

 	genero=prompt("Ingrese su sexo aqui","f o m");

 	while(genero!="f"&&genero!="m")
 	{
 		genero=prompt("Ingrese un sexo correcto","f o m");
 	}

 	switch(genero)
 	{
 		case "f":
 			genero="Femenino";
 			break;

 		case "m":
 			genero="Masculino";
 			break;
 	}

 	document.getElementById('Sexo').value=genero;

 	estCivil=prompt("Ingrese su estado civil","1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
 	estCivil=parseInt(estCivil);

 	while(estCivil<1||estCivil>4)
 	{
 		estCivil=prompt("Ingrese un estado civil valido","1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
 		estCivil=parseInt(estCivil);
 	}

 	switch(estCivil)
 	{
 		case 1:
 			estCivil="Soltero"; 
 			break;

 		case 2:
 			estCivil="Casado";
 			break;	

 		case 3:
 			estCivil="Divorciado";
 			break;

 		case 4:
 			estCivil="Viudos";
 			break;
 	}

 	document.getElementById('EstadoCivil').value=estCivil;

 	sueldoBruto=prompt("Ingrese su sueldo bruto aqui","no menor a $8000");
 	sueldoBruto=parseInt(sueldoBruto);

 	while(sueldoBruto<8000)
 	{
 		sueldoBruto=prompt("Ingrese un sueldo correcto","no menor a $8000");
 		sueldoBruto=parseInt(sueldoBruto);
 	}

 	document.getElementById('Sueldo').value="$"+sueldoBruto;

 	nroLegajo=prompt("Ingrese su numero de legajo");
 	nroLegajo=parseInt(nroLegajo);

 	while(nroLegajo<1000||nroLegajo>9999)
 	{
 		nroLegajo=prompt("Ingrese un numero de legajo valido");
 		nroLegajo=parseInt(nroLegajo);
 	}

 	document.getElementById('Legajo').value="legajo nº "+nroLegajo;

 	nacionalidades=prompt("Ingrese su nacionalidad aqui","“A” para argentinos, “E” para extranjeros, “N” para nacionalizados");

 	while(nacionalidades!="a"&&nacionalidades!="e"&&nacionalidades!="n")
 	{
 		nacionalidades=prompt("Ingrese una nacionalidad valida","“A” para argentinos, “E” para extranjeros, “N” para nacionalizados");		
 	}

 	switch(nacionalidades)
 	{
 		case "a":
 			nacionalidades="Argentino";
 			break;

 		case "e":
 			nacionalidades="Extranjero";
 			break;

 		case "n":
 			nacionalidades="Nacionalizado";
 			break;
 	}

 	document.getElementById('Nacionalidad').value=nacionalidades;

}
