function Pinguin(id, scale){
  this.id = id
  this.pos = createVector(width/2, height/2);
  this.scale = scale;
  this.createFeet();
  if(this.id == 8){
    this.createHeadR();
  }
  else{
    this.createHead();
  }

  this.createBody();
  this.createWings();
  this.style(0);
}

Pinguin.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 0.1;
    break;
    case 1:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[3];
    this.thickness = 1/ this.scale;
    break;

    case 2:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[0];
    this.thickness = 1/ this.scale;
    break;
    case 3:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = (1/ this.scale) * 3;
    break;
    case 4:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[0];
    this.thickness = (1/ this.scale) ;
    break;
    }

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

}
Pinguin.prototype.createFeet = function(){
  this.leftfoot = [];
  this.rightfoot = [];
  append(this.leftfoot, createVector(-1,2));
  append(this.leftfoot, createVector(-3,1));
  append(this.leftfoot, createVector(-7,2));
  append(this.leftfoot, createVector(-3,-3));
  append(this.leftfoot, createVector(-1,-3));

  append(this.rightfoot, createVector(1,0));
  append(this.rightfoot, createVector(3,2));
  append(this.rightfoot, createVector(5,1));
  append(this.rightfoot, createVector(7,1));
  append(this.rightfoot, createVector(1,-1));

}
Pinguin.prototype.createHead = function(){
  this.head =[];

  append(this.head, createVector(0,-30));
  append(this.head, createVector(-3,-35));
  append(this.head, createVector(-11,-39));
  append(this.head, createVector(-7,-41));
  append(this.head, createVector(-4,-44));
  append(this.head, createVector(0,-44));
  append(this.head, createVector(3,-39));
  append(this.head, createVector(3,-35));

}
Pinguin.prototype.createHeadR = function(){
  this.head =[];

  append(this.head, createVector(0,-30));
  append(this.head, createVector(3,-35));
  append(this.head, createVector(11,-39));
  append(this.head, createVector(7,-41));
  append(this.head, createVector(4,-44));
  append(this.head, createVector(0,-44));
  append(this.head, createVector(-3,-39));
  append(this.head, createVector(-3,-35));

}
Pinguin.prototype.createWings = function(){
  this.wings =[];
var r = random(-2,5);
  append(this.wings, createVector(-7 -r,-10));//tip wing
  append(this.wings, createVector(-13-r,-20));
  append(this.wings, createVector(-4-r,-33));
  append(this.wings, createVector(0,-34));
  append(this.wings, createVector(4+r,-33));
  append(this.wings, createVector(13+r,-20));
  append(this.wings, createVector(7+r,-10));//tip wing
  append(this.wings, createVector(9+r,-20));
  append(this.wings, createVector(0,-26));
  append(this.wings, createVector(-9-r,-20));

}
Pinguin.prototype.createBody = function(){
  var r = random(-5,0);
  this.coat =[];
  append(this.coat, createVector(0,0 + r));
  append(this.coat, createVector(-3,-3 +r));
  append(this.coat, createVector(-7,-15 + r));
  append(this.coat, createVector(-5,-30 ));
  append(this.coat, createVector(0,-35 ));
  append(this.coat, createVector(5,-30 ));
  append(this.coat, createVector(7,-15 + r));
  append(this.coat, createVector(3,-3 + r));
  this.body =[];
  append(this.body, createVector(0,0+ r));
  append(this.body, createVector(-3,-3 + r));
  append(this.body, createVector(-5,-15 + r));
  append(this.body, createVector(-3,-27));
  append(this.body, createVector(0,-30));
  append(this.body, createVector(3,-27));
  append(this.body, createVector(5,-15+r));
  append(this.body, createVector(3,-3+r));
}
Pinguin.prototype.update = function(pos){
  this.pos = pos.copy();
}
Pinguin.prototype.drawFeet = function(nr){

  //leftfoot
  if(nr == 0){
    this.style(4);
  }
  beginShape();
  var last = this.leftfoot.length-1;
  curveVertex(this.leftfoot[last].x, this.leftfoot[last].y);
  for(var i = 0; i < this.leftfoot.length; i++){
    curveVertex(this.leftfoot[i].x, this.leftfoot[i].y);
  }
  curveVertex(this.leftfoot[0].x, this.leftfoot[0].y);
  curveVertex(this.leftfoot[1].x, this.leftfoot[1].y);
  endShape();
  //rightfoot
  beginShape();
  last = this.rightfoot.length-1;
  curveVertex(this.rightfoot[last].x, this.rightfoot[last].y);
  for(var i = 0; i < this.rightfoot.length; i++){
    curveVertex(this.rightfoot[i].x, this.rightfoot[i].y);
  }
  curveVertex(this.rightfoot[0].x, this.rightfoot[0].y);
  curveVertex(this.rightfoot[1].x, this.rightfoot[1].y);
  endShape();


}
Pinguin.prototype.drawWings= function(nr){
  //head
  if(nr == 0){
    this.style(3);
  }
  var last = this.wings.length-1;
  beginShape();

  curveVertex(this.wings[last].x, this.wings[last].y);
  for(var i = 0; i < this.wings.length; i++){
    curveVertex(this.wings[i].x, this.wings[i].y);
  }
  curveVertex(this.wings[0].x, this.wings[0].y);
  curveVertex(this.wings[1].x, this.wings[1].y);
  endShape();
}
Pinguin.prototype.drawHead = function(){
  //head

  var last = this.head.length-1;
  beginShape();

  curveVertex(this.head[last].x, this.head[last].y);
  for(var i = 0; i < this.head.length; i++){
    curveVertex(this.head[i].x, this.head[i].y);
  }
  curveVertex(this.head[0].x, this.head[0].y);
  curveVertex(this.head[1].x, this.head[1].y);
  endShape();
}
Pinguin.prototype.drawEye = function(nr){
  if(this.id == 8 ){
    this.style(3);
    ellipse(3,-41,4,5);
    if(nr == 0){

  }
    ellipse(4,-41,2,3);
  }
  else{
    this.style(3);
    ellipse(-3,-41,4,5);
    if(nr == 0){

  }
    ellipse(-4,-41,2,3);
  }
}
Pinguin.prototype.drawCoat = function(){
  //coat

  var last = this.coat.length-1;
  beginShape();

  curveVertex(this.coat[last].x, this.coat[last].y);
  for(var i = 0; i < this.coat.length; i++){
    curveVertex(this.coat[i].x, this.coat[i].y);
  }
  curveVertex(this.coat[0].x, this.coat[0].y);
  curveVertex(this.coat[1].x, this.coat[1].y);
  endShape();



}
Pinguin.prototype.drawBody = function(){

  //body

  beginShape();
  var last =this.body.length-1;
  curveVertex(this.body[last].x, this.body[last].y);
  for(var i = 0; i < this.body.length; i++){
    curveVertex(this.body[i].x, this.body[i].y);
  }
  curveVertex(this.body[0].x, this.body[0].y);
  curveVertex(this.body[1].x, this.body[1].y);
  endShape();


}
Pinguin.prototype.drawPinguin = function(nr){
  if(nr == 0){
  this.style(1);
  rect(this.leftfoot[3].x+1, this.leftfoot[3].y-30, 1, 30);
  rect(this.rightfoot[0].x, this.rightfoot[0].y-30, 1, 30);
  this.drawFeet();
  this.style(2);
  this.drawWings();
  this.style(2);
  this.drawCoat();
  this.style(0);
  this.drawBody();
  this.style(2);
  this.drawHead();
  this.style(0);
  this.drawEye();
}
else{
  this.style(4);
  rect(this.leftfoot[3].x+1, this.leftfoot[3].y-30, 1, 30);
  rect(this.rightfoot[0].x, this.rightfoot[0].y-30, 1, 30);
  this.drawFeet(nr);
  this.style(4);
  this.drawWings(nr);
  this.style(4);
  this.drawCoat();
  this.style(3);
  this.drawBody();
  this.style(4);
  this.drawHead();
  this.style(4);
  this.drawEye(nr);
}
}
Pinguin.prototype.draw = function(){

  push();
  translate(this.pos.x, this.pos.y);
  scale(this.scale);
  this.drawPinguin();
  pop();

}
