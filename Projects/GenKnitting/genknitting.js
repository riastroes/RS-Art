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
GenKnitting.prototype.knit1 = function(p){

  var c1 = createVector(0,4);
  var c2 = createVector(2,2);
  var c3 = createVector(4,4);

  var arc = TWO_PI / 4;
  var step = arc / 8;
  var pos;

  for(var s = arc; s > 0; s -= step){
     pos = app.posOnCircle(c1, 2, 4 * 8, s);
     pos.x = pos.x * this.w;
     pos.y = pos.y * this.h;
     pos.add(p);
     append(this.knitting, pos);
  }
  arc = PI;
  for(var s = arc; s < TWO_PI; s += step){
     pos = app.posOnCircle(c2, 2, 4 * 8, s);
     pos.x = pos.x * this.w;
     pos.y = pos.y * this.h;
     pos.add(p);
     append(this.knitting, pos);
  }
  arc = PI;
  for(var s = arc; s < TWO_PI/4; s -= step){
     pos = app.posOnCircle(c3, 2, 4 * 8, s);
     pos.x = pos.x * this.w;
     pos.y = pos.y * this.h;
     pos.add(p);
     append(this.knitting, pos);
  }


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
GenKnitting.prototype.create1 = function(pos,stitches){
   this.current = pos.copy();
   this.first(this.current);
   for(var i = 0; i < stitches; i++){
     this.knit1(this.current);
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
// GenKnitting.prototype.createOutline = function(marge,cornersteps){
//   this.outline = [];
//   var m = marge;
//
//   var minx = width;
//   var maxx = 0;
//   var miny = height;
//   var maxy = 0;
//   for(var i = 1; i < this.knitting.length-1; i += 1){
//     if(this.knitting[i].x <= minx){
//       minx = this.knitting[i].x}
//     if(this.knitting[i].y <= miny){
//       miny = this.knitting[i].y}
//     if(this.knitting[i].x >= maxx){
//       maxx = this.knitting[i].x}
//     if(this.knitting[i].y >= maxy){
//       maxy = this.knitting[i].y}
//   }
//
//   //  append(this.outline ,createVector(minx,maxy+m));
//     var arc = TWO_PI/4;
//     var step = arc / 8;
//
//     var center = createVector(minx, maxy);
//     var pos = center.copy();
//     pos.add(0,marge);
//     append(this.outline,pos);
//
//     center = createVector(maxx, maxy);
//     pos = center.copy();
//     pos.add(0,marge);
//     append(this.outline,pos);
//
//     for(var g = arc; g > 0; g-=step){
//       append(this.outline, app.posOnCircle(center,marge,(step*8)*4,g));
//     }
//     center = createVector(maxx, miny);
//     pos = center.copy();
//     pos.add(0,-marge);
//     for(var g = 0; g > -arc; g-= step){
//       append(this.outline, app.posOnCircle(center,marge,(step*8)*4,g));
//     }
//
//     center = createVector(minx, miny);
//     pos = center.copy();
//     pos.add(0,-marge);
//     append(this.outline,pos);
//     for(var g = -arc; g > -(arc*2); g-=step){
//       append(this.outline, app.posOnCircle(center,marge,(step*8)*4,g));
//     }
//
//     center = createVector(minx, maxy);
//     pos = center.copy();
//     pos.add(-marge,0);
//     append(this.outline,pos);
//     for(var g = -(arc*2); g > -(arc*3); g-=step){
//       append(this.outline, app.posOnCircle(center,marge,(step*8)*4,g));
//     }
//
//     var center = createVector(minx, maxy);
//     var pos = center.copy();
//     pos.add(0,marge);
//     append(this.outline,pos);
//
//
// }
// GenKnitting.prototype.createOutline1 = function(marge,cornersteps){
//   this.outline = [];
//   var m = marge;
//
//   var minx = width;
//   var maxx = 0;
//   var miny = height;
//   var maxy = 0;
//   for(var i = 1; i < this.knitting.length-1; i += 1){
//     if(this.knitting[i].x <= minx){
//       minx = this.knitting[i].x}
//     if(this.knitting[i].y <= miny){
//       miny = this.knitting[i].y}
//     if(this.knitting[i].x >= maxx){
//       maxx = this.knitting[i].x}
//     if(this.knitting[i].y >= maxy){
//       maxy = this.knitting[i].y}
//   }
//
//     append(this.outline ,createVector(minx,maxy+m));
//   for(var s = 0; s <=m; s +=parseInt(m/cornersteps)){
//     append(this.outline ,createVector(maxx + s,maxy+(m - s)));
//   }
//   for(var s = 0; s <=m; s +=parseInt(m/cornersteps)){
//     append(this.outline ,createVector(maxx + (m-s),miny - s));
//   }
//   for(var s = 0; s <=m; s +=parseInt(m/cornersteps)){
//     append(this.outline ,createVector(minx - s,miny - (m-s)));
//   }
//   for(var s = 0; s <m; s +=parseInt(m/cornersteps)){
//     append(this.outline ,createVector(minx - (m - s),maxy + s));
//   }
// }
// GenKnitting.prototype.drawOutline = function(){
  //   this.style(0);
  //   for(var i= 1; i < this.outline.length; i++){
  //     line(this.outline[i-1].x, this.outline[i-1].y,this.outline[i].x, this.outline[i].y);
  //   }
  // }
GenKnitting.prototype.genKnitting = function(offset){
  var x, y;
  // for(var i= 0; i < this.outline.length; i++){
  //   x = offset.x + (this.outline[i].x *0.1);
  //   y = offset.y-(this.outline[i].y *0.1);
  //   append(this.genoutline, createVector(x.toFixed(3), y.toFixed(3)));
  //   ellipse(x, y+400, 3,3);
  // }
  for(var i= 1; i < this.knitting.length -1; i++){
    x = offset.x + (this.knitting[i].x *0.1);
    y = offset.y-(this.knitting[i].y *0.1);
    append(this.genknitting, createVector(x.toFixed(3), y.toFixed(3)));
    ellipse(x, y+400, 3,3);
  }

}
