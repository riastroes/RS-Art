function GenKnitting(stitchwidth,stitchheight){
  this.x =[];
  this.y =[];
  this.stitchwidth = stitchwidth *5;
  this.stitchheight = stitchheight*5;
  this.w = this.stitchwidth /4;
  this.h = this.stitchheight /6;

  this.knitting = [];
  this.genknitting = [];
  this.outline = [];
  this.genoutline = [];
  this.current;

}
GenKnitting.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = false
    this.thickness = 1;
    break;
  }
 app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
GenKnitting.prototype.first = function(pos){
  this.x = [-1];
  this.y = [5];

  for(var i = 0; i < this.x.length; i++){
    p = pos.copy();
    p.add(this.x[i] * this.w, this.y[i] * this.h);
    append(this.knitting, p);
  }
  return p.copy();
}
GenKnitting.prototype.knit = function(pos){

  this.x = [0,1,1,0,0,1,2,3,3,2,2,3];
  this.y = [5,4,3,2,1,0,0,1,2,3,4,5];

  for(var i = 0; i < this.x.length; i++){
    p = pos.copy();
    p.add(this.x[i] * this.w, this.y[i] * this.h);
    append(this.knitting, p);
  }
  return p.copy();
}
GenKnitting.prototype.last = function(pos){
  this.x = [4];
  this.y = [5];

  for(var i = 0; i < this.x.length; i++){
    p = pos.copy();
    p.add(this.x[i] * this.w, this.y[i] * this.h);
    append(this.knitting, p);
  }
  return p.copy();
}
GenKnitting.prototype.create = function(pos,stitches){
   this.current = pos.copy();
   this.first(this.current);
   for(var i = 0; i < stitches; i++){
     this.knit(this.current);
     this.current.add(this.stitchwidth,0);
   }
   this.current.sub(this.stitchwidth,0);
   this.last(this.current);
}
GenKnitting.prototype.draw = function(){
  this.style(0);
  beginShape();
  for(var i= 0; i < this.knitting.length; i++){
    curveVertex(this.knitting[i].x, this.knitting[i].y);
    //ellipse(this.knitting[i].x, this.knitting[i].y,5,5);
  }
  endShape();
}
GenKnitting.prototype.createOutline = function(marge,cornersteps){
  this.outline = [];
  var m = marge;

  var minx = width;
  var maxx = 0;
  var miny = height;
  var maxy = 0;
  for(var i = 1; i < this.knitting.length-1; i += 1){
    if(this.knitting[i].x <= minx){
      minx = this.knitting[i].x}
    if(this.knitting[i].y <= miny){
      miny = this.knitting[i].y}
    if(this.knitting[i].x >= maxx){
      maxx = this.knitting[i].x}
    if(this.knitting[i].y >= maxy){
      maxy = this.knitting[i].y}
  }

    append(this.outline ,createVector(minx,maxy+m));
  for(var s = 0; s <=m; s +=parseInt(m/cornersteps)){
    append(this.outline ,createVector(maxx + s,maxy+(m - s)));
  }
  for(var s = 0; s <=m; s +=parseInt(m/cornersteps)){
    append(this.outline ,createVector(maxx + (m-s),miny - s));
  }
  for(var s = 0; s <=m; s +=parseInt(m/cornersteps)){
    append(this.outline ,createVector(minx - s,miny - (m-s)));
  }
  for(var s = 0; s <m; s +=parseInt(m/cornersteps)){
    append(this.outline ,createVector(minx - (m - s),maxy + s));
  }

//   curvePoint(a,b,c,d,t)
// Parameters
// a	Number: coordinate of first point on the curve
// b	Number: coordinate of first control point
// c	Number: coordinate of second control point
// d	Number: coordinate of second point on the curve
// t	Number: value between 0 and 1

  // var a =createVector(minx,maxy + m);
  // var b =createVector(maxx,maxy + m);
  // var c =createVector(maxx + m,maxy);
  // var d =createVector(maxx + m,miny);
  // var e =createVector(maxx,miny - m);
  // var f =createVector(minx,miny - m);
  // var g =createVector(minx - m,miny);
  // var h =createVector(minx - m,maxy);
  // var i =createVector(minx,maxy + m);
  //
  // append(this.outline, a);
  // append(this.outline, b);
  // append(this.outline, c);
  // append(this.outline, d);
  // append(this.outline, e);
  // append(this.outline, f);
  // append(this.outline, g);
  // append(this.outline, h);
  // append(this.outline, a);
  // append(this.outline, b);
  // append(this.outline, c);

}
GenKnitting.prototype.drawOutline = function(){
  this.style(0);
  //beginShape();
  for(var i= 1; i < this.outline.length; i++){
    line(this.outline[i-1].x, this.outline[i-1].y,this.outline[i].x, this.outline[i].y);
          // curveVertex(this.outline[i].x, this.outline[i].y);
          // curveVertex(this.outline[i+1].x, this.outline[i+1].y);
          // curveVertex(this.outline[i+2].x, this.outline[i+2].y);
          //
    //ellipse(this.outline[i].x, this.outline[i].y,5,5);
  }
  //endShape();
}
GenKnitting.prototype.genKnitting = function(offset){
for(var i= 0; i < this.outline.length; i++){
  append(this.genoutline, createVector(offset.x + this.outline[i].x *0.1, offset.y-this.outline[i].y *0.1));
  ellipse(this.outline[i].x, this.outline[i].y, 3,3);
}
for(var i= 0; i < this.knitting.length; i++){
  append(this.genknitting, createVector(offset.x + this.knitting[i].x *0.1, offset.y-this.knitting[i].y *0.1));
  ellipse(this.knitting[i].x, this.knitting[i].y, 3,3);
}

}
