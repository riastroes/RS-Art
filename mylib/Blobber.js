function Blobber(){
  this.pos = [];
  this.thickness = 1;
  this.center = undefined;
  this.corners = 0;
  this.size = 0;
  this.morepos = [];
}


Blobber.prototype.init = function(center, corners, minwidth, maxwidth, minheight, maxheight){
  //the flexibility of the blopper is dependend of the difference in minwidth and maxwidth and minheight and maxheight.
  this.pos = [];
  this.center = center.copy();
  this.corners = corners;
  this.size = size;

  this.wminradius = minwidth/2;
  this.wmaxradius = maxwidth/2;
  this.hminradius = minheight/2;
  this.hmaxradius = maxheight/2;


  var p;
  var r = random(TWO_PI/corners);
  for (var i = 0; i < corners; i += 1) {
    var wradius = random(this.wminradius, this.wmaxradius);
    var hradius = random(this.hminradius, this.hmaxradius);
    p = posOnEllipse(center,wradius, hradius, corners, i + r);
    append(this.pos, p);
  }
  append(this.pos, this.pos[0].copy());
  append(this.pos, this.pos[1].copy());
  append(this.pos, this.pos[2].copy());
  append(this.pos, this.pos[3].copy());
};

Blobber.prototype.draw = function(pg){
  var i;
  if(app.isnot(pg)){
    beginShape();
    for (i = 0; i < this.pos.length-1; i += 1) {
      curveVertex(this.pos[i].x, this.pos[i].y);
    }
   endShape();
  }
  else {
    pg.beginShape();
    for (i = 0; i < this.pos.length-1; i += 1) {
      pg.curveVertex(this.pos[i].x, this.pos[i].y);
    }
    pg.endShape();
  }

};
Blobber.prototype.scale = function(factor){
  var i,v;
  for(i = 0; i < this.pos.length; i++){

    this.pos[i].mult(factor);

  }
};
Blobber.prototype.showPoints = function(pg){
  var i;
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
Blobber.prototype.grow = function(){
  //var i;
  //for(i = 0; i < count; i++){
    ///TODO definition grow: add a point to the blob
    this.createMorePoints(2);
    this.set(this.morepos, this.size);
    
  //}
}
Blobber.prototype.split = function(){
  var p,i,o, newpos, oldpos, newblobber;

  p = floor((this.pos.length-4)/2);
  newpos = [];
  oldpos = [];
  o=0;
  if(p < this.pos.length - 4 && p >=3){
    
    for(i = 0; i < p; i++){
      newpos[i] = this.pos[i].copy();
    }
    for(i = p; i <this.pos.length-4; i++ ){
      oldpos[o] = this.pos[i];
      o += 1;
    }
    this.pos =[];
    arrayCopy(oldpos, this.pos);

    append(newpos, oldpos[0]);
    append(oldpos, newpos[0]);
    newblobber = new Blobber();
    newblobber.set(newpos,this.size);


    this.set(oldpos,this.size);

  }
  return newblobber;
};
Blobber.prototype.set = function(pos, factor){
  arrayCopy(pos, this.pos);
  this.corners = this.pos.length;
  append(this.pos, this.pos[0].copy());
  append(this.pos, this.pos[1].copy());
  append(this.pos, this.pos[2].copy());
  append(this.pos, this.pos[3].copy());
  this.factor = factor;
};
//differential inheritants.
function RegBlobber(){
  this.blobber = new Blobber();
  this.blobber.init = this.init;
  return this.blobber;
}
RegBlobber.prototype.init = function(center, corners, minwidth, maxwidth, minheight, maxheight){
  //the flexibility of the blopper is dependend of the difference in minwidth and maxwidth and minheight and maxheight.
  this.pos = [];
  this.center = center.copy();
  this.corners = corners;
  this.size = size;

  this.wminradius = minwidth/2;
  this.wmaxradius = maxwidth/2;
  this.hminradius = minheight/2;
  this.hmaxradius = maxheight/2;

  var p, wradius, hradius;
  var r = random(TWO_PI/corners);

  for (var i = 0; i < corners; i += 1) {
    if(i%2 == 0){
      wradius = this.wminradius;
      hradius = this.hminradius;
    }
    else {
      wradius = this.wmaxradius;
      hradius = this.hmaxradius;
    }

    p = posOnEllipse(center,wradius, hradius, corners, i + r);
    append(this.pos, p);
  }
  append(this.pos, this.pos[0].copy());
  append(this.pos, this.pos[1].copy());
  append(this.pos, this.pos[2].copy());
  append(this.pos, this.pos[3].copy());
};

function ArrayBlobber(){
  this.blobber = new Blobber;
  this.blobber.set = this.set;
  return this.blobber;
}






