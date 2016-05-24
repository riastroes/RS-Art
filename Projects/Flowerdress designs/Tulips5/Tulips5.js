function Tulip(pos, tulipwidth, tulipheight, tulipsize,  stage, angle){

  this.pos = pos.copy();
  this.size = tulipsize;
  this.width = tulipwidth;
  this.height = tulipheight;
  this.stage =stage;
  this.angle = angle;
  this.end = createVector(0,0);
  this.center = createVector(0, -this.height/2);
  this.center.rotate(this.angle);
  this.center.add(this.pos);
  this.begin = createVector(0, -this.height);
  this.begin2 = createVector(0, -this.height);
  this.control1 = this.begin.copy();
  this.control2 = this.end.copy();

}


Tulip.prototype.style = function(){
  app.pal.fromImage(app.images[1],10);

  this.strokecolor = app.pal.randomImgColor();
  this.fillcolor = app.pal.tint(app.pal.randomImgColor(),30);
  this.tickness = 1;

}
Tulip.prototype.showStructure = function(nr){
  this.style(1);
  app.style.set(this.strokecolor, this.fillcolor, this.tickness);

  switch(nr){
    case 0:{
      app.style.set(this.strokecolor, this.fillcolor, this.tickness);
      ellipse(this.center.x, this.center.y, this.size, this.size);
      break;
    }
    case 1:{
      push();
      translate(this.pos.x, this.pos.y);
      rotate(this.angle);
        ellipse(this.begin.x, this.begin.y, 10,10);
        ellipse(this.begin2.x, this.begin2.y, 10,10);
        ellipse(this.end.x, this.end.y, 10,10);
        ellipse(this.control1.x, this.control1.y, 5,5);
        ellipse(this.control2.x, this.control2.y, 5,5);
      pop();
      break;
    }
    case 2:{
      ellipse(this.begin[0].x, this.begin[0].y, 10,10);
      ellipse(this.end[0].x, this.end[0].y, 10,10);
      ellipse(this.control1.x, this.control1.y, 5,5);
      ellipse(this.control2.x, this.control2.y, 5,5);
      break;
    }
}
}
Tulip.prototype.construct = function(t){

  this.control1 = this.end.copy();
  this.control1.y -= this.height;
  this.control2 = this.end.copy();
  this.control2.x = (-10 + (2*t)) *10;

  this.begin = app.posOnEllipse(this.control1, (this.width/2) , this.height/2, 10, 5+t);
  this.begin2 = app.posOnEllipse(this.control1, (this.width/3) , this.height/2, 10, t);


}
Tulip.prototype.draw = function(){

  app.style.set(this.strokecolor, this.fillcolor, this.tickness);

  for(var t = 0; t<10; t++){
    this.construct(t);

    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);

      beginShape();
        vertex(this.begin.x, this.begin.y);
        bezierVertex(this.control1.x, this.control1.y,this.control2.x, this.control2.y,this.end.x, this.end.y);
        bezierVertex(this.control2.x, this.control2.y,this.control1.x, this.control1.y,this.begin2.x, this.begin2.y);
      endShape();

    pop();

  }


}
/***************************************/
//differential inheritants
function Tulip2(pos, tulipwidth, tulipheight, tulipsize,  stage, angle){
  this.tulip = new Tulip(pos, tulipwidth, tulipheight, tulipsize,  stage, angle);

  this.tulip.style = this.style;
  return this.tulip;
}
Tulip2.prototype.construct = function(t){

  this.end.y = -this.height;
  this.control1 = this.end.copy();
  this.control1.y += this.height;
  this.control1.x = -((-5 + (2*t)) *5);
  this.control2 = this.end.copy();
  this.control2.x = (-10 + (2*t)) *15;

  this.begin = app.posOnEllipse(this.control1, (this.width/2) , this.height/2, 10, 5+t);
  this.begin2 = app.posOnEllipse(this.control1, (this.width/2) , this.height/2, 10, t);


}
Tulip2.prototype.style = function(){
  app.pal.fromImage(app.images[1],10);

  this.strokecolor = app.pal.randomImgColor();
  this.fillcolor = app.pal.tint(app.pal.randomImgColor(),20);
  this.tickness = 1;
}
/***************************************/
function Tulip3(pos, tulipwidth, tulipheight, tulipsize,  stage, angle){
  this.tulip = new Tulip(pos, tulipwidth, tulipheight, tulipsize,  stage, angle);
  this.tulip.construct = this.construct;
  this.tulip.style = this.style;
  return this.tulip;
}
Tulip3.prototype.style = function(){
  app.pal.fromImage(app.images[3],10);

  this.strokecolor = app.pal.colors[1];
  this.fillcolor = app.pal.tint(app.pal.randomImgColor(),5);
  this.tickness = 1;
}
Tulip3.prototype.construct = function(t){

  this.control1 = this.end.copy();
  this.control2 = this.begin.copy();

  this.begin = app.posOnEllipse(this.control1, (this.width/2) , this.height/2, 10, 5+t);
  this.begin2 = app.posOnEllipse(this.control1, (this.width/2) , this.height/2, 10, t);
}
/***************************************/
function Tulip4(pos, tulipwidth, tulipheight, tulipsize,  stage, angle){
  this.tulip = new Tulip(pos, tulipwidth, tulipheight, tulipsize,  stage, angle);
  this.tulip.construct = this.construct;
  this.tulip.style = this.style;
  return this.tulip;
}
Tulip4.prototype.style = function(){
  app.pal.fromImage(app.images[3],5);
  app.pal.addImageColors(app.images[1],5);

  this.strokecolor = app.pal.randomImgColor();
  this.fillcolor = app.pal.tint(app.pal.randomImgColor(),30);
  this.tickness = 1;
}
Tulip4.prototype.construct = function(t){

  this.control1 = createVector(this.width,this.end.y - this.height/2);
  this.control2 = createVector(-this.width,this.end.y - this.height/2);

  this.begin = app.posOnEllipse(this.control1, (this.width/2) , this.height/2, 10, 5+t);
  this.begin2 = app.posOnEllipse(this.control1, (this.width/2) , this.height/2, 10, t);
}
/***************************************/
function Tulip5(pos, tulipwidth, tulipheight, tulipsize,  stage, angle){
  this.tulip = new Tulip(pos, tulipwidth, tulipheight, tulipsize,  stage, angle);
  this.tulip.construct = this.construct;
  this.tulip.style = this.style;
  return this.tulip;
}
Tulip5.prototype.style = function(){
  app.pal.fromImage(app.images[3],5);
  app.pal.addImageColors(app.images[1],5);

  this.strokecolor = app.pal.randomImgColor();
  this.fillcolor = app.pal.tint(app.pal.randomImgColor(),30);
  this.tickness = 1;
}
Tulip5.prototype.construct = function(t){
  var wi = (t+1)*(this.width/5);
  var maxwi = 5 *(this.width/5);
  this.control1 = createVector(maxwi - wi,this.height);
  this.control2 = createVector(maxwi - wi,this.height);

  this.begin = createVector(0,this.height);
  this.begin2 = createVector(0,this.height);

  this.end = createVector(0,0);
  this.center = createVector(0,this.height/2);
  this.center.rotate(this.angle);
  this.center.add(this.pos);

}
/***************************************/

function Tulip6(pos, tulipwidth, tulipheight, tulipsize,  stage, angle){
  this.tulip = new Tulip(pos, tulipwidth, tulipheight, tulipsize,  stage, angle);
  this.tulip.construct = this.construct;
  this.tulip.style = this.style;
  return this.tulip;
}
Tulip6.prototype.style = function(){
  app.pal.fromImage(app.images[3],5);
  app.pal.addImageColors(app.images[1],5);

  this.strokecolor = app.pal.randomImgColor();
  this.fillcolor = app.pal.tint(app.pal.randomImgColor(),30);
  this.tickness = 1;
}
Tulip6.prototype.construct = function(t){
  this.end = createVector(this.width/2,0);
  this.begin = createVector(this.width/2,this.height);
  this.begin2 = this.begin.copy();

  var a = createVector(0, this.height/2);
  var b = createVector(this.width, this.height/2);
  this.control1 = app.posOnLine(a,b, 10, t);
  this.control2 = app.posOnLine(a,b, 10, t);


  this.center = createVector(this.width/2,this.height/2);
  this.center.rotate(this.angle);
  this.center.add(this.pos);

}
