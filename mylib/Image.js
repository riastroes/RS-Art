function RImage(img){
  this.image= img;
}
RImage.prototype.get = function(){
  return this.image;
}
RImage.prototype.getPixels = function(){
  this.image.loadPixels();
  return this.image.pixels;
}
RImage.prototype.changePixels = function(){
  this.image.updatePixels();
}
RImage.prototype.colorPixels = function(acolor){

  var pixels = this.getPixels();

  for(i=0; i< pixels.length; i += 4){
     if(pixels[i] + red(acolor) <= 255){
       pixels[i] += red(acolor);
     }
     else{
       pixels[i] = 255;
     }
     if(pixels[i+1] + green(acolor) <= 255){
       pixels[i+1] += green(acolor);
     }
     else{
       pixels[i+1] = 255;
     }
     if(pixels[i+2] + blue(acolor) <= 255){
       pixels[i+2] += blue(acolor);
     }
     else{
       pixels[i+2] = 255;
     }

  }
  this.changePixels();
}
RImage.prototype.resize = function(w, h){
    this.image.resize(w,h);
}
RImage.prototype.setTransparency = function(alpha){

  var pixels = this.getPixels();
  for(i=0; i< pixels.length; i += 4){
    pixels[i+3]= alpha;
  }
  this.changePixels();
}
RImage.prototype.shiftPixels = function(vector){
  var v = vector.copy();
  var pixels = this.getPixels();

  for(i=0; i< pixels.length; i+=1){
    x = i % (this.pg.width);
    y = int(i/(this.pg.width*4));


    m = (y * this.pg.width*4) + (x*4);
    pixels[m] += 100;
    ellipse( x,y, 10,10);
  }
  this.changePixels();
}
