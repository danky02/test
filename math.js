////////////////////////////////////////////////////////////////////////////////
function MCD(values) {
  this.index = 2;
  while (index < abs(min(values))) {
    var totDivisible = 0;
    for (let i = 0; i < values.length; i++) {
      if (values[i] / this.index == int(values[i] / this.index)) {
        totDivisible++;
      }
    }
    if (totDivisible == values.length) {
      for (let i = 0; i < values.length; i++) {
        values[i] /= this.index;
      }
      this.index = 2;
    } else {
      this.index += this.index == 2 ? 1 : 2;
    }
  }
  return values;
}
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
class Line {
  constructor(ax, ay, bx, by) {
    this.points = {
      ax: ax,
      ay: ay,
      bx: bx,
      by: by
    }
    this.a = ay - by;
    this.b = bx - ax;
    this.c = (by * ax) - (bx * ay);
    var values = MCD([this.a, this.b, this.c]);
    this.a = values[0];
    this.b = values[1];
    this.c = values[2];
  }

  print() {
    console.log(this.a + "x + " + this.b + "y + " + this.c + " = 0");
  }
}
////////////////////////////////////////////////////////////////////////////////
function intersection(s, r, draw = false) {
  strokeWeight(1);
  stroke(0, 255, 0);
  if (draw) {
    if (s.b != 0) {
      line(0, -s.c / s.b, width, ((-s.a * width) - s.c) / s.b);
    } else {
      line(-s.c / s.a, 0, -s.c / s.a, height);
    }
    if (r.b != 0) {
      line(0, -r.c / r.b, width, ((-r.a * width) - r.c) / r.b);
    } else {
      line(-r.c / r.a, 0, -r.c / r.a, height);
    }
  }

  //console.log(s, r);
  let det = (s.a * r.b) - (r.a * s.b);
  let position = {
    x: undefined,
    y: undefined,
    parallel: true,
  };
  if (det != 0) {
    let dx = (-s.c * r.b) - (-r.c * s.b);
    let dy = (s.a * -r.c) - (r.a * -s.c);
    position.x = dx / det;
    position.y = dy / det;
    position.parallel = false;
  }
  return position;
}
////////////////////////////////////////////////////////////////////////////////
