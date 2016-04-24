

var app;

function setup() {

    app = new App("tulips",900,900,SVG);
    app.resourcepath ="resources";
    app.loadResources("spring.jpg");


}

function draw() {
    var i,c;
    if(app.isloaded) {
        if(app.pal.name != "black_red"){
            app.pal = new Palette(7, "black_red");
            app.scene =1;
        }
        if(app.isnot(app.project)){
          app.project = new Project();
        }

        switch(app.scene) {

            case 0:{
              background(app.pal.colors[1]);
              app.pal.show();
              app.wait(50);
              break;
            }

             case 1:{
                background(app.pal.colors[1]);
                app.project.construct();
                app.runscene(0);
                break;
              }
              case 2:{
                app.project.change(0);
                app.project.draw(0,100,100);

                app.wait(50);
                break;
              }
              case 3:{
                app.project.change(1);
                app.project.draw(1,200,100);

                app.wait(50);
                break;
              }
              case 4:{
                app.project.change(2);
                app.project.draw(2,300,100);

                app.wait(50);
                break;
              }
              case 5:{
                app.project.change(3);
                app.project.draw(3,400,100);

                app.wait(50);
                break;
              }
              case 6:{
                app.project.change(4);
                app.project.draw(4,100,220);

                app.wait(50);
                break;
              }
              case 7:{
                app.project.change(5);
                app.project.draw(5,200,220);

                app.wait(50);
                break;
              }
              case 8:{
                app.project.change(6);
                app.project.draw(6,300,220);

                app.wait(50);
                break;
              }
              case 9:{
                app.project.change(7);
                app.project.draw(7,400,220);

                app.wait(50);
                break;
              }
              case 9:{
                //app.saveSVG();
                app.runscene(0);
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
