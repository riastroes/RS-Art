

var app;

function setup() {

    app = new App("tulips",900,1800,SVG);
    app.resourcepath ="resources";
    app.loadResources("spring.jpg");


}

function draw() {
    var i,c;
    if(app.isloaded) {
        if(app.pal.name != "black_red"){
            app.pal = new Palette(7, "black_red");
            app.scene = 1;
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

                app.wait(1);
                break;
              }
              case 3:{
                app.project.change(1);
                app.project.draw(1,200,100);

                app.wait(1);
                break;
              }
              case 4:{
                app.project.change(2);
                app.project.draw(2,300,100);

                app.wait(1);
                break;
              }
              case 5:{
                app.project.change(3);
                app.project.draw(3,400,100);

                app.wait(1);
                break;
              }
              case 6:{
                app.project.change(4);
                app.project.draw(4,100,220);

                app.wait(1);
                break;
              }
              case 7:{
                app.project.change(5);
                app.project.draw(5,200,220);

                app.wait(1);
                break;
              }
              case 8:{
                app.project.change(6);
                app.project.draw(6,300,220);

                app.wait(1);
                break;
              }
              case 9:{
                app.project.change(7);
                app.project.draw(7,400,220);

                app.wait(1);
                break;
              }
              case 10:{
                app.project.change(8);
                app.project.draw(8,100,340);

                app.wait(1);
                break;
              }
              case 11:{
                app.project.change(9);
                app.project.draw(9,200,340);

                app.wait(1);
                break;
              }
              case 12:{
                app.project.change(10);
                app.project.draw(10,300,340);

                app.wait(1);
                break;
              }
              case 13:{
                app.project.change(11);
                app.project.draw(11,400,340);

                app.wait(1);
                break;
              }
              case 14:{
                app.project.change(12);
                app.project.draw(12,100,460);

                app.wait(1);
                break;
              }
              case 15:{
                app.project.change(13);
                app.project.draw(13,200,460);

                app.wait(1);
                break;
              }
              case 16:{
                app.project.change(14);
                app.project.draw(14,300,460);

                app.wait(1);
                break;
              }
              case 17:{
                app.project.change(15);
                app.project.draw(15,400,460);

                app.wait(1);
                break;
              }
              case 18:{
                app.project.change(16);
                app.project.draw(16,100,580);

                app.wait(1);
                break;
              }
              case 19:{
                app.project.change(17);
                app.project.draw(17,200,580);

                app.wait(1);
                break;
              }
              case 20:{
                app.project.change(18);
                app.project.draw(18,300,580);

                app.wait(1);
                break;
              }
              case 21:{
                app.project.change(19);
                app.project.draw(19,400,580);

                app.wait(1);
                break;
              }
              //Stem
              case 22:{
                app.project.construct();
                app.runscene(0);
              }
              case 23:{
                app.project.change(20);
                app.project.draw(20,100, 700);
                app.runscene(0);
                break;
              }
              case 24:{
                app.project.change(21);
                app.project.draw(21,200, 700);
                app.runscene(0);
                break;
              }
              case 25:{
                app.project.change(22);
                app.project.draw(22,300, 700);
                app.runscene(0);
                break;
              }
              case 26:{
                app.project.change(23);
                app.project.draw(23,400, 700);
                app.runscene(0);
                break;
              }
              //Leaves
              case 27:{
                app.project.construct();
                app.runscene(0);
              }
              case 28:{
                app.project.change(24);
                app.project.draw(24,100, 1020);
                app.runscene(0);
                break;
              }
              case 29:{
                app.project.change(25);
                app.project.draw(25,200, 1020);
                app.runscene(0);
                break;
              }
              case 30:{
                app.project.change(26);
                app.project.draw(26,300, 1020);
                app.runscene(0);
                break;
              }
              case 31:{
                app.project.change(27);
                app.project.draw(27,400, 1020);
                app.runscene(0);
                break;
              }
              case 32:{
                //together
                app.project.draw(28,100, 1340);
                app.runscene(0);

              }
              case 33:{
                //together
                app.project.draw(29,200, 1340);
                app.runscene(0);

              }
              case 34:{
                //together
                app.project.draw(30,300, 1340);
                app.runscene(0);

              }
              case 35:{
                //together
                app.project.draw(31,400, 1340);
                app.runscene(0);

              }
              case 33:{
                //app.saveSVG();
                app.runscene(50);
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
