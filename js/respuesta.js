class Respuesta {
  constructor(respuestaIndice, posicionCaja, nivel) {
    this.posicionCaja = posicionCaja;
    this.nivel = nivel;

    // Añadir una propiedad para el límite inferior
    this.limiteInferior = pantallaJuegoNode.offsetHeight;
    this.node = document.createElement("div");

    // Agregar los cuatro divs al contenedor principal (this.node)
    let cajaLeft = "";

    if (this.posicionCaja === 0) {
      cajaLeft = 10;
    } else if (this.posicionCaja === 1) {
      cajaLeft = 300;
    } else if (this.posicionCaja === 2) {
      cajaLeft = 600;
    } else if (this.posicionCaja === 3) {
      cajaLeft = 900;
    }

    let velocidad = 0;
    if (this.nivel === 1) {
      this.velocidad = 0.001;
    } else if (this.nivel === 2) {
      this.velocidad = 0.005;
    } else if (this.nivel === 3) {
      this.velocidad = 0.01;
    } else {
      this.velocidad = 0.001;
    }

    //tamaños y posicion del div de la pregunta
    this.x = cajaLeft; // eje X;
    this.y = 90; // eje y ;
    this.w = 250; // ancho
    this.h = 90; // alto

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
    this.node.style.backgroundColor = "lightblue";
    this.node.style.border = "1px solid darkblue";
    this.node.style.borderRadius = "10px";
    // Ajusta la altura para centrar el texto

    // Obtener las opciones de respuesta del objeto pregunta y asignarlas a los divs

    this.node.textContent =
      preguntas[respuestaIndice]["opciones"][this.posicionCaja];

    // Agregar el contenedor principal al juegoNode
    const juegoNode = document.querySelector("#juego");
    juegoNode.append(this.node);

    // Añadir una propiedad de velocidad vertical para el efecto de gravedad
    this.velocidadY = 0;
  }

  efectoGravedadRespuestas = () => {
    this.velocidadY += this.velocidad;

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
