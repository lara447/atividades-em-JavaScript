var fundo = createSprite(200, 200);
fundo.setAnimation("fundo");

var estrela = createSprite(200, 200);
estrela.setAnimation("estrela");
estrela.scale = 0.3;

var cavalo = createSprite(48, 65);
cavalo.setAnimation("cavalo");
cavalo.scale = 0.3;

var peixe = createSprite(330, 43);
peixe.setAnimation("peixe");
peixe.scale = 0.3;

var caranguejo = createSprite(200, 340);
caranguejo.setAnimation("caranguejo");
caranguejo.scale = 0.3;

function draw() {
  caranguejo.collide(peixe);
  if (keyDown("left")) {
    peixe.x = peixe.x - 3;
  }
  if (keyDown("right")) {
    peixe.x = peixe.x + 3;
  }
  if (keyDown("down")){
    peixe.y = peixe.y + 3;
  }
  if (keyDown("up")){
    peixe.y = peixe.y - 3;
  }
  if (keyDown("space")){
    estrela.x = random(1, 350);  
    estrela.y = random(1, 400);
  }
  if (keyDown("a")) {
    caranguejo.x -= 3;
  
  }
  if(keyDown("d")){
  caranguejo.x += 3;
  }
  if (keyDown("w")) {
    caranguejo.y -= 3;
  }
  if (keyDown("s")) {
  caranguejo.y += 3;
  }
  drawSprites();  
}
