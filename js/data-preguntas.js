// Array de objetos con las preguntas y respuestas del juego

// codigo de los temas:
// 1- geografia
// 2- historia
// 3 - tv y cine
// 4- deportes

const preguntas = [
  {
    tema: 1,
    pregunta: "¿Cual es la capital de Argentina?",
    respuesta: 0,
    opciones: ["a) Buenos Aires", "b) Cordoba", "c) Mendoza", "d) La Plata"],
  },
  {
    tema: 2,
    pregunta:
      " ¿Cómo se apellidaban los dos exploradores que dieron la primera vuelta al mundo?",
    respuesta: 2,
    opciones: [
      "a) Colón-Martinez",
      "b) Martín-Gahao",
      "c) Magallanes-Elcano",
      "d) Pizarro-Elcano",
    ],
  },
  {
    tema: 3,
    pregunta: "¿En que país nació el cine?",
    respuesta: 3,
    opciones: ["a) Argentina", "b) Chile", "c) Estados Unidos", "d) Francia"],
  },
  {
    tema: 4,
    pregunta: "¿En qué año ganó España su primer mundial de Futbol?",
    respuesta: 2,
    opciones: ["a) 1998", "b) 1984", "c) 2010", "d) 1965"],
  },

  {
    tema: 1,
    pregunta: "¿Cuál es el río más caudaloso del mundo?",
    respuesta: 0,
    opciones: ["a) Amazonas", "b) Missisipi", "c) Nilo", "d) Danubio"],
  },
  {
    tema: 2,
    pregunta:
      "¿Quiénes fueron, según la leyenda, los dos hermanos fundadores de la ciudad de Roma",
    respuesta: 2,
    opciones: [
      "a) Roma y Remo",
      "b) Caronte y Sócrates",
      "c) Rómulo y Remo",
      "d) Calígula y Augusto",
    ],
  },

  {
    tema: 3,
    pregunta:
      "¿Quién fue el director y a la vez protagonista de la película “Ciudadano Kane”?",
    respuesta: 3,
    opciones: [
      "a) Federico Fellini",
      "b) Steven Spielberg",
      "c) Stanley Kubrick",
      "d) Orson Welles",
    ],
  },

  {
    tema: 4,
    pregunta:
      " ¿Qué nadador estadounidense ganó cuatro medallas de oro y dos de plata en los Juegos Olímpicos de Londres de 2012?",
    respuesta: 2,
    opciones: [
      "a) Craig Benson",
      "b) Craig Oppel",
      "c) Michael Phelps",
      "d) Robert Nay",
    ],
  },
  {
    tema: 1,
    pregunta: " ¿Cuál es el país de mayor tamaño del mundo?",
    respuesta: 0,
    opciones: ["a) Rusia", "b) China", "c) Argentina", "d) Australia"],
  },

  {
    tema: 2,
    pregunta: "¿En qué año dió inicio la Guerra Civil española?",
    respuesta: 2,
    opciones: ["a) 1912", "b) 1854", "c) 1936", "d) 1945"],
  },
  {
    tema: 3,
    pregunta:
      "¿Por qué película de los años 90 es conocido el director y productor James Cameron?",
    respuesta: 2,
    opciones: [
      "a) El Rey León",
      "b) Memorias de África",
      "c) Titanic",
      "d) Matrix",
    ],
  },
  {
    tema: 4,
    pregunta:
      "¿Qué arte marcial de origen sudamericano fue desarrollado para parecerse a un baile?",
    respuesta: 3,
    opciones: ["a) Boxeo", "b) Taekwondo", "c) Samba", "d) capoeira"],
  },

  {
    tema: 1,
    pregunta: "¿Cuál es el país de mayor población del mundo?",
    respuesta: 3,
    opciones: ["a) China", "b) Rusia", "c) India", "d) Australia"],
  },
  {
    tema: 2,
    pregunta: "¿En que año se produjo el primer videojuego?",
    respuesta: 3,
    opciones: ["a) 1973", "b) 1994", "c) 1985", "d) 1950"],
  },

  {
    tema: 3,
    pregunta:
      "Qué actor, guionista y monologuista inglés guionizó la versión británica de la serie The Office?",
    respuesta: 2,
    opciones: [
      "a) John Cleese",
      "b) Sean Connery",
      "c) Ricky Gervais",
      "d) Alan Rickman",
    ],
  },

  {
    tema: 4,
    pregunta:
      "¿Qué deportista español se proclamó Campeón de las Series Mundiales de Ultra Runnning en tres años consecutivos de 2012 a 2014?",
    respuesta: 3,
    opciones: [
      "a) Alberto Ginés",
      "b) Aritz Egea",
      "c) Marcos Ramos",
      "d) Kilian Jornet",
    ],
  },
  {
    tema: 1,
    pregunta: "¿Cuál es la capital de Nueva Zelanda?",
    respuesta: 0,
    opciones: ["a) Auckland", "b) Lima", "c) Singapur", "d) Adelaide"],
  },
  {
    tema: 2,
    pregunta:
      "¿Qué isla sirvió de prisión para Napoleón tras su derrota en la batalla de Waterloo?",
    respuesta: 1,
    opciones: ["a) Mallorca", "b) Santa Elena", "c) Madagascar", "d) Cerdeña"],
  },
  {
    tema: 3,
    pregunta:
      "¿Qué serie producida por Netflix tiene como uno de sus antagonistas principales una entidad llamada Demogorgon?",
    respuesta: 1,
    opciones: [
      "a) The Dragon Price",
      "b) Stranger Things",
      "c) Blood of Zeus",
      "d) The Order",
    ],
  },
  {
    tema: 4,
    pregunta:
      "¿Qué conocido boxeador inició su trayectoria profesional con el nombre de Cassius Clay?",
    respuesta: 0,
    opciones: [
      "a) Muhammad Ali",
      "b) Mike Tyson",
      "c) Floyd Mayweather",
      "d) Roger Federer",
    ],
  },
];
