
"use strict";
var app;

function setup() {

    app = new App("Pinguins",540,500);
    //first parameter, string with images comma-separated
    //second parameter, string with sounds comma-separated
    app.loadResources("coolcolors.jpg");
}

function draw() {
    var i;
    if(app.isloaded) {
      if(app.pal.name != "beautiful"){
          app.pal = new Palette(8, "beautiful");
          app.pal.fromImage(app.images[0],10);
      }
      if(app.isnot(app.project)){
        app.project = new Project();
        app.scene = -1;
      }
      else{
        switch(app.scene) {

            case -1:{
              background(app.pal.imgcolors[0]);
              app.pal.show();
              app.pal.showImgColors();
              app.wait(50);
              break;
            }
            case 0:{
                background(app.pal.colors[5]);
                app.project.update(1,1);
                app.runscene(1);
                break;
              }
            case 1:{
                background(app.pal.colors[5]);
                app.project.draw(0);
                app.runscene(1000);
                break;
              }

            case 2:{
                background(app.pal.colors[5]);
                app.project.update(0,4);
                app.runscene(0);
                break;
              }
            case 3:{
                background(app.pal.colors[5]);
                app.project.draw(0);
                app.runscene(1000);
                break;
              }

              case 4:{
                  background(app.pal.colors[5]);
                  app.project.update(0,5);
                  app.runscene(0);
                  break;
                }
              case 5:{
                  background(app.pal.colors[5]);
                  app.project.draw(0);
                  app.runscene(5000);
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
