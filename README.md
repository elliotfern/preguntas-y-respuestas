# PREGUNTAS Y RESPUESTAS

## [Play the Game!](https://elliotfern.github.io/preguntas-y-respuestas/)

![Logo](https://raw.githubusercontent.com/elliotfern/preguntas-y-respuestas/main/images/preguntas-respuestas-logo.png)

# Descripción

Este es un juego de preguntas y respuestas construido con clases y objetos de JavaScript, mediante manipulación del DOM. El jugador debe responder correctamente a 10 preguntas, y cuenta con la posibilidad de cometer hasta 3 errores. El jugador puede escoger el personaje que le ayudará a responder correctamente las preguntas y tambien el nivel de dificultad.

El juego cuenta con preguntas temáticas de 4 grupos diferentes: historia, geografía, televisión/cine y deportes.

# Funcionalidades principales

- Elección del personaje (4 opciones: Bugs Bunny, Piolín, Demonio de Tasmania y Coyote).
- Elección del nivel de dificultad del juego (la velocidad en la que el jugador debe responder a la pregunta).
- Introducción del nombre del jugador.
- Se disponen de 3 vidas (se pueden fallar hasta 3 preguntas).
- Se deben completar 10 preguntas correctamente.

# Backlog Funcionaliades

- Posibilidad de guardar en memoria local la puntuación de cada jugador para tener un histórico de las partidas.
- Posibilidad de elegir los temas de cada pregunta (actualmente la elección corresponde al programa, no al usuario).

# Tecnologías usadas

- HTML
- CSS
- Javascript
- DOM Manipulation

# Estados

- Pantalla de inicio
- Pantalla de juego
- Pantalla juego ganado
- Pantalla juego perdido

# Estructura del proyecto

## main.js

Funciones principales main.js:

- startGame()
- startScreen()
- gameOver()
- gameWin()

## juego.js

Clase Juego:

- iniciarPartida()
- juegoLoop()
- generarNumRandom()
- randomEligirPregunta()
  collisionPreguntaCorrecta()
- partidaWin()

## partida.js

Clase Partida:

- Aqui se generan las clases: contador, tema, pregunta, respuesta y bugsbunny

## tema.js

Clase Tema

## contador.js

Clase Contador

## pregunta.js

Clase Pregunta

## respuesta.js

Clase Respuesta

- efectoGravedadRespuestas()

## bugsbunny.js

Clase BugsBunny

- movimientoBugs()
- positionUpdate()

## data-preguntas.js

Array de objetos con todas las preguntas y respuesta del juego.

# Links

### Juego

[Link](https://elliotfern.github.io/preguntas-y-respuestas/)

### Presentación

[Link] (https://docs.google.com/presentation/d/1ep0eEPFEeZ8g7ZO7LJO0Qf6a175Zk_VIGKyFNMEbmto/edit?usp=sharing)
