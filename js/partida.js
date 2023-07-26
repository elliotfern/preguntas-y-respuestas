class Partida {
  constructor(numIndicePregunta) {
    // propiedades
    this.numIndicePregunta = numIndicePregunta;

    // creamos el personaje del juego, new BugsBunny();
    this.bugsBunny = new BugsBunny();

    // cada nivel tiene sus propiedades - pero esto no se como hacerlo por ahora
    this.cuadroPregunta = new Pregunta(numIndicePregunta);

    // generamos las respuesta, que van a ser 4 objetos
    this.respuesta1 = new Respuesta(numIndicePregunta, 0);
    this.respuesta2 = new Respuesta(numIndicePregunta, 1);
    this.respuesta3 = new Respuesta(numIndicePregunta, 2);
    this.respuesta4 = new Respuesta(numIndicePregunta, 3);
    // tengo que crear 4 respuesta - objeto 1, objeto 2, objeto 3, objeto 4
  }

  collisionPreguntaCorrecta = (indice) => {
    const respuestaCorrecta = preguntas[this.numIndicePregunta]["respuesta"];
    const respuestas = [
      this.respuesta1,
      this.respuesta2,
      this.respuesta3,
      this.respuesta4,
    ];

    respuestas.forEach((respuesta, i) => {
      if (
        this.bugsBunny.x < respuesta.x + respuesta.w &&
        this.bugsBunny.x + this.bugsBunny.w > respuesta.x &&
        this.bugsBunny.y < respuesta.y + respuesta.h &&
        this.bugsBunny.y + this.bugsBunny.h > respuesta.y
      ) {
        if (respuestaCorrecta === respuesta.posicionCaja) {
          console.log(`has llegado a la respuesta correcta ${i}`);
          console.log(respuesta.posicionCaja);
          respuesta.node.style.backgroundColor = "blue";
          this.partidaWin();
        }
      }
    });
  };

  partidaWin = () => {
    console.log("has acertado todas las preguntas");
  };
}
