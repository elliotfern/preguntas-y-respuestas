// * VARIABLES GLOBALES *

// botones
const btnStartNode = document.querySelector("#btn-start");
const btnRestartNode = document.querySelector("#btn-reiniciar");

// pantallas
const pantallaInicioNode = document.querySelector("#pantalla-inicio");
const pantallaJuegoNode = document.querySelector("#pantalla-juego");
const pantallaFinNode = document.querySelector("#pantalla-fin");
const pantallaFinWinNode = document.querySelector("#pantalla-fin-win");

// nodo juego
const juegoNode = document.querySelector("#juego");

// objeto juego
let juegoObj = "";

// * FUNCIONES DE MANIPULACIÓN DE ESTADOS *
const startGame = () => {
  pantallaInicioNode.style.display = "none";
  pantallaFinWinNode.style.display = "none";
  pantallaFinNode.style.display = "none";
  pantallaJuegoNode.style.display = "flex";

  // console.log("Iniciando el juego. Llamo la función startGame");

  // aqui queremos que el juego inicie. Hay que crear una clase que controle TODO el juego. Cuando el juego termine, lo podremos reiniciar, creando un nuevo objeto de la clase juego.

  // pendiente crear un nuevo objeto de juego y iniciar el bucle.
  juegoObj = new Juego();
  juegoObj.juegoLoop();
};

const gameOver = () => {
  pantallaFinNode.style.display = "flex";
  pantallaJuegoNode.style.display = "none";
};

const gameWin = () => {
  pantallaFinWinNode.style.display = "flex";
  pantallaJuegoNode.style.display = "none";
};

// * ADD EVENT LISTENERS *
btnStartNode.addEventListener("click", startGame);

// movimiento del bugs bunny
// Añadir un event listener para escuchar los eventos de teclado
document.addEventListener("keydown", (event) => {
  juegoObj.partida.bugsBunny.movimientoBugs(event);
});
