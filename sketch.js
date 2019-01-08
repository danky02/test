var ball = object(0, 0, circleCollider(50, 30));
var rec = object(200, 200, rectCollider(100, 100));

function setup() {
  createCanvas(400, 400);
  ball.addSprite(loadSprite("sprites/basketball.png", -50, -50, 100, 100));
  //console.log(ball);
}

function draw() {
}
