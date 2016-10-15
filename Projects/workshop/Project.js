/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Workshop";
  this.init();
};

Project.prototype.style = function(nr){

    if(nr == 1){
      this.strokecolor = app.pal.colors[0];
      this.fillcolor = app.pal.colors[1];
      this.thickness = 1;
    }
    if(nr == 2){
      this.strokecolor = app.pal.colors[1];
      this.fillcolor = app.pal.colors[0];
      this.thickness = 1;
    }
    if(nr == 3){
      this.strokecolor = app.pal.colors[1];
      this.fillcolor = app.pal.randomImgColor;
      this.thickness = 1;
    }
};

Project.prototype.init = function(){

}
Project.prototype.drawXY = function(x,y, posx, posy){
  fill(app.pal.colors[0]);
  noStroke();
  textSize(30);
  textAlign(LEFT);
  text("( "+ x +", "+ y + " )", posx, posy);

  stroke(0);
  line(30,30, 0,0);
  line(30,1000-30, 0,1000);
  line(1000-30,30, 1000,0);
  line(1000-30,1000-30, 1000,1000);
  fill(0);
  triangle(0,0,10,0,0,10);
  triangle(1000,0,1000-10,0,1000,10);
  triangle(1000,1000,1000-10,1000,1000,1000-10);
  triangle(0,1000,10,1000,0,1000-10);
}
Project.prototype.draw = function(nr){


  switch(nr){
    case 0:{
      background(255);

      this.drawXY(0,0,30,60);
      this.drawXY(0,1000,30,1000-30);
      this.drawXY(1000,0,1000-150,60);
      this.drawXY(1000,1000,1000-200,1000-30);

      var x = (width/2)-300;
      var y = (height/2)-150;



      text("x", x/2, y +10);
      text("y", x-7, y/2);
      line(0,y, x,y);
      line(x,0, x,y);
      triangle(x,y-2, x-10, y-12, x+10, y-12);
      triangle(x-2,y, x-12, y-10, x-12, y+10);
      fill(app.pal.colors[3]);
      noStroke();
      rect((width/2)-300, (height/2)-150, 600,300);
      fill(0);
      text("width = 600", x +300, y);
      push()
      translate(x, y+75)
      rotate(PI/2);
      text("height = 300", 0,20);
      text("height = 1000", 0,x-10);
      pop();
      text("width = 1000", width/2, 30);

      noStroke();
      fill(255);
      textSize(48);
      textAlign(CENTER);
      text("rect(x,y, width, height)", width/2, height/2);

      break;
    }

    case 1:{
      background(255);


      var x = (width/2);
      var y = (height/2);
      fill(app.pal.colors[4]);
      noStroke();
      ellipse((width/2), (height/2), 600,300);

      this.drawXY(0,0,30,60);
      this.drawXY(0,1000,30,1000-30);
      this.drawXY(1000,0,1000-150,60);
      this.drawXY(1000,1000,1000-200,1000-30);


      text("x", x-100, y +10);
      text("y", x-7, y-80);
      line(0,y, x,y);
      line(x,0, x,y);
      triangle(x,y-2, x-10, y-12, x+10, y-12);
      triangle(x-2,y, x-12, y-10, x-12, y+10);

      fill(0);
      text("width = 600", x-85, y-150);
      push()
      translate(x, y-75);
      rotate(PI/2);
      text("height = 300", 0,x-170);
      text("height = 1000", 0,x-10);
      pop();
      text("width = 1000", (width/2)-85, 30);
      line(200, 350, 200, 650);
      line(200, 350, 800, 350);

      noStroke();
      fill(255);
      textSize(48);
      textAlign(CENTER);
      text("ellipse(x,y, width, height)", width/2,( height/2)+60);

      break;
    }

    case 2:{
      background(255);


      var x = (width/2);
      var y = (height/2)-300;
      var size = 450;

      fill(app.pal.colors[5]);
      noStroke();
      triangle(x,y,x-size,y+size, x+size,y+size);

      this.drawXY(0,0,30,60);
      this.drawXY(0,1000,30,1000-30);
      this.drawXY(1000,0,1000-150,60);
      this.drawXY(1000,1000,1000-200,1000-30);


      text("x", x-100, y +10);
      text("y", x-7, y-80);
      line(0,y, x,y);
      line(x,0, x,y);
      triangle(x,y-2, x-10, y-12, x+10, y-12);
      triangle(x-2,y, x-12, y-10, x-12, y+10);

      fill(0);

      push()
      translate(x, y-75);
      rotate(PI/2);

      text("height = 1000", 0,x-10);
      pop();
      text("width = 1000", (width/2)-85, 30);


      noStroke();
      fill(255);
      textSize(48);
      textAlign(CENTER);
      text("triangle(x,y, x1,y1, x2,y2)", width/2,( height/2)+100);

      break;
    }
  }
}
