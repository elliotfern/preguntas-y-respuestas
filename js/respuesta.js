class Respuesta {
  constructor() {
    // Crear un nuevo elemento div (contenedor principal)
    this.node = document.createElement("div");

    // Estilizar el div (contenedor principal)
    this.node.style.padding = "10px";
    this.node.style.textAlign = "center";
    this.node.style.fontSize = "27px";
    this.node.style.fontWeight = "bold";

    //tamaños y posicion del contenedor principal
    this.x = 100; // eje X;
    this.y = 10; // eje y ;
    this.w = pantallaJuegoNode.offsetWidth - 200; // ancho
    this.h = 50; // alto

    // ajustar tamaños y posicion inicial del contenedor principal
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    // Crear los cuatro elementos <div> para las respuestas
    this.node1 = document.createElement("div");
    this.node2 = document.createElement("div");
    this.node3 = document.createElement("div");
    this.node4 = document.createElement("div");

    // Agregar los cuatro divs al contenedor principal (this.node)
    this.node.appendChild(this.node1);
    this.node.appendChild(this.node2);
    this.node.appendChild(this.node3);
    this.node.appendChild(this.node4);

    // Estilizar los divs de las respuestas (opcional)
    const respuestaStyle = {
      backgroundColor: "lightblue",
      padding: "10px",
      margin: "5px",
      fontSize: "18px",
      fontWeight: "bold",
    };

    Object.assign(this.node1.style, respuestaStyle);
    Object.assign(this.node2.style, respuestaStyle);
    Object.assign(this.node3.style, respuestaStyle);
    Object.assign(this.node4.style, respuestaStyle);

    // Colocar las respuestas una al lado de la otra
    this.node1.style.display = "inline-block";
    this.node2.style.display = "inline-block";
    this.node3.style.display = "inline-block";
    this.node4.style.display = "inline-block";

    // Asignar contenido a las respuestas (puedes cambiarlos según lo desees)
    this.node1.textContent = "Respuesta 1";
    this.node2.textContent = "Respuesta 2";
    this.node3.textContent = "Respuesta 3";
    this.node4.textContent = "Respuesta 4";

    // Agregar el contenedor principal al juegoNode
    const juegoNode = document.getElementById("juego"); // Asegúrate de que el contenedor del juego tenga el ID "juego"
    juegoNode.appendChild(this.node);
  }
}
