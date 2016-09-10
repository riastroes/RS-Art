
"use strict";
var app;

function setup() {

    app = new App("TEMPLATE",600,600);
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
               //click on the screen to start

               background(255);
                app.project.run(0);
                app.wait(500);
                break;
              }

            case 1:{

              app.project.run(1);
              app.runscene(5000);
              break;
            }
            case 3:{
              app.wait(500);
              break;
            }
            case 4:{

            }
            case 98:{
              //test
              app.project.run(4);
              app.runscene(0);
              break;
            }
            case 99:{

              fill(0)
              textSize(32);
              textAlign(CENTER);
              text("GAME OVER", width/2, height/2);
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
