function Palette(){
 
  this.colors =[];
  this.imgcolors = [];
  this.nr = 0;
  this.init(this.nr);
}
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
    this.add(2, color('#cc0000')); // donkerrood
    this.add(3, color('#ff9900')); // goud
    this.add(5, color('#804d00'));
    this.add(4, color('#ffcc80'));
    this.add(6, color('#0f3761')); // donker blauw
    this.add(7, color('#368026')); // kikker groen
   }
  
};

//TODO random imgcolor
//TODO random color
//TODO random rgbcolor (light / dark)

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
Palette.prototype.random = function(){
  return this.colors[randomInt(0,this.colors.length)];
};
Palette.prototype.randombg = function(){
  return this.bgcolors[randomInt(0,this.bgcolors.length)];
};
Palette.prototype.tint = function(acolor, percentage){
  var p = (255/100) * percentage;
  return color(red(acolor), green(acolor), blue(acolor), p );
};

function NamedPalette(name){
  this.name = name;
  this.pal = new Palette();

}