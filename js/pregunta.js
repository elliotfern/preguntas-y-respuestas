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
    // cuando se hace colision , esa respuesta va a tener un numero diferente

    // Agregar el div al contenedor
    juegoNode.append(this.node);

    //tamaños y posicion del div de la pregunta
    this.x = 30; // eje X;
    this.y = pantallaJuegoNode.offsetHeight - 120; // eje y ;
    this.w = pantallaJuegoNode.offsetWidth - 100; // ancho
    this.h = 110; // alto

    // ajustar tamaños y posicion inicial
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    // Estilizar el div
    this.node.style.backgroundColor = "chocolate";
    this.node.style.padding = "5px";
    this.node.style.border = "1px solid darkblue";
    this.node.style.fontSize = "27px";
    this.node.style.fontWeight = "bold";
    this.node.style.borderRadius = "10px";
    this.node.style.display = "flex";
    this.node.style.justifyContent = "center";
    this.node.style.alignItems = "center";
    this.node.style.textAlign = "center";
  }
}
