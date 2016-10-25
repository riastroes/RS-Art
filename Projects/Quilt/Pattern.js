
 "use strict";
function QuiltPattern(pwidth,pheight, nr){
  this.width = pwidth;
  this.height = pheight;
  this.pg = createGraphics(this.width, this.height);
  this.nr = nr;
  this.createPattern(this.nr);

};
QuiltPattern.prototype.createPattern = function(nr){

  this.style(0);
  switch(nr){
    case 0:
      this.design("info@diniebesems.nl");
      break;
    // case 1:
    //   this.pg.fill(120);
    //   this.pg.noStroke();
    //   this.pg.rect(0,0,100,100);
    //   break;
    // case 2:
    //   this.pg.fill(255);
    //   this.pg.noStroke();
    //   this.pg.rect(0,0,100,100);
    //   break;
    case 1:
      this.design("emmischumacher@gmail.com");

      break;
    // case 4:
    //   this.pg.fill(200);
    //   this.pg.noStroke();
    //   this.pg.rect(0,0,100,100);
    //   break;
    // case 5:
    //   this.pg.fill(100);
    //   this.pg.noStroke();
    //   this.pg.rect(0,0,100,100);
    //   break;
    case 2:
      this.design("sb.blom@gmail.com");

      break;
    // case 7:
    //   this.pg.fill(125);
    //   this.pg.noStroke();
    //   this.pg.rect(0,0,100,100);
    //   break;
  }

}


QuiltPattern.prototype.draw = function(nr){
  switch(nr){
    case 0:{
      background(255);

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
QuiltPattern.prototype.design = function(email){
  switch(email){
    case "info@diniebesems.nl":{
      this.pg.background(255);
      this.pg.fill(120);
  this.pg.noStroke(0)
  this.pg.triangle(35,15,50,50,65,15);
  this.pg.fill(140);
  this.pg.triangle(15,35,50,50,15,65);
  this.pg.fill(130);
  this.pg.triangle(85,35,85,65,50,50);
  this.pg.fill(110);
  this.pg.triangle(50,50,65,85,35,85);
  //kleine driehoek
  this.pg.fill(150);
  this.pg.noStroke(0)
  //boven
  this.pg.triangle(30,15,35,10,40,15)
  this.pg.fill(100);
  this.pg.triangle(60,15,65,10,70,15)
        //rechts driehoek
  this.pg.fill(150);
 this.pg.noStroke(0)
  this.pg.triangle(85,30,90,35,85,40)
  this.pg.fill(100);
  this.pg.triangle(85,60,90,65,85,70)
      //onder driehoek
    this.pg.fill(150);
  this.pg.noStroke(0)
  this.pg.triangle(30,85,35,90,40,85)
  this.pg.fill(100)
  this.pg.noStroke(0)
  this.pg.triangle(60,85,65,90,70,85)
      //links driehoek
  this.pg.fill(100);
  this.pg.noStroke(0)
  this.pg.triangle(10,35,15,30,15,40)
    this.pg.fill(150);
  this.pg.noStroke(0)
  this.pg.triangle(10,65,15,60,15,70)

  //bal
  this.pg.fill(75)
  this.pg.stroke(66)
  this.pg.ellipse(50,15,10,10)
  this.pg.fill(10);
  this.pg.ellipse(50,87,10,10)
  this.pg.fill(50)
  this.pg.stroke (255);
  this.pg.ellipse(87,50,10,10)
  this.pg.fill(50)
  this.pg.ellipse(15,50,10,10)
  //kleine pixels
  this.pg.fill(random (255))
  this.pg.noStroke(0)
  this.pg.ellipse(mouseX, mouseY,1,1);

      break;
    }
    case "emmischumacher@gmail.com":{
      //background
  this.pg.background(215);

  //ellipse
  this.pg.fill(245);
  this.pg.stroke(0);
  this.pg.strokeWeight(2);
  this.pg.ellipse(50, 50, 90, 90);

  //rectangle
  this.pg.fill(0);
  this.pg.noStroke();
  this.pg.rect(50, 15, 25, 50);

  //rectangle
  this.pg.fill(250);
  this.pg.stroke(0);
  this.pg.strokeWeight(2);
  this.pg.rect(14, 50, 71, 25);

  //rectangle
  this.pg.fill(0);
  this.pg.noStroke();
  this.pg.rect(20, 30, 25, 40);

      break;
    }

    case "sb.blom@gmail.com":{
      this.pg.fill(137)
	this.pg.rect(-1,-1,101,101)

	this.pg.fill('black')
	this.pg.noStroke()
	this.pg.triangle(10,0,50,50,90,0)

	this.pg.fill('black')
	this.pg.noStroke()
	this.pg.triangle(0,10,50,50,0,90)

	this.pg.fill('black')
	this.pg.noStroke()
	this.pg.triangle(10,100,50,50,90,100)

	this.pg.fill('black')
	this.pg.noStroke()
	this.pg.triangle(100,10,50,50,100,90)

	this.pg.fill('white')
	this.pg.noStroke()
	this.pg.triangle(10,50,50,10,90,50);

	this.pg.fill('white')
	this.pg.noStroke()
	this.pg.triangle(10,50,50,90,90,50);

	this.pg.fill(97)
	this.pg.stroke('black')
	this.pg.rect(20,20,60,60)

  this.pg.fill('white')
	this.pg.noStroke()
	this.pg.ellipse(50,50,40,40);

	this.pg.fill(random(0,255))
	this.pg.stroke(random(0,255))
	this.pg.ellipse(50,50,random(40),random(40));

	this.pg.fill(random(0,255))
	this.pg.stroke(random(0,255))
	this.pg.ellipse(50,50,random(40),random(40));

	this.pg.fill(random(0,255))
	this.pg.stroke(random(0,255))
	this.pg.ellipse(50,50,random(40),random(40));

	this.pg.fill(random(0,255))
	this.pg.stroke(random(0,255))
	this.pg.ellipse(50,50,random(40),random(40));
  break;
    }
  }
}
