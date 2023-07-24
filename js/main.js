// * VARIABLES GLOBALES *

// botones
const btnStartNode = document.querySelector("#btn-start");
const btnRestartNode = document.querySelector("#btn-reiniciar");

// pantallas
const pantallaInicioNode = document.querySelector("#pantalla-inicio");
const pantallaJuegoNode = document.querySelector("#pantalla-juego");
const pantallaFinNode = document.querySelector("#pantalla-fin");

// nodo juego
const juegoNode = document.querySelector("#juego");

// * FUNCIONES DE MANIPULACIÓN DE ESTADOS *
const startGame = () => {
  pantallaInicioNode.style.display = "none";
  pantallaJuegoNode.style.display = "flex";

  // console.log("Iniciando el juego. Llamo la función startGame");

  // aqui queremos que el juego inicie. Hay que crear una clase que controle TODO el juego. Cuando el juego termine, lo podremos reiniciar, creando un nuevo objeto de la clase juego.

  // pendiente crear un nuevo objeto de juego y iniciar el bucle.
  let juegoObj = new Juego();
  juegoObj.juegoLoop();
};

const gameOver = () => {
  pantallaFinNode.style.display = "flex";
  pantallaJuegoNode.style.display = "none";
};

// * ADD EVENT LISTENERS *
btnStartNode.addEventListener("click", startGame);

// movimiento del bugs bunny
// Añadir un event listener para escuchar los eventos de teclado
document.addEventListener("keydown", (event) => {
  this.juegoObj.partida.bugsBunny.movimientoBugs(event);
});
