

var app;

function setup() {

    app = new App("tulips 4",800,800,SVG);
    app.resourcepath ="resources";
    app.loadResources("signature.png, blauw-paars.jpg");

}

function draw() {
    var i,c;
    if(app.isloaded) {
        if(app.pal.name != "beautiful"){
            app.pal = new Palette(7, "beautiful");
            app.pal.fromImage(app.images[1],10);
        }
        if(app.isnot(app.project)){
          app.project = new Project();
          app.scene = 17;
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
               app.project.draw();
               app.wait(200);
                break;
            }
            case 2:{
               //
               background(app.pal.colors[1]);
               app.project.update(1);
               app.project.draw();
               app.wait(200);
                break;
            }
            case 3:{
               //
               background(app.pal.colors[1]);
               app.project.update(2);
               app.project.draw();
               app.wait(200);
                break;
            }
            case 4:{
               //dress 4
               background(app.pal.colors[1]);
               app.project.update(3);
               app.project.draw();
               app.wait(200);
                break;
            }
            case 5:{
               //tulip up side down
               background(app.pal.colors[1]);
               app.project.update(4);
               app.project.draw();
               app.wait(200);
                break;
            }
            case 6:{
               //tulip up side down reshaped
               background(app.pal.colors[1]);
               app.project.update(5);
               app.project.draw();
               app.wait(200);
                break;
            }
            case 7:{
               //growing tulip structure
               background(app.pal.colors[1]);
               app.project.update(6);
               app.project.draw();
               app.wait(200);
                break;
            }
            case 8:{
               //growing tulip structure
               background(app.pal.colors[1]);
               app.project.update(7);
               app.project.draw();
               app.wait(200);
                break;
            }
            case 9:{
               //growing tulip structure
               background(app.pal.colors[1]);
               app.project.update(8);
               app.wait(200);
                break;
            }
            case 10:{
               //growing tulip structure
               background(app.pal.colors[1]);
               app.project.update(9);
               app.wait(200);
                break;
            }
            case 11:{
               //growing tulip structure
               background(app.pal.colors[1]);
               app.project.update(10);
               app.wait(200);
                break;
            }
            case 12:{
               //growing tulip glitch
               background(app.pal.colors[1]);
               app.project.update(11);
               app.wait(200);
                break;
            }
            case 13:{
               //growing tulip structure
               background(app.pal.colors[1]);
               app.project.update(12);
               app.wait(200);
                break;
            }
            case 14:{
               //growing tulip glitch
               background(app.pal.colors[1]);
               app.project.update(13);
               app.wait(200);
                break;
            }
            case 15:{
               //growing tulip structure
               background(app.pal.colors[1]);
               app.project.update(14);
               app.project.draw();
               app.wait(200);
                break;
            }
            case 16:{
               //growing tulip structure
               background(app.pal.colors[1]);
               app.project.update(15);
               app.project.draw();
               app.wait(200);
                break;
            }
            case 17:{
               //growing tulip structure
               background(app.pal.colors[1]);
               app.project.update(16);
               app.project.draw();
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
