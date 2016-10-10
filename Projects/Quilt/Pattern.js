
 "use strict";
function QuiltPattern(pwidth,pheight){
  this.width = pwidth;
  this.height = pheight;
  this.pg = createGraphics(this.width, this.height);
  this.createPattern();
};
QuiltPattern.prototype.createPattern = function(){
  this.style(0);

}
Project.prototype.init = function(){
  this.wmargin, this.hmargin;
  var wpattern, hpattern;
  var wrepeat, hrepeat;
  var patterns;

    this.wpattern = 100;
    this.hpattern = 100;

    this.wrepeat = floor(width/this.wpattern);
    this.hrepeat = floor(height/this.hpattern);
    this.wmargin = (width - (this.wrepeat * this.wpattern))/2;
    this.hmargin = (height - (this.hrepeat * this.hpattern))/2;
    this.patterns =[];
    for(var i = 0; i < 8; i++){
      append(patterns, createGraphics(wpattern, hpattern));
    }
    for(var p = 0; p < 8; p++){
      createPattern(patterns[p],p);
    }
  }



  function createPattern(pg, nr){

    switch(nr){
      case 0:
        pg.fill(0);
        pg.rect(0,0,100,100);
        break;
      case 1:
        pg.fill(120);
        pg.rect(0,0,100,100);
        break;
      case 2:
        pg.fill(255);
        pg.rect(0,0,100,100);
        break;
      case 3:
        pg.fill(50);
        pg.rect(0,0,100,100);
        break;
      case 4:
        pg.fill(200);
        pg.rect(0,0,100,100);
        break;
      case 5:
        pg.fill(100);
        pg.rect(0,0,100,100);
        break;
      case 6:
        pg.fill(175);
        pg.rect(0,0,100,100);
        break;
      case 7:
        pg.fill(125);
        pg.rect(0,0,100,100);
        break;
    }
  }
  function drawBorder(){
    fill(0);
    stroke(255);
    strokeWeight(20);
    ellipse(random(width), random(height), 100,100);
  }
}
QuiltPattern.prototype.draw = function(nr){
  switch(nr){
    case 0:{
      background(255);
      for
      break;
    }
  }


}
QuiltPattern.prototype.style = function(nr){

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
  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
