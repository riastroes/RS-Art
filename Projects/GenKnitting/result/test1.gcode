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
G0 F9000 X100.113 Y75.000 Z0.3     ;move to Z position
G0 X100.113 Y75.000 F2400 ;move to beginning of outline
;create outline
G0 F4800
G1 X126.887 Y75.000 E0.000
G1 X126.887 Y75.000 E0.000
G1 X128.253 Y75.135 E0.165
G1 X129.566 Y75.533 E0.329
G1 X130.776 Y76.180 E0.494
G1 X131.837 Y77.050 E0.659
G1 X132.707 Y78.111 E0.823
G1 X133.354 Y79.321 E0.988
G1 X133.753 Y80.634 E1.153
G1 X133.887 Y100.000 E3.477
G1 X133.753 Y101.366 E3.641
G1 X133.354 Y102.679 E3.806
G1 X132.707 Y103.889 E3.971
G1 X131.837 Y104.950 E4.135
G1 X130.776 Y105.820 E4.300
G1 X129.566 Y106.467 E4.465
G1 X128.253 Y106.865 E4.629
G1 X100.113 Y107.000 E8.006
G1 X98.747 Y106.865 E8.171
G1 X97.434 Y106.467 E8.335
G1 X96.224 Y105.820 E8.500
G1 X95.163 Y104.950 E8.665
G1 X94.293 Y103.889 E8.829
G1 X93.646 Y102.679 E8.994
G1 X93.247 Y101.366 E9.159
G1 X93.113 Y82.000 E11.483
G1 X93.247 Y80.634 E11.647
G1 X93.646 Y79.321 E11.812
G1 X94.293 Y78.111 E11.977
G1 X95.163 Y77.050 E12.141
G1 X96.224 Y76.180 E12.306
G1 X97.434 Y75.533 E12.471
G1 X98.747 Y75.135 E12.635
G1 X100.113 Y75.000 E12.800
G1 X100.113 Y75.400 E12.848
G1 X126.887 Y75.400 E16.061
G1 X126.887 Y75.400 E16.061
G1 X128.175 Y75.527 E16.216
G1 X129.413 Y75.902 E16.371
G1 X130.554 Y76.512 E16.527
G1 X131.554 Y77.333 E16.682
G1 X132.375 Y78.333 E16.837
G1 X132.985 Y79.474 E16.993
G1 X133.360 Y80.712 E17.148
G1 X133.487 Y100.000 E19.462
G1 X133.360 Y101.288 E19.618
G1 X132.985 Y102.526 E19.773
G1 X132.375 Y103.667 E19.928
G1 X131.554 Y104.667 E20.083
G1 X130.554 Y105.488 E20.239
G1 X129.413 Y106.098 E20.394
G1 X128.175 Y106.473 E20.549
G1 X100.113 Y106.600 E23.917
G1 X98.825 Y106.473 E24.072
G1 X97.587 Y106.098 E24.227
G1 X96.446 Y105.488 E24.382
G1 X95.446 Y104.667 E24.538
G1 X94.625 Y103.667 E24.693
G1 X94.015 Y102.526 E24.848
G1 X93.640 Y101.288 E25.003
G1 X93.513 Y82.000 E27.318
G1 X93.640 Y80.712 E27.473
G1 X94.015 Y79.474 E27.629
G1 X94.625 Y78.333 E27.784
G1 X95.446 Y77.333 E27.939
G1 X96.446 Y76.512 E28.094
G1 X97.587 Y75.902 E28.250
G1 X98.825 Y75.527 E28.405
G1 X100.113 Y75.400 E28.560
G1 X100.113 Y75.800 E28.608
G1 X126.887 Y75.800 E31.821
G1 X126.887 Y75.800 E31.821
G1 X128.097 Y75.919 E31.967
G1 X129.260 Y76.272 E32.113
G1 X130.332 Y76.845 E32.259
G1 X131.271 Y77.616 E32.404
G1 X132.042 Y78.555 E32.550
G1 X132.615 Y79.627 E32.696
G1 X132.968 Y80.790 E32.842
G1 X133.087 Y100.000 E35.147
G1 X132.968 Y101.210 E35.293
G1 X132.615 Y102.373 E35.439
G1 X132.042 Y103.445 E35.585
G1 X131.271 Y104.384 E35.731
G1 X130.332 Y105.155 E35.876
G1 X129.260 Y105.728 E36.022
G1 X128.097 Y106.081 E36.168
G1 X100.113 Y106.200 E39.526
G1 X98.903 Y106.081 E39.672
G1 X97.740 Y105.728 E39.818
G1 X96.668 Y105.155 E39.964
G1 X95.729 Y104.384 E40.110
G1 X94.958 Y103.445 E40.255
G1 X94.385 Y102.373 E40.401
G1 X94.032 Y101.210 E40.547
G1 X93.913 Y82.000 E42.852
G1 X94.032 Y80.790 E42.998
G1 X94.385 Y79.627 E43.144
G1 X94.958 Y78.555 E43.290
G1 X95.729 Y77.616 E43.436
G1 X96.668 Y76.845 E43.582
G1 X97.740 Y76.272 E43.727
G1 X98.903 Y75.919 E43.873
G1 X100.113 Y75.800 E44.019
G1 X100.113 Y76.200 E44.067
G1 X126.887 Y76.200 E47.280
G1 X126.887 Y76.200 E47.280
G1 X128.019 Y76.311 E47.417
G1 X129.107 Y76.641 E47.553
G1 X130.109 Y77.177 E47.689
G1 X130.988 Y77.899 E47.826
G1 X131.710 Y78.778 E47.962
G1 X132.246 Y79.780 E48.099
G1 X132.576 Y80.868 E48.235
G1 X132.687 Y100.000 E50.531
G1 X132.576 Y101.132 E50.668
G1 X132.246 Y102.220 E50.804
G1 X131.710 Y103.222 E50.940
G1 X130.988 Y104.101 E51.077
G1 X130.109 Y104.823 E51.213
G1 X129.107 Y105.359 E51.350
G1 X128.019 Y105.689 E51.486
G1 X100.113 Y105.800 E54.835
G1 X98.981 Y105.689 E54.971
G1 X97.893 Y105.359 E55.108
G1 X96.891 Y104.823 E55.244
G1 X96.012 Y104.101 E55.381
G1 X95.290 Y103.222 E55.517
G1 X94.754 Y102.220 E55.654
G1 X94.424 Y101.132 E55.790
G1 X94.313 Y82.000 E58.086
G1 X94.424 Y80.868 E58.222
G1 X94.754 Y79.780 E58.359
G1 X95.290 Y78.778 E58.495
G1 X96.012 Y77.899 E58.632
G1 X96.891 Y77.177 E58.768
G1 X97.893 Y76.641 E58.904
G1 X98.981 Y76.311 E59.041
G1 X100.113 Y76.200 E59.177
G1 X100.113 Y76.600 E59.225
G1 X126.887 Y76.600 E62.438
G1 X126.887 Y76.600 E62.438
G1 X127.941 Y76.704 E62.565
G1 X128.954 Y77.011 E62.692
G1 X129.887 Y77.510 E62.819
G1 X130.706 Y78.182 E62.946
G1 X131.377 Y79.000 E63.073
G1 X131.876 Y79.934 E63.201
G1 X132.183 Y80.947 E63.328
G1 X132.287 Y100.000 E65.614
G1 X132.183 Y101.053 E65.741
G1 X131.876 Y102.066 E65.868
G1 X131.377 Y103.000 E65.995
G1 X130.706 Y103.818 E66.122
G1 X129.887 Y104.490 E66.249
G1 X128.954 Y104.989 E66.376
G1 X127.941 Y105.296 E66.503
G1 X100.113 Y105.400 E69.842
G1 X99.059 Y105.296 E69.970
G1 X98.046 Y104.989 E70.097
G1 X97.113 Y104.490 E70.224
G1 X96.294 Y103.818 E70.351
G1 X95.623 Y103.000 E70.478
G1 X95.124 Y102.066 E70.605
G1 X94.817 Y101.053 E70.732
G1 X94.713 Y82.000 E73.018
G1 X94.817 Y80.947 E73.145
G1 X95.124 Y79.934 E73.272
G1 X95.623 Y79.000 E73.399
G1 X96.294 Y78.182 E73.526
G1 X97.113 Y77.510 E73.653
G1 X98.046 Y77.011 E73.780
G1 X99.059 Y76.704 E73.907
G1 X100.113 Y76.600 E74.034
G1 X100.113 Y77.000 E74.082
G1 X126.887 Y77.000 E77.295
G1 X126.887 Y77.000 E77.295
G1 X127.863 Y77.096 E77.413
G1 X128.801 Y77.381 E77.531
G1 X129.665 Y77.843 E77.648
G1 X130.423 Y78.464 E77.766
G1 X131.045 Y79.222 E77.883
G1 X131.507 Y80.087 E78.001
G1 X131.791 Y81.025 E78.119
G1 X131.887 Y100.000 E80.396
G1 X131.791 Y100.975 E80.513
G1 X131.507 Y101.913 E80.631
G1 X131.045 Y102.778 E80.749
G1 X130.423 Y103.536 E80.866
G1 X129.665 Y104.157 E80.984
G1 X128.801 Y104.619 E81.101
G1 X127.863 Y104.904 E81.219
G1 X100.113 Y105.000 E84.549
G1 X99.137 Y104.904 E84.667
G1 X98.199 Y104.619 E84.784
G1 X97.335 Y104.157 E84.902
G1 X96.577 Y103.536 E85.020
G1 X95.955 Y102.778 E85.137
G1 X95.493 Y101.913 E85.255
G1 X95.209 Y100.975 E85.372
G1 X95.113 Y82.000 E87.650
G1 X95.209 Y81.025 E87.767
G1 X95.493 Y80.087 E87.885
G1 X95.955 Y79.222 E88.002
G1 X96.577 Y78.464 E88.120
G1 X97.335 Y77.843 E88.238
G1 X98.199 Y77.381 E88.355
G1 X99.137 Y77.096 E88.473
G1 X100.113 Y77.000 E88.591
G1 X100.113 Y77.400 E88.639
G1 X126.887 Y77.400 E91.851
G1 X126.887 Y77.400 E91.851
G1 X127.785 Y77.488 E91.960
G1 X128.648 Y77.750 E92.068
G1 X129.443 Y78.175 E92.176
G1 X130.140 Y78.747 E92.284
G1 X130.712 Y79.444 E92.392
G1 X131.137 Y80.240 E92.501
G1 X131.399 Y81.103 E92.609
G1 X131.487 Y100.000 E94.877
G1 X131.399 Y100.897 E94.985
G1 X131.137 Y101.760 E95.093
G1 X130.712 Y102.556 E95.201
G1 X130.140 Y103.253 E95.310
G1 X129.443 Y103.825 E95.418
G1 X128.648 Y104.250 E95.526
G1 X127.785 Y104.512 E95.634
G1 X100.113 Y104.600 E98.955
G1 X99.215 Y104.512 E99.063
G1 X98.352 Y104.250 E99.171
G1 X97.557 Y103.825 E99.279
G1 X96.860 Y103.253 E99.388
G1 X96.288 Y102.556 E99.496
G1 X95.863 Y101.760 E99.604
G1 X95.601 Y100.897 E99.712
G1 X95.513 Y82.000 E101.980
G1 X95.601 Y81.103 E102.088
G1 X95.863 Y80.240 E102.196
G1 X96.288 Y79.444 E102.305
G1 X96.860 Y78.747 E102.413
G1 X97.557 Y78.175 E102.521
G1 X98.352 Y77.750 E102.629
G1 X99.215 Y77.488 E102.737
G1 X100.113 Y77.400 E102.846
G1 X100.113 Y77.800 E102.894
G1 X126.887 Y77.800 E106.107
G1 X126.887 Y77.800 E106.107
G1 X127.707 Y77.881 E106.206
G1 X128.494 Y78.120 E106.304
G1 X129.221 Y78.508 E106.403
G1 X129.857 Y79.030 E106.502
G1 X130.379 Y79.667 E106.601
G1 X130.767 Y80.393 E106.699
G1 X131.006 Y81.181 E106.798
G1 X131.087 Y100.000 E109.057
G1 X131.006 Y100.819 E109.155
G1 X130.767 Y101.607 E109.254
G1 X130.379 Y102.333 E109.353
G1 X129.857 Y102.970 E109.452
G1 X129.221 Y103.492 E109.550
G1 X128.494 Y103.880 E109.649
G1 X127.707 Y104.119 E109.748
G1 X100.113 Y104.200 E113.059
G1 X99.293 Y104.119 E113.158
G1 X98.506 Y103.880 E113.257
G1 X97.779 Y103.492 E113.356
G1 X97.143 Y102.970 E113.455
G1 X96.621 Y102.333 E113.553
G1 X96.233 Y101.607 E113.652
G1 X95.994 Y100.819 E113.751
G1 X95.913 Y82.000 E116.009
G1 X95.994 Y81.181 E116.108
G1 X96.233 Y80.393 E116.207
G1 X96.621 Y79.667 E116.306
G1 X97.143 Y79.030 E116.404
G1 X97.779 Y78.508 E116.503
G1 X98.506 Y78.120 E116.602
G1 X99.293 Y77.881 E116.701
G1 X100.113 Y77.800 E116.800
G1 X100.113 Y78.200 E116.848
G1 X126.887 Y78.200 E120.061
G1 X126.887 Y78.200 E120.061
G1 X127.629 Y78.273 E120.150
G1 X128.341 Y78.489 E120.239
G1 X128.998 Y78.840 E120.329
G1 X129.574 Y79.313 E120.418
G1 X130.047 Y79.889 E120.508
G1 X130.398 Y80.546 E120.597
G1 X130.614 Y81.259 E120.686
G1 X130.687 Y100.000 E122.935
G1 X130.614 Y100.741 E123.025
G1 X130.398 Y101.454 E123.114
G1 X130.047 Y102.111 E123.203
G1 X129.574 Y102.687 E123.293
G1 X128.998 Y103.160 E123.382
G1 X128.341 Y103.511 E123.472
G1 X127.629 Y103.727 E123.561
G1 X100.113 Y103.800 E126.863
G1 X99.371 Y103.727 E126.952
G1 X98.659 Y103.511 E127.042
G1 X98.002 Y103.160 E127.131
G1 X97.426 Y102.687 E127.220
G1 X96.953 Y102.111 E127.310
G1 X96.602 Y101.454 E127.399
G1 X96.386 Y100.741 E127.489
G1 X96.313 Y82.000 E129.738
G1 X96.386 Y81.259 E129.827
G1 X96.602 Y80.546 E129.916
G1 X96.953 Y79.889 E130.006
G1 X97.426 Y79.313 E130.095
G1 X98.002 Y78.840 E130.185
G1 X98.659 Y78.489 E130.274
G1 X99.371 Y78.273 E130.363
G1 X100.113 Y78.200 E130.453
G1 X100.113 Y78.600 E130.501
G1 X126.887 Y78.600 E133.714
G1 X126.887 Y78.600 E133.714
G1 X127.550 Y78.665 E133.794
G1 X128.188 Y78.859 E133.874
G1 X128.776 Y79.173 E133.954
G1 X129.291 Y79.596 E134.034
G1 X129.714 Y80.111 E134.114
G1 X130.028 Y80.699 E134.194
G1 X130.222 Y81.337 E134.274
G1 X130.287 Y100.000 E136.513
G1 X130.222 Y100.663 E136.593
G1 X130.028 Y101.301 E136.673
G1 X129.714 Y101.889 E136.753
G1 X129.291 Y102.404 E136.833
G1 X128.776 Y102.827 E136.913
G1 X128.188 Y103.141 E136.993
G1 X127.550 Y103.335 E137.073
G1 X100.113 Y103.400 E140.366
G1 X99.450 Y103.335 E140.445
G1 X98.812 Y103.141 E140.525
G1 X98.224 Y102.827 E140.605
G1 X97.709 Y102.404 E140.685
G1 X97.286 Y101.889 E140.765
G1 X96.972 Y101.301 E140.845
G1 X96.778 Y100.663 E140.925
G1 X96.713 Y82.000 E143.165
G1 X96.778 Y81.337 E143.245
G1 X96.972 Y80.699 E143.325
G1 X97.286 Y80.111 E143.405
G1 X97.709 Y79.596 E143.485
G1 X98.224 Y79.173 E143.565
G1 X98.812 Y78.859 E143.645
G1 X99.450 Y78.665 E143.725
G1 X100.113 Y78.600 E143.805
G1 X100.113 Y79.000 E143.853
G1 X126.887 Y79.000 E147.066
G1 X126.887 Y79.000 E147.066
G1 X127.472 Y79.058 E147.136
G1 X128.035 Y79.228 E147.207
G1 X128.554 Y79.506 E147.278
G1 X129.008 Y79.879 E147.348
G1 X129.382 Y80.333 E147.419
G1 X129.659 Y80.852 E147.489
G1 X129.830 Y81.415 E147.560
G1 X129.887 Y100.000 E149.790
G1 X129.830 Y100.585 E149.861
G1 X129.659 Y101.148 E149.931
G1 X129.382 Y101.667 E150.002
G1 X129.008 Y102.121 E150.072
G1 X128.554 Y102.494 E150.143
G1 X128.035 Y102.772 E150.214
G1 X127.472 Y102.942 E150.284
G1 X100.113 Y103.000 E153.567
G1 X99.528 Y102.942 E153.638
G1 X98.965 Y102.772 E153.708
G1 X98.446 Y102.494 E153.779
G1 X97.992 Y102.121 E153.849
G1 X97.618 Y101.667 E153.920
G1 X97.341 Y101.148 E153.991
G1 X97.170 Y100.585 E154.061
G1 X97.113 Y82.000 E156.291
G1 X97.170 Y81.415 E156.362
G1 X97.341 Y80.852 E156.433
G1 X97.618 Y80.333 E156.503
G1 X97.992 Y79.879 E156.574
G1 X98.446 Y79.506 E156.644
G1 X98.965 Y79.228 E156.715
G1 X99.528 Y79.058 E156.785
G1 X100.113 Y79.000 E156.856
G1 X100.113 Y75.000 E157.336
;END create outline
;move to
G1 Z0.5 F4800       ;move to Z position
G92 E0                     ;reset Extruder position
G1 X100.000 Y82.000 F2400     ;move to beginning of knitting
G1 Z0.3 F4800       ;move to Z position
;create path
G1 F2400
G1 X101.001 Y82.150 E0.121
G1 X101.952 Y82.594 E0.247
G1 X102.806 Y83.309 E0.381
G1 X103.518 Y84.259 E0.524
G1 X104.054 Y85.397 E0.674
G1 X104.387 Y86.665 E0.832
G1 X100.113 Y95.335 E1.992
G1 X100.446 Y96.603 E2.149
G1 X100.982 Y97.741 E2.300
G1 X101.694 Y98.691 E2.442
G1 X102.548 Y99.406 E2.576
G1 X103.499 Y99.850 E2.702
G1 X104.500 Y100.000 E2.824
G1 X105.501 Y99.850 E2.945
G1 X106.452 Y99.406 E3.071
G1 X107.306 Y98.691 E3.205
G1 X108.018 Y97.741 E3.347
G1 X108.554 Y96.603 E3.498
G1 X108.887 Y95.335 E3.655
G1 X104.613 Y86.665 E4.815
G1 X104.946 Y85.397 E4.973
G1 X105.482 Y84.259 E5.124
G1 X106.194 Y83.309 E5.266
G1 X107.048 Y82.594 E5.400
G1 X107.999 Y82.150 E5.526
G1 X109.000 Y82.000 E5.647
G1 X109.000 Y82.000 E5.647
G1 X110.001 Y82.150 E5.769
G1 X110.952 Y82.594 E5.894
G1 X111.806 Y83.309 E6.028
G1 X112.518 Y84.259 E6.171
G1 X113.054 Y85.397 E6.322
G1 X113.387 Y86.665 E6.479
G1 X109.113 Y95.335 E7.639
G1 X109.446 Y96.603 E7.796
G1 X109.982 Y97.741 E7.947
G1 X110.694 Y98.691 E8.090
G1 X111.548 Y99.406 E8.223
G1 X112.499 Y99.850 E8.349
G1 X113.500 Y100.000 E8.471
G1 X114.501 Y99.850 E8.592
G1 X115.452 Y99.406 E8.718
G1 X116.306 Y98.691 E8.852
G1 X117.018 Y97.741 E8.994
G1 X117.554 Y96.603 E9.145
G1 X117.887 Y95.335 E9.302
G1 X113.613 Y86.665 E10.462
G1 X113.946 Y85.397 E10.620
G1 X114.482 Y84.259 E10.771
G1 X115.194 Y83.309 E10.913
G1 X116.048 Y82.594 E11.047
G1 X116.999 Y82.150 E11.173
G1 X118.000 Y82.000 E11.294
G1 X118.000 Y82.000 E11.294
G1 X119.001 Y82.150 E11.416
G1 X119.952 Y82.594 E11.542
G1 X120.806 Y83.309 E11.675
G1 X121.518 Y84.259 E11.818
G1 X122.054 Y85.397 E11.969
G1 X122.387 Y86.665 E12.126
G1 X118.113 Y95.335 E13.286
G1 X118.446 Y96.603 E13.443
G1 X118.982 Y97.741 E13.594
G1 X119.694 Y98.691 E13.737
G1 X120.548 Y99.406 E13.870
G1 X121.499 Y99.850 E13.996
G1 X122.500 Y100.000 E14.118
G1 X123.501 Y99.850 E14.239
G1 X124.452 Y99.406 E14.365
G1 X125.306 Y98.691 E14.499
G1 X126.018 Y97.741 E14.641
;End create path
M107         ;turn off fan
M104 S0      ;turn off temperature
G28 X0       ;home X axis 
M84          ;disable motors
;End of gcode