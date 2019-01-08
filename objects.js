///////////////////////////////////////////////////////////////////////////
function object(x, y, collider) {
  this.obj = {
    position: {
      x: x,
      y: y,
      set: function(x, y){
        this.x = x;
        this.y = y;
      }
    },
    sprites: [],
    addSprite: function(sprite) {
      this.sprites[this.sprites.length] = sprite;
    },
    texture: function(s = 0, visible = true) {
      if (visible) {
        var sprite = this.sprites[s];
        var x = this.position.x + sprite.pos.x;
        var y = this.position.y + sprite.pos.y;
        var dimX = sprite.dim.x;
        var dimY = sprite.dim.y;
        var img = sprite.texture;
        image(img, x, y, dimX, dimY);
      }
    },
    colliderPoints: collider,
    drawCollider: function() {
      stroke(0);
      strokeWeight(2);
      noFill();
      beginShape();
      for (var i = 0; i < this.colliderPoints.length; i += 2) {
        vertex(this.canvasPoints(i), this.canvasPoints(i + 1));
      }
      endShape(CLOSE);
    },
    canvasPoints: function(pos) {
      return this.colliderPoints[pos] + (pos % 2 == 0 ? this.position.x : this.position.y);
    }
  };
  return this.obj;
}
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
function loadSprite(link, posX, posY, dimX, dimY) {
  this.sprites = {
    pos: {
      x: posX,
      y: posY
    },
    dim: {
      x: dimX,
      y: dimY
    },
    texture: loadImage(link),
  }
  return this.sprites;
}
///////////////////////////////////////////////////////////////////////////
