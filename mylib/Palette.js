function Palette(nr){
 
  this.colors =[];
  this.bgcolors = [];
  this.create(nr);
};

Palette.prototype.add = function(i, acolor){
  this.colors[i] = acolor;
};
Palette.prototype.addPalette  = function(nr){
  this.black = color(0,0,0);
  this.white = color(255,255,255);
  this.red = color(200,12,4,255);
  this.rose = color("#ea5455");
  this.orange = color("#f07b3f");
  this.gray = color(125,125,125);
  this.pink = color(200,12,4,10);
  
};
Palette.prototype.create = function(nr){
  
  this.add(0, color('#000000'));
  this.add(1, color('#ffffff'));
  if(nr == 1){
    this.add(2, color('#ff6666')); //red
    this.add(3, color('#002266'));  //blue
    this.add(4, color('#888888')); // gray
    
    this.add(8, color('#f47171')); //reds
    
    this.add(5, color('#99ccff')); // licht blauw
    
  }
  if(nr == 2){
  this.add(2, color('#cc0000')); // donkerrood
  this.add(3, color('#ff9900')); // goud
  this.add(5, color('#804d00'));
  this.add(4, color('#ffcc80'));
  this.add(6, color('#0f3761')); // donker blauw
  this.add(7, color('#368026')); // kikker groen
  
  
  }
  
};
Palette.prototype.fromBGImage = function(img, count){
 
  
    var acolor;
    var c = 0;
    pal.bgcolors = [];
    
    img.loadPixels();
    while( c  < count){
      var r = random(img.pixels.length - 4);
      var i = int(r - (r % 4));
      acolor = color(img.pixels[i], img.pixels[i+1], img.pixels[i+2], img.pixels[i+3]);
      if(!contains(pal.bgcolors, acolor)){
        append(pal.bgcolors, acolor);
        c = c + 1;
      }
    }
   return pal.bgcolors;
  
  
};
Palette.prototype.random = function(){
  return this.colors[randomInt(0,this.colors.length)];
}
Palette.prototype.randombg = function(){
  return this.bgcolors[randomInt(0,this.bgcolors.length)];
}
Palette.prototype.tint = function(acolor, percentage){
  var p = (255/100) * percentage;
  var tint = color(red(acolor), green(acolor), blue(acolor), p );
  return tint;
}