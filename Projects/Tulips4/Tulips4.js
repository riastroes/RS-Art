function Tulip4(pos, size, stage, angle){
  this.end = pos.copy();
  this.stage = stage;
  this.size = size;
  this.begin = this.end.copy();
  this.begin.y -= this.size;
  this.begin2 = this.begin.copy();
  this.center = this.end.copy();
  this.center.y -= this.size/2;
  this.angle = angle;


}
Tulip4.prototype.style = function(nr){
  switch(nr){
    case 1:{
      this.strokecolor = app.pal.randomImgColor();
      this.fillcolor = app.pal.tint(app.pal.randomImgColor(),10);
      this.tickness = 1;
      break;
    }
    case 2:{
      this.strokecolor = app.pal.randomImgColor();
      this.fillcolor = false;
      this.tickness = 1;
      break;
    }
    case 3:{
      this.strokecolor = app.pal.colors[0];
      this.fillcolor = app.pal.colors[1];
      this.tickness = 1;
      break;
    }
    case 4:{
      this.strokecolor = app.pal.colors[0];
      this.fillcolor = app.pal.colors[3];
      this.tickness = 1;
      break;
    }
    case 5:{
      this.strokecolor = app.pal.colors[0];
      this.fillcolor = app.pal.colors[4];
      this.tickness = 1;
      break;
    }

  }
}
// Tulip4.prototype.curve = function(factor, angle){
//   this.size = this.size * factor;
//   this.angle = angle;
//   this.controlradius = this.size/2;
//   this.control1 = app.posOnCircle(this.end, this.controlradius, TWO_PI, this.angle);
//   this.control2 = app.posOnCircle(this.end, this.controlradius, TWO_PI, this.angle);
// }
Tulip4.prototype.draw1 = function(){
  app.style.set(this.strokecolor, this.fillcolor, this.tickness);
  beginShape();
    curveVertex(this.control1.x, this.control1.y);
    curveVertex(this.begin.x, this.begin.y);
    curveVertex(this.end.x, this.end.y);
    curveVertex(this.control2.x, this.control2.y);
  endShape();
}
Tulip4.prototype.showStructure = function(nr){
  switch(nr){
    case 1:{
      ellipse(this.end.x, this.end.y, 55,15);
      break;
    }
    case 2:{
      ellipse(this.center.x, this.center.y, 55,55);
      break;
    }
    case 3:{
      ellipse(this.center.x, this.center.y, 55,55);
      ellipse(this.begin.x, this.begin.y, 5,5);
      ellipse(this.begin2.x, this.begin2.y, 5,5);
      break;
    }
    case 4:{
      ellipse(this.begin.x, this.begin.y, 5,5);
      ellipse(this.begin2.x, this.begin2.y, 5,5);
      ellipse(this.end.x, this.end.y, 5,5);
      ellipse(this.control1.x, this.control1.y, 55,55);
      ellipse(this.control2.x, this.control2.y, 5,5);
      break;
    }
  }

}
Tulip4.prototype.draw2 = function(){
  app.style.set(this.strokecolor, this.fillcolor, this.tickness);
  beginShape();
    curveVertex(this.control1.x, this.control1.y);
    curveVertex(this.begin.x, this.begin.y);
    curveVertex(this.end.x, this.end.y);
    curveVertex(this.control2.x, this.control2.y);
  endShape();
  beginShape();
    curveVertex(this.control2.x, this.control2.y);
    curveVertex(this.begin.x, this.begin.y);
    curveVertex(this.end.x, this.end.y);
    curveVertex(this.control1.x, this.control1.y);
  endShape();


}
Tulip4.prototype.draw3 = function(){

  app.style.set(this.strokecolor, this.fillcolor, this.tickness);
  beginShape();
    vertex(this.begin.x, this.begin.y)
    bezierVertex(this.control1.x, this.control1.y,this.control2.x+this.size, this.control2.y,this.end.x, this.end.y);
    bezierVertex(this.control2.x-this.size, this.control2.y,this.control1.x, this.control1.y,this.begin2.x, this.begin2.y);

  endShape();
}
Tulip4.prototype.draw4 = function(){

  app.style.set(this.strokecolor, this.fillcolor, this.tickness);
  beginShape();
    vertex(this.begin.x, this.begin.y)
    bezierVertex(this.control1.x, this.control1.y,this.control2.x, this.control2.y,this.end.x, this.end.y);
    bezierVertex(this.control2.x, this.control2.y,this.control1.x, this.control1.y,this.begin2.x, this.begin2.y);

  endShape();
}
Tulip4.prototype.draw5 = function(angle){

  push();
  translate(this.begin.x, this.begin.y);
  rotate(angle);

  app.style.set(this.strokecolor, this.fillcolor, this.tickness);
  beginShape();
    vertex(0,0);
    bezierVertex(this.control1.x, this.control1.y,this.control2.x, this.control2.y,this.end.x, this.end.y);
    bezierVertex(this.control2.x, this.control2.y,this.control1.x, this.control1.y,this.begin2.x, this.begin2.y);

  endShape();
  pop();
}
Tulip4.prototype.drawShape = function(){

  push();
  translate(this.end.x, this.end.y);
  rotate(this.angle + (PI/2));

  app.style.set(this.strokecolor, this.fillcolor, this.tickness);
  this.showStructure(3);
  beginShape();
    vertex(0,0);
    bezierVertex(this.control1.x, this.control1.y,this.control2.x, this.control2.y,this.end.x, this.end.y);
    bezierVertex(this.control2.x, this.control2.y,this.control1.x, this.control1.y,this.begin2.x, this.begin2.y);

  endShape();
  fill(255,0,0);
  ellipse(this.end.x, this.end.y, 10,10);
  text(this.angle, this.end.x +10, this.end.y);
  pop();
}
Tulip4.prototype.grow = function(center, size, stage, angle){
  this.size = size;
  this.stage = stage;
  this.angle = angle;
  this.center = center.copy();
  this.end = this.center.copy();
  this.end.add(0, this.size/2);
  this.control1 = this.center.copy();
  this.control1.add(0, -this.size/2);

    for(var t = 0; t<20; t++){

      this.begin = app.posOnEllipse(this.control1, this.size/2 - (this.stage * 20), (this.size- (this.stage * 20))/2, 20, t);
      this.begin2 = app.posOnEllipse(this.control1, this.size/2 - (this.stage * 20), (this.size- (this.stage * 20))/2, 20, 10 + t);
      this.control2 = this.begin.copy();
      this.control2.y = this.control2.y + this.size/2;
      this.showStructure(2);
      this.style(1);

      this.draw5(angle);

    }
  }
