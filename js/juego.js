class Juego {
  constructor() {
    this.contadorPartidas = 0; // Inicializamos el contador en 0
    this.iniciarPartida();
  }

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
    console.log("indice random ", indicePreguntaAleatoria);
    return indicePreguntaAleatoria;
  };

  iniciarPartida() {
    // Creamos una nueva instancia de Partida y aumentamos el contador
    this.partida = new Partida(this.randomEligirPregunta());
    this.contadorPartidas++;
    console.log(`Partida ${this.contadorPartidas} iniciada.`);
    this.juegoLoop();
  }

  juegoLoop = () => {
    // todo el movimiento del juego va aqui
    this.partida.respuesta1.efectoGravedadRespuestas();
    this.partida.respuesta2.efectoGravedadRespuestas();
    this.partida.respuesta3.efectoGravedadRespuestas();
    this.partida.respuesta4.efectoGravedadRespuestas();

    this.partida.collisionPreguntaCorrecta(
      this.partida.indicePreguntaAleatoria
    );

    if (this.partida.respuesta1.haLlegadoAlFinal === true) {
      console.log("El div ha llegado al final. Reiniciar el juego.");
      this.iniciarPartida(); // Reiniciamos el juego cuando el div llega al final
    } else {
      // Continuamos el bucle del juego

      // Verificar si el contador ha llegado a 3 para detener el juego
      if (this.contadorPartidas >= 4) {
        console.log("El juego ha terminado. Se alcanzó el contador máximo.");
        gameOver();
        console.log(`stop partidas >>> ${this.contadorPartidas} iniciada.`);
      } else {
        requestAnimationFrame(this.juegoLoop);
        console.log(
          `iniciar partida >>> Partida ${this.contadorPartidas} iniciada.`
        );
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
