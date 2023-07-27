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
    tema: 1,
    pregunta: "¿Cuál es el río más caudaloso del mundo?",
    respuesta: 0,
    opciones: ["a) Amazonas", "b) Missisipi", "c) Nilo", "d) Danubio"],
  },

  {
    tema: 1,
    pregunta: "¿Cuál es el país más extenso del mundo?",
    respuesta: 0,
    opciones: ["a) Rusia", "b) China", "c) Argentina", "d) Australia"],
  },

  {
    tema: 1,
    pregunta: "¿Cuál es el país de mayor población del mundo?",
    respuesta: 2,
    opciones: ["a) China", "b) Rusia", "c) India", "d) Australia"],
  },

  {
    tema: 1,
    pregunta: "¿Cuál es la capital de Nueva Zelanda?",
    respuesta: 0,
    opciones: ["a) Auckland", "b) Lima", "c) Singapur", "d) Adelaide"],
  },

  {
    tema: 1,
    pregunta: "¿Cuál es la capital de Australia?",
    respuesta: 3,
    opciones: ["a) Auckland", "b) París", "c) Lima", "d) Canberra"],
  },

  {
    tema: 1,
    pregunta: "¿Cuál es el monte más alto del mundo?",
    respuesta: 2,
    opciones: ["a) Montblanc", "b) Kilimanjaro", "c) Everest", "d) K2"],
  },

  {
    tema: 1,
    pregunta: "¿Dónde podemos encontrar la Casa Rosada?",
    respuesta: 3,
    opciones: ["a) India", "b) España", "c) Perú", "d) Argentina"],
  },

  {
    tema: 1,
    pregunta: "¿Cuál es la capital de Brasil?",
    respuesta: 1,
    opciones: ["a) Rio de Janeiro", "b) Brasilia", "c) Sao Paulo", "d) Manaus"],
  },

  {
    tema: 1,
    pregunta: "Qué cordillera separa Europa de Asia?",
    respuesta: 2,
    opciones: ["a) Pirineos", "b) Alpes", "c) Urales", "d) Tibet"],
  },

  {
    tema: 2,
    pregunta:
      "¿Cómo se apellidaban los dos exploradores que dieron la primera vuelta al mundo?",
    respuesta: 2,
    opciones: [
      "a) Colón-Martinez",
      "b) Martín-Gahao",
      "c) Magallanes-Elcano",
      "d) Pizarro-Elcano",
    ],
  },

  {
    tema: 2,
    pregunta:
      "¿Quiénes fueron los dos hermanos fundadores de la ciudad de Roma",
    respuesta: 2,
    opciones: [
      "a) Roma y Remo",
      "b) Caronte y Sócrates",
      "c) Rómulo y Remo",
      "d) Calígula y Augusto",
    ],
  },

  {
    tema: 2,
    pregunta: "¿En qué año dió inicio la Guerra Civil española?",
    respuesta: 2,
    opciones: ["a) 1912", "b) 1854", "c) 1936", "d) 1945"],
  },

  {
    tema: 2,
    pregunta: "¿En que año se produjo el primer videojuego?",
    respuesta: 3,
    opciones: ["a) 1973", "b) 1994", "c) 1985", "d) 1950"],
  },

  {
    tema: 2,
    pregunta:
      "¿Qué isla sirvió de prisión para Napoleón tras su derrota en la batalla de Waterloo?",
    respuesta: 1,
    opciones: ["a) Mallorca", "b) Santa Elena", "c) Madagascar", "d) Cerdeña"],
  },

  {
    tema: 2,
    pregunta:
      "¿La invasión de qué fortaleza es considerada como el punto de inicio de la Revolución Francesa?",
    respuesta: 1,
    opciones: [
      "a) Montjuic",
      "b) La Bastilla",
      "c) Les Invalides",
      "d) Sant'Angelo",
    ],
  },

  {
    tema: 2,
    pregunta: "¿En qué año el hombre pisó la Luna por primera vez?",
    respuesta: 2,
    opciones: ["a) 1912", "b) 2011", "c) 1969", "d) 1948"],
  },

  {
    tema: 2,
    pregunta:
      "¿Quién fue el primer presidente de la democracia tras el franquismo?",
    respuesta: 0,
    opciones: [
      "a) Adolfo Suárez",
      "b) Francisco Franco",
      "c) Carlos Arias",
      "d) Isabel Diaz Ayuso",
    ],
  },

  {
    tema: 2,
    pregunta: "¿En qué año se creó la Organización de las Naciones Unidas?",
    respuesta: 3,
    opciones: ["a) 1905", "b) 1879", "c) 1965", "d) 1945"],
  },

  {
    tema: 2,
    pregunta: "¿Quién fue el primer presidente de Estados Unidos?",
    respuesta: 0,
    opciones: [
      "a) George Washington ",
      "b) G.W. Bush",
      "c) Hillary Clinton",
      "d) Jefferson",
    ],
  },

  {
    tema: 3,
    pregunta: "¿En que país nació el cine?",
    respuesta: 3,
    opciones: ["a) Argentina", "b) Chile", "c) Estados Unidos", "d) Francia"],
  },

  {
    tema: 3,
    pregunta:
      "¿Quién fue el director y protagonista de la película “Ciudadano Kane”?",
    respuesta: 3,
    opciones: [
      "a) Federico Fellini",
      "b) Steven Spielberg",
      "c) Stanley Kubrick",
      "d) Orson Welles",
    ],
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
    tema: 3,
    pregunta:
      "¿Qué conocido cómico imitó a Hitler en la película “El Gran Dictador”?",
    respuesta: 2,
    opciones: [
      "a) Martes Y Trece",
      "b) Eugenio",
      "c) Charles Chaplin",
      "d) Betty White",
    ],
  },

  {
    tema: 3,
    pregunta:
      "¿Cuáles fueron los tres primeros componentes de “Los payasos de la tele”?",
    respuesta: 1,
    opciones: [
      "a) Miliki, Domingo y Faemino",
      "b) Gaby, Fofó y Miliki",
      "c) Pimpon, Caño y Vispón",
      "d) Ruperta, Parchís y Micolor",
    ],
  },

  {
    tema: 3,
    pregunta:
      "¿Cómo se llama el antagonista principal de la película de Disney El Rey León?",
    respuesta: 2,
    opciones: ["a) Simba", "b) Pingu", "c) Scar", "d) Timón"],
  },

  {
    tema: 3,
    pregunta:
      "¿Quien interpretaba el personaje principal de la popular serie británica 'Falwty Towers'?",
    respuesta: 1,
    opciones: [
      "a) Ben Barnes",
      "b) John Cleese",
      "c) Jeremy Brett",
      "d) Andrew Sachs",
    ],
  },

  {
    tema: 3,
    pregunta: "¿Que periodista de televisión se casó con el rey Felipe VI?",
    respuesta: 2,
    opciones: [
      "a) Belén Esteban",
      "b) Ana Rosa Quintana",
      "c) Letizia Ortiz",
      "d) Cristina Pardo",
    ],
  },

  {
    tema: 4,
    pregunta: "¿En qué año ganó España su primer mundial de Futbol?",
    respuesta: 2,
    opciones: ["a) 1998", "b) 1984", "c) 2010", "d) 1965"],
  },

  {
    tema: 4,
    pregunta:
      "¿Qué nadador estadounidense ganó cuatro medallas de oro y dos de plata en los Juegos Olímpicos de Londres de 2012?",
    respuesta: 2,
    opciones: [
      "a) Craig Benson",
      "b) Craig Oppel",
      "c) Michael Phelps",
      "d) Robert Nay",
    ],
  },

  {
    tema: 4,
    pregunta:
      "¿Cómo se llamó la popular serie de Antena3 que tenía lugar en una comunidad de vecinos?",
    respuesta: 2,
    opciones: [
      "a) La comunidad",
      "b) Mis queridos vecinos",
      "c) Aquí no hay quien viva",
      "d) El portero",
    ],
  },

  {
    tema: 4,
    pregunta:
      "¿Qué arte marcial de origen sudamericano fue desarrollado para parecerse a un baile?",
    respuesta: 3,
    opciones: ["a) Boxeo", "b) Taekwondo", "c) Samba", "d) Capoeira"],
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

  {
    tema: 4,
    pregunta: "¿En qué ciudad española está el estadio de fútbol de Mestalla?",
    respuesta: 3,
    opciones: ["a) Tarragona", "b) Vigo", "c) Cádiz", "d) Valencia"],
  },

  {
    tema: 4,
    pregunta: "¿En qué ciudad nació el futbolista Lionel Messi?",
    respuesta: 0,
    opciones: ["a) Rosario", "b) Buenos Aires", "c) Lima", "d) Caracas"],
  },

  {
    tema: 4,
    pregunta:
      "¿En qué ciudad italiana nació el piloto de motociclismo Valentino Rossi?",
    respuesta: 2,
    opciones: ["a) Roma", "b) Milán", "c) Urbino", "d) Palermo"],
  },

  {
    tema: 4,
    pregunta:
      "¿Quién es el único piloto de Fórmula 1 nacido en España que ha conseguido ganar el campeonato?",
    respuesta: 2,
    opciones: [
      "a) Marc Márquez",
      "b) Carlos Sainz",
      "c) Fernando Alonso",
      "d) Rafa Nadal",
    ],
  },

  {
    tema: 4,
    pregunta:
      "¿Cuál es el tenista que ha ganado en más ocasiones el título de Roland Garros?",
    respuesta: 1,
    opciones: [
      "a) Roger Federer",
      "b) Rafa Nadal",
      "c) Carlos Alcaraz",
      "d) Pepa Pig",
    ],
  },
];