Tulip4.prototype.grow2 = function(center, size, stage, angle){
    this.size = size;
    this.stage = stage;
    this.angle = angle;
    this.center = center.copy();
    this.end = createVector(0, this.size/2);
    this.control1 = createVector(0, -this.size/2);


      for(var t = 0; t<20; t++){

        this.begin = app.posOnEllipse(this.control1, this.size - (this.stage * 20), (this.size- (this.stage * 20))/2, 20, t);
        this.begin2 = app.posOnEllipse(this.control1, this.size - (this.stage * 20), (this.size- (this.stage * 20))/2, 20, 10 + t);
        this.control2 = this.begin.copy();
        this.control2.y = this.control2.y + this.size;

        this.style(1);

        this.draw();

      }
    }
Tulip4.prototype.grow3 = function(center, size, stage, angle){
    this.size = size;
    this.stage = stage;
    this.angle = angle;
    this.center = center.copy();
    this.end = createVector(0, this.size/2);
    this.control1 = createVector(0, -this.size/2);


      for(var t = 0; t<20; t++){

        this.begin = app.posOnEllipse(this.control1, this.size - (this.stage * 20), (this.size- (this.stage * 20))/2, 20, t);
        this.begin2 = app.posOnEllipse(this.control1, this.size - (this.stage * 20), (this.size- (this.stage * 20))/2, 20, 10 + t);
        this.control2 = this.begin.copy();
        this.control2.y = this.control2.y + this.size;
        this.control1.y = this.control1.y + this.size;

        this.style(1);

        this.draw();

      }
}
Tulip4.prototype.grow4 = function(stage, angle){

  this.stage = stage;
  this.angle = angle;
  this.end = createVector(0, this.size/2);
  this.control1 = createVector(0, -this.size*2);
  this.control2 = this.control1.copy();


    for(var t = 0; t<20; t++){

      this.begin = app.posOnEllipse(this.control1, this.size - (this.stage * 20), (this.size- (this.stage * 20))/2, 20, t);
      this.begin2 = app.posOnEllipse(this.control1, this.size - (this.stage * 20), (this.size- (this.stage * 20))/2, 20, 10 + t);


      this.style(1);

      this.draw();

    }
}
Tulip4.prototype.draw = function(){

  //this.end = createVector(0, this.size/2);
  //this.control1 = createVector(0, -this.size*2);
  this.control1 = this.end.copy();
  this.stage += 5;


    for(var t = 0; t<20; t++){

      this.begin = app.posOnEllipse(this.control1, this.size - (this.stage * 20), (this.size- (this.stage * 20))/2, 20, t);
      this.begin2 = app.posOnEllipse(this.control1, this.size - (this.stage * 20), (this.size- (this.stage * 20))/2, 20, 10 + t);
      this.control2 = this.begin.copy();

      this.style(1);

      this.drawShape();

    }


}
