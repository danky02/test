///////////////////////////////////////////////////////////////////////////
function collision(obj1, obj2, draw = false) {
  for (var v = 0; v < obj1.colliderPoints.length; v += 2) {
    var x1 = obj1.canvasPoints(v);
    var y1 = obj1.canvasPoints(v+1);
    var x2 = obj1.canvasPoints((v+2) %(obj1.colliderPoints.length));
    var y2 = obj1.canvasPoints((v+3) %(obj1.colliderPoints.length));
    var line1 = new Line(x1, y1, x2, y2);
    for (var c = 0; c < obj2.colliderPoints.length; c += 2) {
      var x3 = obj2.canvasPoints(c);
      var y3 = obj2.canvasPoints(c+1);
      var x4 = obj2.canvasPoints((c+2) %(obj2.colliderPoints.length));
      var y4 = obj2.canvasPoints((c+3) %(obj2.colliderPoints.length));
      var line2 = new Line(x3, y3, x4, y4);

      if(segments_collision(line1, line2, draw)){
        return true;
      }
    }
  }
  return false;
}
///////////////////////////////////////////////////////////////////////////
function segments_collision(l1, l2, draw = false){
  var inters = intersection(l1, l2, draw);
  if(draw){
    strokeWeight(15);
    stroke(255, 0, 0, 200);
    point(inters.x, inters.y);
    strokeWeight(1);
    stroke(255, 0, 0);
    line(l2.points.ax, l2.points.ay, l2.points.ax, l2.points.by);
    line(l2.points.ax, l2.points.by, l2.points.bx, l2.points.by);
    line(l1.points.ax, l1.points.ay, l1.points.ax, l1.points.by);
    line(l1.points.ax, l1.points.by, l1.points.bx, l1.points.by);
  }
  var x1 = [l1.points.ax, inters.x, l1.points.bx].sort(function(a, b){return a-b})[1] == inters.x;
  var y1 = [l1.points.ay, inters.y, l1.points.by].sort(function(a, b){return a-b})[1] == inters.y;
  var x2 = [l2.points.ax, inters.x, l2.points.bx].sort(function(a, b){return a-b})[1] == inters.x;
  var y2 = [l2.points.ay, inters.y, l2.points.by].sort(function(a, b){return a-b})[1] == inters.y;
  return x1 && y1 && x2 && y2;
}
//////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////
function rectCollider(dimX, dimY){
  return [0, 0, dimX, 0, dimX, dimY, 0, dimY];
}
//////////////////////////////////////////////////////////////////////////////////////
function circleCollider(radius, segments){
  var step = (2*Math.PI)/segments;
  //console.log(step);
  var ret = [];
  var index = 0;
  for(var s = 0; s < segments; s++){
    ret[index] = Math.sin(s*step)*radius;
    ret[index+1] = Math.cos(s*step)*radius;
    index+=2;
  }
  return ret;
}
