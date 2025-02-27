
var firebaseConfig = {
  apiKey: "AIzaSyDF_0fXUVHiauVr83vsVIqBMkoXjNzRKlY",
  authDomain: "san-valero-4b07e.firebaseapp.com",
  databaseURL: "https://san-valero-4b07e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "san-valero-4b07e",
  storageBucket: "san-valero-4b07e.firebasestorage.app",
  messagingSenderId: "200137559098",
  appId: "1:200137559098:web:eab160b3bd45ba282ab903",
  measurementId: "G-0BS3YBJ3KG"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

let ball, player1, player2, gameMode, aiEnabled;
let ballSpeedIncreaseInterval = 2500; // Incremento de velocidad cada 2.5 segundos
let lastSpeedIncreaseTime;
let collisionCooldown = 10; // Tiempo de espera entre colisiones
let lastCollisionTime = 0;
let winningScore = 3; // Puntos necesarios para ganar
let winner = null;
let gameEndTime;
let isFirstLaunch = true; // Controla el primer lanzamiento
let particleSystem; // Sistema de partículas para el humo
let Transparency = 255;
let FloatText = 0;
let AmentoText = -1.5;
let aumentoMenu = 0;

let Player1Ylocal = 0;
let Player2Ylocal = 0;

let SelectedMode = 1;

let TimeCount = 10;

let SecondANT = -1;

let Player1ANT = 0;

let Player2ANT = 0;

let loops = 0;

let loopsWistle = 0;

let RotationWistle = 0;

let millisANT = 0;

let Final = false;

let FueraElements = -1;

let FirstTime2 = true;

let PartidaEncontrada = 0;

let PosJugador = 0;

let Partida1;

let Partida2;

let Partida3;

let TextFadeIncrement = true;

let TextoWaiting = false;

let TextoPunto = 0;

let Desvanecido = 255;

let SinBird = 0;

let FadeText = 0;

let TouchACTUAL = 0;

let TouchMax = 0;

let TouchMaxEver = 0;

let millisRefresBall = 0;

let BALLXPOS = 0;

let BALLYPOS = 0;

let BALLVX = 0;

let BALLVY = 0;

let BALLVXGenerated = 0;

let BALLVYGenerated = 0;

let SetFirstTimeRecord = true;

function gotDataPartida1(data) {
  Partida1 = data.val();
}

function gotDataPartida2(data) {
  Partida2 = data.val();
}

function gotDataPartida3(data) {
  Partida3 = data.val();
}

function Player1PosGame1(data) {
  player1.y = data.val();
}

function Player1PosGame2(data) {
  player1.y = data.val();
}

function Player1PosGame3(data) {
  player1.y = data.val();
}

function Player2PosGame1(data) {
  player2.y = data.val();
}

function Player2PosGame2(data) {
  player2.y = data.val();
}

function Player2PosGame3(data) {
  player2.y = data.val();
}

function BallXGame1(data) {
  let BALLXPOSACT = data.val();
  
  if (BALLXPOS != BALLXPOSACT) {
      
    BALLXPOS = BALLXPOSACT;
    ball.x = BALLXPOS;
      
  }
}

function BallYGame1(data) {
  let BALLYPOSACT = data.val();
  
  if (BALLYPOS != BALLYPOSACT) {
      
    BALLYPOS = BALLYPOSACT;
    ball.y = BALLYPOS;
      
  }
}

function BallXGame2(data) {
    let BALLXPOSACT = data.val();
  
  if (BALLXPOS != BALLXPOSACT) {
      
    BALLXPOS = BALLXPOSACT;
    ball.x = BALLXPOS;
      
  }
}

function BallYGame2(data) {
    let BALLYPOSACT = data.val();
  
  if (BALLYPOS != BALLYPOSACT) {
      
    BALLYPOS = BALLYPOSACT;
    ball.y = BALLYPOS;
      
  }
}

function BallXGame3(data) {
    let BALLXPOSACT = data.val();
  
  if (BALLXPOS != BALLXPOSACT) {
      
    BALLXPOS = BALLXPOSACT;
    ball.x = BALLXPOS;
      
  }
}

function BallYGame3(data) {
      let BALLYPOSACT = data.val();
  
  if (BALLYPOS != BALLYPOSACT) {
      
    BALLYPOS = BALLYPOSACT;
    ball.y = BALLYPOS;
      
  }
}

function BallVXGame1(data) {
  let BALLVXACT = data.val();
  
  if (BALLVX != BALLVXACT) {
      
    BALLVX = BALLVXACT;
    ball.vx = BALLVX;
      
  }
}

function BallVYGame1(data) {
  let BALLVYACT = data.val();
  
  if (BALLVY != BALLVYACT) {
      
    BALLVY = BALLVYACT;
    ball.vy = BALLVY;
      
  }
}

function BallVXGame2(data) {
    let BALLVXACT = data.val();
  
  if (BALLVX != BALLVXACT) {
      
    BALLVX = BALLVXACT;
    ball.vx = BALLVX;
      
  }
}

function BallVYGame2(data) {
    let BALLVYACT = data.val();
  
  if (BALLVY != BALLVYACT) {
      
    BALLVY = BALLVYACT;
    ball.vy = BALLVY;
      
  }
}

function BallVXGame3(data) {
    let BALLVXACT = data.val();
  
  if (BALLVX != BALLVXACT) {
      
    BALLVX = BALLVXACT;
    ball.vx = BALLVX;
      
  }
}

function BallVYGame3(data) {
      let BALLVYACT = data.val();
  
  if (BALLVY != BALLVYACT) {
      
    BALLVY = BALLVYACT;
    ball.vy = BALLVY;
      
  }
}

function ScorePlayer1Game1(data) {
  player1.score = data.val();
}

function ScorePlayer2Game1(data) {
  player2.score = data.val();
}

function ScorePlayer1Game2(data) {
  player1.score = data.val();
}

function ScorePlayer2Game2(data) {
  player2.score = data.val();
}

function ScorePlayer1Game3(data) {
  player1.score = data.val();
}

function ScorePlayer2Game3(data) {
  player2.score = data.val();
}

function gotRecord(data) {
  TouchMaxEver = data.val();
}

function TouchMaxLocalVal1(data) {
  TouchMax = data.val();
}

function TouchMaxLocalVal2(data) {
  TouchMax = data.val();
}

function TouchMaxLocalVal3(data) {
  TouchMax = data.val();
}


function preload() {
  soundFormats('mp3');
  mySound = loadSound("ASSETS/Waluigi.mp3");
  WistleSound = loadSound("ASSETS/WistleSound.mp3");
  GoalSound = loadSound("ASSETS/GoalSound.mp3");
  particleTexture = loadImage("texture.png"); // Asegúrate de tener una textura para las partículas
  
  BackgroundIMG = loadImage("ASSETS/Fondo Final.png");
  BackgroundIMG2 = loadImage("ASSETS/Fondo Final2.png");
  CirculoIMG = loadImage("ASSETS/Fondo Futbol.png");
  Menu1 = loadImage("ASSETS/Fondo1.jpeg");
  Menu = loadImage("ASSETS/Menu.jpeg");
  PongAI = loadImage("ASSETS/PongAI.png");
  PongAI2 = loadImage("ASSETS/PongAI2.png");
  PongFr = loadImage("ASSETS/PongFr2.png");
  PongFr2 = loadImage("ASSETS/PongFr3.png");
  Ball = loadImage("ASSETS/Ball-1.png");
  Tittle = loadImage("ASSETS/Tittle.png");
  Palas = loadImage("ASSETS/Palas Ping Pong.png");
  Jugador1 = loadImage("ASSETS/Jugador1.png");
  Jugador2 = loadImage("ASSETS/Jugador2.png");
  JugadorIA = loadImage("ASSETS/JugadorIA.png");
  Paddle1JP = loadImage("ASSETS/Paddle1JP.png");
  Paddle2JP = loadImage("ASSETS/Paddle2JP.png");
  Paddle1 = loadImage("ASSETS/Paddle1.png");
  Paddle2 = loadImage("ASSETS/Paddle2.png");
  Wistle = loadImage("ASSETS/Wistle.png");
  NewRecord = loadImage("ASSETS/NewRecord.png");
  myFont = loadFont("ASSETS/nasalization-rg.otf");
  myFont2 = loadFont('ASSETS/fixedsys.ttf');
  VideoBG = createVideo('ASSETS/LoopVideo.mp4');
  VideoBG.volume(0);
  VideoBG.loop();
  VideoBG.hide();
  Waiting = loadImage('ASSETS/Waiting.gif');
  FondoConnect = loadImage('ASSETS/Fondo4Conectar2.png');
  LeftBird = loadImage('ASSETS/ImageLeftBird.png');
  RightBird = loadImage('ASSETS/ImageRightBird.png');
  TextoConectar = loadImage('ASSETS/TextoConectar.png');
  
}

function setup() {
  mySound.setLoop(true);
  createCanvas(1280, 720); // Resolución original
  textFont(myFont);
  resetGame();
  particleSystem = new ParticleSystem(0, createVector(ball.x, ball.y), particleTexture); // Inicializar el sistema de partículas
  ref = database.ref('Juegos/SVPong/MaxTouchEver');
  ref.on('value', gotRecord);
  mySound.loop();
  mySound.setVolume(1);

}

function draw() {
  if (!mySound.isPlaying()) {
    mySound.loop();
    mySound.setVolume(1);
  }
  background(0);
  if (gameMode === undefined) {
    showMenu();
  } else if (winner !== null) {
    showWinner();
  } else {
    playGame();
  }
}

function resetGame() {
  ball = {
    x: width / 2,
    y: height / 2,
    vx: random([-3, 3]), // El primer lanzamiento será aleatorio
    vy: random([-2, 2]),
    speed: 3,
    lastCollisionPaddle: null // Identifica la última pala con la que colisionó
  };
  player1 = { y: height / 2, score: 0 };
  player2 = { y: height / 2, score: 0 };
  lastSpeedIncreaseTime = millis();
  winner = null;
  isFirstLaunch = true; // Reinicia el control para el primer lanzamiento
  particleSystem = new ParticleSystem(0, createVector(ball.x, ball.y), particleTexture); // Reiniciar el sistema de partículas
}

function showMenu() {
  
  if (frameCount >= 1200 && frameCount <= 1300) {
  
   FueraElements = sin(map(frameCount, 1200, 1300, -HALF_PI, 0));
  
  }
  
  image(Menu, 0, 0, width, height);
  
  push();
  
  tint(255, 255, 255, map(sin(FloatText), 0, 1, 0, 255));
  
  image(Menu1, 0, 0, width, height);
    
  pop();
  fill(0, 0, 0, Transparency);
  rect(0, 0, width, height);
  if (Transparency > 0) {
    
      Transparency = Transparency - 1;
      
  } else {
    
    if (FloatText < HALF_PI) {
    
      FloatText = FloatText + 0.02;
      
    } else {
     
      AmentoText = AmentoText + 0.05;
      
    }
    
  }
  
  image(Tittle, width/2 - Tittle.width*0.4 * map(sin(AmentoText), -1, 1, 1, 1.08), map(sin(FloatText), 0, 1 , - height*0.21, height*0.02 + sin(AmentoText) * 3) - map(FueraElements, -1, 0, 0, 400), Tittle.width*0.8 * map(sin(AmentoText), -1, 1, 1, 1.08), Tittle.height*0.8 * map(sin(AmentoText), -1, 1, 1, 1.08));
  
  if (AmentoText > 0) {
    
    if (aumentoMenu < HALF_PI) {
    
  aumentoMenu = aumentoMenu + 0.016;
      
    }
    
  }
  
  push();
  
  imageMode(CENTER);
  
  push();
  
  tint(map(sin(AmentoText*0.6), -1, 1, 202, 117), map(sin(AmentoText*0.6), -1, 1, 74, 89), map(sin(AmentoText*0.6), -1, 1, 165, 255), map(FloatText, 0, HALF_PI, 0, 255));
  
  image(Palas, width/2, height*0.32 - map(FueraElements, -1, 0, 0, 500), Palas.width * map(FloatText, 0, HALF_PI, 0, 0.5), Palas.height * map(FloatText, 0, HALF_PI, 0, 0.5));
  
  pop();
  
  if (TimeCount > 0) {
  
    if (mouseY < height*0.4) {

      SelectedMode = 1;

    }

    if (mouseY > height*0.6) {

      SelectedMode = 2;

    }
    
  }
  
  if (SelectedMode == 2) {
    
  image(PongAI2, width*0.35, map(sin(aumentoMenu), 0, 1, height*1.22, height*0.55) + map(FueraElements, -1, 0, 0, 400), PongAI.width*0.69 * map(sin(AmentoText/2.5), -1, 1, 1, 1.1), PongAI.height*0.69 * map(sin(AmentoText/2.5), -1, 1, 1, 1.1));
  
  image(PongFr, width*0.65, map(sin(aumentoMenu), 0, 1, height*1.22, height*0.55) + map(FueraElements, -1, 0, 0, 400), PongFr.width*0.5 * map(sin(AmentoText/2.5), -1, 1, 1, 1.1), PongFr.height*0.5 * map(sin(AmentoText/2.5), -1, 1, 1, 1.1));
    
  } else {
  
  image(PongAI, width*0.35, map(sin(aumentoMenu), 0, 1, height*1.22, height*0.55) + map(FueraElements, -1, 0, 0, 400), PongAI.width*0.4 * map(sin(AmentoText/2.5), -1, 1, 1, 1.1), PongAI.height*0.4 * map(sin(AmentoText/2.5), -1, 1, 1, 1.1));
  
  image(PongFr2, width*0.65, map(sin(aumentoMenu), 0, 1, height*1.22, height*0.55) + map(FueraElements, -1, 0, 0, 400), PongFr.width*0.85 * map(sin(AmentoText/2.5), -1, 1, 1, 1.1), PongFr.height*0.85 * map(sin(AmentoText/2.5), -1, 1, 1, 1.1));
    
  }
  
  pop();
  
  if(FloatText >= HALF_PI) {
  
  if (SelectedMode == 1) {
  
  fill(map(sin(AmentoText), -1, 1, 202, 117), map(sin(AmentoText), -1, 1, 74, 89), map(sin(AmentoText), -1, 1, 165, 255));
  textAlign(CENTER, CENTER);
  stroke(20);
  strokeWeight(5);

  textSize(map(sin(aumentoMenu), -1, 1, 0, 50)); // Duplicar el tamaño del texto
  text("2 Players", width*0.65, height*0.78 + map(FueraElements, -1, 0, 0, 300));
  fill(255);
  textSize(map(sin(aumentoMenu), -1, 1, 0, 40)); // Duplicar el tamaño del texto
  text("IA Pong", width*0.35,  height*0.78 + map(FueraElements, -1, 0, 0, 300));
    
  } else {
    
  fill(map(sin(aumentoMenu), -1, 1, 202, 117), map(sin(AmentoText), -1, 1, 74, 89), map(sin(AmentoText), -1, 1, 165, 255));
  textAlign(CENTER, CENTER);
  stroke(20);
  strokeWeight(5);

  textSize(map(sin(aumentoMenu), -1, 1, 0, 50)); // Duplicar el tamaño del texto
  text("IA Pong", width*0.35,  height*0.78 + map(FueraElements, -1, 0, 0, 300));
  fill(255);
  textSize(map(sin(aumentoMenu), -1, 1, 0, 40)); // Duplicar el tamaño del texto
  text("2 Players", width*0.65, height*0.78 + map(FueraElements, -1, 0, 0, 300));
    
  }
  
  textSize(map(sin(aumentoMenu), -1, 1, 0, map(sin(AmentoText/2.5), -1, 1, 34, 37))); // Duplicar el tamaño del texto
  
  fill(255);
  text("Sube o baja para seleccionar el modo", width / 2, height*0.89 + map(FueraElements, -1, 0, 0, 200));
    
  }
    textSize(30); // Duplicar el tamaño del textoi
    text("By: AdriánNF", map(sin(FloatText), 0, 1, width * 1.2, width*0.9) + map(FueraElements, -1, 0, 0, 100), height*0.94);
  
  if (frameCount >= 600) {
    
    if (frameCount == 600) {
        
      SecondANT = millis();
      
    }
    
    if (TimeCount > 0) {
    
    TimeCount = 10 - round((millis() - SecondANT)/1000);
      
    }
  
  push();
  
  textAlign(CENTER, CENTER);
  
  textSize(90); // Duplicar el tamaño del textoi
  fill(255, 70, 20);
  stroke(0);
  strokeWeight(5);
  text(TimeCount, width*0.08, height*0.08);
  
  pop();
  
  }
  
  if (frameCount > 1200) {
  
  if (frameCount < 1300) {
  
    fill(0, 0, 0, map(frameCount, 1200, 1300, 0, 255));
  
  } else {
    
   fill(0, 0, 0); 
    
  }
  
  rect(0, 0, width, height);
  
  }
  
  if (frameCount >= 1300) {

  if (gameMode === undefined) {
    if (SelectedMode == 2) {
      gameMode = 1;
      aiEnabled = true;
      resetGame();
    } else {
      
      if (PartidaEncontrada == 1 && Partida1 >= 2) {
          
      gameMode = 2;
      aiEnabled = false;
      resetGame();

      //console.log(Partida1 + " <-> " + Partida2 + " <-> " + Partida3 + " <-> " + PosJugador + " <-> " + PartidaEncontrada);
      
      } else if (PartidaEncontrada == 2 && Partida2 >= 2) {
          
      gameMode = 2;
      aiEnabled = false;
      resetGame();

      //console.log(Partida1 + " <-> " + Partida2 + " <-> " + Partida3 + " <-> " + PosJugador + " <-> " + PartidaEncontrada);
      
      } else if (PartidaEncontrada == 3 && Partida3 >= 2) {
          
      gameMode = 2;
      aiEnabled = false;
      resetGame();

      //console.log(Partida1 + " <-> " + Partida2 + " <-> " + Partida3 + " <-> " + PosJugador + " <-> " + PartidaEncontrada);
      
      }  else {
        
        PantallaConexion();

        ref = database.ref('Juegos/SVPong/Partida1');
        ref.on('value', gotDataPartida1);

        ref = database.ref('Juegos/SVPong/Partida2');
        ref.on('value', gotDataPartida2);

        ref = database.ref('Juegos/SVPong/Partida3');
        ref.on('value', gotDataPartida3);
        
        //console.log(Partida1 + " <-> " + Partida2 + " <-> " + Partida3 + " <-> " + PosJugador + " <-> " + PartidaEncontrada);
        
        if (Partida1 == 0 || Partida1 == 1) {
          
                  
        if (PartidaEncontrada == 0) {
      
      PartidaEncontrada = 1;
          
      PosJugador = Partida1 + 1;
      
     ref = database.ref('Juegos/SVPong/Partida1');
    ref.set(Partida1 + 1);
          
    ref = database.ref('Juegos/SVPong/MaxTouchLocal1');
    ref.set(0);
          
    ref = database.ref('Juegos/SVPong/ScorePlayer1Game1');
    ref.set(0);
    ref = database.ref('Juegos/SVPong/ScorePlayer2Game1');
    ref.set(0);
          
    player1.y = height/2;
    player2.y = height/2;
    ref = database.ref('Juegos/SVPong/Player1PosPartida1');
    ref.set(height/2);
    ref = database.ref('Juegos/SVPong/Player2PosPartida1');
    ref.set(height/2);
          
        }
    
    } else if (Partida2 == 0 || Partida2 == 1) {
      
      if (PartidaEncontrada == 0) {
        
        PartidaEncontrada = 2;
        
        PosJugador = Partida2 + 1;
    
     ref = database.ref('Juegos/SVPong/Partida2');
    ref.set(Partida2 + 1);
        
    ref = database.ref('Juegos/SVPong/MaxTouchLocal2');
    ref.set(0);
        
    ref = database.ref('Juegos/SVPong/ScorePlayer1Game2');
    ref.set(0);
    ref = database.ref('Juegos/SVPong/ScorePlayer2Game2');
    ref.set(0);
        
    player1.y = height/2;
    player2.y = height/2;
    ref = database.ref('Juegos/SVPong/Player1PosPartida2');
    ref.set(height/2);
    ref = database.ref('Juegos/SVPong/Player2PosPartida2');
    ref.set(height/2);
        
      }
    
    } else if (Partida3 == 0 || Partida3 == 1) {
      
      if (PartidaEncontrada == 0) {
        
        PartidaEncontrada = 3;
        
        PosJugador = Partida3 + 1;
    
    ref = database.ref('Juegos/SVPong/Partida3');
    ref.set(Partida3 + 1);
        
    ref = database.ref('Juegos/SVPong/MaxTouchLocal3');
    ref.set(0);
        
    ref = database.ref('Juegos/SVPong/ScorePlayer1Game3');
    ref.set(0);
    ref = database.ref('Juegos/SVPong/ScorePlayer2Game3');
    ref.set(0);
        
    player1.y = height/2;
    player2.y = height/2;
    ref = database.ref('Juegos/SVPong/Player1PosPartida3');
    ref.set(height/2);
    ref = database.ref('Juegos/SVPong/Player2PosPartida3');
    ref.set(height/2);
        
      }
    
    }
        
      }
    }
  }
    
  }
  
}

function showWinner() {
  fill(255);
  strokeWeight(15);
  textAlign(CENTER, CENTER);
  textSize(140); // Duplicar el tamaño del texto
  textFont(myFont);
  if (gameMode === 1 && winner === "Jugador 2") {
    image(JugadorIA, 0, 0, width, height);
    
    stroke(0);
    
    fill(255, 162, 0);
    
    text(player1.score, width*0.2, height*0.48);
    
    fill(10, 200, 225);
    
    text(player2.score, width*0.8, height*0.48);
    
    if (TouchMax > TouchMaxEver) {
    
    image(NewRecord, width/2 - NewRecord.width/2, height*0.38);
      
    textSize(80);
    
    strokeWeight(14);
    
    fill(230, 120, 120);
    
    text(TouchMax, width/2, height*0.75);
      
    textSize(40);
      
    strokeWeight(10);
      
    fill(220, 220, 120);
    
    text("Pre-Récord: " + TouchMaxEver, width*0.7, height*0.95);
      
    } else {
      
    textSize(40);
      
    strokeWeight(10);
      
    fill(200, 200, 200);
    
    text("Récord: " + TouchMaxEver, width*0.74, height*0.95);
      
    textSize(50);
    
    strokeWeight(7);
    
    fill(220, 220, 220);
      
    text("Máx:", width/2, height*0.8);
      
    strokeWeight(12);
      
    textSize(70);
    
    text(TouchMax, width/2, height*0.9);
      
    }
    
    
  } else {
    
      if (PosJugador == 1) {
    
      console.log("Player1Post: " + TouchMax);
        
      if (PartidaEncontrada == 1) {
      
      ref = database.ref('Juegos/SVPong/MaxTouchLocal1');
      ref.set(TouchMax);
        
      } else if (PartidaEncontrada == 2) {
      
      ref = database.ref('Juegos/SVPong/MaxTouchLocal2');
      ref.set(TouchMax);
        
      } else if (PartidaEncontrada == 3) {
      
      ref = database.ref('Juegos/SVPong/MaxTouchLocal3');
      ref.set(TouchMax);
        
      }
        
        SetFirstTimeRecord = false;
      
     } else {
       
       
      if (SetFirstTimeRecord == true) {
        
      TouchMax = 0;
        
      if (PartidaEncontrada == 1) {
      
      ref = database.ref('Juegos/SVPong/MaxTouchLocal1');
      ref.on('value', TouchMaxLocalVal1);
        
      } else if (PartidaEncontrada == 2) {
        
      ref = database.ref('Juegos/SVPong/MaxTouchLocal2');
      ref.on('value', TouchMaxLocalVal2);
        
      } else if (PartidaEncontrada == 3) {
        
      ref = database.ref('Juegos/SVPong/MaxTouchLocal3');
      ref.on('value', TouchMaxLocalVal3);
        
      }
        
      console.log("Player2Recibe: " + TouchMax);
        
      if (TouchMax > 0) {
        
      SetFirstTimeRecord = false;
        
      }
      
     }
       
     }
    
    if (winner === "Jugador 1") {
        
      image(Jugador2, 0, 0, width, height);
        
    } else {
     
      image(Jugador1, 0, 0, width, height);
      
    } 
      
    stroke(0);
    
    fill(255, 162, 0);
    
    text(player1.score, width*0.2, height*0.48);
    
    fill(10, 200, 225);
    
    text(player2.score, width*0.8, height*0.48);
    
    if (TouchMax > TouchMaxEver) {
    
    image(NewRecord, width/2 - NewRecord.width/2, height*0.38);
      
    textSize(80);
    
    strokeWeight(14);
    
    fill(230, 120, 120);
    
    text(TouchMax, width/2, height*0.75);
      
    textSize(40);
      
    strokeWeight(10);
      
    fill(220, 220, 120);
    
    text("Pre-Récord: " + TouchMaxEver, width*0.7, height*0.95);
      
    } else {
      
    textSize(40);
      
    strokeWeight(10);
      
    fill(200, 200, 200);
    
    text("Récord: " + TouchMaxEver, width*0.74, height*0.95);
      
    textSize(50);
    
    strokeWeight(7);
    
    fill(220, 220, 220);
      
    text("Máx:", width/2, height*0.8);
      
    strokeWeight(12);
      
    textSize(70);
    
    text(TouchMax, width/2, height*0.9);
      
    }
    
    
  }
  
  if (Final == false) {
    
  Final = true;
  
  mySound.setVolume(0.6);
        
  GoalSound.play();
    
  }
  
  if (millis() - gameEndTime <= 8000) {
  
  mySound.setVolume(map(millis() - gameEndTime, 0, 8000, 1, 0));
    
  }
  
  if (millis() - gameEndTime >= 7000 && millis() - gameEndTime <= 9000) {
    
    fill(0, 0, 0, map(millis() - gameEndTime, 7000, 9000, 0, 255));
    
    rect(0, 0, width, height);
    
  } else if (millis() - gameEndTime > 9000) {
    
    fill(0, 0, 0);
    
    rect(0, 0, width, height);
    
  }

  if (millis() - gameEndTime >= 10000) {
    gameMode = undefined;
    if (TouchMax > TouchMaxEver) {
    ref = database.ref('Juegos/SVPong/MaxTouchEver');
    ref.set(TouchMax);
    }
    
    if (PartidaEncontrada == 1) {
    
    ref = database.ref('Juegos/SVPong/Partida1');
    ref.set(0);
    
    } else if (PartidaEncontrada == 2) {
    
    ref = database.ref('Juegos/SVPong/Partida2');
    ref.set(0);
    
    } else if (PartidaEncontrada == 3) {
    
    ref = database.ref('Juegos/SVPong/Partida3');
    ref.set(0);
    
    }
    
    window.location.reload();

  }
}


function playGame() {
  drawField();
  moveBall();
  drawPaddles();
  handleInput();
  checkCollisions();
  increaseBallSpeed();
  displayScores();
  checkWinner();

  // Actualizar el sistema de partículas
  particleSystem.origin.set(ball.x, ball.y); // Actualiza la posición de la bola
  particleSystem.addParticle(); // Agregar partículas
}

function drawField() {
  stroke(255);
  line(width / 2, 0, width / 2, height);
  
  push();
  translate(width/2, height/2);
  rotate(frameCount*0.01);
  imageMode(CENTER);
  image(CirculoIMG, 0, 0, width, width);
  pop();
  
  if (player1.score != Player1ANT) {
    
    if (loops < 6) {
      
      if (loops <= 0) {
        
        mySound.setVolume(0.6);
        
        GoalSound.play();
        
      }
      
      if (loops == 1 || loops == 3 || loops == 5) {
          
      push();
        
      fill(255,165, 5);
        
      rect(0, 0, width, height);
      
      pop();
      
      }
      
      if (millis() >= millisANT + 220) {
      
        millisANT = millis();
      
      loops = loops + 1;
        
      }
      
    }
    
  }
  
  if (player2.score != Player2ANT) {
    
    if (loops < 6) {
      
      if (loops <= 0) {
        
        mySound.setVolume(0.6);
        
        GoalSound.play();
        
      }
      
      if (loops == 1 || loops == 3 || loops == 5) {
          
      push();
        
      fill(0,255, 255);
        
      rect(0, 0, width, height);
      
      pop();
      
      }
      
      if (millis() >= millisANT + 220) {
      
        millisANT = millis();
      
      loops = loops + 1;
        
      }
      
    }
    
  }
    
  image(BackgroundIMG2, 0, 0, width, height);
  
  if (player1.score != Player1ANT || player2.score != Player2ANT) {
  
  if (loopsWistle < 20) {
      
      if (loopsWistle <= 0 && RotationWistle == 0) {
        
        WistleSound.play();
        
        if (PosJugador == 1) {
          
          if (PartidaEncontrada == 1) {
        
          ref = database.ref('Juegos/SVPong/BallXPlay1');
          ref.set(width/2);
          ref = database.ref('Juegos/SVPong/BallYPlay1');
          ref.set(height/2);

          ref = database.ref('Juegos/SVPong/BallVXPlay1');
          ref.set(0);
          ref = database.ref('Juegos/SVPong/BallVYPlay1');
          ref.set(0);
            
          } else if (PartidaEncontrada == 2) {
            
          ref = database.ref('Juegos/SVPong/BallXPlay2');
          ref.set(width/2);
          ref = database.ref('Juegos/SVPong/BallYPlay2');
          ref.set(height/2);

          ref = database.ref('Juegos/SVPong/BallVXPlay2');
          ref.set(0);
          ref = database.ref('Juegos/SVPong/BallVYPlay2');
          ref.set(0);
            
          } else if (PartidaEncontrada == 3) {
        
          ref = database.ref('Juegos/SVPong/BallXPlay3');
          ref.set(width/2);
          ref = database.ref('Juegos/SVPong/BallYPlay3');
          ref.set(height/2);

          ref = database.ref('Juegos/SVPong/BallVXPlay3');
          ref.set(0);
          ref = database.ref('Juegos/SVPong/BallVYPlay3');
          ref.set(0);
            
          }
            
        }
        
      }
      
    if (loopsWistle % 2 === 0) {
        
      RotationWistle = RotationWistle + random(0.05, 0.1);
        
    } else {
      
      RotationWistle = RotationWistle - random(0.05, 0.1);
      
    }
        
    push();
    
    translate(width/2, height/2);

    if (RotationWistle >= HALF_PI/5) {
        
      loopsWistle = loopsWistle + 1;
        
    }
      
    if (RotationWistle <= -HALF_PI/5) {
        
      loopsWistle = loopsWistle + 1;
        
    }
    
    rotate(RotationWistle);
    
    image(Wistle, -Wistle.width*0.3, -Wistle.height*0.3, Wistle.width*0.6, Wistle.height*0.6);
    
    if (TouchACTUAL > TouchMax) {
        
      TouchMax = TouchACTUAL;
        
    }
    
    TouchACTUAL = 0;
    
    pop();
        
    } else {
      
      console.log("RESETEANDO VARIABLES");
      
      console.log(ball.vx + "  :  " + ball.vy);
      
      if (BALLVXGenerated != 0 || BALLVYGenerated != 0) {
      
      ball.vx = BALLVXGenerated;
      ball.vy = BALLVYGenerated;
          
      }
      
      console.log(ball.vx + "  :  " + ball.vy);
      
      FirstTime2 = false;
     
      Player1ANT = player1.score;
      Player2ANT = player2.score;
      
      mySound.setVolume(1);
      
      loops = 0;
      
      loopsWistle = 0;
      
      RotationWistle = 0;
      
    }
    
  }
  
  if (FirstTime2 == true) {
   
    if (loopsWistle < 20) {
      
      if (loopsWistle <= 0 && RotationWistle == 0) {
        
        WistleSound.play();
        
      }
      
    if (loopsWistle % 2 === 0) {
        
      RotationWistle = RotationWistle + random(0.05, 0.2);
        
    } else {
      
      RotationWistle = RotationWistle - random(0.05, 0.2);
      
    }
        
    push();
    
    translate(width/2, height/2);

    if (RotationWistle >= HALF_PI/4) {
        
      loopsWistle = loopsWistle + 1;
        
    }
      
    if (RotationWistle <= -HALF_PI/4) {
        
      loopsWistle = loopsWistle + 1;
        
    }
    
    rotate(RotationWistle);
    
    image(Wistle, -Wistle.width*0.3, -Wistle.height*0.3, Wistle.width*0.6, Wistle.height*0.6);
      
    if (TouchACTUAL > TouchMax) {
        
      TouchMax = TouchACTUAL;
        
    }
      
    TouchACTUAL = 0;
    
    pop();
        
    } else {
      
      console.log("RESETEANDO VARIABLES");
      
      console.log(ball.vx + "  :  " + ball.vy);
      
      if (BALLVXGenerated != 0 || BALLVYGenerated != 0) {
      
      ball.vx = BALLVXGenerated;
      ball.vy = BALLVYGenerated;
          
      }
      
      console.log(ball.vx + "  :  " + ball.vy);
      
     
      FirstTime2 = false;
      
      Player1ANT = player1.score;
      Player2ANT = player2.score;
      
      mySound.setVolume(1);
      
      loops = 0;
      
      loopsWistle = 0;
      
      RotationWistle = 0;
      
    }
    
  }
  
}

function moveBall() {
  
  if(FirstTime2 == false && loopsWistle == 0) {
    
  if (gameMode === 1) {
      
  ball.x += ball.vx;
  ball.y += ball.vy;
      
  } else {
    
  if (PosJugador == 1) {
    
  ball.x += ball.vx;
  ball.y += ball.vy;
    
  } else {
    
    console.log(BALLVX + " -- " + BALLVY);
    
    if (BALLVX != 0 || BALLVY != 0) {
        
    ball.x += ball.vx;
    ball.y += ball.vy;    
        
    } else {
      
      ball.x = width/2;
      ball.y = height/2;
      ball.vx = 0;
      ball.vy = 0;
      
    }
    
  }
    
  }
    
  }

  // Rebote contra los bordes superior e inferior
  if (ball.y < 0 || ball.y > height) {
    ball.vy *= -1;
  }

  // Puntos
  if (ball.x < 0) {
    player2.score++;
    resetBall();
  } else if (ball.x > width) {
    player1.score++;
    resetBall();
  }
  
  particleSystem.run(); // Ejecutar el sistema de partículas
  
  push();
  translate(ball.x, ball.y);
  rotate(frameCount*0.08);
  imageMode(CENTER);
  image(Ball, 0, 0, 30, 30);
  pop();
  
  if (millis() > millisRefresBall + 1) {
    
    millisRefresBall = millis();
  
  if (PartidaEncontrada == 1) {
    
  if (PosJugador == 1) {
      
  ref = database.ref('Juegos/SVPong/BallXPlay1');
  ref.set(round(ball.x));
  ref = database.ref('Juegos/SVPong/BallYPlay1');
  ref.set(round(ball.y));
    
  ref = database.ref('Juegos/SVPong/BallVXPlay1');
  ref.set(round(ball.vx));
  ref = database.ref('Juegos/SVPong/BallVYPlay1');
  ref.set(round(ball.vy));
    
  ref = database.ref('Juegos/SVPong/ScorePlayer1Game1');
  ref.set(player1.score);
  ref = database.ref('Juegos/SVPong/ScorePlayer2Game1');
  ref.set(player2.score);
      
  } else {
    
    ref = database.ref('Juegos/SVPong/BallXPlay1');
    ref.on('value', BallXGame1);
    ref = database.ref('Juegos/SVPong/BallYPlay1');
    ref.on('value', BallYGame1);
    
    ref = database.ref('Juegos/SVPong/BallVXPlay1');
    ref.on('value', BallVXGame1);
    ref = database.ref('Juegos/SVPong/BallVYPlay1');
    ref.on('value', BallVYGame1);
    
  }
    
  } else if (PartidaEncontrada == 2) {
    
  if (PosJugador == 1) {
      
  ref = database.ref('Juegos/SVPong/BallXPlay2');
  ref.set(round(ball.x));
  ref = database.ref('Juegos/SVPong/BallYPlay2');
  ref.set(round(ball.y));
    
  ref = database.ref('Juegos/SVPong/BallVXPlay2');
  ref.set(round(ball.vx));
  ref = database.ref('Juegos/SVPong/BallVYPlay2');
  ref.set(round(ball.vy));
    
  ref = database.ref('Juegos/SVPong/ScorePlayer1Game2');
  ref.set(player1.score);
  ref = database.ref('Juegos/SVPong/ScorePlayer2Game2');
  ref.set(player2.score);
      
  } else {
    
    ref = database.ref('Juegos/SVPong/BallXPlay2');
    ref.on('value', BallXGame2);
    ref = database.ref('Juegos/SVPong/BallYPlay2');
    ref.on('value', BallYGame2);
    
    ref = database.ref('Juegos/SVPong/BallVXPlay2');
    ref.on('value', BallVXGame2);
    ref = database.ref('Juegos/SVPong/BallVYPlay2');
    ref.on('value', BallVYGame2);
    
    ref = database.ref('Juegos/SVPong/ScorePlayer1Game2');
    ref.on('value', ScorePlayer1Game2);
    ref = database.ref('Juegos/SVPong/ScorePlayer2Game2');
    ref.on('value', ScorePlayer2Game2);
    
  }
    
  } else if (PartidaEncontrada == 3) {
    
  if (PosJugador == 1) {
      
  ref = database.ref('Juegos/SVPong/BallXPlay3');
  ref.set(round(ball.x));
  ref = database.ref('Juegos/SVPong/BallYPlay3');
  ref.set(round(ball.y));
    
  ref = database.ref('Juegos/SVPong/BallVXPlay3');
  ref.set(round(ball.vx));
  ref = database.ref('Juegos/SVPong/BallVYPlay3');
  ref.set(round(ball.vy));
    
  ref = database.ref('Juegos/SVPong/ScorePlayer1Game3');
  ref.set(player1.score);
  ref = database.ref('Juegos/SVPong/ScorePlayer2Game3');
  ref.set(player2.score);
      
  } else {
    
    ref = database.ref('Juegos/SVPong/BallVXPlay3');
    ref.on('value', BallXGame3);
    ref = database.ref('Juegos/SVPong/BallVYPlay3');
    ref.on('value', BallYGame3);
    
    ref = database.ref('Juegos/SVPong/BallVXPlay3');
    ref.on('value', BallVXGame3);
    ref = database.ref('Juegos/SVPong/BallVYPlay3');
    ref.on('value', BallVYGame3);
    
    ref = database.ref('Juegos/SVPong/ScorePlayer1Game3');
    ref.on('value', ScorePlayer1Game3);
    ref = database.ref('Juegos/SVPong/ScorePlayer2Game3');
    ref.on('value', ScorePlayer2Game3);
    
  }
    
  }
    
  }
  
}

function resetBall() {
  
  if (PosJugador == 1) {
    
  if (PartidaEncontrada == 1) {
    
  ref = database.ref('Juegos/SVPong/BallXPlay1');
  ref.set(width/2);
  ref = database.ref('Juegos/SVPong/BallYPlay1');
  ref.set(height/2);
    
  ref = database.ref('Juegos/SVPong/BallVXPlay1');
  ref.set(0);
  ref = database.ref('Juegos/SVPong/BallVYPlay1');
  ref.set(0);
    
  ref = database.ref('Juegos/SVPong/ScorePlayer1Game1');
  ref.set(player1.score);
  ref = database.ref('Juegos/SVPong/ScorePlayer2Game1');
  ref.set(player2.score);
    
  } else if (PartidaEncontrada == 2) {
      
  ref = database.ref('Juegos/SVPong/BallXPlay2');
  ref.set(width/2);
  ref = database.ref('Juegos/SVPong/BallYPlay2');
  ref.set(height/2);
    
  ref = database.ref('Juegos/SVPong/BallVXPlay2');
  ref.set(0);
  ref = database.ref('Juegos/SVPong/BallVYPlay2');
  ref.set(0);
    
  ref = database.ref('Juegos/SVPong/ScorePlayer1Game2');
  ref.set(player1.score);
  ref = database.ref('Juegos/SVPong/ScorePlayer2Game2');
  ref.set(player2.score);
    
  } else if (PartidaEncontrada == 3) {
      
  ref = database.ref('Juegos/SVPong/BallXPlay3');
  ref.set(width/2);
  ref = database.ref('Juegos/SVPong/BallYPlay3');
  ref.set(height/2);
    
  ref = database.ref('Juegos/SVPong/BallVXPlay3');
  ref.set(0);
  ref = database.ref('Juegos/SVPong/BallVYPlay3');
  ref.set(0);
    
  ref = database.ref('Juegos/SVPong/ScorePlayer1Game3');
  ref.set(player1.score);
  ref = database.ref('Juegos/SVPong/ScorePlayer2Game3');
  ref.set(player2.score);
      
  }
      
  }
  
  ball.x = width / 2;
  ball.y = height / 2;
  BallVX = 0;
  BallVY = 0;
  BALLVXGenerated = 0;
  BALLVYGenerated = 0;
  loopsWistle = 0;
  
  if (gameMode === 1) {
  
  if (isFirstLaunch) {
    // Primer lanzamiento aleatorio entre izquierda y derecha
    ball.vx = random([-3, 3]);
    isFirstLaunch = false; // Después del primer lanzamiento ya no es aleatorio
  } else {
    // Lanzamiento alternado
    ball.vx = ball.vx < 0 ? 3 : -3; // Si va a la izquierda, ahora va a la derecha y viceversa
  }

  ball.vy = random([-2, 2]);
    
  } else {
  
    if (PosJugador == 1) {
      
    if (isFirstLaunch) {
    // Primer lanzamiento aleatorio entre izquierda y derecha
    BALLVXGenerated = random([-3, 3]);
    isFirstLaunch = false; // Después del primer lanzamiento ya no es aleatorio
  } else {
    // Lanzamiento alternado
    BALLVXGenerated = ball.vx < 0 ? 3 : -3; // Si va a la izquierda, ahora va a la derecha y viceversa
  }

  BALLVYGenerated = random([-2, 2]);
      
  ball.vx = 0;
  ball.vy = 0;
      
          console.log("BALLVXGenerated: " + BALLVXGenerated + "   BALLVYGenerated: " + BALLVYGenerated);
      
    }
    
  }
  
}

function drawPaddles() {
  
  if (gameMode === 1) {
    
    image(Paddle1, -7, constrain(player1.y - 98, -37, height - Paddle1.height + 37), Paddle1.width, Paddle1.height);
    image(Paddle2, width - 40, constrain(player2.y - 98, -37, height - Paddle2.height + 37), Paddle2.width, Paddle2.height);
    
  } else {
    
    image(Paddle1JP, -7, constrain(player1.y - 98, -37, height - Paddle1JP.height + 37), Paddle1JP.width, Paddle1JP.height);
    image(Paddle2JP, width - 40, constrain(player2.y - 98, -37, height - Paddle2JP.height + 37), Paddle2JP.width, Paddle2JP.height);
    
  }
  
  /*
  stroke(255);w
  strokeWeight(1);
  line(20, constrain(player1.y - 60, 0, height - 120), 20, constrain(player1.y + 60, 60, height)); // Aumentar el tamaño de las palas
  line(width - 20, constrain(player2.y - 60, 0, height - 120), width - 20, constrain(player2.y + 60, 60, height)); // Aumentar el tamaño de las palas
  
  */
}

function handleInput() {

  // Jugador 2 o IA
  if (aiEnabled) {
    
      // Jugador 1
  if (mouseY < height*0.45) {
    
    let MaxSpeed = map(mouseY, height*0.45, height*0.3, 0, 10);
    
    if (MaxSpeed >= 10) {
     
      MaxSpeed = 10;
      
    }
    
    player1.y = max(player1.y - MaxSpeed, 60); // "UP"
    
  } else if (mouseY > height*0.55) {
    
    let MaxSpeed = map(mouseY, height*0.55, height*0.7, 0, 10);
    
    if (MaxSpeed >= 10) {
     
      MaxSpeed = 10;
      
    }
    
    player1.y = min(player1.y + MaxSpeed, height - 60); // "DOWN"
    
  }
    
    aiMove();
    
  } else {
    
  if (PartidaEncontrada == 1) {
    
    if (PosJugador == 1) {
      
  if (mouseY < height*0.45) {
    
    let MaxSpeed = map(mouseY, height*0.45, height*0.3, 0, 10);
    
    if (MaxSpeed >= 10) {
     
      MaxSpeed = 10;
      
    }
    
    Player1Ylocal = max(Player1Ylocal - MaxSpeed, 60); // "UP"
    
  } else if (mouseY > height*0.55) {
    
    let MaxSpeed = map(mouseY, height*0.55, height*0.7, 0, 10);
    
    if (MaxSpeed >= 10) {
     
      MaxSpeed = 10;
      
    }
    
    Player1Ylocal = min(Player1Ylocal + MaxSpeed, height - 60); // "DOWN"
    
  }
    
    player1.y = Player1Ylocal;
    ref = database.ref('Juegos/SVPong/Player1PosPartida1');
    ref.set(round(Player1Ylocal));
    ref = database.ref('Juegos/SVPong/Player2PosPartida1');
    ref.on('value', Player2PosGame1);
    
    } else {
      
      if (mouseY < height*0.45) {
    
    let MaxSpeed = map(mouseY, height*0.45, height*0.3, 0, 10);
    
    if (MaxSpeed >= 10) {
     
      MaxSpeed = 10;
      
    }
    
    Player2Ylocal = max(Player2Ylocal - MaxSpeed, 60); // "UP"
    
  } else if (mouseY > height*0.55) {
    
    let MaxSpeed = map(mouseY, height*0.55, height*0.7, 0, 10);
    
    if (MaxSpeed >= 10) {
     
      MaxSpeed = 10;
      
    }
    
    Player2Ylocal = min(Player2Ylocal + MaxSpeed, height - 60); // "DOWN"
    
  }
      
    player2.y = Player2Ylocal;
    ref = database.ref('Juegos/SVPong/Player1PosPartida1');
    ref.on('value', Player1PosGame1);
    ref = database.ref('Juegos/SVPong/Player2PosPartida1');
    ref.set(round(Player2Ylocal));
      
    }

    
  } else if (PartidaEncontrada == 2) {
    
    if (PosJugador == 1) {
      
if (mouseY < height*0.45) {
    
    let MaxSpeed = map(mouseY, height*0.45, height*0.3, 0, 10);
    
    if (MaxSpeed >= 10) {
     
      MaxSpeed = 10;
      
    }
    
    Player1Ylocal = max(Player1Ylocal - MaxSpeed, 60); // "UP"
    
  } else if (mouseY > height*0.55) {
    
    let MaxSpeed = map(mouseY, height*0.55, height*0.7, 0, 10);
    
    if (MaxSpeed >= 10) {
     
      MaxSpeed = 10;
      
    }
    
    Player1Ylocal = min(Player1Ylocal + MaxSpeed, height - 60); // "DOWN"
    
  }
      
    player1.y = Player1Ylocal;
    ref = database.ref('Juegos/SVPong/Player1PosPartida2');
    ref.set(round(Player1Ylocal));
    ref = database.ref('Juegos/SVPong/Player2PosPartida2');
    ref.on('value', Player2PosGame2);
    
    } else {
      
if (mouseY < height*0.45) {
    
    let MaxSpeed = map(mouseY, height*0.45, height*0.3, 0, 10);
    
    if (MaxSpeed >= 10) {
     
      MaxSpeed = 10;
      
    }
    
    Player12local = max(Player2Ylocal - MaxSpeed, 60); // "UP"
    
  } else if (mouseY > height*0.55) {
    
    let MaxSpeed = map(mouseY, height*0.55, height*0.7, 0, 10);
    
    if (MaxSpeed >= 10) {
     
      MaxSpeed = 10;
      
    }
    
    Player2Ylocal = min(Player2Ylocal + MaxSpeed, height - 60); // "DOWN"
    
  }
      
    player2.y = Player2Ylocal;
    ref = database.ref('Juegos/SVPong/Player1PosPartida2');
    ref.on('value', Player1PosGame2);
    ref = database.ref('Juegos/SVPong/Player2PosPartida2');
    ref.set(round(Player2Ylocal));
      
    }

    
  } else if (PartidaEncontrada == 3) {
    
    if (PosJugador == 1) {
      
      if (mouseY < height*0.45) {
    
    let MaxSpeed = map(mouseY, height*0.45, height*0.3, 0, 10);
    
    if (MaxSpeed >= 10) {
     
      MaxSpeed = 10;
      
    }
    
    Player1Ylocal = max(Player1Ylocal - MaxSpeed, 60); // "UP"
    
  } else if (mouseY > height*0.55) {
    
    let MaxSpeed = map(mouseY, height*0.55, height*0.7, 0, 10);
    
    if (MaxSpeed >= 10) {
     
      MaxSpeed = 10;
      
    }
    
    Player1Ylocal = min(Player1Ylocal + MaxSpeed, height - 60); // "DOWN"
    
  }
      
    player1.y = Player1Ylocal;
    ref = database.ref('Juegos/SVPong/Player1PosPartida3');
    ref.set(round(Player1Ylocal));
    ref = database.ref('Juegos/SVPong/Player2PosPartida3');
    ref.on('value', Player2PosGame3);
    
    } else {
      
      if (mouseY < height*0.45) {
    
    let MaxSpeed = map(mouseY, height*0.45, height*0.3, 0, 10);
    
    if (MaxSpeed >= 10) {
     
      MaxSpeed = 10;
      
    }
    
    Player2Ylocal = max(Player2Ylocal - MaxSpeed, 60); // "UP"
    
  } else if (mouseY > height*0.55) {
    
    let MaxSpeed = map(mouseY, height*0.55, height*0.7, 0, 10);
    
    if (MaxSpeed >= 10) {
     
      MaxSpeed = 10;
      
    }
    
    Player2Ylocal = min(Player2Ylocal + MaxSpeed, height - 60); // "DOWN"
    
  }
      
    player2.y = Player2Ylocal;
    ref = database.ref('Juegos/SVPong/Player1PosPartida3');
    ref.on('value', Player1PosGame3);
    ref = database.ref('Juegos/SVPong/Player2PosPartida3');
    ref.set(round(Player2Ylocal));
      
    }

  }

  }
}

function aiMove() {
  if (ball.vx > 0 && ball.x > width - 300) { // IA solo se mueve cuando la bola está cerca
    if (ball.y < player2.y - 8) {
      player2.y -= 8;
    } else if (ball.y > player2.y + 8) {
      player2.y += 8;
    }
  }
  
  if (ball.vx > 0 && ball.x <= width - 300 && ball.x > width - 450) { // IA solo se mueve cuando la bola está cerca
    if (ball.y < player2.y - 30) {
      player2.y -= map(ball.x, width - 450, width - 300, 0, 7);
    } else if (ball.y > player2.y + 30) {
      player2.y += map(ball.x, width - 450, width - 300, 0, 7);
    }
  }
  
}

function checkCollisions() {
  
  let currentTime = millis();

  // Colisión con la pala del jugador 1
  if (ball.x - 10 < 25 && ball.y > player1.y - 60 && ball.y < player1.y + 60 && ball.lastCollisionPaddle !== 'player1') {
    ball.vx *= -1;
    ball.x = 25;
    TouchACTUAL = TouchACTUAL + 1;
    let hitPos = (ball.y - player1.y) / 60; // Normalizar la posición de impacto con la pala
    ball.vy = hitPos * 5; // Modificar el ángulo de rebote según la posición
    ball.lastCollisionPaddle = 'player1';
  }

  // Colisión con la pala del jugador 2
  if (ball.x + 10 > width - 25 && ball.y > player2.y - 60 && ball.y < player2.y + 60 && ball.lastCollisionPaddle !== 'player2') {
    ball.vx *= -1;
    ball.x = width - 25;
    TouchACTUAL = TouchACTUAL + 1;
    let hitPos = (ball.y - player2.y) / 60; // Normalizar la posición de impacto con la pala
    ball.vy = hitPos * 5; // Modificar el ángulo de rebote según la posición
    ball.lastCollisionPaddle = 'player2';
  }

  // Reinicia la última colisión si la bola se aleja lo suficiente
  if (ball.x > 50 && ball.x < width - 50) {
    ball.lastCollisionPaddle = null;
  }

}

function increaseBallSpeed() {
  if (millis() - lastSpeedIncreaseTime > ballSpeedIncreaseInterval) {
    ball.vx *= 1.1;
    ball.vy *= 1.1;
    lastSpeedIncreaseTime = millis();
  }
}

function displayScores() {
  fill(255);
  textSize(80); // Duplicar el tamaño del texto
  stroke(0);
  strokeWeight(8);
  fill(255, 162, 0);
  text(player1.score, width / 4, 78);
  fill(0, 190, 215);
  text(player2.score, (3 * width) / 4, 78);
  fill(5, 46, 78);
  stroke(5, 46, 78);
  strokeWeight(20);
  text(TouchACTUAL, width/2, height - 78);
  fill(200, 200, 200);
  text(TouchACTUAL, width/2, height - 78);
}

function checkWinner() {
  if (player1.score >= winningScore) {
    winner = "Jugador 1";
    gameEndTime = millis();
  } else if (player2.score >= winningScore) {
    winner = "Jugador 2";
    gameEndTime = millis();
  }
}

// Clase ParticleSystem para generar las partículas difusas
class ParticleSystem {
  constructor(particleCount, origin, textureImage) {
    this.particles = [];
    this.origin = origin.copy();
    this.img = textureImage;
    for (let i = 0; i < particleCount; i++) {
      this.particles.push(new Particle(this.origin, this.img));
    }
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let particle = this.particles[i];
      particle.run();
      if (particle.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  addParticle() {
    this.particles.push(new Particle(this.origin, this.img));
  }
}

class Particle {
  constructor(pos, imageTexture) {
    this.loc = pos.copy();
    let xSpeed = randomGaussian() * 0.5;
    let ySpeed = randomGaussian() * 0.5;
    this.velocity = createVector(xSpeed, ySpeed);
    this.acceleration = createVector();
    this.lifespan = 80;
    this.texture = imageTexture;
  }

  run() {
    this.update();
    this.render();
  }

  render() {
    push();
    imageMode(CENTER);
    tint(map(sin(frameCount*0.08), -1, 1, 0, 170), map(sin(frameCount*0.08), -1, 1, 135, 0), map(sin(frameCount*0.08), -1, 1, 245, 240), this.lifespan);
    image(this.texture, this.loc.x, this.loc.y);
    pop();
  }

  applyForce(f) {
    this.acceleration.add(f);
  }

  isDead() {
    return this.lifespan <= 0;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.loc.add(this.velocity);
    this.lifespan -= 2.5;
    this.acceleration.mult(0);
  }
}

function PantallaConexion() {
  
    let img = VideoBG.get();
    push();
    tint(160, 55, 210, map(sin(frameCount*0.05), -1, 1, 180, 220));
    image(img, 0, 0, width, height);
    pop();
    image(FondoConnect, 0, 0, width, height);
    
    if (TextoWaiting == true) {
    
    push();
    
    tint(255, map(FadeText, 120, 255, 255, 200), map(FadeText, 120, 255, 120, 240));
    
    image(Waiting, width*0.18, height*0.68, Waiting.width*0.15, Waiting.height*0.15);
    
    pop();
    
    }
    
    if (Desvanecido > 0) {
      
     Desvanecido = Desvanecido - 1; 
      
    }
    
    fill(0, 0, 0, Desvanecido);
    
    rect(0, 0, width, height);
    
    if (Desvanecido <= 0) {
      
      if (SinBird < HALF_PI) {
        
        SinBird = SinBird + 0.03;
          
      } else {
        
        if (FadeText >= 255 && TextFadeIncrement == true) {
          
          TextFadeIncrement = false;
          
        }
        
        if (FadeText <= 120 && TextFadeIncrement == false) {
          
          TextFadeIncrement = true;
          
        }
        
        if (TextFadeIncrement == true) {
          
          FadeText = FadeText + 2;
          
        } else {
          
          FadeText = FadeText - 2;
          
        }
        
        if (FadeText >= 255) {
          
         FadeText = 255; 
          
        }
        
        push();
        
        tint(255, 255, 255, FadeText);
        
        image(TextoConectar, 0, height - TextoConectar.height, width, TextoConectar.height);
        
        pop();
        
        if (FadeText == 121 || TextoWaiting == true) {
          
          TextoWaiting = true;
            
        fill(208, 179, 255);
        textFont(myFont2);
        textSize(45);
        strokeWeight(6);
        stroke(0, 18, 77);
        textAlign(LEFT, CENTER);
          
        if (TextoPunto == 0) {
              
        text("Esperando a que se unan", width*0.25, height*0.72);  
          
        } else if (TextoPunto == 1) {
              
        text("Esperando a que se unan.", width*0.25, height*0.72);  
          
        } else if (TextoPunto == 2) {
              
        text("Esperando a que se unan..", width*0.25, height*0.72);  
          
        } else if (TextoPunto == 3) {
              
        text("Esperando a que se unan...", width*0.25, height*0.72);  
          
        }
          
        textFont(myFont);
          
        if (FadeText >= 255) {
           
        if (TextoPunto == 0) {
              
        TextoPunto = 1;
          
        } else if (TextoPunto == 1) {
              
        TextoPunto = 2;
          
        } else if (TextoPunto == 2) {
              
        TextoPunto = 3; 
          
        } else if (TextoPunto == 3) {
              
        TextoPunto = 0;
          
        }
            
        }
            
        }
        
      }
      
    image(LeftBird, map(sin(SinBird), 0, 1, 0, LeftBird.width*1.1) - LeftBird.width, height - LeftBird.height, LeftBird.width, LeftBird.height);
    image(RightBird,  width - map(sin(SinBird), 0, 1, 0, RightBird.width*1.1), height - RightBird.height, RightBird.width, RightBird.height);
        
    }
  
}
