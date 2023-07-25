class BugsBunny {
  constructor() {
    // propiedades
    this.node = document.createElement("img");
    this.node.src = "../images/bugs-bunny.png";
    juegoNode.append(this.node);

    //tamaños y posicion de bugs bunny
    this.x = pantallaJuegoNode.offsetWidth / 2 - 25; // eje X;
    this.y = pantallaJuegoNode.offsetHeight - 300; // eje y ;
    this.w = 120; // ancho
    this.h = 170; // alto

    // ajustar tamaños y posicion inicial
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  // metodos
  // Método para manejar el evento de tecla presionada
  movimientoBugs(event) {
    // Verificar qué tecla se presionó y actualizar las coordenadas del objeto
    if (event.key === "ArrowLeft") {
      this.node.style.left -= 10; // Mover hacia la izquierda
    } else if (event.key === "ArrowRight") {
      this.node.style.left += 10; // Mover hacia la derecha
    } else if (event.key === "ArrowUp") {
      this.node.style.top -= 10; // Mover hacia arriba
    } else if (event.key === "ArrowDown") {
      this.node.style.top += 10; // Mover hacia abajo
    }
  }
}
