
"use strict";
var app;

function setup() {

    app = new App("Workshop Maskers",1000,1000);
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
        app.scene = 4;
      }
      else{
        switch(app.scene) {

            case -1:{
              background(app.pal.colors[1]);
              app.pal.show();
              //app.pal.showImgColors();
              app.wait(50);
              break;
            }
            case 0:{
               //
                app.project.draw(0);
                app.wait(200);
                break;
              }
              case 1:{
                 //
                  app.project.draw(1);
                  app.wait(200);
                  break;
                }
                case 2:{
                   //
                    app.project.draw(2);
                    app.wait(200);
                    break;
                  }
            case 3:{
               //
                app.project.draw(3);
                app.wait(200);
                break;
              }
          case 4:{
             //
              app.project.draw(4);
              app.wait(200);
              break;
            }
            case 5:{
               //
                app.project.draw(5);
                app.wait(200);
                break;
              }
            case 6:{
               //
                app.project.draw(6);
                app.runscene(0);
                break;
              }
              case 7:{
                 //
                  app.project.draw(7);
                  app.runscene(8000);
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
