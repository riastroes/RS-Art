
"use strict";
var app;

function setup() {

    app = new App("TEMPLATE",800,800, SVG);
    //first parameter, string with images comma-separated
    //second parameter, string with sounds comma-separated
    app.loadResources("signature.png");
}

function draw() {
    var i;
    if(app.isloaded) {
      if(app.pal.name != "beautiful"){
          app.pal = new Palette(7, "beautiful");
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
                app.project.draw(0);
                app.runscene(50);
                break;
              }
            case 1:{
               //
                app.project.draw(1);
                app.runscene(10);
                break;
              }
            case 2:{
                 //
                  app.wait(200);
                  break;
                }
            case 3:{
                 //
                 background(255);
                 app.project.draw(2);
                  app.wait(100);
                  break;
                }
            case 4:{
               //

                app.project.draw(3);
                app.runscene(10);
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
