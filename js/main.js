let rango = _.range(1,76);
let intervalo;
let contadorBolas=75;
const cartonJugador = rango.slice(0, 75);
const numeracionCarton = _.range(1,17);

function crearCartonHTML(selector,array){ 
  let parent = document.querySelector(`.${selector}`)
  for(e of array){
      let divcarton = document.createElement('div');
      divcarton.className = 'numero n'+e;
      divcarton.textContent = e;
      parent.appendChild(divcarton);
      console.log(divcarton);
  }
}

function crearNumeracionHTML(selector,array){ 
  let padre = document.querySelector(`.${selector}`)	  
  for(e of array){
      let divcarton = document.createElement('div');
      divcarton.className = 'numeracion no'+e;
      divcarton.textContent = e;
      padre.appendChild(divcarton);
  }
}
crearCartonHTML('cartonJugador',cartonJugador);
crearNumeracionHTML('numeracion',numeracionCarton);

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
      verificar_ganador();
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
  document.getElementById("barraEstado").innerHTML = "EN JUEGO";
  intervalo = setInterval(sacarBola,2000);
}			

function detenerPlay(){
  clearInterval(intervalo);
  au=document.getElementById("sonido");
  document.getElementById("barraEstado").innerHTML = "PAUSA";
  sonar("pausar.mp3");
}

function sonar(audio){
  au.src="sonidos/"+audio;
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
        alert(`Ha ganado el jugador No.${carr}`);
        detenerPlay();
        break;
      }   
    }
}