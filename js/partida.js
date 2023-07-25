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

    // Si hay preguntas con el tema aleatorio seleccionado
    const indicePreguntaAleatoria = Math.floor(
      Math.random() * preguntasConTema.length
    );

    // cada nivel tiene sus propiedades - pero esto no se como hacerlo por ahora
    this.cuadroPregunta = new Pregunta(indicePreguntaAleatoria);

    // generamos las respuesta, que van a ser 4 objetos
    this.respuesta1 = new Respuesta(indicePreguntaAleatoria, 1);
    this.respuesta2 = new Respuesta(indicePreguntaAleatoria, 2);
    this.respuesta3 = new Respuesta(indicePreguntaAleatoria, 3);
    this.respuesta4 = new Respuesta(indicePreguntaAleatoria, 4);
    // tengo que crear 4 respuesta - objeto 1, objeto 2, objeto 3, objeto 4
  }
}
