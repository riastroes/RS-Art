
"use strict";
var app;

function setup() {

    app = new App("Fractals",2630,600);
    //first parameter, string with images comma-separated
    //second parameter, string with sounds comma-separated
    app.loadResources("signature.png, coolcolors.jpg");
}

function draw() {
    var i;
    if(app.isloaded) {
      if(app.pal.name != "beautiful"){
          app.pal = new Palette(7, "beautiful");
          app.pal.fromImage(app.images[1],10);
      }
      if(app.isnot(app.project)){
        app.project = new Project();
        app.scene = 0;
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
                app.project.draw(0);
                app.wait(100);
                break;
              }
            case 1:{
               //
                app.project.draw(1);
                app.wait(100);
                break;
              }
            case 2:{
               //
                app.project.draw(2);
                app.wait(100);
                break;
              }
            case 3:{
               //
                app.project.draw(3);
                app.wait(100);
                break;
              }
            case 4:{
               //
                app.project.draw(4);
                app.wait(100);
                break;
              }
            case 5:{
               //
                app.project.draw(5);
                app.wait(100);
                break;
              }
            case 6:{
               //
                app.project.draw(6);
                app.wait(100);
                break;
              }
            case 7:{
               //
                app.project.draw(7);
                app.wait(100);
                break;
              }
          case 8:{
             //
              app.project.draw(8);
              app.wait(100);
              break;
            }
          case 9:{
             //
              app.project.draw(9);
              app.wait(100);
              break;
            }
            case 10:{
               //
                app.project.draw(10);
                app.wait(100);
                break;
              }
            case 11:{
               //
                app.project.draw(11);
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
