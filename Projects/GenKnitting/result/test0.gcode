;Generated GCode by Ria Stroes
;Project: Generated Knittings
;3D-printer: Ultimaker 2+
;tempbed = 70
;tempextruder = 210
;nozzle = 0.4
;layerheight = 0.3
;speed = 2400
;outlinerounds = 10
;outlinerounddist = 4
;maxlayers = 5
;starting commands
M110
G92 E0
G28
M140 S60       ;set temp bed
M190 S60       ;wait temp bed
M109 S230      ;set temp extruder and wait
M106 S255      ;set fan on
;move to start positions
G0 F9000 X2.7554552980815448e-15 Y180 Z0.3     ;move to Z position
G0 X2.7554552980815448e-15 Y180 F2400 ;move to beginning of outline
M107         ;turn off fan
M104 S0      ;turn off temperature
G28 X0       ;home X axis 
M84          ;disable motors
;End of gcode