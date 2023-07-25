class Respuesta {
  constructor(respuestaIndice, posicionCaja) {
    // argumentos: 1 - indice de la array
    this.randomRespuestaIndice = respuestaIndice;

    this.posicionCaja = posicionCaja;
    console.log("posicion", this.posicionCaja);
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

    // Agregar los cuatro divs al contenedor principal (this.node)
    this.node.appendChild(this.node1);
    let cajaLeft = "";
    let indiceRespuesta = "";

    if (this.posicionCaja === 0) {
      cajaLeft = 0;
    } else if (this.posicionCaja === 1) {
      cajaLeft = 250;
    } else if (this.posicionCaja === 2) {
      cajaLeft = 500;
    } else if (this.posicionCaja === 3) {
      cajaLeft = 730;
    }

    // Estilizar los divs de las respuestas (opcional)
    const respuestaStyle = {
      backgroundColor: "lightblue",
      padding: "10px",
      margin: "30px",
      fontSize: "18px",
      fontWeight: "bold",
      position: "absolute",
      width: "200px",
      left: `${cajaLeft}px`,
    };

    Object.assign(this.node1.style, respuestaStyle);

    // Colocar las respuestas una al lado de la otra
    this.node1.style.display = "inline-block";

    // Obtener las opciones de respuesta del objeto pregunta y asignarlas a los divs

    this.node1.textContent =
      preguntas[this.randomRespuestaIndice]["opciones"][this.posicionCaja];

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
