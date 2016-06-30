
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
                app.runscene(50);
                break;
              }
              case 2:{
                 //create crossing lines
                 background(255);
                 app.project.create(1);
                  app.runscene(0);
                  break;
                }

              case 3:{
                 //
                  //background(255);
                  app.project.draw(1);
                  app.wait(50);
                  break;
                }
              case 4:{
                 //create crossing lines
                 background(255);
                 app.project.create(2);
                  app.runscene(0);
                  break;
                }
              case 5:{
                   //create crossing lines
                   background(255);
                   app.project.create(3);
                    app.runscene(0);
                    break;
                  }

              case 6:{
                  //
                  background(255);
                  app.project.draw(1);
                  app.wait(100);
                  break;
                }
                case 7:{
                     //create crossing lines
                     background(color(200,200,255));
                     app.project.create(4);
                     app.project.draw(1);
                      app.wait(150);
                      break;
                    }

                case 8:{
                    //
                    background(255);
                    app.project.create(5);

                    app.project.draw(1);
                    app.wait(100, 8);
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
