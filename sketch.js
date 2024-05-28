// variáveis bola
let xBola = 100;
let yBola = 50;
let diametro = 20;
let raio = diametro / 2;
let velocidadeXbola = 5;
let velocidadeYbola = 5;

// variáveis raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

// variaveis oponente
let xOponente = 680;
let yOponente = 150;
let velocidadeYOponente

let colidiu = false;

// pontuação
let meusPontos = 0;
let pontosOponente = 0;

// sons
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(700, 400);
  trilha.loop();
}

function draw() {
  background("black");
  mostraBola ();
  movimentoBola ();
  colisaoBorda ();
  mostraRaquete (xRaquete, yRaquete);
  movimentoRaquete ();
  //colisaoRaquete ();
  verificaColisao (xRaquete, yRaquete);
  mostraRaquete (xOponente, yOponente);
  movimentoOponente();
  verificaColisao (xOponente, yOponente);
  placar ();
  marcarPontos ();
  bolaPresa ();
  bolaPresaOponente ();
}

function mostraBola(){
  circle(xBola, yBola, diametro);
}

function movimentoBola (){
  xBola += velocidadeXbola;
  yBola += velocidadeYbola;
}

function colisaoBorda (){
    if (xBola + raio > width || xBola - raio < 0) {
    velocidadeXbola *= -1;
  }
  if (yBola + raio > height || yBola - raio < 0) {
    velocidadeYbola *= -1;
  }
  
}

function mostraRaquete (x, y){
  rect (x, y, comprimentoRaquete, alturaRaquete);
}

function movimentoRaquete (){
  if (keyIsDown (UP_ARROW)){
    yRaquete -= 10;
    }
    if (keyIsDown (DOWN_ARROW)){
    yRaquete += 10; 
    }
}
function colisaoRaquete (){
  if (xBola - raio < xRaquete + comprimentoRaquete && yBola - raio < yRaquete + alturaRaquete && yBola + raio > yRaquete) {
      velocidadeXbola *= -1;
    raquetada.play();
    }
}

function verificaColisao (x, y){
  colidiu =
  collideRectCircle (x, y, comprimentoRaquete, alturaRaquete, xBola, yBola, raio);
  if (colidiu){
    velocidadeXbola *= -1;
    raquetada.play();
  }
}

function movimentoOponente(){
  if (keyIsDown (87)){
    yOponente -= 10;
    }
    if (keyIsDown (83)){
    yOponente += 10; 
    }
}

function placar (){
  stroke ("whire");
  textAlign (CENTER);
  textSize (20);
  fill ("orange");
  rect (378, 10, 40, 20);
  fill ("white");
  text (meusPontos, 398, 26);
  fill ("orange");
  rect (321, 10, 40, 20);
  fill ("white");
  text (pontosOponente, 341, 26);
}

function marcarPontos (){
  if (xBola > 690){
    meusPontos += 1;
    ponto.play();
  }
  
  if (xBola < 10){
    pontosOponente += 1;
    ponto.play();
  }
}
  
function bolaPresa(){
    if (xBola - raio < 1){
    xBola = 23
    }
}

function bolaPresaOponente(){
    if (xBola - raio > 699){
    xBola = 677
    }
}

  