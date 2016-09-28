/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";

var pos;
var parade;

function setup(){

  createCanvas(windowWidth, 600);

  parade = [];
  for(var i = 0; i < 10; i++){
    append(parade, new Weagon(i));

  }
  pos = 0;
};
function draw(){
  background(255);
  drawRoad();
  for(var i = 0; i < 10; i++){
    parade[i].draw(pos);
  }
  pos++;
}

function drawRoad(){
  fill(220);
  stroke(0);
  strokeWeight(5);

  rect(-10, height-60, width+20, 40);
}

function Weagon(nr){
  this.pg = createGraphics(200,500);
  this.nr = nr;

}
Weagon.prototype.draw = function(pos){

  fill(220);
  stroke(0);
  strokeWeight(15);

  this.x = pos -(this.nr * 240);

  ellipse(this.x -50, height-70, 50,50);
  ellipse(this.x +50, height-70, 50,50);
  line(this.x-100,height-100, this.x+100, height-100);

  strokeWeight(2);
  noFill();
  arc(this.x - 120, height-95, 40,40, TWO_PI, PI);

  this.drawCreature();
}
Weagon.prototype.drawCreature = function(){
  var x = this.x -100;
  var y = 0;


  switch(this.nr){
    case 0:
      //this.pg.background(229);
      this.pg.rect(50,50, 10,100);
      this.pg.rect(40,150, 50,50);
      this.pg.rect(20,200, 50,50);
    break;
  }
  image(this.pg, x, y);

}
