
"use strict";
var app;

function setup() {

    app = new App("NOC",windowWidth,windowHeight);
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

        switch(app.scene) {

            case -1:{
              background(app.pal.colors[0]);
              app.pal.show();
              app.pal.showImgColors();
              app.wait(50);
              break;
            }
            case 0:{
               //
               app.bg(10);
               app.project.draw(0);
               app.wait(10);
               break;
              }
           case 1:{
               //white lines, one group
               app.bg(5);
               app.project.draw(1);
               app.runscene(500);
               break;
                }
            case 2:{
               //colored lines, one group
               app.bg(5);
               app.project.draw(2);
               app.runscene(300);
               break;
              }
            case 3:{
               //one big blobber, one group
               app.bg(5);
               app.project.draw(3);
               app.runscene(300);
               break;
              }
            case 4:{
              //create 5 blobbers
              background(255);
              app.project.draw(4);
              app.runscene(4);
              break;
             }
            case 5:{
              //soft moving blobbers
              background(255);
              app.project.draw(5);
              app.runscene(300);
              break;
             }
           case 6:{
                 //soft moving and swelling blobbers
                 app.bg(5);
                 app.project.draw(6);
                 app.runscene(3000);
                 break;
                }
           case 7:{
                 //clear screen
                 background(255);
                 app.runscene(0);
                 break;
                }
            case 8:{
                   //keep blobbers smaller
                   app.bg(1);
                   app.project.draw(7);
                   app.runscene(300);
                   break;
                  }
            case 9:{
                  //clear screen
                  background(0);
                  app.runscene(0);
                  break;
                 }
             case 10:{
                    //white lines + colored lines
                    app.bg(1);
                    app.project.draw(8);
                    app.runscene(2000);
                    break;
                   }
            default:{
                //wait
                app.wait();
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
