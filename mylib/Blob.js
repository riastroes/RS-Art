function Blob(){
  this.pos = [];
  this.strokecolor = color(0);
  this.fillcolor = color(255);
  this.thickness = 1;
  this.center;
  this.corners;
  this.size;
};

Blob.prototype.style = function(strokecolor, fillcolor, thickness){
  if (strokecolor != undefined){
    this.strokecolor = strokecolor;
    stroke(this.strokecolor);
  }
  if(!strokecolor){
    noStroke();
  }
  if (fillcolor != undefined) {
    this.fillcolor = fillcolor;
    fill(this.fillcolor);
  }
 if(!fillcolor){
    noFill();
  }
  if (thickness != undefined) {
    this.thickness = thickness;
  }
  
};
Blob.prototype.create = function(center, corners, cellwidth, cellheight){
  this.pos = [];
  this.center = center.copy();
  this.corners = corners;
  this.size = size;
  
  var p;
  var r = random(TWO_PI/corners);
  for (var i = 0; i < corners; i += 1) {
    var wradius = random( 0, cellwidth/2);
    var hradius = random( 0, cellheight/2);
    p = posOnEllipse(center,wradius, hradius, corners, i + r);
    append(this.pos, p);
  }
  append(this.pos, this.pos[0]);
  append(this.pos, this.pos[1]);
  append(this.pos, this.pos[2]);
  append(this.pos, this.pos[3]);
}

Blob.prototype.draw = function(){
  
  beginShape();
    for (var i = 0; i < this.pos.length - 1; i += 1) {
      curveVertex(this.pos[i].x, this.pos[i].y);
    }
  endShape();
  
}








