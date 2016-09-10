function Outline(arr){
  this.knitting = arr;
  this.outline = [];
  this.genoutline = [];
}
Outline.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = false
    this.thickness = 4;
    break;
    case 1:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = false
    this.thickness = 0.4;
    break;
  }
 app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Outline.prototype.createOutline = function(marge,cornersteps,rounds,roundthickness){
  //create an outline -marge- pixels outside the knitting
  //create corners with -cornersteps- positions
  //go round -rounds- times
  //distance between rounds is -roundthickness-
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
  //  append(this.outline ,createVector(minx,maxy+m));
    var arc = TWO_PI/4;
    var cornerstep = arc / 8;
    var center;
    var pos;

    for(var s = (rounds*roundthickness) ; s >=0; s-= roundthickness){

      center = createVector(minx, maxy);
      pos = center.copy();
      pos.add(0,(marge+s));
      append(this.outline,pos);

      center = createVector(maxx, maxy);
      pos = center.copy();
      pos.add(0,(marge+s));
      append(this.outline,pos);

      for(var g = arc; g > 0; g-=cornerstep){
        append(this.outline, app.posOnCircle(center,(marge+s),(cornerstep*8)*4,g));
      }
      center = createVector(maxx, miny);
      pos = center.copy();
      pos.add(0,-(marge+s));
      for(var g = 0; g > -arc; g-= cornerstep){
        append(this.outline, app.posOnCircle(center,(marge+s),(cornerstep*8)*4,g));
      }

      center = createVector(minx, miny);
      pos = center.copy();
      pos.add(0,-(marge+s));
      //append(this.outline,pos);
      for(var g = -arc; g > -(arc*2); g-=cornerstep){
        append(this.outline, app.posOnCircle(center,(marge+s),(cornerstep*8)*4,g));
      }

      center = createVector(minx, maxy);
      pos = center.copy();
      pos.add(-(marge+s),0);
      //append(this.outline,pos);
      for(var g = -(arc*2); g > -(arc*3); g-=cornerstep){
        append(this.outline, app.posOnCircle(center,(marge+s),(cornerstep*8)*4,g));
      }

      var center = createVector(minx, maxy);
      var pos = center.copy();
      pos.add(0,marge + s);
      append(this.outline,pos);
  }
}

Outline.prototype.drawOutline = function(pos){
  this.style(0);
  push();
  translate(pos.x, pos.y);
  for(var i= 1; i < this.outline.length; i++){
    line(this.outline[i-1].x, this.outline[i-1].y,this.outline[i].x, this.outline[i].y);
  }
  pop();
}
Outline.prototype.genOutline = function(offset, pscale){
  var x, y;
  for(var i= 0; i < this.outline.length; i++){
    x = offset.x + (this.outline[i].x * pscale);
    y = offset.y-(this.outline[i].y * pscale);
    append(this.genoutline, createVector(x.toFixed(3), y.toFixed(3)));
  }

}
Outline.prototype.showGenOutline = function(genoutline,pos, pscale){
  this.style(1);
  push();
  translate(pos.x, pos.y);
  scale(pscale);
  for(var i = 1; i < genoutline.length; i++ ){
    line(genoutline[i-1].x, genoutline[i-1].y, genoutline[i].x, genoutline[i].y);
  }
  pop();
}
