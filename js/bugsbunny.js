class BugsBunny {
  constructor() {
    // propiedades
    this.node = document.createElement("img");
    this.node.src = "./../images/bugs-bunny.png";
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
      this.x -= 10; // Mover hacia la izquierda
      this.positionUpdate();
    } else if (event.key === "ArrowRight") {
      this.x += 10; // Mover hacia la derecha
      this.positionUpdate();
    } else if (event.key === "ArrowUp") {
      this.y -= 10; // Mover hacia arriba
      this.positionUpdate();
    } else if (event.key === "ArrowDown") {
      this.y += 10; // Mover hacia abajo
      this.positionUpdate();
    }
  }

  positionUpdate = () => {
    //bugs bunny se mueve en el eje Y y X
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  };
}
