
"use strict";
var app;

function setup() {

    app = new App("TEMPLATE",windowWidth, windowHeight);
    //first parameter, string with images comma-separated
    //second parameter, string with sounds comma-separated
    app.loadResources("signature.png");
}

function draw() {
    var i;
    if(app.isloaded) {
      if(app.pal.name != "basic"){
          app.pal = new Palette(1, "basic");
          //app.pal.fromImage(app.images[1],10);
      }
      if(app.isnot(app.project)){
        app.project = new Project();
        app.scene = -1;
      }
      else{
        switch(app.scene) {

            case -1:{
              background(app.pal.colors[1]);
              app.pal.show();
              app.pal.showImgColors();
              app.wait(50);
              break;
            }
            case 0:{
               //
                background(app.pal.colors[1]);
                app.project.init(0);
                app.project.draw(0);
                app.wait(100);
                break;
              }
            case 1:{
               //
                background(app.pal.colors[1]);
                app.project.layout.twoColumns();
                app.project.draw(0);
                app.wait(100);
                break;
              }
            case 2:{
               //
                background(app.pal.colors[1]);
                app.project.init(0);
                app.project.layout.twoColumnsWithTitle();
                app.project.draw(0);
                app.wait(100);
                break;
              }
            case 3:{
               //
                background(app.pal.colors[1]);
                app.project.init(0);
                app.project.layout.twoTopOneTwoBottom();
                app.project.draw(0);
                app.wait(100);
                break;
              }
            case 4:{
               //
                background(app.pal.colors[1]);
                app.project.init(0);
                app.project.layout.twoLeftOneTwoRight();
                app.project.draw(0);
                app.wait(100);
                break;
              }
              case 5:{
                 //
                  background(app.pal.colors[1]);
                  app.project.init(0);
                  app.project.layout.twoLeftOneRight();
                  app.project.draw(0);
                  app.wait(100);
                  break;
                }
                case 6:{
                   //
                    background(app.pal.colors[1]);
                    app.project.init(0);
                    app.project.layout.twoRightOneLeft();
                    app.project.draw(0);
                    app.wait(100);
                    break;
                  }
              case 7:{
                 //
                  background(app.pal.colors[1]);
                  app.project.init(0);
                  app.project.layout.twoLeftOneRightWithTitle();
                  app.project.draw(0);
                  app.wait(100);
                  break;
                }
                case 8:{
                   //
                    background(app.pal.colors[1]);
                    app.project.init(0);
                    app.project.layout.twoRightOneLeftWithTitle();
                    app.project.draw(0);
                    app.wait(100);
                    break;
                  }
            default:{
                //wait
                app.wait();
            }
          }
        }

        app.info.show();
        //function(skip, maxframes, show)
        app.gifmaker.check(1, 160, false);



    }
    else{
        println("loading resources ...");
    }

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
