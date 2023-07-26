class Juego {
  constructor() {
    this.contadorPartidas = 0; // Inicializamos el contador en 0
    this.numerosAleatorios = []; // Array para almacenar las preguntas aleatorias
    this.iniciarPartida();
  }

  // métodos de la clase Juego:
  randomEligirPregunta = () => {
    // random - elegir el tema de las preguntas
    const randomPregunta = Math.floor(Math.random() * 4) + 1;
    const preguntasConTema = preguntas.filter(
      (pregunta) => pregunta.tema === randomPregunta
    );

    // Si hay preguntas con el tema aleatorio seleccionado
    const indicePreguntaAleatoria = Math.floor(
      Math.random() * preguntasConTema.length
    );

    if (this.numerosAleatorios.includes(indicePreguntaAleatoria)) {
      return this.randomEligirPregunta();
    } else {
      this.numerosAleatorios.push(indicePreguntaAleatoria); // Guardar el número aleatorio en el array
      return indicePreguntaAleatoria;
    }
  };

  iniciarPartida() {
    // Creamos una nueva instancia de Partida y aumentamos el contador
    this.preguntaAleatoria = this.randomEligirPregunta(); // necesito este valor para poderlo usar en los otros métodos
    this.partida = new Partida(this.preguntaAleatoria);

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
          this.partidaWin();
        }
      }
    });
  };

  partidaWin = () => {
    this.partida.bugsBunny.node.style.display = "none";
    this.partida.respuesta1.node.style.display = "none";
    this.partida.respuesta2.node.style.display = "none";
    this.partida.respuesta3.node.style.display = "none";
    this.partida.respuesta4.node.style.display = "none";

    // Verificar si el contador ha llegado a 10 > HAS GANADO !
    if (this.contadorPartidas === 10) {
      gameWin();
    } else {
      this.contadorPartidas++;
      this.iniciarPartida();
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
      this.partida.bugsBunny.node.style.display = "none";
      this.partida.respuesta1.node.style.display = "none";
      this.partida.respuesta2.node.style.display = "none";
      this.partida.respuesta3.node.style.display = "none";
      this.partida.respuesta4.node.style.display = "none";
      this.contadorPartidas++;
      this.iniciarPartida(); // Reiniciamos el juego cuando el div llega al final
    } else {
      // Continuamos el bucle del juego

      // Verificar si el contador ha llegado a 3 para detener el juego
      if (this.contadorPartidas >= 3) {
        gameOver();
      } else {
        requestAnimationFrame(this.juegoLoop);
      }
    }
  };
}

// planificación del juego

// propiedades
// personaje >> dimensiones y posicion (x, y, w, h)
// las cajas con la pregunta
// las cajas con las respuestas

// metodos
// hay que hacer el efecto random para el reparto de los temas (4 tematicas de preguntas)
// hay que crear el movimiento del personaje que se moverá hasta la carta correcta
// controlar de vidas
// controlar colisiones - resta vidas
// gameover > te has quedado sin las vidas /se pierde.
// gameover > has acertado todas las preguntas
//incrementar puntuacion
