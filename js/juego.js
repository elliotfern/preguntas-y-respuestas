class Juego {
  constructor() {
    this.contadorPartidas = 0; // Inicializamos el contador en 0
    this.iniciarPartida();
  }

  iniciarPartida() {
    // Creamos una nueva instancia de Partida y aumentamos el contador
    this.partida = new Partida();
    this.contadorPartidas++;

    console.log(`Partida ${this.contadorPartidas} iniciada.`);

    // Verificar si el contador ha llegado a 3 para detener el juego
    if (this.contadorPartidas === 4) {
      console.log("El juego ha terminado. Se alcanzó el contador máximo.");
      gameOver();
    }
    requestAnimationFrame(this.juegoLoop);
  }

  juegoLoop = () => {
    // todo el movimiento del juego va aqui
    this.partida.respuesta.efectoGravedadRespuestas();

    if (this.partida.respuesta.haLlegadoAlFinal) {
      console.log("El div ha llegado al final. Reiniciar el juego.");
      this.iniciarPartida(); // Reiniciamos el juego cuando el div llega al final
    } else {
      // Continuamos el bucle del juego
      requestAnimationFrame(this.juegoLoop);
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
