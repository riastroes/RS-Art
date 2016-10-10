/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Quilt";
  this.init();
};

Project.prototype.showText = function(){
  this.style(0);
  text(this.text,60,80);
}

Project.prototype.init = function(){

    this.wpattern = 100;
    this.hpattern = 100;

    this.wrepeat = floor(width/this.wpattern);
    this.hrepeat = floor(height/this.hpattern);
    this.wmargin = (width - (this.wrepeat * this.wpattern))/2;
    this.hmargin = (height - (this.hrepeat * this.hpattern))/2;
    this.patterns =[];
    for(var i = 0; i < 8; i++){
      append(this.patterns, new QuiltPattern(wpattern, hpattern));
    }

  }

  Project.prototype.draw = function(){
    var i = 0;
    this.drawBorder();
    for(var w = this.wmargin; w < width -this.wmargin; w += this.wpattern){
      for(var h = this.hmargin; h < height - this.hmargin; h += this.hpattern){
        image(this.patterns[i], w, h);
        if(i == this.patterns.length){
          i = 0;
        }
        else{
          i++;
        }
      }
    }
  }


  Project.prototype.drawBorder = function(){
    fill(0);
    stroke(255);
    strokeWeight(20);
    ellipse(random(width), random(height), 100,100);
  }


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
