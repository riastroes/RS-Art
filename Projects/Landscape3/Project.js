/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Landscape3";
  this.dens = pixelDensity();
  this.init();
};

Project.prototype.style = function(nr,a){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;

    case 1:{
      this.strokecolor = lerpColor(app.pal1.imgcolors[0],app.pal1.imgcolors[4],a);
      this.fillcolor = false;
      this.thickness = 1;
      break;
    }
    case 2:{
      this.strokecolor = lerpColor(app.pal1.imgcolors[5],app.pal1.imgcolors[9],a);
      this.fillcolor = false;
      this.thickness = 1;
      break;
    }
    case 3:{
      this.strokecolor = false;
      this.fillcolor = app.pal.tint(color("#ffff00"),10);
      this.thickness = 1;
      break;
    }
    case 4:{
      this.strokecolor = app.pal1.imgcolors[a];
      this.fillcolor = false;
      this.thickness = 0.5;
      break;
    }
    case 5:{
      this.strokecolor = app.pal2.imgcolors[a];
      this.fillcolor = false;
      this.thickness = 0.5;
      break;
    }
    case 6:{
      this.strokecolor = color(250,0,0);
      this.fillcolor = false;
      this.thickness = a;
      break;
    }
  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Project.prototype.showText = function(){
  this.style(0);
  text(this.text,60,80);
}

Project.prototype.init = function(mase, a){ //mase = vertical space, a = angle difference
  this.lines = [];
  this.mase = mase;
  this.a = a;
  this.knots = ceil(width /this.mase);
  for( var y = 20; y < height-200; y += 2){
    //function Chain(start,distance, length,  min , max, margin){
    append(this.lines, new Chain(createVector(random(50,150),y), this.mase, this.knots, -(this.a/2), (this.a/2), 20, 0));
  }
  this.horizon(this.mase, this.knots);
  this.rain = [];

}
Project.prototype.horizon = function(mase, len){
  this.hor = [];
   append(this.hor, new Chain(createVector(50,(height/2)+50), mase, len, -0.5, 0.5, 50, 0));
}
Project.prototype.raining = function(){
  var x,y,c,i;
  for(var r = 0; r < 10; r++){

    x = app.randomInt(width);
    y = app.randomInt(height);
    i = (y * width * 4 * this.dens) + (x * 4 * this.dens);

    c = color(pixels[i],pixels[i+1],pixels[i+2],pixels[i+3]);
    append(this.rain, new Drop(x,y,c));
  }


}
Project.prototype.draw = function(nr){

  switch(nr){
    case 0:{
      this.style(3);
      this.center = createVector(width-500, 180);
      ellipse(this.center.x, this.center.y,200,200);
      var max = this.lines.length;
      for(var i = 0; i< max;i++){
        if(i < max/2){
          this.style(4,floor(map(i,0,max/2,5,0)));
        }
        else{
          this.style(5,floor(map(i,max/2, max, 0,5)));
        }
          this.lines[i].addForce();
          this.lines[i].svg();
      }
      this.style(6, 0.1);
      for(var h = 0; h < this.hor.length;h++){
         this.hor[h].svg();
      }
      break;
    }
    case 1:{
      loadPixels();

      break;
    }
    case 2:{
      if(this.rain.length < 2000){
        this.raining();
      }
      var f = frameCount % this.rain.length;
      f = this.rain.length -f;
      for(var i = f; i < this.rain.length; i++){
        this.rain[i].draw2();

      }


      var max = this.lines.length;
      var i = app.randomInt(max-1);
        if(i < max/2){
          this.style(4,floor(map(i,0,max/2,5,0)));
        }
        else{
          this.style(5,floor(map(i,max/2, max, 0,5)));
        }
          this.lines[i].addForce();
          this.lines[i].svg();

      this.style(6, 0.01);
      for(var h = 0; h < this.hor.length;h++){
         this.hor[h].svg();
      }
      break;
    }
  }


}
