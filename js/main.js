var rango = _.range(1,76);
var intervalo;
var contadorBolas=75;
const cartonJugador = rango.slice(0, 75);
const numeracionCarton = _.range(1,16);
var otroContador=0;
var arregloHistorial = [];

function crearCartonHTML(selector,array){ 
  let parent = document.querySelector(`.${selector}`)
  for(e of array)
  {
  let divcarton = document.createElement('div');
  divcarton.className = 'numero n'+e;
  divcarton.textContent = e;
  parent.appendChild(divcarton);
  console.log(divcarton);
  }
}

function crearNumeracionHTML(selector,array){ 
  let padre = document.querySelector(`.${selector}`)	  
  for(e of array)
  {
  let divcarton = document.createElement('div');
  divcarton.className = 'numeracion n'+e;
  divcarton.textContent = e;
  padre.appendChild(divcarton);
  console.log(divcarton);
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
  otroContador+=1;
  if(rango.length>0){
      //Genera un número aleatorio que representará la bola.
      let bola = Math.floor(Math.random() * rango.length);
      //asigna el valor de la posición del arreglo rango, (que es la bola a la vez).
      bola = rango[bola];
      _.pull(rango,bola);
      console.log(rango);

     
      //Muestra el valor de la bola en el id #bola
      let divbola = document.querySelector('#bola');
      //console.log(divbola);
      //Muestra el valor de la bolita en el id #bola
      divbola.textContent = bola;
    

       llenarHistorial(bola);

      let numero = document.querySelectorAll(`.n${bola}`);
      // console.log("cantidad de elementos"+numero.length);
      for (var i = 0; i < numero.length; ++i) {
          numero[i].classList.add('tachado');
      }
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

function llenarHistorial(b){
    
    //console.log(capturaBola);
 let divbolita = document.querySelector("#bolita");
 let divbolita1 = document.querySelector("#bolita1");
 let divbolita2 = document.querySelector("#bolita2");
 let divbolita3 = document.querySelector("#bolita3");

arregloHistorial.unshift(b);

divbolita.textContent = arregloHistorial[0];
divbolita1.textContent = arregloHistorial[1];
divbolita2.textContent = arregloHistorial[2];
divbolita3.textContent = arregloHistorial[3];

}

function automatizarPlay(){
  au=document.getElementById("sonido");
  sonar("play.mp3");
  document.getElementById("barraEstado").innerHTML = "EN JUEGO";
  intervalo = setInterval(sacarBola,5000);
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
         
}