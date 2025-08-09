var p1 = createSprite(200, 2, 400, 20);
p1.shapeColor = "blue";
var p2 = createSprite(400, 200, 20, 400);
p2.shapeColor = "blue";
var p3 = createSprite(200, 398, 400, 20);
p3.shapeColor = "blue";
var p4 = createSprite(0, 200, 20, 400);
p4.shapeColor = "blue";
var h1 = createSprite(72, 300, 20, 400);
h1.shapeColor = "blue";
var h2 = createSprite(140, 0, 20, 200);
h2.shapeColor = "blue";
var h3 = createSprite(160, 300, 20, 200);
h3.shapeColor = "blue";
var h4 = createSprite(270, 130, 20, 80);
h4.shapeColor = "blue";
var v1 = createSprite(205, 97, 150, 20);
v1.shapeColor = "blue";
var v2 = createSprite(200, 340, 60, 18);
v2.shapeColor = "blue";
var v3 = createSprite(185, 200, 70, 20);
v3.shapeColor = "blue";
var v4 = createSprite(330, 110, 20,200);
v4.shapeColor = "blue";
var v5 = createSprite(300, 320, 20, 140);
v5.shapeColor = "blue";
var jogador = createSprite(40, 390, 20, 20);
jogador.setAnimation("jogador");
jogador.scale = 0.3;
var ponto8 = createSprite(100, 60, 10, 10);
ponto8.shapeColor = "white";
var ponto9 = createSprite(100, 110, 10, 10);
ponto9.shapeColor = "white";
var ponto10 = createSprite(100, 160, 10, 10);
ponto10.shapeColor = "white";
var ponto11 = createSprite(100, 210, 10, 10);
ponto11.shapeColor = "white";
var ponto12 = createSprite(100, 260, 10, 10);
ponto12.shapeColor = "white";
var ponto13 = createSprite(100, 310, 10, 10);
ponto13.shapeColor = "white";
var ponto14 = createSprite(100, 360, 10, 10);
ponto14.shapeColor = "white";
var ponto15 = createSprite(160, 60, 10, 10);
ponto15.shapeColor = "while";
var ponto16 = createSprite(210, 60, 10, 10);
ponto16.shapeColor = "while";
var ponto17 = createSprite(260, 60, 10, 10);
ponto17.shapeColor = "white";
var ponto18 = createSprite(310, 60, 10, 10);
ponto18.shapeColor = "white";
var ponto19 = createSprite(180, 360, 10, 10);
ponto19.shapeColor = "white";
var ponto20 = createSprite(220, 360, 10, 10);
ponto20.shapeColor = "white";
var ponto21 = createSprite(260, 360, 10, 10);
ponto21.shapeColor = "white";
var ponto22 = createSprite(180, 310, 10, 10);
ponto22.shapeColor = "white";
var ponto23 = createSprite(180, 260, 10, 10);
ponto23.shapeColor = "white";
var ponto24 = createSprite(360, 60, 10, 10);
ponto24.shapeColor = "white";
var ponto25 = createSprite(360, 100, 10, 10);
ponto25.shapeColor = "white";
var ponto26 = createSprite(360, 150, 10, 10);
ponto26.shapeColor = "white";
var ponto27 = createSprite(360, 200, 10, 10);
ponto27.shapeColor = "white";
var pontos = 0;
var chegada = 0;
var chegada = createSprite(350, 375, 80, 26);
chegada.shapeColor = "yellow";
var vitoria = createSprite(5000, 200);
vitoria.setAnimation("vitoria");
vitoria.scale = 0.8;
var perdeu = createSprite(5000, 200);
perdeu.setAnimation("perdeu");
perdeu.scale = 0.8;
var refazer = createSprite(381, 21);
refazer.setAnimation("refazer");
refazer.scale = 0.08;



function chegadaf() {
  if (jogador.isTouching(chegada)&&pontos == 19) {
    vitoria.x = 200;
  } 
  if (jogador.isTouching(chegada)&&pontos < 19) {
    perdeu.x = 200;
  }
}
function colidir() {
  jogador.collide(p1);
  jogador.collide(p2);
  jogador.collide(p3);
  jogador.collide(p4);
  jogador.collide(h1);
  jogador.collide(h2);
  jogador.collide(h3);
  jogador.collide(h4);
  jogador.collide(v1);
  jogador.collide(v2);
  jogador.collide(v3);
  jogador.collide(v4);
  jogador.collide(v5);
}
function pontuacao() {
  if (jogador.isTouching(ponto8)) {
    ponto8.x = 5000;
    pontos += 1;
  }
  if (jogador.isTouching(ponto9)) {
    ponto9.x = 5000;
    pontos += 1;
  }
  if (jogador.isTouching(ponto10)) {
    ponto10.x += 5000;
  pontos += 1;
  }
  if (jogador.isTouching(ponto11)) {
    ponto11.x = 5000;
    pontos.x += 1;
  }
  if (jogador.isTouching(ponto12)) {
    ponto12.x = 5000;
    pontos += 1;
  }
  if (jogador.isTouching(ponto13)) {
    ponto13.x = 5000;
    pontos += 1;
  }
  if (jogador.isTouching(ponto13)) {
    ponto13.x = 5000;
    pontos += 1;
  }
  if (jogador.isTouching(ponto14)) {
    ponto14.x = 5000;
    pontos += 1;
  }
  if (jogador.isTouching(ponto15)) {
    ponto15.x = 5000;
    pontos += 1;
  }
  if (jogador.isTouching(ponto16)) {
    ponto16.x = 5000;
    pontos += 1;
  }
  if (jogador.isTouching(ponto17)) {
    ponto17.x = 5000;
    pontos += 1;
  }
  if (jogador.isTouching(ponto18)) {
    ponto18.x = 5000;
    pontos += 1;
  }
  if (jogador.isTouching(ponto19)) {
    ponto19.x = 5000;
    pontos += 1;
  }
  if (jogador.isTouching(ponto20)) {
    ponto20.x = 5000;
    pontos += 1;
  }
  if (jogador.isTouching(ponto21)) {
    ponto21.x = 5000;
    pontos += 1;
  }
  if (jogador.isTouching(ponto22)) {
    ponto22.x = 5000;
    pontos += 1;
  }
  if (jogador.isTouching(ponto22)) {
    ponto22.x = 5000;
    pontos += 1;
  }
  if (jogador.isTouching(ponto23)) {
    ponto23.x = 5000;
    pontos += 1;
  }
  if (jogador.isTouching(ponto24)) {
    ponto24.x = 5000;
    pontos += 1;
  }
  if (jogador.isTouching(ponto25)) {
    ponto25.x = 5000;
    pontos += 1;
  }
  if (jogador.isTouching(ponto26)) {
    ponto26.x = 5000;
    pontos += 1;
  }
  if (jogador.isTouching(ponto27)) {
    ponto27.x = 5000;
    pontos += 1;
  }

}
function movimentos() {
  if (keyDown("up")) {
    jogador.y -= 5;
    jogador.rotation = 270;
  }
  if (keyDown("down")) {
    jogador.y += 5;
    jogador.rotation = 90;
  }
  if (keyDown("left")) {
    jogador.x -= 5;
    jogador.rotation = 180;
  }
  if (keyDown("right")) {
    jogador.x += 5;
    jogador.rotation = 0;
  }
}
function draw() {
  if (mousePressedOver(refazer)) {
    
  }
  background("black");
  colidir();
  movimentos();
  pontuacao();
  textSize(20);
  fill("yellow");
  text("P: " + pontos, 20, 25);
  chegadaf();
  drawSprites();
}
