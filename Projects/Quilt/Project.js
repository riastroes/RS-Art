/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Quilt";

};

Project.prototype.showText = function(){
  this.style(0);
  text(this.text,60,80);
}

Project.prototype.init = function(){

    this.wpattern = 100;
    this.hpattern = 100;

    this.wrepeat = floor((width-200)/this.wpattern);
    this.hrepeat = floor((height-200)/this.hpattern);
    this.wmargin = (((width-200) - (this.wrepeat * this.wpattern))/2 ) +100;
    this.hmargin = (((height-200) - (this.hrepeat * this.hpattern))/2 )  +100;
    this.patterns =[];
    for(var i = 0; i < 3; i++){
      append(this.patterns, new QuiltPattern(this.wpattern, this.hpattern,i));
    }

  }

  Project.prototype.draw = function(){
    var i = 0;
    this.drawBorder();
    for(var w = this.wmargin; w < width -this.wmargin; w += this.wpattern){
      for(var h = this.hmargin; h < height - this.hmargin; h += this.hpattern){
        image(this.patterns[i].pg, w, h);
        if(i == this.patterns.length-1){
          i = 0;
        }
        else{
          i++;
        }
      }
    }
  }


  Project.prototype.drawBorder = function(){
    // fill(random(255));
    // stroke(0);
    // strokeWeight(10);
    // rect(random(width), random(height), 100,100);
    //
    image(this.patterns[app.randomInt(2)].pg,floor(random(width)/40)*40,floor(random(height)/40)*40,40,40);
    noFill();
    stroke(0);
    strokeWeight(20);
    rect(this.wmargin,this.hmargin, width-(2*this.wmargin), height - (2*this.hmargin));
    rect(0,0, width, height);
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
