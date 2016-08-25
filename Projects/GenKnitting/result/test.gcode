;Generated GCode by Ria Stroes
;Project: Generated Knittings
;3D-printer: Ultimaker Original
;starting commands
G28          ;all axes to home position.
G1 Z15 F2000 ;move extruder 15mm up
M107         ;turn fan off
G90          ;absolute position mode
M82          ;extruder in absolute mode
M190 S70     ;set bed temerature
M104 S210    ;set temperature extruder
G92 E0       ;reset Extruder position
M109 S210;wait for reach temperature
M140 S70     ;wait for reach bed temperature
;move to start positions
G1 Z0.400 F7800.000        ;move to Z position
G1 E-2.00000 F2400.000     ;move to Extruder position
G92 E0                     ;reset Extruder position
G1 X62.5 Y350 F7800.000; move to beginning of knitting
G1 E2.00000 F2400.000     ;move to Extruder position
M107         ;Turn off fan
;End of gcode