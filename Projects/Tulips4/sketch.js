

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
          app.scene = 15;
        }

        switch(app.scene) {

            case -1:{
              background(app.pal.colors[1]);
              app.pal.show();
              app.pal.showImgColors();
              app.wait(50);
              break;
            }
            case 0:{
               //half shelfs
               background(app.pal.colors[1]);
               app.project.draw(0);

               app.wait(100);
                break;
            }
            case 1:{
               // small shelf to round form
               background(app.pal.colors[1]);
               app.project.draw(1);
               app.wait(100);
               break;
            }
            case 2:{
               // small shelf to round form, different style
               background(app.pal.colors[1]);
               app.project.draw(2);
               app.wait(100);
                break;
            }
            case 3:{
               //symmetrical  tulip
               background(app.pal.colors[1]);
               app.project.draw(3);
               app.wait(100);
                break;
            }
            case 4:{
               //tulips
               background(app.pal.colors[1]);
               app.project.draw(4);
               app.wait(100);
                break;
            }
            case 5:{
               //little tulips
               background(app.pal.colors[1]);
               app.project.draw(5);
               app.wait(100);
                break;
            }
            case 6:{
               //growing tulip structure
               background(app.pal.colors[1]);
               app.project.draw(6);
               app.wait(100);
               break;
            }
            case 7:{
               //growing tulip structure
               background(app.pal.colors[1]);
               app.project.draw(7);

               app.wait(100);
                break;
            }
            case 8:{
               //growing tulip structure
               background(app.pal.colors[1]);
               app.project.draw(8);
               app.wait(100);
                break;
            }
            case 9:{
               //growing tulip structure
               background(app.pal.colors[1]);
               app.project.draw(9);
               app.wait(100);
                break;
            }
            case 10:{
               //growing tulip structure more leaves
               background(app.pal.colors[1]);
               app.project.draw(10);
               app.wait(100);
                break;
            }
            case 11:{
               //growing tulip
               background(app.pal.colors[1]);
               app.project.draw(11);
               app.wait(50);
                break;
            }
            case 12:{
               //growing tulip structure
               background(app.pal.colors[1]);
               app.project.draw(12);
               app.wait(50);
                break;
            }
            case 13:{
               //growing tulip
               background(app.pal.colors[1]);
               app.project.draw(13);
               app.wait(50);
                break;
            }
            case 14:{
               //growing tulip glitch
               background(app.pal.colors[1]);
               app.project.draw(14);
               app.wait(50);
                break;
            }
            case 15:{
               //growing tulip structure
               background(app.pal.colors[1]);
               app.project.draw(15);
               app.wait(1200);
                break;
            }
            case 16:{
               //growing tulip structure
               background(app.pal.colors[1]);
               app.project.update(16);
               app.project.draw();
               app.wait(1200);
                break;
            }
            case 17:{
               //growing tulip structure
               background(app.pal.colors[1]);
               app.project.update(17);
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
