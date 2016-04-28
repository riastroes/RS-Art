

var app;

function setup() {

    app = new App("tulips",400,400,SVG);
    app.resourcepath ="resources";
    app.loadResources("signature.png");

}

function draw() {
    var i,c;
    if(app.isloaded) {
        if(app.pal.name != "beautiful"){
            app.pal = new Palette(7, "beautiful");
        }
        if(app.isnot(app.project)){
          app.project = new Project();
          app.scene = 7;
        }

        switch(app.scene) {

            case 0:{
              background(app.pal.colors[1]);
              app.pal.show();
              app.pal.showImgColors();
              app.wait(50);
              break;
            }
            case 1:{
               //
               background(app.pal.colors[1]);
               app.project.update(0);
               app.wait(50);
                break;
              }
            case 2:{
                 //
                 app.project.update(1);
                 app.wait(200);
                  break;
                }
            case 3:{
                   //
                   background(app.pal.colors[1]);
                   app.project.update(2);
                   app.wait(50);
                    break;
                  }
            case 4:{
                 //
                 app.project.update(3);
                 app.wait(200);
                  break;
                }
          case 5:{
                 //
                 background(app.pal.colors[1]);
                 app.project.update(4);
                 app.wait(50);
                  break;
                }
          case 6:{
               //
               app.project.update(5);
               app.wait(200);
                break;
              }
        case 7:{
            //
            background(app.pal.colors[1]);
            app.project.update(6);
            app.runscene(0);
            break;
            }
          case 8:{
          //
            app.project.update(7);
            app.runscene(0);
            break;
          }
          case 9:{
          //
            app.project.update(8);
            app.wait(200);
          break;
          }
          
          case 10:{
              //
              background(app.pal.colors[1]);
              app.project.update(9);
              app.runscene(0);
              break;
              }
            case 11:{
            //
              app.project.update(10);
              app.runscene(0);
              break;
            }
            case 12:{
            //
              app.project.update(11);
              app.wait(200);
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
