
"use strict";
var app;

function setup() {

    app = new App("TEMPLATE",540,540);
    //first parameter, string with images comma-separated
    //second parameter, string with sounds comma-separated
    app.loadResources("mooiekleuren.jpg");
}

function draw() {
    var i;
    if(app.isloaded) {
      if(app.pal.name != "beautiful"){
          app.pal = new Palette(7, "beautiful");
          app.pal.fromImage(app.images[0],10);
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
               //create space
                app.project.create(0);
                app.runscene(0);
                break;
              }
            case 1:{
               //
                background(255);
                app.project.draw(0);
                app.wait(100);
                break;
              }
              case 2:{
                 //create 10 lines
                 background(255);
                 app.project.create(1);
                  app.runscene(99);
                  break;
                }

            case 3:{
                 //draw lines
                  app.project.draw(1);
                  app.wait(200);
                  break;
                }
            case 4:{
               //create 100 not crossing lines
               background(255);
               app.project.create(2);
                app.runscene(0);
                break;
              }
            case 5:{
                 //create 100 not crossing lines
                 background(255);
                 app.project.create(3);
                  app.runscene(199);
                  break;
                }
            case 6:{
               //draw lines
                app.project.draw(1);
                app.wait(5000);
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
