/**
 * Created by Ria Stroes on 19 sept 2016.
 */
 "use strict";
function Tower(pos, patternwidth){
  this.pg = createGraphics(patternwidth, height);
  this.pos= pos.copy();
  this.patternwidth = patternwidth;
  this.etages = [];
  this.towermaxl = patternwidth;
  this.towermaxr = 0;
  this.top;
  this.topwidth;
  this.shape;
  this.pg.background(100);

};

Tower.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;

  }
  app.style.pg(this.pg, this.strokecolor, this.fillcolor, this.thickness);
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Tower.prototype.create = function(max){
  var w,h,x, minx, maxx;

  x = random(50,this.patternwidth-50);
  var pos = createVector(x, height-1);

  for(var i = 0; i < max; i++){
    var a = app.randomInt(2);
    if(a == 0){
      this.shape = new Keyboard(this.pg);
    }
    else if(a == 1){
      this.shape = new Monitor(this.pg);
    }
    else if(a == 2){
      this.shape = new Computer(this.pg);
    }

    w = this.shape.width;
    h =  this.shape.height;
    minx = pos.x - (w/2);
    if(minx < 0 ){
      pos.x -= minx
    }
    else{
      maxx  = pos.x + (w/2);
      if(maxx > this.patternwidth){
        pos.x -= (maxx - this.patternwidth);
      }
    }
    this.addEtage(pos,this.shape);
    if(pos.x -(w/2)< this.towermaxl ){
      this.towermaxl =pos.x -(w/2);
    }
    if(pos.x + (w/2)> this.towermaxr){
      this.towermaxr = pos.x + (w/2);
    }
    pos.x = random(pos.x -(w/2), pos.x +(w/2));
    pos.y -= h;



  }
}
Tower.prototype.addEtage = function(pos, shape){

  append(this.etages, new Etage(this.pg, pos, shape));
}
Tower.prototype.drop = function(i){
  var d = this.etages[i].height;
  this.etages[i].iscollapsed =true;
  for( var t = i;t < this.etages.length-1; t++){
    this.etages[t+1].top.y += d;
    this.etages[t+1].pos.y += d;


  }
}
Tower.prototype.collapse = function(){
  var a, b;
  this.iscollapsed = false;
  for(var i = 0; i < this.etages.length-1; i++){

      a = createVector(this.etages[i].pos.x, (this.etages[i].pos.y - this.etages[i].height));
      b = createVector(this.etages[i+1].pos.x, this.etages[i+1].pos.y);
      if(a.dist(b) > (this.etages[i].width)){ //10
        //this.pg.ellipse(this.etages[i].pos.x, (this.etages[i].pos.y - this.etages[i].height), 10,10);
        this.pg.ellipse(this.etages[i+1].pos.x, this.etages[i+1].pos.y, 10,10);
        this.drop(i);
        this.iscollapsed = true;
      }
    }
}
Tower.prototype.draw = function(nr){


  for(var i = 0; i < this.etages.length; i++){
    this.etages[i].top.x -= this.towermaxl;
    this.etages[i].pos.x -= this.towermaxl;
    this.etages[i].draw();
  }
  this.top = this.etages[this.etages.length-1].top;
  this.topwidth = this.etages[this.etages.length-1].width;
  this.towermaxr -= this.towermaxl;

  //this.pg.line(this.towermaxl, 0, this.towermaxl, height);
  //this.pg.line(this.towermaxr, 0, this.towermaxr, height);
  image(this.pg,this.pos.x,0);

}
