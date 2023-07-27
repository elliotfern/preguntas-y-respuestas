class Partida {
  constructor(numIndicePregunta, partidas, vidas, win, nombre, personaje) {
    // propiedades
    this.numIndicePregunta = numIndicePregunta;
    this.contadorPartidas = partidas;
    this.contadorVidas = vidas;
    this.contadorPartidasWin = win;
    this.nombre = nombre;
    this.personaje = this.personaje;

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
    this.respuesta1 = new Respuesta(numIndicePregunta, 0);
    this.respuesta2 = new Respuesta(numIndicePregunta, 1);
    this.respuesta3 = new Respuesta(numIndicePregunta, 2);
    this.respuesta4 = new Respuesta(numIndicePregunta, 3);

    // creamos el personaje del juego, new BugsBunny();
    this.bugsBunny = new BugsBunny(personaje);
  }
}
