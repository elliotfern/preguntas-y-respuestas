// * VARIABLES GLOBALES *

// botones
const btnStartNode = document.querySelector("#btn-start");
const btnRestartNode = document.querySelector("#btn-reiniciar");
const btnJuegoNuevo = document.querySelector("#btn-juegoNuevo");

const btnBugs = document.querySelector("#btnBugs");
const btnCoyote = document.querySelector("#btnCoyote");
const btnPiolin = document.querySelector("#btnPiolin");
const btnDemonio = document.querySelector("#btnDemonio");

// input
const inputNode = document.querySelector("#input-usuario");

// pantallas
const pantallaInicioNode = document.querySelector("#pantalla-inicio");
const pantallaJuegoNode = document.querySelector("#pantalla-juego");
const pantallaFinNode = document.querySelector("#pantalla-fin");
const pantallaFinWinNode = document.querySelector("#pantalla-fin-win");

// nodo juego
const juegoNode = document.querySelector("#juego");

// objeto juego
let juegoObj = "";

// recoger el nombre del usuario
let nombre = "";
btnStartNode.addEventListener("click", function () {
  nombre = inputNode.value;
});

// botones personajes
// bus bunny
btnBugs.addEventListener("click", function () {
  // Cambiar el color del botón cuando se hace clic
  btnBugs.classList.toggle("active");

  // Generar la variable que se enviará después
  if (btnBugs.classList.contains("active")) {
    personaje = 1;
  } else {
    personaje = 0;
  }
});

// coyote
btnCoyote.addEventListener("click", function () {
  // Cambiar el color del botón cuando se hace clic
  btnCoyote.classList.toggle("active");

  // Generar la variable que se enviará después
  if (btnCoyote.classList.contains("active")) {
    personaje = 2;
  } else {
    personaje = 0;
  }
});

// piolin
btnPiolin.addEventListener("click", function () {
  // Cambiar el color del botón cuando se hace clic
  btnPiolin.classList.toggle("active");

  // Generar la variable que se enviará después
  if (btnPiolin.classList.contains("active")) {
    personaje = 3;
  } else {
    personaje = 0;
  }
});

// demonio
btnDemonio.addEventListener("click", function () {
  // Cambiar el color del botón cuando se hace clic
  btnDemonio.classList.toggle("active");

  // Generar la variable que se enviará después
  if (btnDemonio.classList.contains("active")) {
    personaje = 4;
  } else {
    personaje = 0;
  }
});

// * FUNCIONES DE MANIPULACIÓN DE ESTADOS *

const startScreen = () => {
  pantallaInicioNode.style.display = "flex";
  pantallaFinWinNode.style.display = "none";
  pantallaFinNode.style.display = "none";
  pantallaJuegoNode.style.display = "none";
};

const startGame = () => {
  pantallaInicioNode.style.display = "none";
  pantallaFinWinNode.style.display = "none";
  pantallaFinNode.style.display = "none";
  pantallaJuegoNode.style.display = "flex";

  // aqui queremos que el juego inicie. Hay que crear una clase que controle TODO el juego. Cuando el juego termine, lo podremos reiniciar, creando un nuevo objeto de la clase juego.

  // pendiente crear un nuevo objeto de juego y iniciar el bucle.
  juegoObj = new Juego(nombre, personaje);
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
btnRestartNode.addEventListener("click", startScreen);
btnJuegoNuevo.addEventListener("click", startScreen);

// movimiento del bugs bunny
// Añadir un event listener para escuchar los eventos de teclado
document.addEventListener("keydown", (event) => {
  juegoObj.partida.bugsBunny.movimientoBugs(event);
});
