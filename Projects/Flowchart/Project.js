/**
 * Created by Ria Stroes on 18-9-2016.
 */
 "use strict";
function Project(){
  this.text = "Flowchart";
  this.pg = createGraphics(width,height);


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
    this.fillcolor = false;
    this.thickness = 1;
    break;
    case 1:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.colors[0];
    this.thickness = 10;
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
  app.style.pg(this.pg,this.strokecolor, this.fillcolor, this.thickness);

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
      //red triangles
      background(255);
      this.text = "Fractals " + nr;
      this.showText();

      this.flowchart.add(5,0,50);
      this.flowchart.flow(3, 2);
      image(this.pg, 0,0);
      break;
    }
    case 1:{
      background(255);
      this.pg = createGraphics(width,height);
      this.flowchart = new Flowchart(this.pg, 200, 0 , 50, 500);

      break;
    }
    case 2:{

      this.text = "Fractals " + nr;
      this.showText();
      var level = 0;

      this.flowchart.add(15,0,50);
      this.flowchart.flow(5, 2);
      image(this.pg, 0,0);
      break;
    }

    case 3:{
      background(255);
      this.pg = createGraphics(width,height);
      this.flowchart = new Flowchart(this.pg,250, 0 , 50, 500);
      this.flowchart1 = new Flowchart(this.pg,750, 0 , 50, 500);
      this.flowchart2 = new Flowchart(this.pg,1250, 0 , 50, 500);
      this.flowchart3 = new Flowchart(this.pg,1750, 0 , 50, 500);
      this.flowchart4 = new Flowchart(this.pg,2250, 0 , 50, 500);
      this.flowchart5 = new Flowchart(this.pg,2750, 0 , 50, 500);


      break;
    }
    case 4:{

      var level = 0;
      this.text = "Fractals " + nr;
      this.showText();

      this.flowchart.add(10,0,50);
      this.flowchart.flow(6,2);

      this.flowchart1.add(10,0,50);
      this.flowchart1.flow(6,2);
      this.flowchart2.add(10,0,50);
      this.flowchart2.flow(6,2);
      this.flowchart3.add(10,0,50);
      this.flowchart3.flow(6,2);
      this.flowchart4.add(10,0,50);
      this.flowchart4.flow(6,2);
      this.flowchart5.add(10,0,50);
      this.flowchart5.flow(6,2);

      //image(this.pg, 0,0);
      break;
    }
    case 5:{
      background(255);
      this.pg = createGraphics(width,height);
      this.flowchart = new Flowchart(this.pg,250, 0 , 50, 500);
      this.flowchart1 = new Flowchart(this.pg,750, 0 , 50, 500);
      this.flowchart2 = new Flowchart(this.pg,1250, 0 , 50, 500);
      this.flowchart3 = new Flowchart(this.pg,1750, 0 , 50, 500);
      this.flowchart4 = new Flowchart(this.pg,2250, 0 , 50, 500);
      this.flowchart5 = new Flowchart(this.pg,2750, 0 , 50, 500);


      break;
    }
    case 6:{

      this.text = "Fractals " + nr;
      this.showText();

      this.flowchart.add(10,0,50);
      this.flowchart.flow(5,0);
      this.flowchart1.add(10,0,50);
      this.flowchart1.flow(5,0);
      this.flowchart2.add(10,0,50);
      this.flowchart2.flow(5,0);
      this.flowchart3.add(10,0,50);
      this.flowchart3.flow(5,0);
      this.flowchart4.add(10,0,50);
      this.flowchart4.flow(5,0);
      this.flowchart5.add(10,0,50);
      this.flowchart5.flow(5,0);
      //image(this.pg, 0,0);

      break;
    }
    case 7:{
      background(255);
      image(this.pg, 0,0);
      loadPixels();
      var img = app.images[2];
      img.resize(width,height);

      img.loadPixels();


      for(var i = 0; i < pixels.length; i+=4){
        if(pixels[i]== 0 && pixels[i+3]== 255){
            //achtergrond wit maken
            pixels[i] =   img.pixels[i];
            pixels[i+1] = img.pixels[i+1];
            pixels[i+2] = img.pixels[i+2];
            pixels[i+3] = img.pixels[i+3];
        }
        if(pixels[i]== 200 && pixels[i+3]== 255){
            //achtergrond wit maken
            pixels[i] =   img.pixels[i];
            pixels[i+1] = img.pixels[i+1];
            pixels[i+2] = img.pixels[i+2];
            pixels[i+3] = img.pixels[i+3];
        }


      }
      updatePixels();
      this.text = "Fractals " + nr;
      this.showText();
      //image(this.pg, 0,0);

      break;
    }
    case 8:{
      background(255);
      this.pg = createGraphics(width,height);
      this.flowchart = new Flowchart(this.pg,250, 0 , 50, 500);
      this.flowchart1 = new Flowchart(this.pg,750, 0 , 50, 500);
      this.flowchart2 = new Flowchart(this.pg,1250, 0 , 50, 500);
      this.flowchart3 = new Flowchart(this.pg,1750, 0 , 50, 500);
      this.flowchart4 = new Flowchart(this.pg,2250, 0 , 50, 500);
      this.flowchart5 = new Flowchart(this.pg,2750, 0 , 50, 500);


      break;
    }
    case 9:{

      this.text = "Fractals " + nr;
      this.showText();

      this.flowchart.add(0,0,50);
      this.flowchart.flow(5,1);
      this.flowchart1.add(0,0,50);
      this.flowchart1.flow(5,1);
      this.flowchart2.add(0,0,50);
      this.flowchart2.flow(5,1);
      this.flowchart3.add(0,0,50);
      this.flowchart3.flow(5,1);
      this.flowchart4.add(0,0,50);
      this.flowchart4.flow(5,1);
      this.flowchart5.add(0,0,50);
      this.flowchart5.flow(5,1);
      //image(this.pg, 0,0);

      break;
    }
    case 10:{
      background(255);
      image(this.pg, 0,0);
      loadPixels();
      var img = app.images[2];
      img.resize(width,height);

      img.loadPixels();


      for(var i = 0; i < pixels.length; i+=4){
        if(pixels[i]== 0 && pixels[i+3]== 255){
            //achtergrond wit maken
            pixels[i] =   img.pixels[i];
            pixels[i+1] = img.pixels[i+1];
            pixels[i+2] = img.pixels[i+2];
            pixels[i+3] = img.pixels[i+3];
        }
        if(pixels[i]== 200 && pixels[i+3]== 255){
            //achtergrond wit maken
            pixels[i] =   img.pixels[i];
            pixels[i+1] = img.pixels[i+1];
            pixels[i+2] = img.pixels[i+2];
            pixels[i+3] = img.pixels[i+3];
        }


      }
      updatePixels();
      this.text = "Fractals " + nr;
      this.showText();
      //image(this.pg, 0,0);

      break;
    }
  }
}
