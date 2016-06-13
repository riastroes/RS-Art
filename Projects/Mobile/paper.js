function Paper(){
  this.pg = createGraphics(width, height);
  this.style(0);
}
Paper.prototype.style = function(nr){
  switch (nr) {
    case 0:
      this.strokecolor = app.pal.tint(app.pal.imgcolors[0], 40);
      this.fillcolor = app.pal.tint(app.pal.imgcolors[0], 3);
      this.thickness = 1;
      break;
    }
  app.style.pg(this.pg, this.strokecolor, this.fillcolor, this.thickness);
  }

Paper.prototype.scroll = function(speed){
  this.pg.loadPixels();
  for(var i =this.pg.pixels.length -(width*4 * speed) ; i > 0 ; i--){
    this.pg.pixels[i + (width*4 *speed)] = this.pg.pixels[i];
    }

  this.pg.updatePixels();
}
Paper.prototype.draw = function(){
  this.scroll(5);
  image(this.pg, 0,0);

}
