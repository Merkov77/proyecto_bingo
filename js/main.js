var rango = _.range(1,76);
var intervalo;
var contadorBolas=75;

const animateHeader = () => {
	let header = document.getElementsByTagName("header")[0]
	header.animate([{
		transform:"translate(0%, -100%)"
	},{
		transform:"translate(0%, 0%)"
	}], {duration: 1000, iterations:1})
}

const animarContador = (bola) => {
	bola.animate([{
		fontSize: "20px"
	},{
		fontSize: "50px"
	}],{duration:1000, iterations:1})
}

const crearNumeros = (destiny, n, classname) => {
	destiny = document.getElementsByClassName(destiny)[0]
	for (let x = 0; x < n; x++){
		let numero = document.createElement("div")
			numero.className = classname + (x + 1)
	

		if (classname ==="numeros n"){
			numero.animate([{
				transform: `scale(${0.01* -x})`, 
			},{
				transform: `scale(1)`, 
			}],{duration:1000, iterations:1})
		}

		let text = document.createTextNode((x+1))
		numero.appendChild(text)

		destiny.appendChild(numero)
	} 

}

const crearJugadores = destiny => { //Inputs
	destiny = document.getElementsByClassName(destiny)[0]
	let form = document.createElement("form")
	for (let x = 0; x < 15; x++){
		let input = document.createElement("input")
		input.setAttribute("type", "text")
		form.appendChild(input)
	}
	destiny.appendChild(form)
}

crearNumeros("numeracion", 15, "ng no") //NUMERACION GENERAL (jugadores) 15
crearNumeros("cartonJugador",75, "numeros n") //Numeros de ficha 0-75
crearJugadores("jugadores")

//Animaciones Activacion
animateHeader()

/* ----------------------------------------------------------------------------------*/

function contarTachado(){
  let totalJugador = document.querySelectorAll('.cartonJugador .tachado').length;
  console.log("este es el" + totalJugador);
  if(totalJugador==15){
      alert('FELICIDADES CARTON JUGADOR COMPLETADO');
  }
  if(totalCpu==15){
      alert('FELICIDADES CARTON CPU COMPLETADO');
  }
  console.log(totalJugador + ' - ' + totalCpu);
}



function sacarBola(){
  //Aqui se setean los mensajes al usuario
  document.getElementById("barraEstado").innerHTML = "";
  if(rango.length>0){
      //Genera un número aleatorio que representará la bola.
      let bola = Math.floor(Math.random() * rango.length);
      //asigna el valor de la posición del arreglo rango, (que es la bola a la vez).
      bola = rango[bola];
      _.pull(rango,bola);
      console.log(rango);
      //Muestra el valor de la bola en el id #bola
      let divbola = document.querySelector('#bola');
      //Muestra el valor de la bolita en el id #bola
      let divbolita = document.querySelector("#bolita");      
      divbola.textContent = bola;
      divbolita.textContent = bola;
      let numero = document.querySelectorAll(`.n${bola}`);
      // console.log("cantidad de elementos"+numero.length);
      for (var i = 0; i < numero.length; ++i) {
          numero[i].classList.add('tachado');
      }
      animarContador(divbola)
      verificar_ganador()
      au=document.getElementById("sonido");
      sonar("sacarbola.mp3");
      contadorBolas-=1;
      document.getElementById("mostrarFaltantes").innerHTML = contadorBolas;
  }
  else{
      au=document.getElementById("sonido");
      sonar("ganar.mp3");
      detenerPlay();
  }
}




function automatizarPlay(){
  au=document.getElementById("sonido");
  sonar("play.mp3");
  let barraEstado = document.getElementById("barraEstado")
  barraEstado.innerHTML = "EN JUEGO";
  intervalo = setInterval(sacarBola,2000);
}			

function detenerPlay(){
  clearInterval(intervalo);
  au=document.getElementById("sonido");
  let barraEstado = document.getElementById("barraEstado")
  barraEstado.innerHTML = "PAUSA";
  sonar("pausar.mp3");
}

function sonar(audio){
  au.src="./sonidos/"+audio;
  au.play();
}


function verificar_ganador(){
    let arr = [1,6,11,16,21,26,31,36,41,46,51,56,61,66,71];
    for(let i of arr){
      if(i==1 || i==6 || i==11){
        let carr = Math.trunc((i/4)+1);
      }
      else if(i==16 || i==21 || i==26 || i==31){
        let carr = Math.trunc(1/4);
      }
      else if(i==36 || i==41 || i==46 || i==51 || i==56 || i==61 || i==66 || i==71){
        let carr = Math.trunc((1/4)-1);
      }
      if ($(`.n${i}`).hasClass("tachado") && $(`.n${i+1}`).hasClass("tachado") && $(`.n${i+2}`).hasClass("tachado") && $(`.n${i+3}`).hasClass("tachado") && $(`.n${i+4}`).hasClass("tachado")){
        let carr = Math.trunc(i/4);
        let numero = document.querySelector(`.no${carr}`);
        numero.classList.add('tachado');
        alert(`Ha ganado el jugador No.${carr - 1}`);
        detenerPlay();
        break;
      }   
    }
}
