class Contador {
  constructor(partidas, vidas, win, nombre) {
    this.partidas = partidas;
    this.vidas = vidas;
    this.win = win;
    this.nombre = nombre;
    if (this.nombre === "") {
      this.nombre = "Jugador1";
    }

    // Añadir una propiedad para el límite inferior
    this.node = document.createElement("div");

    //tamaños y posicion del div de la pregunta
    this.x = 0; // eje X;
    this.y = 0; // eje y ;
    this.w = 850; // ancho
    this.h = 50; // alto

    // ajustar tamaños y posicion inicial
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    this.node.style.padding = "10px";
    this.node.style.margin = "0px 30px 0px 0px";
    this.node.style.textAlign = "center";
    this.node.style.fontSize = "27px";
    this.node.style.fontWeight = "bold";
    this.node.style.display = "flex";
    this.node.style.alignItems = "center";
    this.node.style.justifyContent = "center";
    this.node.style.backgroundColor = "black";
    this.node.style.color = "white";
    this.node.style.border = "1px solid darkblue";

    // Obtener las opciones de respuesta del objeto pregunta y asignarlas a los divs

    this.node.textContent = `Hola ${this.nombre} / Partida: ${this.partidas}/20 | Vidas: ${this.vidas} | Victorias: ${this.win}/10`;

    // Agregar el contenedor principal al juegoNode
    juegoNode.append(this.node);
  }
}
