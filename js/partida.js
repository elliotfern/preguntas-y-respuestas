class Partida {
  constructor() {
    // propiedades
    // creamos el personaje del juego, new BugsBunny();
    this.bugsBunny = new BugsBunny();

    // cada nivel tiene sus propiedades - pero esto no se como hacerlo por ahora
    this.cuadroPregunta = new Pregunta();
    this.respuesta = new Respuesta();
  }
}
