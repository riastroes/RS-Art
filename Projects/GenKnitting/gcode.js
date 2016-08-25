function Gcode(){
  this.commands = [];
}
Gcode.prototype.createHeading = function(tempExtr, tempBed){
  append(this.commands, ";Generated GCode by Ria Stroes");
  append(this.commands, ";Project: Generated Knittings");
  append(this.commands, ";3D-printer: Ultimaker Original");

  //starting commands
  append(this.commands, ";starting commands");
  append(this.commands, "G28          ;all axes to home position." );
  append(this.commands, "G1 Z15 F2000 ;move extruder 15mm up" );
  append(this.commands, "M107         ;turn fan off");
  append(this.commands, "G90          ;absolute position mode" );
  append(this.commands, "M82          ;extruder in absolute mode");
  if(tempBed > 0){
    append(this.commands, "M190 S" + tempBed + "     ;set bed temerature");
  }
  append(this.commands, "M104 S" + tempExtr + "    ;set temperature extruder");
  append(this.commands, "G92 E0       ;reset Extruder position");
  append(this.commands, "M109 S" + tempExtr +     ";wait for reach temperature");
  if(tempBed > 0){
    append(this.commands, "M140 S" + tempBed + "     ;wait for reach bed temperature");
  }

   //Now this leaves us safely at the machine home position.

}
Gcode.prototype.createOutline = function(outline){
  //skip the first
  append(this.commands, ";draw outline");
  for(var i = 1; i < outline.length; i += 1){
    append(this.commands, "G1 X" + outline[i].x +" Y" + outline[i].y + " F2400.000");
  }
  append(this.commands, ";END draw outline");
}
Gcode.prototype.createFirstLayer = function(genoutline,genknitting,z){
  this.moveToStart(genoutline[0].x, genoutline[0].y, z);
  this.createOutline(genoutline);
  this.moveTo(genknitting[0].x, genknitting[0].y, z);
  //createPath = function(arr, nozzle, layerheight, speed)
  this.createPath(genknitting,0.4,0.4,4800);
}
Gcode.prototype.moveToStart = function(x, y, z){
  //move to start position
  append(this.commands, ";move to start positions");
  append(this.commands, "G1 Z" + z + "F7800.000     ;move to Z position" );
  append(this.commands, "G1 E-2.00000 F2400.000     ;move to Extruder position" );
  append(this.commands, "G92 E0                     ;reset Extruder position" );
  append(this.commands, "G1 X" + x +" Y" + y + " F7800.000     ;move to beginning of knitting");
  append(this.commands, "G1 E2.00000 F2400.000     ;move to Extruder position" );

}
Gcode.prototype.moveTo = function(x, y, z){
  //move to start position
  append(this.commands, ";move to");
  append(this.commands, "G1 Z" + z + "F7800.000        ;move to Z position" );
  append(this.commands, "G1 E-2.00000 F2400.000     ;move to Extruder position" );
  append(this.commands, "G92 E0                     ;reset Extruder position" );
  append(this.commands, "G1 X" + x +" Y" + y + " F7800.000     ;move to beginning of knitting");
  append(this.commands, "G1 E2.00000 F2400.000     ;move to Extruder position" );

}
Gcode.prototype.createPath = function(arr, nozzle, layerheight, speed){
  var d; //distance
  var e; //extrude
  append(this.commands, ";create path");
  for(var i = 1; i < arr.length; i++){
    d = p5.Vector.dist(arr[i-1], arr[i]);
    e = layerheight * nozzle * d;
    append(this.commands, "G1 X" + arr[i].x +" Y" + arr[i].y + " E" + e + " F" + speed);

  }
  append(this.commands, ";End create path");
}

Gcode.prototype.createEnd = function(){
  append(this.commands, "M107         ;turn off fan");
  append(this.commands, "M104 S0      ;turn off temperature");
  append(this.commands, "G28 X0       ;home X axis ");
  append(this.commands, "M84          ;disable motors");
  append(this.commands, ";End of gcode");


}
Gcode.prototype.save = function(name){
  saveStrings(this.commands, name);
}
