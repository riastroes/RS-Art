/* Experiment mobiles
*  Ria Stroes
*  June 2016
*/

function Mobile(){
  this.mobile =[];
}

Mobile.prototype.create = function(pos, size, lmass, rmass, level){
  this.mobile[0] = new Rod(pos, size, lmass, rmass, level);
  this.mobile[0].construct();
}
Mobile.prototype.change = function(){

  this.mobile[0].change();

}
Mobile.prototype.update = function(){

  this.mobile[0].update();

}
Mobile.prototype.style = function(pal, nr){
  switch(nr){
    case 0:{
      this.strokecolor = pal.colors[0];
      this.fillcolor = false;
      this.thickness = 1;
      break;
    }

  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

}
Mobile.prototype.draw = function(nr){
  switch(nr){
    case 0:{
      this.style(app.pal, 0);
      line(width/2,0, (width/2), 50);
      for(var i = 0; i< this.mobile.length; i++){
        this.mobile[i].draw()
      }
      break;
    }
    case 1:{
      this.style(app.pal, 0);
      line(width/2,0, (width/2), 50);
      for(var i = 0; i< this.mobile.length; i++){
        this.mobile[i].draw1();
      }
      break;
    }
    case 2:{
      this.style(app.pal, 0);
      line(width/2,0, (width/2), 50);
      this.mobile[0].draw2();
      break;
    }


  }



}
