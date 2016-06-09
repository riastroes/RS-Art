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
Mobile.prototype.update = function(){

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
Mobile.prototype.draw = function(){
  this.style(app.pal, 0);
  line(width/2,0, (width/2), 100);
//  ellipse((width/2), 100, 10,10)
  for(var i = 0; i< this.mobile.length; i++){
    this.mobile[i].draw()
  }


}
