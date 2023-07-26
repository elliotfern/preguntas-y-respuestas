class Partida {
  constructor(numIndicePregunta, partidas, vidas, win, nombre) {
    // propiedades
    this.numIndicePregunta = numIndicePregunta;
    this.contadorPartidas = partidas;
    this.contadorVidas = vidas;
    this.contadorPartidasWin = win;
    this.nombre = nombre;

    this.contador = new Contador(
      this.contadorPartidas,
      this.contadorVidas,
      this.contadorPartidasWin,
      this.nombre
    );

    this.cuadroTema = new Tema(numIndicePregunta);

    // creamos el personaje del juego, new BugsBunny();
    this.bugsBunny = new BugsBunny();
    this.cuadroPregunta = new Pregunta(numIndicePregunta);

    // generamos las respuesta, que van a ser 4 objetos
    this.respuesta1 = new Respuesta(numIndicePregunta, 0);
    this.respuesta2 = new Respuesta(numIndicePregunta, 1);
    this.respuesta3 = new Respuesta(numIndicePregunta, 2);
    this.respuesta4 = new Respuesta(numIndicePregunta, 3);
  }
}
