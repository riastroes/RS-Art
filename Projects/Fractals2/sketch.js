
"use strict";
var app;

function setup(){

    app = new App("Fractals",600,1000);
    //first parameter, string with images comma-separated
    //second parameter, string with sounds comma-separated
    app.loadResources("signature.png, coolcolors.jpg, friesland2.jpeg");
}

function draw() {
    var i;
    if(app.isloaded) {
      if(app.pal.name != "blue"){
          app.pal = new Palette(10, "blue");
          app.pal.fromImage(app.images[1],10);
      }
      if(app.isnot(app.project)){
        app.project = new Project();
        app.scene = -1;
        frameRate(1);
      }
      else{
        switch(app.scene) {

            case -1:{
              background(app.pal.colors[1]);
              app.pal.show();
              app.pal.showImgColors();
              app.wait(2);
              break;
            }

            case 0:{
               //
                app.project.draw(1);
                app.runscene(0);
                break;
              }
            case 1:{
               //
                app.project.draw(2);
                app.runscene(0);
                break;
              }
            case 2:{
               //
                app.project.draw(3);
                app.runscene(0);
                break;
              }
            case 3:{
               //
                app.project.draw(4);
                app.wait(3);
                break;
              }
            case 4:{
               //
                app.project.draw(5);
                app.wait(3);
                break;
              }
            case 5:{
               //
                app.project.draw(6);
                app.wait(3);
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
