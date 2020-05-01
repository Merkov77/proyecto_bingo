var rango = _.range(1,76);
var intervalo;
var contadorBolas=75;
const cartonJugador = rango.slice(0, 75);
const numeracionCarton = _.range(1,16);
var otroContador=0;
var arregloHistorial = []; //Este es el arreglo que se usa en el historial.

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
  
}

crearCartonHTML('cartonJugador',cartonJugador);
crearNumeracionHTML('numeracion',numeracionCarton);

function contarTachado(){


  let totalJugador1 = document.querySelectorAll('.cartonJugador .jugador1').length;
  let totalJugador2 = document.querySelectorAll('.cartonJugador .jugador2').length;
  let totalJugador3 = document.querySelectorAll('.cartonJugador .jugador3').length;
  let totalJugador4 = document.querySelectorAll('.cartonJugador .jugador4').length;
  let totalJugador5 = document.querySelectorAll('.cartonJugador .jugador5').length;
  let totalJugador6 = document.querySelectorAll('.cartonJugador .jugador6').length;
  let totalJugador7 = document.querySelectorAll('.cartonJugador .jugador7').length;
  let totalJugador8 = document.querySelectorAll('.cartonJugador .jugador8').length;
  let totalJugador9 = document.querySelectorAll('.cartonJugador .jugador9').length;
  let totalJugador10 = document.querySelectorAll('.cartonJugador .jugador10').length;
  let totalJugador11 = document.querySelectorAll('.cartonJugador .jugador11').length;
  let totalJugador12 = document.querySelectorAll('.cartonJugador .jugador11').length;
  let totalJugador13 = document.querySelectorAll('.cartonJugador .jugador11').length;
  let totalJugador14 = document.querySelectorAll('.cartonJugador .jugador11').length;
  let totalJugador15 = document.querySelectorAll('.cartonJugador .jugador11').length;

  

  if(totalJugador1==5) {
      alert('FELICIDADES CARTON JUGADOR 1 COMPLETADO');
      detenerPlay();
/*
      for (i=0;i<=5;i++){
     let x = document.getElementById("numero n"+i).querySelectorAll(".pintarGanador");
        x[0].style.backgroundColor = "red";
*/
      }
  
   if(totalJugador2==5) {
      alert('FELICIDADES CARTON JUGADOR 2 COMPLETADO');    
       detenerPlay(); 
  }
   if(totalJugador3==5) {
      alert('FELICIDADES CARTON JUGADOR 3 COMPLETADO');    
       detenerPlay(); 

  }
   if(totalJugador4==5) {
      alert('FELICIDADES CARTON JUGADOR 4 COMPLETADO');    
       detenerPlay(); 
  }
   if(totalJugador5==5) {
      alert('FELICIDADES CARTON JUGADOR 5 COMPLETADO');    
       detenerPlay(); 
  }
   if(totalJugador6==5) {
      alert('FELICIDADES CARTON JUGADOR 6 COMPLETADO');    
       detenerPlay(); 
  }
   if(totalJugador7==5) {
      alert('FELICIDADES CARTON JUGADOR 7 COMPLETADO');   
       detenerPlay();  
  }
   if(totalJugador8==5) {
      alert('FELICIDADES CARTON JUGADOR 8 COMPLETADO');    
       detenerPlay(); 
  } 
   if(totalJugador9==5) {
      alert('FELICIDADES CARTON JUGADOR 9 COMPLETADO');    
      detenerPlay(); 
  }
   if(totalJugador10==5) {
      alert('FELICIDADES CARTON JUGADOR 10 COMPLETADO');    
      detenerPlay(); 
  }
   if(totalJugador11==5) {
      alert('FELICIDADES CARTON JUGADOR 11 COMPLETADO');    
      detenerPlay(); 
  }
   if(totalJugador12==5) {
      alert('FELICIDADES CARTON JUGADOR 12 COMPLETADO');    
      detenerPlay(); 
  }
   if(totalJugador13==5) {
      alert('FELICIDADES CARTON JUGADOR 13 COMPLETADO');    
      detenerPlay(); 
  }
   if(totalJugador14==5) {
      alert('FELICIDADES CARTON JUGADOR 14 COMPLETADO');    
      detenerPlay(); 
  }
   if(totalJugador15==5) {
      alert('FELICIDADES CARTON JUGADOR 15 COMPLETADO');   
      detenerPlay();  
      
  }
  
}


function sacarBola(){
    contarTachado();

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
    //  console.log("cantidad de elementos: "+numero.length);
      
      for (var i = 0; i < numero.length; ++i) {
        //Colocar un if que valide que jugador debe poner de acuerdo a la bolilla
        if(bola<=5){
          numero[i].classList.add('jugador1');
        }
        else if(bola<=10){
          numero[i].classList.add('jugador2');
        }
        else if(bola<=15){
          numero[i].classList.add('jugador3');
        }
        else if(bola<=20){
          numero[i].classList.add('jugador4');
        }
        else if(bola<=25){
          numero[i].classList.add('jugador5');
        }
        else if(bola<=30){
          numero[i].classList.add('jugador6');
        }
        else if(bola<=35){
          numero[i].classList.add('jugador7');
        }
        else if(bola<=40){
          numero[i].classList.add('jugador8');
        }
        else if(bola<=45){
          numero[i].classList.add('jugador9');
        }
        else if(bola<=50){
          numero[i].classList.add('jugador10');
        }
        else if(bola<=55){
          numero[i].classList.add('jugador11');
        }
        else if(bola<=60){
          numero[i].classList.add('jugador12');
        }
        else if(bola<=65){
          numero[i].classList.add('jugador13');
        }
        else if(bola<=70){
          numero[i].classList.add('jugador14');
        } 
        else{
          numero[i].classList.add('jugador15');
        }
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
  intervalo = setInterval(sacarBola,500);
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


const typed = new Typed('.typed', {

  stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
  startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
  smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 2000, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: true, // Mostrar cursor palpitanto
  cursorChar: '|', // Caracter para el cursor
  contentType: 'html', // 'html' o 'null' para texto sin formato
});






