function Blobber(){
  this.pos = [];
  this.strokecolor = color(0);
  this.fillcolor = color(255);
  this.thickness = 1;
  this.center = undefined;
  this.corners = 0;
  this.size = 0;
  this.morepos = [];
}

//Blobber.prototype.style = function(strokecolor, fillcolor, thickness){
//  if (strokecolor != undefined  && strokecolor != false && strokecolor != ""){
//    this.strokecolor = strokecolor;
//    stroke(this.strokecolor);
//  }
//  else{
//    noStroke();
//  }
//  if (fillcolor != undefined  && fillcolor != false && fillcolor != "" ) {
//    this.fillcolor = fillcolor;
//    fill(this.fillcolor);
//  }
// else{
//    noFill();
//  }
//  if (thickness != undefined) {
//    this.thickness = thickness;
//  }
//  else{
//    this.thickness = 1;
//  }
//
//};
Blobber.prototype.init = function(center, corners, width, height){
  this.pos = [];
  this.center = center.copy();
  this.corners = corners;
  this.size = size;
  
  var p;
  var r = random(TWO_PI/corners);
  for (var i = 0; i < corners; i += 1) {
    var wradius = random( width/4, width/2);
    var hradius = random( height/4, height/2);
    p = posOnEllipse(center,wradius, hradius, corners, i + r);
    append(this.pos, p);
  }
  append(this.pos, this.pos[0]);
  append(this.pos, this.pos[1]);
  append(this.pos, this.pos[2]);
  append(this.pos, this.pos[3]);
};

Blobber.prototype.draw = function(pg){
  var i;
  if(typeof(pg) == "undefined"){
    beginShape();
    for (i = 0; i < this.pos.length - 1; i += 1) {
      curveVertex(this.pos[i].x, this.pos[i].y);
    }
   endShape();
  }
  else {
    pg.beginShape();
    for (i = 0; i < this.pos.length - 1; i += 1) {
      pg.curveVertex(this.pos[i].x, this.pos[i].y);
    }
    pg.endShape();
  }
  
};
Blobber.prototype.showPoints = function(pg){
  var i;
  app.style.set(app.pal.colors[0], app.pal.colors[1],1);
  for(i in this.pos){
    if(typeof(pg) == "undefined") {
      ellipse(this.pos[i].x, this.pos[i].y, 10, 10);
    }
    else{
      pg.ellipse(this.pos[i].x, this.pos[i].y, 10, 10);
    }
  }
};
Blobber.prototype.createMorePoints = function(count){
  var i, t, x,y;
  this.morepos = [];
  for(i = 0; i < this.corners; i++){

    for (j = 0; j < count; j++) {
      t = j / count;
      x = curvePoint(this.pos[i].x, this.pos[i+1].x, this.pos[i+2].x, this.pos[i+3].x, t);
      y = curvePoint(this.pos[i].y, this.pos[i+1].y, this.pos[i+2].y, this.pos[i+3].y, t);
      append(this.morepos, createVector(x,y));
    }
  }
};
Blobber.prototype.showMorePoints = function(){
  var i,  t, x,y;


  for(i = 0; i < this.morepos.length; i++){
      ellipse(this.morepos[i].x, this.morepos[i].y, 5, 5);
  }
};








