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
    this.indicePreguntaAleatoria = indicePreguntaAleatoria;

    // cada nivel tiene sus propiedades - pero esto no se como hacerlo por ahora
    this.cuadroPregunta = new Pregunta(indicePreguntaAleatoria);

    // generamos las respuesta, que van a ser 4 objetos
    this.respuesta1 = new Respuesta(indicePreguntaAleatoria, 0);
    this.respuesta2 = new Respuesta(indicePreguntaAleatoria, 1);
    this.respuesta3 = new Respuesta(indicePreguntaAleatoria, 2);
    this.respuesta4 = new Respuesta(indicePreguntaAleatoria, 3);
    // tengo que crear 4 respuesta - objeto 1, objeto 2, objeto 3, objeto 4
  }
  collisionPreguntaCorrecta = (indice) => {
    const respuestaCorrecta = preguntas[indice]["respuesta"];
    const respuestas = [
      this.respuesta1,
      this.respuesta2,
      this.respuesta3,
      this.respuesta4,
    ];

    respuestas.forEach((respuesta, i) => {
      if (respuestaCorrecta === respuesta.posicionCaja) {
        if (
          this.bugsBunny.x < respuesta.x + respuesta.w &&
          this.bugsBunny.x + this.bugsBunny.w > respuesta.x &&
          this.bugsBunny.y < respuesta.y + respuesta.h &&
          this.bugsBunny.y + this.bugsBunny.h > respuesta.y
        ) {
          console.log(`has llegado a la respuesta correcta ${i}`);
          console.log(respuesta.node);
          respuesta.node1.style.backgroundColor = "blue";
          this.partidaWin();
          return;
        }
      }
    });
  };

  partidaWin = () => {
    console.log("has acertado todas las preguntas");
  };
}
