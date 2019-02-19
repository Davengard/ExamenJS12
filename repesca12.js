

var cuenta= prompt("Que quieres? suma, o multiplicacion?");  //esta es la variable de la cuenta que tienes que hacer

repetimos=1;

while(repetimos){			//creamos un while para que el juego se repita hasta que queramos

var puntos=0;				//Puntos es el contador de puntos, empieza en 0, obviamente


switch(cuenta)				//creamos un switch para hacer las operaciones, despliega el switch para mas informacion
{
	case 'suma':

		/*------------------SUMA UNO-------------*/ //Creamos una var para la cuenta y dentro un if para hacer la operacion
		var c1= prompt("1+1?");							
			if(c1=="2"){							//En esta linea decimos que la variable de arriba tiene que dar 2 en este caso
				puntos=puntos+10;					//Con esto conseguimos que, en este caso, si acierta, se lleve 10 puntitos
				alert('RESPUESTA CORRECTA, llevas '+ puntos +' puntos');	//Aqui hacemos que se lleve una alerta para saber si acerto o no y cuantos puntos tiene	
		
		}
			else{												//En cambio si la solucion es erronea, nos saltara una alerta que nos dira que nos hemos equivocado,pero no tenemos que rendirnos
				alert("JOBE, que mal, pero no te rindas");
		}
		
		/*------------------SUMA DOS-------------*/						//Y es asi en el resto del switch, no cabia nada mas, solo que case pasa a ser multiplicacion y las variables
		var c2= prompt("2+2+2");
			if(c2=="6"){
				puntos=puntos+10;
				alert('RESPUESTA CORRECTA, llevas '+ puntos +' puntos');	

		}
			else{
				alert("JOBE, que mal, pero no te rindas");
		}
		/*------------------SUMA TRES-------------*/

		var c3= prompt("2+3+5");
			if(c3=="10"){
				puntos=puntos+10;	
				alert('RESPUESTA CORRECTA, llevas '+ puntos +' puntos');	
		}
			else{
				alert("JOBE, que mal, pero no te rindas");
		}

		
	break;
	case 'multiplicacion':
		/*------------------MULTIPLICACIÓN UNO-------------*/
		var m1= prompt("2*5");
			if(m1=="10"){
				puntos=puntos+10;	
				alert('RESPUESTA CORRECTA, llevas '+ puntos +' puntos');	
		
		}
			else{
				alert("JOBE, que mal, pero no te rindas");
		}
		/*------------------MULTIPLICACIÓN DOS-------------*/
		var m2= prompt("5*5");
			if(m2=="25"){
				puntos=puntos+10;
				alert('MUY BIEN, llevas '+ puntos +' puntos');	

		}
			else{
				alert("UPS, sigue intentandolo");
		}
		/*------------------MULTIPLICACIÓN TRES-------------*/
		var m3= prompt("3*3");
			if(m3=="9"){
				puntos=puntos+10;
				alert('MUY BIEN, llevas '+ puntos +' puntos');	

		}
			else{
				alert("UPS, sigue intentandolo");
		}
	
	break;
	default:
				alert("Perdon, no te entendí");
	break;
};


var repetimos= confirm('Repetimos o prefieres ver tus resultados? si es asi, pulsa en cancelar');	//con esto conseguimos que el proceso se reinicie o cancele

}

function pulsa () {					//Esta funcion es para al hacer click en el boton reiniciar la pagina sin necesidad de darle al circulo o f5
	document.location.reload();

}


document.write('<br>');			//Un <br> para separar las cosas, no tiene mas ciencia

	
	if (puntos==30) {																		//Este if es para que si consigues 30 puntos, te salga una imagen que te de las felicitaciones, si no conseguiste esos puntos, te dice que te esfuerces
	document.write('<img src="meme12.jpg" height="300px" width="375px" float:left;>');

}
	else{
		document.write('tienes '+puntos+ ' puntos, esfuerzate un poco mas!!!')
	}

	document.write('<br>');


document.write('<br>');

document.write('<button onclick="pulsa()">'+'Reinicia la página si quieres'+' </button>');		//Aqui ponemos el boton para que salga en pantalla

