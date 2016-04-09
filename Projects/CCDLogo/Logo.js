/**
 * Created by Ria Stroes on 30-3-2016.
 */


function Logo(mask){
    //this.grid = new Grid(10,10,(width-540)/2, (height-540)/2, (width-540)/2, (height-540)/2);
    this.grid  = undefined;
    this.mask = mask;
    this.center = createVector(width/2, height/2);
    this.newblobbers = [];
    this.blobbers = [];
    for(i =0; i < this.mask.length; i++){
        this.blobbers[i] = new Blobber();
        this.blobbers[i].init(this.mask[i],8,random(100),random(300),10,50);

    }

}
Logo.prototype.drop = function(){
  var i;
    i =app.randomInt(this.blobbers.length-1);
    this.blobbers[i].position.y +=10;
    this.blobbers[i].position.x +=random(-10,10);
};
Logo.prototype.style = function(strokecolor, fillcolor, thickness){
    var i, oldfillcolor;
        for (i = 0; i < this.blobbers.length; i++) {
          if(i == 47){
            fillcolor = app.pal.colors[2];
          }
          if(i == 48){
            fillcolor = app.pal.colors[0];
          }
            this.blobbers[i].style(strokecolor, fillcolor,thickness);
        }

};
Logo.prototype.styleRandom = function(strokecolor1, fillcolor1, thickness1,strokecolor2, fillcolor2, thickness2){
  var i;
  for (i = 0; i <this.blobbers.length; i++) {
    if(random(100)<1){

      this.blobbers[i].style(strokecolor1, fillcolor1,thickness1); }
    else if(random(100)<1){

        this.blobbers[i].style(strokecolor2, fillcolor2,thickness2);
        if(random(100)<1){

          this.blobbers[i].style(strokecolor1, fillcolor1,thickness1); }

      }

    }
  };

Logo.prototype.rotate = function(rot){
    var i;

    for(i=0; i < this.blobbers.length; i++) {
       this.blobbers[i].rot += rot;
    }
};
Logo.prototype.scale = function(factor){
    var i;

    for(i=0; i < this.blobbers.length; i++) {
      if(this.blobbers[i].factor < 0.1 || this.blobbers[i].factor > 0.9 ){
        this.blobbers[i].sign = -this.blobbers[i].sign;
       }
       this.blobbers[i].factor += (factor * this.blobbers[i].sign * this.blobbers[i].rscale);
    }
};
Logo.prototype.draw = function(){
    var i;
    //app.style.set( app.pal.colors[3],app.pal.tint(app.pal.colors[3],10),1);
    for(i=0; i < this.blobbers.length; i++) {

        this.blobbers[i].draw();

    }
};
