
"use strict";
var app;

function setup() {

    app = new App("Curtains with Holes",windowWidth, windowHeight);
    //first parameter, string with images comma-separated
    //second parameter, string with sounds comma-separated
    app.loadResources("signature.png, red-beige.png, blue-green1.png");
}

function draw() {
    var i;
    if(app.isloaded) {
      if(app.pal.name != "beautiful"){
          app.pal = new Palette(7, "beautiful");
          app.pal.fromImage(app.images[2],10);
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
              app.project.init(1,15);
              app.project.draw(0);
              app.wait(20);
              break;
            }
          case 1:{
             //
              app.project.init(2,8);
              app.project.draw(0);
              app.wait(20);
              break;
            }
          case 2:{
             //
              app.project.init(3,6);
              app.project.draw(0);
              app.wait(20);
              break;
            }


            case 3:{
               //
                app.project.init(1,6);
                app.project.draw(0);
                app.wait(20);
                break;
              }
            case 4:{
               //
                app.project.init(2,4);
                app.project.draw(0);
                app.wait(20);
                break;
              }
            case 5:{
               //
                app.project.init(5,4);
                app.project.draw(0);
                text(app.scene,20,20);
                app.wait(20);
                break;
              }
          case 6:{
             //
              app.project.init(7,4);
              app.project.draw(0);
              text(app.scene,20,20);
              app.wait(20);
              break;
            }
            case 7:{
               //
                app.project.init2(7,4);
                app.project.draw(0);
                text(app.scene,20,20);
                app.wait(20);
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
