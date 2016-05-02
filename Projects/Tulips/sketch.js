

var app;

function setup() {

    app = new App("tulips",2000,1000);
    app.resourcepath ="resources";
    app.loadResources("spring.jpg");
    

}

function draw() {
    var i,c;
    if(app.isloaded) {
        if(app.pal.name != "black_white"){
            app.pal = new Palette(4, "black_white");
            app.scene =0;
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
              background(app.pal.colors[1]);
              app.project.construct();
              app.runscene(0);
              break;
            }
            case 3:{
              app.project.change(1);
              app.project.draw(0,0);
              app.runscene(300);
              break;
            }
            case 4:{
               background(app.pal.colors[1]);
               app.project.construct();
               app.runscene(0);
               break;
             }
             case 5:{
               app.project.change(2);
               app.project.draw(0,0);
               app.runscene(150);
               break;
             }
             case 6:{
                background(app.pal.colors[1]);
                app.project.construct();
                app.runscene(0);
                break;
              }
              case 7:{
                app.project.change(3);
                app.project.draw(0,0);
                app.runscene(150);
                break;
              }
              case 8:{
                 background(app.pal.colors[1]);
                 app.project.construct();
                 app.runscene(0);
                 break;
               }
               case 9:{
                 app.project.change(4);
                 app.project.draw(0,0);
                 app.runscene(150);
                 break;
               }
               case 10:{
                  background(app.pal.colors[1]);
                  app.project.construct();
                  app.runscene(0);
                  break;
                }
                case 11:{
                  app.project.change(5);
                  app.project.draw(0,0);
                  app.runscene(150);
                  break;
                }
                case 12:{
                   background(app.pal.colors[1]);
                   app.project.construct();
                   app.runscene(0);
                   break;
                 }
                 case 13:{
                   app.project.change(6);
                   app.project.draw(0,0);
                   app.runscene(150);
                   break;
                 }

                 case 14:{
                    background(app.pal.colors[1]);
                    app.project.construct();
                    app.runscene(0);
                    break;
                  }
                  case 15:{
                    app.project.change(7);
                    app.project.draw(0,0);
                    app.runscene(150);
                    break;
                  }

                  case 16:{
                     background(app.pal.colors[1]);
                     app.project.construct();
                     app.runscene(0);
                     break;
                   }
                   case 17:{
                     app.project.change(8);
                     app.project.draw(0,0);
                     app.runscene(150);
                     break;
                   }
                   case 18:{
                      background(app.pal.colors[1]);
                      app.project.construct();
                      app.runscene(0);
                      break;
                    }
                    case 19:{
                      app.project.change(9);
                      app.project.draw(0,0);
                      app.runscene(150);
                      break;
                    }
                    case 20:{
                       background(app.pal.colors[1]);
                       app.project.construct();
                       app.runscene(0);
                       break;
                     }
                     case 21:{
                       app.project.change(10);
                       app.project.draw(0,0);
                       app.runscene(150);
                       break;
                     }
                     case 22:{
                        background(app.pal.colors[1]);
                        app.project.construct();
                        app.runscene(0);
                        break;
                      }
                      case 23:{
                        app.project.change(11);
                        app.project.draw(0,0);
                        app.runscene(150);
                        break;
                      }

                      case 24:{
                         background(app.pal.colors[1]);
                         app.project.construct();
                         app.runscene(0);
                         break;
                       }
                       case 25:{
                         app.project.change(2);
                         app.project.draw(-650,0);
                         app.runscene(142);
                         break;
                       }
                       case 26:{
                          //background(app.pal.colors[1]);
                          app.project.construct();
                          app.runscene(0);
                          break;
                        }
                        case 27:{
                          app.project.change(9);
                          app.project.draw(0,0);
                          app.runscene(142);
                          break;
                        }
                        case 28:{
                           //background(app.pal.colors[1]);
                           app.project.construct();
                           app.runscene(0);
                           break;
                         }
                         case 29:{
                           app.project.change(5);
                           app.project.draw(650,0);
                           app.runscene(142);
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