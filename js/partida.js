class Partida {
  constructor(
    numIndicePregunta,
    partidas,
    vidas,
    win,
    nombre,
    personaje,
    nivel
  ) {
    // propiedades
    this.numIndicePregunta = numIndicePregunta;
    this.contadorPartidas = partidas;
    this.contadorVidas = vidas;
    this.contadorPartidasWin = win;
    this.nombre = nombre;
    this.personaje = this.personaje;
    this.nivel = nivel;

    // generamos los elementos de la pantalla juego: contador, pregunta, respuestas, cuadro tema y personaje
    this.contador = new Contador(
      this.contadorPartidas,
      this.contadorVidas,
      this.contadorPartidasWin,
      this.nombre
    );

    this.cuadroTema = new Tema(numIndicePregunta);
    this.cuadroPregunta = new Pregunta(numIndicePregunta);

    // generamos las respuesta, que van a ser 4 objetos
    this.respuesta1 = new Respuesta(numIndicePregunta, 0, nivel);
    this.respuesta2 = new Respuesta(numIndicePregunta, 1, nivel);
    this.respuesta3 = new Respuesta(numIndicePregunta, 2, nivel);
    this.respuesta4 = new Respuesta(numIndicePregunta, 3, nivel);

    // creamos el personaje del juego, new BugsBunny();
    this.bugsBunny = new BugsBunny(personaje);
  }
}
