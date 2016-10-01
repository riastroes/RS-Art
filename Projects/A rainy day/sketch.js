
"use strict";
var app;

function setup() {

    app = new App("A RAINY DAY",540,540);
    //first parameter, string with images comma-separated
    //second parameter, string with sounds comma-separated
    app.loadResources("signature.png, friesland.jpg, ria.jpg, sad.jpg");
}

function draw() {
    var i;
    if(app.isloaded) {
      if(app.pal.name != "beautiful"){
          app.pal = new Palette(7, "beautiful");
          //app.pal.fromImage(app.images[1],10);
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
               //palet
               app.project.init(0);
               app.runscene(0);
               break;
             }
             case 1:{
                app.project.raining();
                app.project.draw(0);
                app.runscene(1000);
                break;
              }
              case 2:{
                 //
                 app.wait(50);
                 break;
               }
              case 3:{
                 //landscape
                 app.project.init(1);
                 app.runscene(0);
                 break;
               }
               case 4:{
                  app.project.raining();
                  app.project.draw(0);
                  app.runscene(1000);
                  break;
                }
                case 5:{
                   //
                   app.wait(50);
                   break;
                 }
                case 6:{
                   //nois colors
                   app.project.init(2);
                   app.runscene(0);
                   break;
                 }
                 case 7:{
                    app.project.raining();
                    app.project.draw(0);
                    app.runscene(1000);
                    break;
                  }
                  case 8:{
                     //
                     app.wait(50);
                     break;
                   }
                  case 9:{
                     //ria
                     app.project.init(3);
                     app.runscene(0);
                     break;
                   }
                   case 10:{
                      app.project.raining();
                      app.project.draw(0);
                      app.runscene(1000);
                      break;
                    }
                    case 11:{
                       //sad
                       app.project.init(4);
                       app.runscene(0);
                       break;
                     }
                     case 12:{
                        app.project.raining();
                        app.project.draw(1);
                        app.runscene(1000);
                        break;
                      }
                    case 13:{
                       //
                       app.wait(50);
                       break;
                     }
              case 12:{
               app.scene = 0;
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
