class Respuesta {
  constructor(respuesta) {
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

    // Añadir una propiedad para el límite inferior
    this.limiteInferior = pantallaJuegoNode.offsetHeight;

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
      margin: "25px",
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

    // Obtener las opciones de respuesta del objeto pregunta y asignarlas a los divs

    this.node1.textContent = "respuesta 1";
    this.node2.textContent = "respuesta 2";
    this.node3.textContent = "respuesta 3";
    this.node4.textContent = "respuesta 4";

    // Agregar el contenedor principal al juegoNode
    const juegoNode = document.querySelector("#juego");
    juegoNode.appendChild(this.node);

    // Añadir una propiedad de velocidad vertical para el efecto de gravedad
    this.velocidadY = 0;
  }

  efectoGravedadRespuestas = () => {
    this.velocidadY += 0.001;

    // Aplicar la velocidad vertical a la posición del contenedor principal
    this.y += this.velocidadY;
    this.node.style.top = `${this.y}px`;

    // Detectar si ha llegado al límite inferior
    if (this.y + this.h >= this.limiteInferior) {
      // Aquí booleano en false
      this.haLlegadoAlFinal = true;
      return true; // Indicar que ha llegado al final
    } else {
      this.haLlegadoAlFinal = false;
      return false; // Indicar que no ha llegado al final
    }
  };
}
