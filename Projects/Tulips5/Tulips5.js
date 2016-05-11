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


Tulip.prototype.style = function(nr){
  app.pal.fromImage(app.images[1],10);
  switch(nr){
    case 1:{
      this.strokecolor = app.pal.randomImgColor();
      this.fillcolor = app.pal.tint(app.pal.randomImgColor(),30);
      this.tickness = 1;
      break;
    }
    case 2:{
      this.strokecolor = app.pal.tint(app.pal.randomImgColor(),30);
      this.fillcolor = app.pal.tint(app.pal.randomImgColor(),5);
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
      this.strokecolor = app.pal.randomImgColor();
      this.fillcolor = app.pal.tint(app.pal.randomImgColor(),20);
      this.tickness = 1;
      break;
    }


  }
}
// Tulip5.prototype.curve = function(size, angle){
//   this.size = size;
//   this.angle = angle;
//   this.controlradius = this.width;
//   this.control1 = app.posOnCircle(this.end, this.controlradius, TWO_PI, this.angle);
//   this.control2 = app.posOnCircle(this.end, this.controlradius, TWO_PI, this.angle);
// }

// Tulip5.prototype.showStructure = function(nr){
//   push();
//   translate(this.pos.x, this.pos.y);
//   rotate(this.angle);
//     switch(nr){
//       case 1:{
//         ellipse(this.end.x, this.end.y, 10,10);
//         ellipse(this.begin.x, this.begin.y, 5,5);
//         ellipse(this.begin2.x, this.begin2.y, 5,5);
//         break;
//       }
//       case 2:{
//         ellipse(this.begin.x, this.begin.y, 5,5);
//         ellipse(this.begin2.x, this.begin2.y, 5,5);
//         ellipse(this.end.x, this.end.y, 15,15);
//         ellipse(this.control1.x, this.control1.y, 55,55);
//         ellipse(this.control2.x, this.control2.y, 5,5);
//
//         break;
//       }
//     }
//  pop();
// }
// Tulip5.prototype.draw1 = function(){
//   push();
//   translate(this.pos.x, this.pos.y);
//   app.style.set(this.strokecolor, this.fillcolor, this.tickness);
//   beginShape();
//     curveVertex(this.control1.x, this.control1.y);
//     curveVertex(this.begin.x, this.begin.y);
//     curveVertex(this.end.x, this.end.y);
//     curveVertex(this.control2.x, this.control2.y);
//   endShape();
//   pop();
// }
// Tulip5.prototype.draw3 = function(){
//   app.style.set(this.strokecolor, this.fillcolor, this.tickness);
//   push();
//   translate(this.pos.x, this.pos.y);
//   rotate(this.angle);
//
//     beginShape();
//       vertex(this.begin.x, this.begin.y)
//       bezierVertex(this.control1.x, this.control1.y,this.control2.x+this.size, this.control2.y,this.end.x, this.end.y);
//       bezierVertex(this.control2.x-this.size, this.control2.y,this.control1.x, this.control1.y,this.begin2.x, this.begin2.y);
//
//     endShape();
//   pop();
// }
//
// Tulip5.prototype.draw4 = function(){
//   app.style.set(this.strokecolor, this.fillcolor, this.tickness);
//   push();
//   translate(this.pos.x, this.pos.y);
//   rotate(this.angle);
//
//     beginShape();
//       vertex(this.begin.x, this.begin.y)
//       bezierVertex(this.control1.x, this.control1.y,this.control2.x+this.size/2, this.control2.y,this.end.x, this.end.y);
//       bezierVertex(this.control2.x-this.size/2, this.control2.y,this.control1.x, this.control1.y,this.begin2.x, this.begin2.y);
//
//     endShape();
//   pop();
// }
//
// Tulip5.prototype.grow = function(){
//
//   for(var t = 0; t<20; t++){
//
//     this.begin = app.posOnEllipse(this.control1, this.size/2 - (this.stage * 20), (this.size- (this.stage * 20))/2, 20, t);
//     this.begin2 = app.posOnEllipse(this.control1, this.size/2 - (this.stage * 20), (this.size- (this.stage * 20))/2, 20, 10 + t);
//     this.control2 = this.begin.copy();
//     this.control2.y = this.control2.y + this.size/2;
//     this.showStructure(4);
//     this.style(1);
//
//     this.draw4();
//
//   }
// }
//
// Tulip5.prototype.grow2 = function(){
//       for(var t = 0; t<10; t++){
//
//         this.begin = app.posOnEllipse(this.control1, this.size - (this.stage * 20), (this.size- (this.stage * 20))/2, 20, t);
//         this.begin2 = app.posOnEllipse(this.control1, this.size - (this.stage * 20), (this.size- (this.stage * 20))/2, 20, 10 + t);
//         this.control2 = this.begin.copy();
//         this.control2.y = this.control2.y + this.size;
//       //  this.control1.y = this.control1.y + this.size;
//
//         this.style(1);
//
//         this.draw4();
//
//       }
// }
// Tulip5.prototype.grow3 = function(){
//       for(var t = 0; t<10; t++){
//
//         this.begin = app.posOnEllipse(this.control1, this.size + (this.stage*t), (this.size+ (this.stage*t))/2, 20, t);
//         this.begin2 = app.posOnEllipse(this.control1, this.size + (this.stage*t), (this.size+ (this.stage*t))/2, 20, 10 + t);
//         this.control2 = this.begin.copy();
//         this.control2.y = this.control2.y + this.size;
//         this.control1.y = this.control1.y + this.size;
//
//         this.style(1);
//
//         this.draw4();
//
//       }
// }

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

  this.style(1);
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

//differential inheritants
function Tulip2(pos, tulipwidth, tulipheight, tulipsize,  stage, angle){
  this.tulip = new Tulip(pos, tulipwidth, tulipheight, tulipsize,  stage, angle);

  this.tulip.construct = this.construct;
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

  this.style(2);
}
//differential inheritants
function Tulip3(pos, tulipwidth, tulipheight, tulipsize,  stage, angle){
  this.tulip = new Tulip(pos, tulipwidth, tulipheight, tulipsize,  stage, angle);

  this.tulip.construct = this.construct;
  return this.tulip;
}
Tulip3.prototype.construct = function(t){

  this.control1 = this.end.copy();
  this.control2 = this.begin.copy();

  this.begin = app.posOnEllipse(this.control1, (this.width/2) , this.height/2, 10, 5+t);
  this.begin2 = app.posOnEllipse(this.control1, (this.width/2) , this.height/2, 10, t);

  this.style(2);
}
