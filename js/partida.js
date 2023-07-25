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
    this.respuesta1 = new Respuesta(indicePreguntaAleatoria, 0);
    this.respuesta2 = new Respuesta(indicePreguntaAleatoria, 1);
    this.respuesta3 = new Respuesta(indicePreguntaAleatoria, 2);
    this.respuesta4 = new Respuesta(indicePreguntaAleatoria, 3);
    // tengo que crear 4 respuesta - objeto 1, objeto 2, objeto 3, objeto 4

    this.collisionPreguntaCorrecta(indicePreguntaAleatoria);
  }

  // colisiones // perdon por todos los console.log pero necesitaba verificar los datos
  collisionPreguntaCorrecta = (indice) => {
    let respuestaCorrecta = preguntas[indice]["respuesta"];
    // console.log(respuestaCorrecta); // funciona
    // console.log(indice); // funciona

    if (respuestaCorrecta === this.respuesta1.posicionCaja) {
      console.log("respuesta correcta y indice COINCIDE");
      if (
        this.bugsBunny.x < this.respuesta1.x + this.respuesta1.w &&
        this.bugsBunny.x + this.bugsBunny.w > this.respuesta1.x &&
        this.bugsBunny.y < this.respuesta1.y + this.respuesta1.h &&
        this.bugsBunny.y + this.bugsBunny.h > this.respuesta1.y
      ) {
        // Collision detected!
        //this.gameOver();
        console.log("has llegado a la respuesta correcta - 0");
        this.partidaWin();
      }
    } else if (respuestaCorrecta === this.respuesta2.posicionCaja) {
      console.log("respuesta correcta y indice COINCIDE");
      if (
        this.bugsBunny.x < this.respuesta2.x + this.respuesta2.w &&
        this.bugsBunny.x + this.bugsBunny.w > this.respuesta2.x &&
        this.bugsBunny.y < this.respuesta2.y + this.respuesta2.h &&
        this.bugsBunny.y + this.bugsBunny.h > this.respuesta2.y
      ) {
        // Collision detected!
        //this.gameOver();
        console.log("has llegado a la respuesta correcta 1");
        this.partidaWin();
      }
    } else if (respuestaCorrecta === this.respuesta3.posicionCaja) {
      console.log("respuesta correcta y indice COINCIDE");
      if (
        this.bugsBunny.x < this.respuesta3.x + this.respuesta3.w &&
        this.bugsBunny.x + this.bugsBunny.w > this.respuesta3.x &&
        this.bugsBunny.y < this.respuesta3.y + this.respuesta3.h &&
        this.bugsBunny.y + this.bugsBunny.h > this.respuesta3.y
      ) {
        // Collision detected!
        //this.gameOver();
        console.log("has llegado a la respuesta correcta 2");
        this.partidaWin();
      }
    } else if (respuestaCorrecta === this.respuesta4.posicionCaja) {
      console.log("respuesta correcta y indice COINCIDE");
      if (
        this.bugsBunny.x < this.respuesta4.x + this.respuesta4.w &&
        this.bugsBunny.x + this.bugsBunny.w > this.respuesta4.x &&
        this.bugsBunny.y < this.respuesta4.y + this.respuesta4.h &&
        this.bugsBunny.y + this.bugsBunny.h > this.respuesta4.y
      ) {
        // Collision detected!
        //this.gameOver();
        console.log("has llegado a la respuesta correcta 3");
        this.partidaWin();
      }
    }
  };

  partidaWin = () => {
    console.log("has acertado todas las preguntas");
  };
}
