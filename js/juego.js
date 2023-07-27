class Juego {
  constructor(nombre, personaje, nivel) {
    this.nombre = nombre;
    this.personaje = personaje;
    this.nivel = nivel;
    this.contadorPartidas = 1; // Inicializamos el contador en 1
    this.contadorVidas = 3; // Inicializamos el contador en 3
    this.contadorPartidasWin = 0; // Inicializamos el contador en 0
    this.numerosAleatorios = []; // Array para almacenar las preguntas aleatorias
    this.iniciarPartida();
    this.gameOn = true;
  }

  // métodos de la clase Juego:

  generarNumRandom = () => {
    const longitudArray = preguntas.length;
    const indicePreguntaAleatoria = Math.floor(Math.random() * longitudArray);
    return indicePreguntaAleatoria;
  };

  randomEligirPregunta = () => {
    const indicePreguntaAleatoria = this.generarNumRandom();
    if (this.numerosAleatorios.includes(indicePreguntaAleatoria)) {
      this.randomEligirPregunta();
    } else {
      return indicePreguntaAleatoria;
    }
  };

  iniciarPartida() {
    // Creamos una nueva instancia de Partida y aumentamos el contador
    this.preguntaAleatoria = this.randomEligirPregunta(); // necesito este valor para poderlo usar en los otros métodos
    this.partida = new Partida(
      this.preguntaAleatoria,
      this.contadorPartidas,
      this.contadorVidas,
      this.contadorPartidasWin,
      this.nombre,
      this.personaje,
      this.nivel
    );

    this.juegoLoop();
  }

  collisionPreguntaCorrecta = (indice) => {
    const respuestaCorrecta = preguntas[this.preguntaAleatoria]["respuesta"];
    const respuestas = [
      this.partida.respuesta1,
      this.partida.respuesta2,
      this.partida.respuesta3,
      this.partida.respuesta4,
    ];

    respuestas.forEach((respuesta, i) => {
      if (
        this.partida.bugsBunny.x < respuesta.x + respuesta.w &&
        this.partida.bugsBunny.x + this.partida.bugsBunny.w > respuesta.x &&
        this.partida.bugsBunny.y < respuesta.y + respuesta.h &&
        this.partida.bugsBunny.y + this.partida.bugsBunny.h > respuesta.y
      ) {
        if (respuestaCorrecta === respuesta.posicionCaja) {
          respuesta.node.style.backgroundColor = "blue";
          this.contadorPartidasWin++;
          this.partidaWin();
        }
      }
    });
  };

  partidaWin = () => {
    this.partida.bugsBunny.node.remove();
    this.partida.respuesta1.node.remove();
    this.partida.respuesta2.node.remove();
    this.partida.respuesta3.node.remove();
    this.partida.respuesta4.node.remove();

    // Verificar si el contador ha llegado a 10 PREGUNTAS CORRECTAS > HAS GANADO
    if (this.contadorPartidasWin === 10) {
      this.partida.bugsBunny.node.remove();
      this.partida.respuesta1.node.remove();
      this.partida.respuesta2.node.remove();
      this.partida.respuesta3.node.remove();
      this.partida.respuesta4.node.remove();
      this.gameOn = false;
      this.numerosAleatorios = [];
      gameWin();
    } else if (this.contadorPartidas === 20) {
      this.partida.bugsBunny.node.remove();
      this.partida.respuesta1.node.remove();
      this.partida.respuesta2.node.remove();
      this.partida.respuesta3.node.remove();
      this.partida.respuesta4.node.remove();
      this.gameOn = false;
      gameOver();
      this.numerosAleatorios = [];
    } else {
      this.contadorPartidas++;
      this.preguntaAleatoria = this.randomEligirPregunta(); // necesito este valor para poderlo usar en los otros métodos
      this.partida = new Partida(
        this.preguntaAleatoria,
        this.contadorPartidas,
        this.contadorVidas,
        this.contadorPartidasWin,
        this.nombre,
        this.personaje,
        this.nivel
      );
    }
  };

  juegoLoop = () => {
    // todo el movimiento del juego va aqui
    this.partida.respuesta1.efectoGravedadRespuestas();
    this.partida.respuesta2.efectoGravedadRespuestas();
    this.partida.respuesta3.efectoGravedadRespuestas();
    this.partida.respuesta4.efectoGravedadRespuestas();

    this.collisionPreguntaCorrecta(this.preguntaAleatoria);

    if (this.partida.respuesta1.haLlegadoAlFinal === true) {
      this.partida.bugsBunny.node.remove();
      this.partida.respuesta1.node.remove();
      this.partida.respuesta2.node.remove();
      this.partida.respuesta3.node.remove();
      this.partida.respuesta4.node.remove();
      this.contadorVidas--;
      this.contadorPartidas++;
      this.gameOn = true;
      this.iniciarPartida(); // Reiniciamos el juego cuando el div llega al final
    } else {
      // Continuamos el bucle del juego

      // Verificar si el contador ha llegado a 3 para detener el juego
      if (this.contadorVidas === 0) {
        this.partida.bugsBunny.node.remove();
        this.partida.respuesta1.node.remove();
        this.partida.respuesta2.node.remove();
        this.partida.respuesta3.node.remove();
        this.partida.respuesta4.node.remove();
        this.gameOn = false;
        this.numerosAleatorios = [];
        gameOver();
      } else {
        if (this.gameOn === true) {
          requestAnimationFrame(this.juegoLoop);
        }
      }
    }
  };
}
