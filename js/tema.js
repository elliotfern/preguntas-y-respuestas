class Tema {
  constructor(numIndicePregunta) {
    this.numIndicePregunta = numIndicePregunta;
    let temaPeliculaIndice0 = preguntas[numIndicePregunta].tema;

    if (temaPeliculaIndice0 === 1) {
      this.nombreTema = "Geografia";
      this.color = "blue";
    } else if (temaPeliculaIndice0 === 2) {
      this.nombreTema = "Historia";
      this.color = "cyan";
    } else if (temaPeliculaIndice0 === 3) {
      this.nombreTema = "TV y cine";
      this.color = "red";
    } else if (temaPeliculaIndice0 === 4) {
      this.nombreTema = "Deportes";
      this.color = "green";
    }

    // Añadir una propiedad para el límite inferior
    this.node = document.createElement("div");

    //tamaños y posicion del div de la pregunta
    this.x = 990; // eje X;
    this.y = 0; // eje y;
    this.w = 200; // ancho
    this.h = 50; // alto

    // ajustar tamaños y posicion inicial
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    this.node.style.padding = "10px";
    this.node.style.margin = "0px 30px 0px 0px";
    this.node.style.display = "flex";
    this.node.style.alignItems = "center";
    this.node.style.justifyContent = "center";
    this.node.style.fontSize = "27px";
    this.node.style.fontWeight = "bold";
    this.node.style.backgroundColor = `${this.color}`;
    this.node.style.color = "white";
    this.node.style.border = "1px solid darkblue";

    this.node.textContent = `${this.nombreTema}`;

    // Agregar el contenedor principal al juegoNode
    juegoNode.append(this.node);
  }
}
