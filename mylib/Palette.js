function Palette(){
 
  this.colors =[];
  this.imgcolors = [];
  this.nr = 0;
  this.init(this.nr);
}
Palette.prototype.add = function(i, acolor){
  this.colors[i] = acolor;
};

Palette.prototype.init = function(nr){
  this.nr = nr;
  if(this.nr == 0) {
    //these colors are always available
    this.add(0, color('#000000')); // black
    this.add(1, color('#ffffff')); // white
  }
  else if(this.nr == 1){
    this.add(2, color('#ff6666')); //red
    this.add(3, color('#002266'));  //blue
    this.add(4, color('#888888')); // gray
    this.add(8, color('#f47171')); //reds
    this.add(5, color('#99ccff')); // licht blauw
    
  }
  else if(this.nr == 2){
    this.add(2, color('#cc0000')); // dark red
    this.add(3, color('#ff9900')); // gold
    this.add(5, color('#804d00'));
    this.add(4, color('#ffcc80'));
    this.add(6, color('#0f3761')); // dark blue
    this.add(7, color('#368026')); // frog green
   }
  
};



Palette.prototype.fromImage = function(img, count){
 
    var acolor;
    var c = 0;
    var attempt = 0;
    this.imgcolors = [];
    
    img.loadPixels();
    while( c  < count){
      var r = random(img.pixels.length - 4);
      var i = int(r - (r % 4));
      acolor = color(img.pixels[i], img.pixels[i+1], img.pixels[i+2], img.pixels[i+3]);
      if(!contains(this.imgcolors, acolor) || attempt > 100){
        append(this.imgcolors, acolor);
        c++;
      }
        attempt++;
    }

  
};
Palette.prototype.randomColor = function(){
    if(this.colors.length > 0) {
        return this.colors[randomInt(0, this.colors.length)];
    }
    return false;
};

Palette.prototype.randomImgColor = function(){
    if(this.imgcolors.length > 0) {
        return this.imgcolors[randomInt(0, this.imgcolors.length)];
    }
    return false;
};
Palette.prototype.randomRGBColor = function(colorgroup){
    var acolor = this.colors[0];
    switch(colorgroup){
        case "GRAY":{
            acolor = color(app.randomInt(255));
            break;
        }
        case "DARK":{
            acolor = color(app.randomInt(127),app.randomInt(127),app.randomInt(127));
            break;
        }
        case "LIGHT":{
            acolor = color(app.randomInt(127,255),app.randomInt(127,255),app.randomInt(127,255));
            break;
        }
        default:{
            acolor = color(app.randomInt(255),app.randomInt(255),app.randomInt(255));
        }

    }
    return acolor;
};
Palette.prototype.tint = function(acolor, percentage){
  var p = (255/100) * percentage;
  return color(red(acolor), green(acolor), blue(acolor), p );
};




function NamedPalette(name){
  this.name = name;
  this.pal = new Palette();

}