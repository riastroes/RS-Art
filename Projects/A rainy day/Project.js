/**
 * Created by Ria Stroes on 30-9-2016.
 I Will try to create something like rain on a window.
 */
 "use strict";
function Project(){
  this.text = "A Rainy Day";
  this.dens = pixelDensity();

};

Project.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;


  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Project.prototype.showText = function(){
  this.style(0);
  text(this.text,60,80);
}

Project.prototype.init = function(nr){
  switch(nr)
  {
    case 0: {
      noStroke();
      background(0);
      fill(app.pal.randomImgColor());
      ellipse(50,0,100,100);
      fill(app.pal.randomImgColor());
      ellipse(100,0,100,100);
      fill(app.pal.randomImgColor());
      ellipse(150,0,100,100);
      fill(app.pal.randomImgColor());
      ellipse(200,0,100,100);
      fill(app.pal.randomImgColor());
      ellipse(250,0,100,100);
      fill(app.pal.randomImgColor());
      ellipse(300,0,100,100);
      fill(app.pal.randomImgColor());
      ellipse(350,0,100,100);
      fill(app.pal.randomImgColor());
      ellipse(400,0,100,100);
      fill(app.pal.randomImgColor());
      ellipse(450,0,100,100);
      fill(app.pal.randomImgColor());
      ellipse(500,0,100,100);
      fill(app.pal.randomImgColor());
      ellipse(550,0,100,100);
      break;
    }
    case 1: {
      background(app.images[1]);
      break;
    }
    case 2: {
      this.createBackground();
      break;
    }
    case 3: {
      background(app.images[2]);
      break;
    }
    case 4: {
      background(app.images[3]);

      break;
    }
  }
  this.rain = [];

  loadPixels();
}
Project.prototype.raining = function(){

  var x = app.randomInt(width);
  var y = app.randomInt(height);
  var i = (y * width * 4 * this.dens) + (x * 4 * this.dens);

  var c = color(pixels[i],pixels[i+1],pixels[i+2],pixels[i+3]);
  append(this.rain, new Drop(x,y,c));


}
Project.prototype.createBackground = function(){
  var i;
  var a = 0;
  loadPixels();
  for(var x = 0; x < width; x++){
    for(var y = 0; y < height; y++){
      i = (y * width * 4 * this.dens) + (x * 4 * this.dens);
      pixels[i] = map(noise(x/10,y/100), 0,1,0,255);
      pixels[i+1] = map(noise(x/20,y/200), 0,1,0,255);
      pixels[i+2] = map(noise(x/30,y/300), 0,1,0,255);
      pixels[i+3] = 255;
      a += 0.01;
    }
  }
  updatePixels();
}
Project.prototype.draw = function(nr){
  switch(nr){
    case 0:{

      for(var i = 0; i < this.rain.length; i++){
        this.rain[i].draw();

      }
      break;
    }
    case 1:{

      for(var i = 0; i < this.rain.length; i++){
        this.rain[i].draw2();

      }
      break;
    }
  }
  //this.showText();

}
