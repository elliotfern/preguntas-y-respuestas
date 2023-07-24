class Juego {
  constructor() {
    // aqui hay que poner las propiedades del juego (elementos de pantalla)
    // contador de vidas
    // colision entre personaje y preguntas
    // creamos el personaje del juego, new BugsBunny();
    this.bugsBunny = new BugsBunny();

    // cada nivel tiene sus propiedades - pero esto no se como hacerlo por ahora
    this.cuadroPregunta = new Pregunta();
    this.cuadroRespuestas = new Respuesta();
  }

  // métodos
  // 1 - accion: gameloop - bucle de juego

  juegoLoop = () => {
    // todo el movimiento del juego va aqui
    // console.log("prueba del loop"); - funciona
    requestAnimationFrame(this.juegoLoop);
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
