function Blob(){
  this.pos = [];
  this.strokecolor = color(0);
  this.fillcolor = color(255);
  this.thickness = 1;
  this.center = undefined;
  this.corners = 0;
  this.size = 0;
}

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
Blob.prototype.create = function(center, corners, width, height){
  this.pos = [];
  this.center = center.copy();
  this.corners = corners;
  this.size = size;
  
  var p;
  var r = random(TWO_PI/corners);
  for (var i = 0; i < corners; i += 1) {
    var wradius = random( 0, width/2);
    var hradius = random( 0, height/2);
    p = posOnEllipse(center,wradius, hradius, corners, i + r);
    append(this.pos, p);
  }
  append(this.pos, this.pos[0]);
  append(this.pos, this.pos[1]);
  append(this.pos, this.pos[2]);
  append(this.pos, this.pos[3]);
};

Blob.prototype.draw = function(pg){
  if(typeof(pg) == "undefined"){
    beginShape();
    for (var i = 0; i < this.pos.length - 1; i += 1) {
      curveVertex(this.pos[i].x, this.pos[i].y);
    }
   endShape();
  }
  else {
    pg.beginShape();
    for (var i = 0; i < this.pos.length - 1; i += 1) {
      pg.curveVertex(this.pos[i].x, this.pos[i].y);
    }
    pg.endShape();
  }
  
};








