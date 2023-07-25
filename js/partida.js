class Partida {
  constructor() {
    // propiedades
    // creamos el personaje del juego, new BugsBunny();
    this.bugsBunny = new BugsBunny();

    // random - elegir el tema de las preguntas

    const randomPregunta = Math.floor(Math.random() * 4) + 1;

    const preguntasConTema = preguntas.filter(
      (pregunta) => pregunta.tema === randomPregunta
    );

    if (preguntasConTema.length > 0) {
      // Si hay preguntas con el tema aleatorio seleccionado
      const indicePreguntaAleatoria = Math.floor(
        Math.random() * preguntasConTema.length
      );
      const preguntaAleatoria = preguntasConTema[indicePreguntaAleatoria];

      console.log(
        `Pregunta aleatoria (Tema ${randomPregunta}): ${preguntaAleatoria.pregunta}`
      );
      console.log("Opciones:");
      preguntaAleatoria.opciones.forEach((opcion) => console.log(opcion));
    } else {
      console.log(`No hay preguntas con el tema ${randomPregunta}.`);
    }

    // cada nivel tiene sus propiedades - pero esto no se como hacerlo por ahora
    this.cuadroPregunta = new Pregunta();
    this.respuesta = new Respuesta();
  }
}
