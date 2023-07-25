class Pregunta {
  constructor(preguntaIndice) {
    // propiedades
    this.randomPreguntaIndice = preguntaIndice;

    // Crear un nuevo elemento div
    this.node = document.createElement("div");
    // guardar en propiedad respuesta correcta - comparar la repsuesta con la que estoy colisionando es el valor de mi respuesta

    // Establecer algún contenido para el div
    this.node.textContent = preguntas[this.randomPreguntaIndice]["pregunta"];
    // guardar en propiedad de numero de respuesta correcta
    // cuando se hace colision , esa respuestacorrecta va a tener un numero diferente

    // Agregar el div al contenedor
    juegoNode.append(this.node);
    console.log(this.node);

    // Estilizar el div (opcional)
    this.node.style.backgroundColor = "chocolate";
    this.node.style.padding = "10px";
    this.node.style.border = "1px solid darkblue";
    this.node.style.textAlign = "center";
    this.node.style.fontSize = "27px";
    this.node.style.fontWeight = "bold";

    //tamaños y posicion del div de la pregunta
    this.x = 100; // eje X;
    this.y = pantallaJuegoNode.offsetHeight - 90; // eje y ;
    this.w = pantallaJuegoNode.offsetWidth - 200; // ancho
    this.h = 50; // alto

    // ajustar tamaños y posicion inicial
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  // metodos
}
