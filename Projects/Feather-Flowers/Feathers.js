function Feather(size, maxwidth){
  this.size = size;
  this.maxwidth = maxwidth*3;
  this.top = createVector(random(this.maxwidth/2),random(size))
  this.begin = createVector(random(this.maxwidth/2),random(size));
  this.control1 = createVector(random(500),random(500));
  this.control2 = createVector(random(500),random(500));
  this.rachis = new Curve(this.control1, this.begin, this.top, this.control2);
  this.vane = [];
  for(var i = 0; i< 60; i++){
    var pos = this.rachis.point(i/60);
    var end = pos.copy();
    end.x += i;
    v = new Curve( this.control1, pos, end,  this.control2);
    append(this.vane, v);


  }
  for(var i = 0; i< 60; i++){
    var pos = this.rachis.point(i/60);
    var end = pos.copy();
    end.x -= i;
    v = new Curve( this.control1, pos, end,  this.control2);
    append(this.vane, v);


  }

}

Feather.prototype.draw = function(x, y, rot){
  var pos, end, v;
  for(var r = 0; r < TWO_PI; r+= PI/4){
    //this.rachis.style(0);
    //this.rachis.draw(x, y , rot);
    this.style(2);
    for(var i = 0; i < this.vane.length; i++){
      this.vane[i].draw(x,y,r + rot);
    }
  }

}
Feather.prototype.style = function(nr){

  switch(nr){
     case 0:
       this.strokecolor = app.pal.colors[0];
       this.fillcolor = app.pal.colors[1];
       this.thickness = 1;
     break;
     case 1:
       this.strokecolor = app.pal.colors[1];
       this.fillcolor = app.pal.tint(app.pal.randomImgColor(),10);
       this.thickness = 0.2;
     break;
     case 2:
       this.strokecolor = app.pal.tint(app.pal.randomImgColor(),10);
       this.fillcolor = false;
       this.thickness = 1;
     break;
     }
    app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};

/************************************/
function Curve(vC1,vB, vT,  vC2){
  this.begin = vB.copy();
  this.top = vT.copy();
  this.control1 = vC1.copy();
  this.control2 = vC2.copy();

}

Curve.prototype.point = function(t){
  //t is between 0, 1
  var pos = createVector(0,0);
  pos.x = curvePoint(this.control1.x,this.begin.x, this.top.x, this.control2.x , t);
  pos.y = curvePoint(this.control1.y,this.begin.y, this.top.y,  this.control2.y, t);
  return pos;
}
Curve.prototype.draw = function(x,y, rot){

  push()
  translate(x,y);
  scale(1.3);
  rotate(rot);
  curve(this.control1.x, this.control1.y, this.begin.x, this.begin.y,
  this.top.x, this.top.y, this.control2.x, this.control2.y);
    //
  // ellipse(this.top.x, this.top.y, 5,5);
  // ellipse(this.control1.x, this.control1.y, 5,5);
  // ellipse(this.control2.x, this.control2.y, 5,5);
  pop();

}
