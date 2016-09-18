/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "new project";
  this.pg = createGraphics(width,height);

  this.fractal = new Fractal();

  this.flowchart = new Flowchart(this.pg,250, 0 , 50, 500);
  this.flowchart1 = new Flowchart(this.pg,750, 0 , 50, 500);
  this.flowchart2 = new Flowchart(this.pg,1250, 0 , 50, 500);
  this.flowchart3 = new Flowchart(this.pg,1750, 0 , 50, 500);
  this.flowchart4 = new Flowchart(this.pg,2250, 0 , 50, 500);
  this.flowchart5 = new Flowchart(this.pg,2750, 0 , 50, 500);


};

Project.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;
    case 1:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.colors[0];
    this.thickness = 1;
    break;
    case 2:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.randomColor();
    this.thickness = 1;
    break;
    case 3:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.tint(app.pal.randomColor(),20);
    this.thickness = 1;
    break;
    case 4:
    this.strokecolor = app.pal.colors[0];
    var colora = app.pal.randomColor();
    var colorb = color(255,0,0);
    this.fillcolor = app.pal.tint(lerpColor(colora, colorb, random(1)),20);
    this.thickness = 1;
    break;


  }

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Project.prototype.showText = function(){
  this.style(0);
  text(this.text,60,50);
}


Project.prototype.draw = function(nr){
  var x = width/2;
  var y = 0;
  switch(nr){
    case 0:{
      background(255);
      push();
      translate(x,y);
      this.fractal.draw(0,0,50,0);
      pop();
      break;
    }
    case 1:{
      background(255);
      push();
      translate(x,50);
      this.fractal.draw1(0,0,50,0);
      pop();
      break;
    }
    case 2:{
      //background(255);
      push();
      translate(x,250);
      this.fractal.draw2(0,0,50,0);
      pop();
      break;
    }
    case 3:{
      //background(255);
      push();
      translate(x,350);
      this.fractal.draw3(0,0,50,0);
      pop();
      break;
    }
    case 4:{
      //background(255);
      push();
      translate(0,0);
      for(var i = 0; i < width; i += 50){
        this.fractal.draw3(i,0,50,0);
      }
      pop();
      break;
    }
    case 5:{
      //background(255);
      var level = 0;
      this.style(4);
      this.flowchart.add(5,0,50);
      this.flowchart.flow(3);


      break;
    }
    case 6:{
      //background(255);
      var level = 0;
      this.style(4);
      this.flowchart.add(5,0,50);
      this.flowchart.flow(4);


      break;
    }
    case 7:{
      var level = 0;
      this.style(4);
      this.flowchart.add(5,0,50);
      this.flowchart.flow(6);


      break;
    }
    case 8:{
      var level = 0;
      this.style(4);
      this.flowchart.add(5,0,50);
      this.flowchart.flow(6);

      this.flowchart1.add(5,0,50);
      this.flowchart1.flow(6);
      this.flowchart2.add(5,0,50);
      this.flowchart2.flow(6);
      this.flowchart3.add(5,0,50);
      this.flowchart3.flow(6);
      this.flowchart4.add(5,0,50);
      this.flowchart4.flow(6);
      this.flowchart5.add(5,0,50);
      this.flowchart5.flow(6);


      break;
    }
    case 9:{
      var level = 0;
      this.style(1);

      this.flowchart.add(5,0,50);
      this.flowchart.flow(6);

      this.flowchart1.add(5,0,50);
      this.flowchart1.flow(6);
      this.flowchart2.add(5,0,50);
      this.flowchart2.flow(6);
      this.flowchart3.add(5,0,50);
      this.flowchart3.flow(6);
      this.flowchart4.add(5,0,50);
      this.flowchart4.flow(6);
      this.flowchart5.add(5,0,50);
      this.flowchart5.flow(6);



      break;
    }
    case 10:{

      loadPixels();
      this.pg.loadPixels();
      for(var i = 0; i < this.pg.pixels.length; i+=4){
        if(this.pg.pixels[i+3]== 0){
            //achtergrond wit maken
            pixels[i] = 255;
            pixels[i+1] = 255;
            pixels[i+2] = 255;
            pixels[i+3] = 255;
        }
        else if(this.pg.pixels[i] == 0 && this.pg.pixels[i+1] == 0 &&this.pg.pixels[i+1] == 0){

          pixels[i] = 0;
          pixels[i+1] = 0;
          pixels[i+2] = 0;
          pixels[i+3] = 255;
        }


      }
      updatePixels();


      break;
    }
    case 11:{

      loadPixels();
      this.pg.loadPixels();
      for(var i = 0; i < this.pg.pixels.length; i+=4){
        if(this.pg.pixels[i+3]== 0){
            //achtergrond grijs maken
            pixels[i] = 220;
            pixels[i+1] = 220;
            pixels[i+2] = 220;
            pixels[i+3] = 255;
        }
        else if(this.pg.pixels[i] == 0 && this.pg.pixels[i+1] == 0 &&this.pg.pixels[i+1] == 0){

          pixels[i] = 0;
          pixels[i+1] = 0;
          pixels[i+2] = 0;
          pixels[i+3] = 255;
        }


      }
      updatePixels();


      break;
    }
  }
}
