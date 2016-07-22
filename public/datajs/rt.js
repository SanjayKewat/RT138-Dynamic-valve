var socket = io.connect(connection);

//initial state monday 28/04/14

var y = 0,k=0;
var ff=[];
var new_arr = [];
var arr = [];

var rtdata = [],rtdata1 = [];

socket.on('current_data', function (data) {
    ++k;


    $("#tank_status1").html('');
    $("#tank_status2").html('');

rtdata1=[];

//        y = data.message;
        rtdata1.push({"bypass": data.curr_data[0].bypass,
            "ann": data.curr_data[0].annular_diverter,//annular--diverter
            "choke1": data.curr_data[0].port_choke_line_1,//choke line 1--choke1
            "spare": data.curr_data[0].spare,
            "pprm3":data.curr_data[0].pipe_ram_3,
            "pprm2": data.curr_data[0].pipe_ram_2,
            "hcr1": data.curr_data[0].hcr_1,
            "bs": data.curr_data[0].blind_shear,
            "hcr2": data.curr_data[0].hcr_2,
            "kill2": data.curr_data[0].kill_line_2,//kill line 2--kill2
            "kill1": data.curr_data[0].kill_line1_stbd,//kill line 1 -- kill1
            "pprm1": data.curr_data[0].pipe_ram_1,
            "choke2": data.curr_data[0].choke_line_2,//choke 2--choke2
            "acc_0": data.curr_data[0].pressure,
            "shaer_boost_mode_light": data.curr_data[0].shear_boost_mode_light,
            "motor_run_1_light": data.curr_data[0].motor_run1_light,
            "bop_light": data.curr_data[0].bop_mode_light,
            "low_rig_air_light": data.curr_data[0].low_rig_air_ligth,
            "motor_run_2_light": data.curr_data[0].motor_run2_light,
            "divert_light": data.curr_data[0].divert_mode_light,
            "stbd_open": data.curr_data[0].obp_2,
            "stbd_close": data.curr_data[0].obp_1,
            "tank_0": data.curr_data[0].low_hydraulic_light,
            "tank1": data.curr_data[0].motor_run1_light,
            "tank2": data.curr_data[0].motor_run2_light,
            "tank_status1": data.curr_data[0].pump_1_status,
            "tank_status2": data.curr_data[0].pump_2_status
        });

//        if (k == 1) {

            rtdata = rtdata1;
            console.log('Ist Data goes : ' + rtdata[0].acc_0);

//accumulator
            if (rtdata[0].acc_0 == 1) {
                alert(rtdata[0].acc_0);
                $('#acc_0_0').hide();
                $('#acc_0_1').show();
                $('#manifold_div_1').show();
                $('#manifold_div_0').hide();

            }
            else {

                $('#acc_0_0').show();
                $('#acc_0_1').hide();
                $('#manifold_div_0').show();
                $('#manifold_div_1').hide();
            }


            //BOP START
            if (rtdata[0].bop_light == 1) {
                $('.light1').show();
            }
            else {
                $('.light1').hide();
            }
            //BOP ENDS


            //divert_light START
            if (rtdata[0].divert_light == 1) {
                $('.light2').show();
            }
            else {
                $('.light2').hide();
            }

            //divert_light ENDS


            //stbd_open START
            if (rtdata[0].stbd_open == 1) {
                $('.light4').show();
            }
            else {
                $('.light4').hide();
            }
            //stbd_open ENDS


            //stbd_close START
            if (rtdata[0].stbd_close == 1) {
                $('.light_div_2').html('<img class="light_2" src="/svg2/Light.svg" />');
            } else {
                $('.light_div_2').html('');
            }
//stbd_close ENDS


//tank background start here
            if (rtdata[0].tank_0 == 1) {

                $('#tank_0_1').show();
                $('#tank_0_0').hide();
            }
            else {

                $('#tank_0_0').show();
                $('#tank_0_1').hide();
            }

            bypass_val(rtdata[0].bypass);
            chok1_val(rtdata[0].choke1);
            spare_val(rtdata[0].spare);
            hcr2_val(rtdata[0].hcr2);
            hcr1_val(rtdata[0].hcr1);
            chk2_val(rtdata[0].choke2);
            kill2_val(rtdata[0].kill2);
            kill1_val(rtdata[0].kill1);
            pprm3_val(rtdata[0].pprm3);
            pprm2_val(rtdata[0].pprm2);
            bs_val(rtdata[0].bs);
            pprm1_val(rtdata[0].pprm1);
            ann_val(rtdata[0].ann);
tank1(rtdata[0].tank1);
tank2(rtdata[0].tank2);






//            tank1();
//            tank2();
//        }


//<<====================Code Execute 1 time when page load End==============>>>


////===============Implement Real Logic HERE (START)====================================================================================//
        //accumulator START
//        if (rtdata[0].acc_0 != rtdata1[0].acc_0) {
//
//            // $('.acc_0').html('<img class="acc_0_svg" src="/svg2/acc_' + rtdata[0].acc_0 + '.svg" />');
//            rtdata[0].acc_0 = rtdata1[0].acc_0;
//            // $('.manifold_div').html('<img class="manifold" src="/svg2/Manifold_' + rtdata[0].acc_0 + '.svg" />');
//            if (rtdata[0].acc_0 == 1) {
//                $('#acc_0_0').hide();
//                $('#acc_0_1').show();
//                $('#manifold_div_1').show();
//                $('#manifold_div_0').hide();
//
//            }
//            else {
//                $('#acc_0_0').show();
//                $('#acc_0_1').hide();
//                $('#manifold_div_0').show();
//                $('#manifold_div_1').hide();
//            }
//
//
//        }
//        //accumulator ENDS
//
//        //BOP START
//        if (rtdata[0].bop_light != rtdata1[0].bop_light) {
//            rtdata[0].bop_light = rtdata1[0].bop_light;
//            if (rtdata[0].bop_light == 1) {
//                $('.light_div_0').html('<img class="light_0" src="/svg2/Light.svg" />');
//
//            } else {
//                $('.light_div_0').html('');
//            }
//
//
//        }
//        //BOP ENDS
//
//
//        //divert_light START
//        if (rtdata[0].divert_light != rtdata1[0].divert_light) {
//            rtdata[0].divert_light = rtdata1[0].divert_light;
//            if (rtdata[0].divert_light == 1) {
//                $('.light_div_1').html('<img class="light_1" src="/svg2/Light.svg" />');
//            } else {
//                $('.light_div_1').html('');
//            }
//
//
//        }
//        //divert_light ENDS
//
//        //stbd_open START
//        if (rtdata[0].stbd_open != rtdata1[0].stbd_open) {
//            rtdata1[0].stbd_open = rtdata[0].stbd_open;
//            if (rtdata[0].stbd_open == 1) {
//                $('.light_div_3').html('<img class="light_3" src="/svg2/Light.svg" />');
//            } else {
//                $('.light_div_3').html('');
//            }
//
//
//        }
//        //stbd_open ENDS
//
//        //stbd_close START
//        if (rtdata[0].stbd_close != rtdata1[0].stbd_close) {
//            rtdata[0].stbd_close = rtdata1[0].stbd_close;
//            if (rtdata[0].stbd_close == 1) {
//                $('.light_div_2').html('<img class="light_2" src="/svg2/Light.svg" />');
//            } else {
//                $('.light_div_2').html('');
//            }
//
//
//        }
//        //stbd_close ENDS
//
//        //tank1 START
//        if (rtdata[0].tank1 != rtdata1[0].tank1) {
//            rtdata[0].tank1 = rtdata1[0].tank1;
//         tank1(rtdata[0].tank1);
//
//
//        }
//        //tank1 ENDS
//
//        //tank2 START
//        if (rtdata[0].tank2 != rtdata1[0].tank2) {
//            rtdata[0].tank2 = rtdata1[0].tank2;
//          tank2(rtdata[0].tank2);
//
//
//        }
//        //tank2 ENDS
//
//        //tank background START
//        if (rtdata[0].tank_0 != rtdata1[0].tank_0) {
//            rtdata[0].tank_0 = rtdata1[0].tank_0;
//            if (rtdata[0].tank_0 == 1) {
//                $('#tank_0_0').hide();
//                $('#tank_0_1').show();
//            }
//            else {
//                $('#tank_0_0').show();
//                $('#tank_0_1').hide();
//            }
//
//
//        }
//        //tank background End
//
//
//    if (rtdata[0].bypass != rtdata1[0].bypass) {
//
//            rtdata[0].bypass = rtdata1[0].bypass;
//
//        bypass_val(rtdata[0].bypass);
//
//
//        }
//        //Bypass valve End
//
//        //choke1 Mode valve START
//        if (rtdata[0].choke1 != rtdata1[0].choke1) {
//            rtdata[0].choke1 = rtdata1[0].choke1;
//
//            chok1_val(rtdata[0].choke1);
//
//
//        }
//        //choke1 Mode End
//
//
//        //Spare valve START
//        if (rtdata[0].spare != rtdata1[0].spare) {
//            rtdata[0].spare = rtdata1[0].spare;
//
//            spare_val(rtdata[0].spare);
//
//
//        }
//        //Spare Mode End
//
//        //HCR2 valve START
//        if (rtdata[0].hcr2 != rtdata1[0].hcr2) {
//            rtdata[0].hcr2 = rtdata1[0].hcr2;
//
//            hcr2_val(rtdata[0].hcr2);
//
//
//        }
//        //HCR2  End
//
//        //HCR1 valve START
//        if (rtdata[0].hcr1 != rtdata1[0].hcr1) {
//            rtdata[0].hcr1 = rtdata1[0].hcr1;
//
//            hcr1_val(rtdata[0].hcr1);
//
//
//        }
//        //HCR1  End
//
//        //choke2 valve START
//        if (rtdata[0].choke2 != rtdata1[0].choke2) {
//            rtdata[0].choke2 = rtdata1[0].choke2;
//
//            chk2_val(rtdata[0].choke2);
//
//
//        }
//        //choke2  End
//
//        //Kill2 valve START
//        if (rtdata[0].kill2 != rtdata1[0].kill2) {
//            rtdata[0].kill2 = rtdata1[0].kill2;
//
//            kill2_val(rtdata[0].kill2);
//
//
//        }
//        //Kill2  End
//
//        //Kill1 valve START
//        if (rtdata[0].kill1 != rtdata1[0].kill1) {
//            rtdata[0].kill1 = rtdata1[0].kill1;
//
//            kill1_val(rtdata[0].kill1);
//
//
//        }
//        //Kill1  End
//
//        //piperam3 valve START
//        if (rtdata[0].pprm3 != rtdata1[0].pprm3) {
//            rtdata[0].pprm3 = rtdata1[0].pprm3;
//
//            pprm3_val(rtdata[0].pprm3);
//
//
//        }
//        //piperam3  End
//
//
//        //piperam2 valve START
//        if (rtdata[0].pprm2 != rtdata1[0].pprm2) {
//            rtdata[0].pprm2 = rtdata1[0].pprm2;
//
//            pprm2_val(rtdata[0].pprm2);
//
//
//        }
//        //piperam2  End
//
//        //Blindshear valve START
//        if (rtdata[0].bs != rtdata1[0].bs) {
//            rtdata[0].bs = rtdata1[0].bs;
//
//            bs_val(rtdata[0].bs);
//
//
//        }
//        //Blindshear  End
//
//        //piperam1 valve START
//        if (rtdata[0].pprm1 != rtdata1[0].pprm1) {
//            rtdata[0].pprm1 = rtdata1[0].pprm1;
//
//            pprm1_val(rtdata[0].pprm1);
//
//
//        }
//        //piperam1  End
//
//        //Annular valve START
//        if (rtdata[0].ann != rtdata1[0].ann) {
//            rtdata[0].ann = rtdata1[0].ann;
//
//            ann_val(rtdata[0].ann);
//
//        }
//        //Annular  End
//
//
//////===============Implement Real Logic HERE (END)==============================//
//
//
//        if ((rtdata[0].bop_light == 0) && (rtdata[0].divert_light == 0)) {
//            //same
//            $('#annular').text('Select Mode');
//            $('#chokeline1').text('Select Mode');
//            $('#killine1').text('Select Mode');
//        }
//        if ((rtdata[0].bop_light == 1) && (rtdata[0].divert_light == 1)) {
//            //same
//            $('#annular').text('Select Mode');
//            $('#chokeline1').text('Select Mode');
//            $('#killine1').text('Select Mode');
//        }
//        if ((rtdata[0].bop_light == 1) && (rtdata[0].divert_light == 0)) {
//            //same
//            $('#annular').text('Annular');
//            $('#chokeline1').text('Choke Line1');
//            $('#killine1').text('Kill Line1');
//        }
//
//
//        if ((rtdata[0].bop_light == 0) && (rtdata[0].divert_light == 1)) {
//            //change
//            $('#annular').text('Diverter Packer');
//            $('#chokeline1').text('Port');
//            $('#killine1').text('STBD');
//        }
//


});


//function valv_1(vals) {
//    if    (vals == 0) {
//        $('#val1_0').show();
//        $('#val1_1').hide();
//        $('#val1_2').hide();
//        $('#val1_3').hide();
//        $('#val1_4').hide();
//        $('#val1_5').hide();
//    }
//    else if (vals == 1) {
//        $('#val1_0').hide();
//        $('#val1_1').show();
//        $('#val1_2').hide();
//        $('#val1_3').hide();
//        $('#val1_4').hide();
//        $('#val1_5').hide();
//    }
//    else if (vals == 2) {
//        $('#val1_0').hide();
//        $('#val1_1').hide();
//        $('#val1_2').show();
//        $('#val1_3').hide();
//        $('#val1_4').hide();
//        $('#val1_5').hide();
//    }
//    else if (vals == 3) {
//        $('#val1_0').hide();
//        $('#val1_1').hide();
//        $('#val1_2').hide();
//        $('#val1_3').show();
//        $('#val1_4').hide();
//        $('#val1_5').hide();
//    }
//    else if (vals == 4) {
//        $('#val1_0').hide();
//        $('#val1_1').hide();
//        $('#val1_2').hide();
//        $('#val1_3').hide();
//        $('#val1_4').show();
//        $('#val1_5').hide();
//    }
//    else{
//        $('#val1_0').hide();
//        $('#val1_1').hide();
//        $('#val1_2').hide();
//        $('#val1_3').hide();
//        $('#val1_4').hide();
//        $('#val1_5').show();
//
//    }
//}
//
//function valv_2(vals) {
//    if (vals == 0) {
//        $('#count0_0').show();
//        $('#count0_1').hide();
//        $('#count0_2').hide();
//        $('#count0_3').hide();
//        $('#count0_4').hide();
//        $('#count0_5').hide();
//    }
//    else if (vals == 1) {
//        $('#count0_0').hide();
//        $('#count0_1').show();
//        $('#count0_2').hide();
//        $('#count0_3').hide();
//        $('#count0_4').hide();
//        $('#count0_5').hide();
//    }
//    else if (vals == 2) {
//        $('#count0_0').hide();
//        $('#count0_1').hide();
//        $('#count0_2').show();
//        $('#count0_3').hide();
//        $('#count0_4').hide();
//        $('#count0_5').hide();
//    }
//    else if (vals == 3) {
//        $('#count0_0').hide();
//        $('#count0_1').hide();
//        $('#count0_2').hide();
//        $('#count0_3').show();
//        $('#count0_4').hide();
//        $('#count0_5').hide();
//    }
//    else if (vals == 4) {
//        $('#count0_0').hide();
//        $('#count0_1').hide();
//        $('#count0_2').hide();
//        $('#count0_3').hide();
//        $('#count0_4').show();
//        $('#count0_5').hide();
//    }
//    else{
//        $('#count0_0').hide();
//        $('#count0_1').hide();
//        $('#count0_2').hide();
//        $('#count0_3').hide();
//        $('#count0_4').hide();
//        $('#count0_5').show();
//
//    }
//}
//
//function valv_3(vals) {
//    if (vals == 0) {
//        $('#count1_0').show();
//        $('#count1_1').hide();
//        $('#count1_2').hide();
//        $('#count1_3').hide();
//        $('#count1_4').hide();
//        $('#count1_5').hide();
//    }
//    else if (vals == 1) {
//        $('#count1_0').hide();
//        $('#count1_1').show();
//        $('#count1_2').hide();
//        $('#count1_3').hide();
//        $('#count1_4').hide();
//        $('#count1_5').hide();
//    }
//    else if (vals == 2) {
//        $('#count1_0').hide();
//        $('#count1_1').hide();
//        $('#count1_2').show();
//        $('#count1_3').hide();
//        $('#count1_4').hide();
//        $('#count1_5').hide();
//    }
//    else if (vals == 3) {
//        $('#count1_0').hide();
//        $('#count1_1').hide();
//        $('#count1_2').hide();
//        $('#count1_3').show();
//        $('#count1_4').hide();
//        $('#count1_5').hide();
//    }
//    else if (vals == 4) {
//        $('#count1_0').hide();
//        $('#count1_1').hide();
//        $('#count1_2').hide();
//        $('#count1_3').hide();
//        $('#count1_4').show();
//        $('#count1_5').hide();
//    }
//    else{
//        $('#count1_0').hide();
//        $('#count1_1').hide();
//        $('#count1_2').hide();
//        $('#count1_3').hide();
//        $('#count1_4').hide();
//        $('#count1_5').show();
//    }
//}
//
//function valv_4(vals) {
//    if (vals == 0) {
//        $('#count2_0').show();
//        $('#count2_1').hide();
//        $('#count2_2').hide();
//        $('#count2_3').hide();
//        $('#count2_4').hide();
//        $('#count2_5').hide();
//    }
//    else if (vals == 1) {
//        $('#count2_0').hide();
//        $('#count2_1').show();
//        $('#count2_2').hide();
//        $('#count2_3').hide();
//        $('#count2_4').hide();
//        $('#count2_5').hide();
//    }
//    else if (vals == 2) {
//        $('#count2_0').hide();
//        $('#count2_1').hide();
//        $('#count2_2').show();
//        $('#count2_3').hide();
//        $('#count2_4').hide();
//        $('#count2_5').hide();
//    }
//    else if (vals == 3) {
//        $('#count2_0').hide();
//        $('#count2_1').hide();
//        $('#count2_2').hide();
//        $('#count2_3').show();
//        $('#count2_4').hide();
//        $('#count2_5').hide();
//    }
//    else if (vals == 4) {
//        $('#count2_0').hide();
//        $('#count2_1').hide();
//        $('#count2_2').hide();
//        $('#count2_3').hide();
//        $('#count2_4').show();
//        $('#count2_5').hide();
//    }
//    else{
//        $('#count2_0').hide();
//        $('#count2_1').hide();
//        $('#count2_2').hide();
//        $('#count2_3').hide();
//        $('#count2_4').hide();
//        $('#count2_5').show();
//    }
//}
//
//function valv_5(vals) {
//    if (vals == 0) {
//        $('#count3_0').show();
//        $('#count3_1').hide();
//        $('#count3_2').hide();
//        $('#count3_3').hide();
//        $('#count3_4').hide();
//        $('#count3_5').hide();
//    }
//    else if (vals == 1) {
//        $('#count3_0').hide();
//        $('#count3_1').show();
//        $('#count3_2').hide();
//        $('#count3_3').hide();
//        $('#count3_4').hide();
//        $('#count3_5').hide();
//    }
//    else if (vals == 2) {
//        $('#count3_0').hide();
//        $('#count3_1').hide();
//        $('#count3_2').show();
//        $('#count3_3').hide();
//        $('#count3_4').hide();
//        $('#count3_5').hide();
//    }
//    else if (vals == 3) {
//        $('#count3_0').hide();
//        $('#count3_1').hide();
//        $('#count3_2').hide();
//        $('#count3_3').show();
//        $('#count3_4').hide();
//        $('#count3_5').hide();
//    }
//    else if (vals == 4) {
//        $('#count3_0').hide();
//        $('#count3_1').hide();
//        $('#count3_2').hide();
//        $('#count3_3').hide();
//        $('#count3_4').show();
//        $('#count3_5').hide();
//    }
//    else{
//        $('#count3_0').hide();
//        $('#count3_1').hide();
//        $('#count3_2').hide();
//        $('#count3_3').hide();
//        $('#count3_4').hide();
//        $('#count3_5').show();
//    }
//}
//function choke2(vals) {
//    if (vals == 0) {
//        $('#count4_0').show();
//        $('#count4_1').hide();
//        $('#count4_2').hide();
//        $('#count4_3').hide();
//        $('#count4_4').hide();
//        $('#count4_5').hide();
//    }
//    else if (vals == 1) {
//        $('#count4_0').hide();
//        $('#count4_1').show();
//        $('#count4_2').hide();
//        $('#count4_3').hide();
//        $('#count4_4').hide();
//        $('#count4_5').hide();
//    }
//    else if (vals == 2) {
//        $('#count4_0').hide();
//        $('#count4_1').hide();
//        $('#count4_2').show();
//        $('#count4_3').hide();
//        $('#count4_4').hide();
//        $('#count4_5').hide();
//    }
//    else if (vals == 3) {
//        $('#count4_0').hide();
//        $('#count4_1').hide();
//        $('#count4_2').hide();
//        $('#count4_3').show();
//        $('#count4_4').hide();
//        $('#count4_5').hide();
//    }
//    else if (vals == 4) {
//        $('#count4_0').hide();
//        $('#count4_1').hide();
//        $('#count4_2').hide();
//        $('#count4_3').hide();
//        $('#count4_4').show();
//        $('#count4_5').hide();
//    }
//    else{
//        $('#count4_0').hide();
//        $('#count4_1').hide();
//        $('#count4_2').hide();
//        $('#count4_3').hide();
//        $('#count4_4').hide();
//        $('#count4_5').show();
//    }
//}
//
//function valv_6(vals) {
//    if (vals == 0) {
//        $('#count6_0').show();
//        $('#count6_1').hide();
//        $('#count6_2').hide();
//        $('#count6_3').hide();
//        $('#count6_4').hide();
//        $('#count6_5').hide();
//    }
//    else if (vals == 1) {
//        $('#count6_0').hide();
//        $('#count6_1').show();
//        $('#count6_2').hide();
//        $('#count6_3').hide();
//        $('#count6_4').hide();
//        $('#count6_5').hide();
//    }
//    else if (vals == 2) {
//        $('#count6_0').hide();
//        $('#count6_1').hide();
//        $('#count6_2').show();
//        $('#count6_3').hide();
//        $('#count6_4').hide();
//        $('#count6_5').hide();
//    }
//    else if (vals == 3) {
//        $('#count6_0').hide();
//        $('#count6_1').hide();
//        $('#count6_2').hide();
//        $('#count6_3').show();
//        $('#count6_4').hide();
//        $('#count6_5').hide();
//    }
//    else if (vals == 4) {
//        $('#count6_0').hide();
//        $('#count6_1').hide();
//        $('#count6_2').hide();
//        $('#count6_3').hide();
//        $('#count6_4').show();
//        $('#count6_5').hide();
//    }
//    else{
//        $('#count6_0').hide();
//        $('#count6_1').hide();
//        $('#count6_2').hide();
//        $('#count6_3').hide();
//        $('#count6_4').hide();
//        $('#count6_5').show();
//    }
//}
//
//function valv_7(vals) {
//    if (vals == 0) {
//        $('#count2_1_0').show();
//        $('#count2_1_1').hide();
//        $('#count2_1_2').hide();
//        $('#count2_1_3').hide();
//        $('#count2_1_4').hide();
//        $('#count2_1_5').hide();
//    }
//    else if (vals == 1) {
//        $('#count2_1_0').hide();
//        $('#count2_1_1').show();
//        $('#count2_1_2').hide();
//        $('#count2_1_3').hide();
//        $('#count2_1_4').hide();
//        $('#count2_1_5').hide();
//    }
//    else if (vals == 2) {
//        $('#count2_1_0').hide();
//        $('#count2_1_1').hide();
//        $('#count2_1_2').show();
//        $('#count2_1_3').hide();
//        $('#count2_1_4').hide();
//        $('#count2_1_5').hide();
//
//    }
//    else if (vals == 3) {
//        $('#count2_1_0').hide();
//        $('#count2_1_1').hide();
//        $('#count2_1_2').hide();
//        $('#count2_1_3').show();
//        $('#count2_1_4').hide();
//        $('#count2_1_5').hide();
//    }
//    else if (vals == 4) {
//        $('#count2_1_0').hide();
//        $('#count2_1_1').hide();
//        $('#count2_1_2').hide();
//        $('#count2_1_3').hide();
//        $('#count2_1_4').show();
//        $('#count2_1_5').hide();
//    }
//    else{
//        $('#count2_1_0').hide();
//        $('#count2_1_1').hide();
//        $('#count2_1_2').hide();
//        $('#count2_1_3').hide();
//        $('#count2_1_4').hide();
//        $('#count2_1_5').show();
//    }
//}
//function valv_8(vals) {
//    if (vals == 0) {
//        $('#valv2_1_0').show();
//        $('#valv2_1_1').hide();
//        $('#valv2_1_2').hide();
//        $('#valv2_1_3').hide();
//        $('#valv2_1_4').hide();
//        $('#valv2_1_5').hide();
//    }
//    else if (vals == 1) {
//        $('#valv2_1_0').hide();
//        $('#valv2_1_1').show();
//        $('#valv2_1_2').hide();
//        $('#valv2_1_3').hide();
//        $('#valv2_1_4').hide();
//        $('#valv2_1_5').hide();
//    }
//    else if (vals == 2) {
//        $('#valv2_1_0').hide();
//        $('#valv2_1_1').hide();
//        $('#valv2_1_2').show();
//        $('#valv2_1_3').hide();
//        $('#valv2_1_4').hide();
//        $('#valv2_1_5').hide();
//    }
//    else if (vals == 3) {
//        $('#valv2_1_0').hide();
//        $('#valv2_1_1').hide();
//        $('#valv2_1_2').hide();
//        $('#valv2_1_3').show();
//        $('#valv2_1_4').hide();
//        $('#valv2_1_5').hide();
//    }
//    else if (vals == 4) {
//        $('#valv2_1_0').hide();
//        $('#valv2_1_1').hide();
//        $('#valv2_1_2').hide();
//        $('#valv2_1_3').hide();
//        $('#valv2_1_4').show();
//        $('#valv2_1_5').hide();
//    }
//    else{
//        $('#valv2_1_0').hide();
//        $('#valv2_1_1').hide();
//        $('#valv2_1_2').hide();
//        $('#valv2_1_3').hide();
//        $('#valv2_1_4').hide();
//        $('#valv2_1_5').show();
//    }
//}
//function valv_9(vals) {
//    if (vals == 0) {
//        $('#count2_2_0').show();
//        $('#count2_2_1').hide();
//        $('#count2_2_2').hide();
//        $('#count2_2_3').hide();
//        $('#count2_2_4').hide();
//        $('#count2_2_5').hide();
//    }
//    else if (vals == 1) {
//        $('#count2_2_0').hide();
//        $('#count2_2_1').show();
//        $('#count2_2_2').hide();
//        $('#count2_2_3').hide();
//        $('#count2_2_4').hide();
//        $('#count2_2_5').hide();
//    }
//    else if (vals == 2) {
//        $('#count2_2_0').hide();
//        $('#count2_2_1').hide();
//        $('#count2_2_2').show();
//        $('#count2_2_3').hide();
//        $('#count2_2_4').hide();
//        $('#count2_2_5').hide();
//
//    }
//    else if (vals == 3) {
//        $('#count2_2_0').hide();
//        $('#count2_2_1').hide();
//        $('#count2_2_2').hide();
//        $('#count2_2_3').show();
//        $('#count2_2_4').hide();
//        $('#count2_2_5').hide();
//    }
//    else if (vals == 4) {
//        $('#count2_2_0').hide();
//        $('#count2_2_1').hide();
//        $('#count2_2_2').hide();
//        $('#count2_2_3').hide();
//        $('#count2_2_4').show();
//        $('#count2_2_5').hide();
//    }
//    else{
//        $('#count2_2_0').hide();
//        $('#count2_2_1').hide();
//        $('#count2_2_2').hide();
//        $('#count2_2_3').hide();
//        $('#count2_2_4').hide();
//        $('#count2_2_5').show();
//    }
//}
//
//function valv_10(vals) {
//    if (vals == 0) {
//        $('#count2_3_0').show();
//        $('#count2_3_1').hide();
//        $('#count2_3_2').hide();
//        $('#count2_3_3').hide();
//        $('#count2_3_4').hide();
//        $('#count2_3_5').hide();
//    }
//    else if (vals == 1) {
//        $('#count2_3_0').hide();
//        $('#count2_3_1').show();
//        $('#count2_3_2').hide();
//        $('#count2_3_3').hide();
//        $('#count2_3_4').hide();
//        $('#count2_3_5').hide();
//    }
//    else if (vals == 2) {
//        $('#count2_3_0').hide();
//        $('#count2_3_1').hide();
//        $('#count2_3_2').show();
//        $('#count2_3_3').hide();
//        $('#count2_3_4').hide();
//        $('#count2_3_5').hide();
//
//    }
//    else if (vals == 3) {
//        $('#count2_3_0').hide();
//        $('#count2_3_1').hide();
//        $('#count2_3_2').hide();
//        $('#count2_3_3').show();
//        $('#count2_3_4').hide();
//        $('#count2_3_5').hide();
//    }
//    else if (vals == 4) {
//        $('#count2_3_0').hide();
//        $('#count2_3_1').hide();
//        $('#count2_3_2').hide();
//        $('#count2_3_3').hide();
//        $('#count2_3_4').show();
//        $('#count2_3_5').hide();
//    }
//    else{
//        $('#count2_3_0').hide();
//        $('#count2_3_1').hide();
//        $('#count2_3_2').hide();
//        $('#count2_3_3').hide();
//        $('#count2_3_4').hide();
//        $('#count2_3_5').show();
//    }
//}
//
//function valv_11(vals) {
//    if (vals == 0) {
//        $('#count2_4_0').show();
//        $('#count2_4_1').hide();
//        $('#count2_4_2').hide();
//        $('#count2_4_3').hide();
//        $('#count2_4_4').hide();
//        $('#count2_4_5').hide();
//    }
//    else if (vals == 1) {
//        $('#count2_4_0').hide();
//        $('#count2_4_1').show();
//        $('#count2_4_2').hide();
//        $('#count2_4_3').hide();
//        $('#count2_4_4').hide();
//        $('#count2_4_5').hide();
//    }
//    else if (vals == 2) {
//        $('#count2_4_0').hide();
//        $('#count2_4_1').hide();
//        $('#count2_4_2').show();
//        $('#count2_4_3').hide();
//        $('#count2_4_4').hide();
//        $('#count2_4_5').hide();
//
//    }
//    else if (vals == 3) {
//        $('#count2_4_0').hide();
//        $('#count2_4_1').hide();
//        $('#count2_4_2').hide();
//        $('#count2_4_3').show();
//        $('#count2_4_4').hide();
//        $('#count2_4_5').hide();
//    }
//    else if (vals == 4) {
//        $('#count2_4_0').hide();
//        $('#count2_4_1').hide();
//        $('#count2_4_2').hide();
//        $('#count2_4_3').hide();
//        $('#count2_4_4').show();
//        $('#count2_4_5').hide();
//    }
//    else{
//        $('#count2_4_0').hide();
//        $('#count2_4_1').hide();
//        $('#count2_4_2').hide();
//        $('#count2_4_3').hide();
//        $('#count2_4_4').hide();
//        $('#count2_4_5').show();
//    }
//}
//
//function valv_12(vals) {
//    if (vals == 0) {
//        $('#count2_5_0').show();
//        $('#count2_5_1').hide();
//        $('#count2_5_2').hide();
//        $('#count2_5_3').hide();
//        $('#count2_5_4').hide();
//        $('#count2_5_5').hide();
//    }
//    else if (vals == 1) {
//        $('#count2_5_0').hide();
//        $('#count2_5_1').show();
//        $('#count2_5_2').hide();
//        $('#count2_5_3').hide();
//        $('#count2_5_4').hide();
//        $('#count2_5_5').hide();
//    }
//    else if (vals == 2) {
//        $('#count2_5_0').hide();
//        $('#count2_5_1').hide();
//        $('#count2_5_2').show();
//        $('#count2_5_3').hide();
//        $('#count2_5_4').hide();
//        $('#count2_5_5').hide();
//
//    }
//    else if (vals == 3) {
//        $('#count2_5_0').hide();
//        $('#count2_5_1').hide();
//        $('#count2_5_2').hide();
//        $('#count2_5_3').show();
//        $('#count2_5_4').hide();
//        $('#count2_5_5').hide();
//    }
//    else if (vals == 4) {
//        $('#count2_5_0').hide();
//        $('#count2_5_1').hide();
//        $('#count2_5_2').hide();
//        $('#count2_5_3').hide();
//        $('#count2_5_4').show();
//        $('#count2_5_5').hide();
//    }
//    else{
//        $('#count2_5_0').hide();
//        $('#count2_5_1').hide();
//        $('#count2_5_2').hide();
//        $('#count2_5_3').hide();
//        $('#count2_5_4').hide();
//        $('#count2_5_5').show();
//    }
//}


function bypass_val(val)
{
    switch(val)
    {
        case '0':
            $('#val1_0').show();
            $('#val1_1').hide();
            $('#val1_2').hide();
            $('#val1_3').hide();
            $('#val1_4').hide();
            $('#val1_5').hide();
            break;
        case '1':

            $('#val1_0').hide();
            $('#val1_1').show();
            $('#val1_2').hide();
            $('#val1_3').hide();
            $('#val1_4').hide();
            $('#val1_5').hide();
            break;
        case '2':
            $('#val1_0').hide();
            $('#val1_1').hide();
            $('#val1_2').show();
            $('#val1_3').hide();
            $('#val1_4').hide();
            $('#val1_5').hide();
            break;
        case '3':
            $('#val1_0').hide();
            $('#val1_1').hide();
            $('#val1_2').hide();
            $('#val1_3').show();
            $('#val1_4').hide();
            $('#val1_5').hide();
            break;
        case '4':
            $('#val1_0').hide();
            $('#val1_1').hide();
            $('#val1_2').hide();
            $('#val1_3').hide();
            $('#val1_4').show();
            $('#val1_5').hide();
            break;
        default :
            $('#val1_0').hide();
            $('#val1_1').hide();
            $('#val1_2').hide();
            $('#val1_3').hide();
            $('#val1_4').hide();
            $('#val1_5').show();

    }
}

//            valv_2(rtdata[0].choke1);  //choke1 mode valve
function chok1_val(val)
{
    switch(val)
    {
        case '0':
            $('#count0_0').show();
            $('#count0_1').hide();
            $('#count0_2').hide();
            $('#count0_3').hide();
            $('#count0_4').hide();
            $('#count0_5').hide();
            break;
        case '1':
            $('#count0_0').hide();
            $('#count0_1').show();
            $('#count0_2').hide();
            $('#count0_3').hide();
            $('#count0_4').hide();
            $('#count0_5').hide();
            break;
        case '2':
            $('#count0_0').hide();
            $('#count0_1').hide();
            $('#count0_2').show();
            $('#count0_3').hide();
            $('#count0_4').hide();
            $('#count0_5').hide();
            break;
        case '3':
            $('#count0_0').hide();
            $('#count0_1').hide();
            $('#count0_2').hide();
            $('#count0_3').show();
            $('#count0_4').hide();
            $('#count0_5').hide();
            break;
        case '4':
            $('#count0_0').hide();
            $('#count0_1').hide();
            $('#count0_2').hide();
            $('#count0_3').hide();
            $('#count0_4').show();
            $('#count0_5').hide();
            break;
        default :
            $('#count0_0').hide();
            $('#count0_1').hide();
            $('#count0_2').hide();
            $('#count0_3').hide();
            $('#count0_4').hide();
            $('#count0_5').show();
    }
}

//            valv_3(rtdata[0].spare); //Spare valve
function spare_val(val)
{
    switch(val)
    {
        case '0':
            $('#count1_0').show();
            $('#count1_1').hide();
            $('#count1_2').hide();
            $('#count1_3').hide();
            $('#count1_4').hide();
            $('#count1_5').hide();
            break;
        case '1':
            $('#count1_0').hide();
            $('#count1_1').show();
            $('#count1_2').hide();
            $('#count1_3').hide();
            $('#count1_4').hide();
            $('#count1_5').hide();
            break;
        case '2':
            $('#count1_0').hide();
            $('#count1_1').hide();
            $('#count1_2').show();
            $('#count1_3').hide();
            $('#count1_4').hide();
            $('#count1_5').hide();
        case '3':
            $('#count1_0').hide();
            $('#count1_1').hide();
            $('#count1_2').hide();
            $('#count1_3').show();
            $('#count1_4').hide();
            $('#count1_5').hide();
        case '4':
            $('#count1_0').hide();
            $('#count1_1').hide();
            $('#count1_2').hide();
            $('#count1_3').hide();
            $('#count1_4').show();
            $('#count1_5').hide();
        default:
            $('#count1_0').hide();
            $('#count1_1').hide();
            $('#count1_2').hide();
            $('#count1_3').hide();
            $('#count1_4').hide();
            $('#count1_5').show();
    }
}



//            valv_4(rtdata[0].hcr2);//HCR2
function hcr2_val(val)
{
    switch(val)
    {
        case '0':
            $('#count2_0').show();
            $('#count2_1').hide();
            $('#count2_2').hide();
            $('#count2_3').hide();
            $('#count2_4').hide();
            $('#count2_5').hide();
            break;
        case '1':
            $('#count2_0').hide();
            $('#count2_1').show();
            $('#count2_2').hide();
            $('#count2_3').hide();
            $('#count2_4').hide();
            $('#count2_5').hide();
            break;
        case '2':
            $('#count2_0').hide();
            $('#count2_1').hide();
            $('#count2_2').show();
            $('#count2_3').hide();
            $('#count2_4').hide();
            $('#count2_5').hide();
            break;
        case '3':
            $('#count2_0').hide();
            $('#count2_1').hide();
            $('#count2_2').hide();
            $('#count2_3').show();
            $('#count2_4').hide();
            $('#count2_5').hide();
            break;
        case '4':
            $('#count2_0').hide();
            $('#count2_1').hide();
            $('#count2_2').hide();
            $('#count2_3').hide();
            $('#count2_4').show();
            $('#count2_5').hide();
            break;
        default :
            $('#count2_0').hide();
            $('#count2_1').hide();
            $('#count2_2').hide();
            $('#count2_3').hide();
            $('#count2_4').hide();
            $('#count2_5').show();

    }
}


//            valv_5(rtdata[0].hcr1);//HCR1
function hcr1_val(val)
{
    switch(val)
    {
        case '0':
            $('#count3_0').show();
            $('#count3_1').hide();
            $('#count3_2').hide();
            $('#count3_3').hide();
            $('#count3_4').hide();
            $('#count3_5').hide();
            break;
        case '1':
            $('#count3_0').hide();
            $('#count3_1').show();
            $('#count3_2').hide();
            $('#count3_3').hide();
            $('#count3_4').hide();
            $('#count3_5').hide();
            break;
        case '2':
            $('#count3_0').hide();
            $('#count3_1').hide();
            $('#count3_2').show();
            $('#count3_3').hide();
            $('#count3_4').hide();
            $('#count3_5').hide();
            break;
        case '3':
            $('#count3_0').hide();
            $('#count3_1').hide();
            $('#count3_2').hide();
            $('#count3_3').show();
            $('#count3_4').hide();
            $('#count3_5').hide();
            break;
        case '4':
            $('#count3_0').hide();
            $('#count3_1').hide();
            $('#count3_2').hide();
            $('#count3_3').hide();
            $('#count3_4').show();
            $('#count3_5').hide();
            break;
        default :
            $('#count3_0').hide();
            $('#count3_1').hide();
            $('#count3_2').hide();
            $('#count3_3').hide();
            $('#count3_4').hide();
            $('#count3_5').show();
    }
}


//            choke2(rtdata[0].choke2);//Choke2
function chk2_val(val)
{
    switch(val)
    {
        case '0':
            $('#count4_0').show();
            $('#count4_1').hide();
            $('#count4_2').hide();
            $('#count4_3').hide();
            $('#count4_4').hide();
            $('#count4_5').hide();
            break;
        case '1':
            $('#count4_0').hide();
            $('#count4_1').show();
            $('#count4_2').hide();
            $('#count4_3').hide();
            $('#count4_4').hide();
            $('#count4_5').hide();
            break;
        case '2':
            $('#count4_0').hide();
            $('#count4_1').hide();
            $('#count4_2').show();
            $('#count4_3').hide();
            $('#count4_4').hide();
            $('#count4_5').hide();
            break;
        case '3':
            $('#count4_0').hide();
            $('#count4_1').hide();
            $('#count4_2').hide();
            $('#count4_3').show();
            $('#count4_4').hide();
            $('#count4_5').hide();
            break;
        case '4':
            $('#count4_0').hide();
            $('#count4_1').hide();
            $('#count4_2').hide();
            $('#count4_3').hide();
            $('#count4_4').show();
            $('#count4_5').hide();
            break;
        default :
            $('#count4_0').hide();
            $('#count4_1').hide();
            $('#count4_2').hide();
            $('#count4_3').hide();
            $('#count4_4').hide();
            $('#count4_5').show();
    }
}


//            valv_6(rtdata[0].kill2);//kill2
function kill2_val(val)
{
    switch(val)
    {
        case '0':
            $('#count6_0').show();
            $('#count6_1').hide();
            $('#count6_2').hide();
            $('#count6_3').hide();
            $('#count6_4').hide();
            $('#count6_5').hide();
            break;
        case '1':
            $('#count6_0').hide();
            $('#count6_1').show();
            $('#count6_2').hide();
            $('#count6_3').hide();
            $('#count6_4').hide();
            $('#count6_5').hide();
            break;
        case '2':
            $('#count6_0').hide();
            $('#count6_1').hide();
            $('#count6_2').show();
            $('#count6_3').hide();
            $('#count6_4').hide();
            $('#count6_5').hide();
            break;
        case '3':
            $('#count6_0').hide();
            $('#count6_1').hide();
            $('#count6_2').hide();
            $('#count6_3').show();
            $('#count6_4').hide();
            $('#count6_5').hide();
            break;
        case '4':
            $('#count6_0').hide();
            $('#count6_1').hide();
            $('#count6_2').hide();
            $('#count6_3').hide();
            $('#count6_4').show();
            $('#count6_5').hide();
            break;
        default :
            $('#count6_0').hide();
            $('#count6_1').hide();
            $('#count6_2').hide();
            $('#count6_3').hide();
            $('#count6_4').hide();
            $('#count6_5').show();
    }
}


//            valv_7(rtdata[0].kill1);//kill1
function kill1_val(val)
{
    switch(val)
    {
        case '0':
            $('#count2_1_0').show();
            $('#count2_1_1').hide();
            $('#count2_1_2').hide();
            $('#count2_1_3').hide();
            $('#count2_1_4').hide();
            $('#count2_1_5').hide();
            break;
        case '1':
            $('#count2_1_0').hide();
            $('#count2_1_1').show();
            $('#count2_1_2').hide();
            $('#count2_1_3').hide();
            $('#count2_1_4').hide();
            $('#count2_1_5').hide();
            break;
        case '2':
            $('#count2_1_0').hide();
            $('#count2_1_1').hide();
            $('#count2_1_2').show();
            $('#count2_1_3').hide();
            $('#count2_1_4').hide();
            $('#count2_1_5').hide();
            break;
        case '3':
            $('#count2_1_0').hide();
            $('#count2_1_1').hide();
            $('#count2_1_2').hide();
            $('#count2_1_3').show();
            $('#count2_1_4').hide();
            $('#count2_1_5').hide();
            break;
        case '4':
            $('#count2_1_0').hide();
            $('#count2_1_1').hide();
            $('#count2_1_2').hide();
            $('#count2_1_3').hide();
            $('#count2_1_4').show();
            $('#count2_1_5').hide();
            break;
        default :
            $('#count2_1_0').hide();
            $('#count2_1_1').hide();
            $('#count2_1_2').hide();
            $('#count2_1_3').hide();
            $('#count2_1_4').hide();
            $('#count2_1_5').show();
    }
}


//            valv_8(rtdata[0].pprm3); //piperam3
function pprm3_val(val)
{
    switch(val)
    {
        case '0':
            $('#valv2_1_0').show();
            $('#valv2_1_1').hide();
            $('#valv2_1_2').hide();
            $('#valv2_1_3').hide();
            $('#valv2_1_4').hide();
            $('#valv2_1_5').hide();
            break;
        case '1':
            $('#valv2_1_0').hide();
            $('#valv2_1_1').show();
            $('#valv2_1_2').hide();
            $('#valv2_1_3').hide();
            $('#valv2_1_4').hide();
            $('#valv2_1_5').hide();
            break;
        case '2':
            $('#valv2_1_0').hide();
            $('#valv2_1_1').hide();
            $('#valv2_1_2').show();
            $('#valv2_1_3').hide();
            $('#valv2_1_4').hide();
            $('#valv2_1_5').hide();
            break;
        case '3':
            $('#valv2_1_0').hide();
            $('#valv2_1_1').hide();
            $('#valv2_1_2').hide();
            $('#valv2_1_3').show();
            $('#valv2_1_4').hide();
            $('#valv2_1_5').hide();
            break;
        case '4':
            $('#valv2_1_0').hide();
            $('#valv2_1_1').hide();
            $('#valv2_1_2').hide();
            $('#valv2_1_3').hide();
            $('#valv2_1_4').show();
            $('#valv2_1_5').hide();
            break;
        default :
            $('#valv2_1_0').hide();
            $('#valv2_1_1').hide();
            $('#valv2_1_2').hide();
            $('#valv2_1_3').hide();
            $('#valv2_1_4').hide();
            $('#valv2_1_5').show();
    }
}


//            valv_9(rtdata[0].pprm2);//piperam2
function pprm2_val(val)
{
    switch(val)
    {
        case '0':
            $('#count2_2_0').show();
            $('#count2_2_1').hide();
            $('#count2_2_2').hide();
            $('#count2_2_3').hide();
            $('#count2_2_4').hide();
            $('#count2_2_5').hide();
            break;
        case '1':
            $('#count2_2_0').hide();
            $('#count2_2_1').show();
            $('#count2_2_2').hide();
            $('#count2_2_3').hide();
            $('#count2_2_4').hide();
            $('#count2_2_5').hide();
            break;
        case '2':
            $('#count2_2_0').hide();
            $('#count2_2_1').hide();
            $('#count2_2_2').show();
            $('#count2_2_3').hide();
            $('#count2_2_4').hide();
            $('#count2_2_5').hide();
            break;
        case '3':
            $('#count2_2_0').hide();
            $('#count2_2_1').hide();
            $('#count2_2_2').hide();
            $('#count2_2_3').show();
            $('#count2_2_4').hide();
            $('#count2_2_5').hide();
            break;
        case '4':
            $('#count2_2_0').hide();
            $('#count2_2_1').hide();
            $('#count2_2_2').hide();
            $('#count2_2_3').hide();
            $('#count2_2_4').show();
            $('#count2_2_5').hide();
            break;
        default :
            $('#count2_2_0').hide();
            $('#count2_2_1').hide();
            $('#count2_2_2').hide();
            $('#count2_2_3').hide();
            $('#count2_2_4').hide();
            $('#count2_2_5').show();
    }
}


//            valv_10(rtdata[0].bs);//Blind/shear
function bs_val(val)
{
    switch(val)
    {
        case '0':
            $('#count2_3_0').show();
            $('#count2_3_1').hide();
            $('#count2_3_2').hide();
            $('#count2_3_3').hide();
            $('#count2_3_4').hide();
            $('#count2_3_5').hide();
            break;
        case '1':
            $('#count2_3_0').hide();
            $('#count2_3_1').show();
            $('#count2_3_2').hide();
            $('#count2_3_3').hide();
            $('#count2_3_4').hide();
            $('#count2_3_5').hide();
            break;
        case '2':
            $('#count2_3_0').hide();
            $('#count2_3_1').hide();
            $('#count2_3_2').show();
            $('#count2_3_3').hide();
            $('#count2_3_4').hide();
            $('#count2_3_5').hide();
            break;
        case '3':
            $('#count2_3_0').hide();
            $('#count2_3_1').hide();
            $('#count2_3_2').hide();
            $('#count2_3_3').show();
            $('#count2_3_4').hide();
            $('#count2_3_5').hide();
            break;
        case '4':
            $('#count2_3_0').hide();
            $('#count2_3_1').hide();
            $('#count2_3_2').hide();
            $('#count2_3_3').hide();
            $('#count2_3_4').show();
            $('#count2_3_5').hide();
            break;
        default :
            $('#count2_3_0').hide();
            $('#count2_3_1').hide();
            $('#count2_3_2').hide();
            $('#count2_3_3').hide();
            $('#count2_3_4').hide();
            $('#count2_3_5').show();
    }
}


//            valv_11(rtdata[0].pprm1);//piperam1

function pprm1_val(val)
{
    switch(val)
    {
        case '0':
            $('#count2_4_0').show();
            $('#count2_4_1').hide();
            $('#count2_4_2').hide();
            $('#count2_4_3').hide();
            $('#count2_4_4').hide();
            $('#count2_4_5').hide();
            break;
        case '1':
            $('#count2_4_0').hide();
            $('#count2_4_1').show();
            $('#count2_4_2').hide();
            $('#count2_4_3').hide();
            $('#count2_4_4').hide();
            $('#count2_4_5').hide();
            break;
        case '2':
            $('#count2_4_0').hide();
            $('#count2_4_1').hide();
            $('#count2_4_2').show();
            $('#count2_4_3').hide();
            $('#count2_4_4').hide();
            $('#count2_4_5').hide();
            break;
        case '3':
            $('#count2_4_0').hide();
            $('#count2_4_1').hide();
            $('#count2_4_2').hide();
            $('#count2_4_3').show();
            $('#count2_4_4').hide();
            $('#count2_4_5').hide();
            break;
        case '4':
            $('#count2_4_0').hide();
            $('#count2_4_1').hide();
            $('#count2_4_2').hide();
            $('#count2_4_3').hide();
            $('#count2_4_4').show();
            $('#count2_4_5').hide();
            break;
        default :
            $('#count2_4_0').hide();
            $('#count2_4_1').hide();
            $('#count2_4_2').hide();
            $('#count2_4_3').hide();
            $('#count2_4_4').hide();
            $('#count2_4_5').show();
    }
}


//            valv_12(rtdata[0].ann);//Annular
function ann_val(val)
{

    switch(val)
    {

        case '0':
            $('#count2_5_0').show();
            $('#count2_5_1').hide();
            $('#count2_5_2').hide();
            $('#count2_5_3').hide();
            $('#count2_5_4').hide();
            $('#count2_5_5').hide();
            break;
        case '1':

            $('#count2_5_0').hide();
            $('#count2_5_1').show();
            $('#count2_5_2').hide();
            $('#count2_5_3').hide();
            $('#count2_5_4').hide();
            $('#count2_5_5').hide();
            break;
        case '2':
            $('#count2_5_0').hide();
            $('#count2_5_1').hide();
            $('#count2_5_2').show();
            $('#count2_5_3').hide();
            $('#count2_5_4').hide();
            $('#count2_5_5').hide();
            break;
        case '3':
            $('#count2_5_0').hide();
            $('#count2_5_1').hide();
            $('#count2_5_2').hide();
            $('#count2_5_3').show();
            $('#count2_5_4').hide();
            $('#count2_5_5').hide();
            break;
        case '4':
            $('#count2_5_0').hide();
            $('#count2_5_1').hide();
            $('#count2_5_2').hide();
            $('#count2_5_3').hide();
            $('#count2_5_4').show();
            $('#count2_5_5').hide();
            break;
        default :

            $('#count2_5_0').hide();
            $('#count2_5_1').hide();
            $('#count2_5_2').hide();
            $('#count2_5_3').hide();
            $('#count2_5_4').hide();
            $('#count2_5_5').show();
    }
}

function tank1(val)
{
    switch(val)
    {
        case '1':
            $('#tank_light0').show();
            $('#tank_light01').hide();
            $('#tank_off').hide();
            if(rtdata[0].tank_status1!= "") {
                $("#tank_status1").append(rtdata[0].tank_status1);
                $('#tank_light0').hide();
                $('#tank_light01').show();
                $('#tank_off').hide();
            }
            break;
        case '2':
            $('#tank_light0').hide();
            $('#tank_light01').show();
            $('#tank_off').hide();

            if(rtdata[0].tank_status1!="") {
                $("#tank_status1").append(rtdata[0].tank_status1);
                $('#tank_light0').hide();
                $('#tank_light01').show();
                $('#tank_off').hide();
            }
            break;
        default:
            $('#tank_off').show();
            $('#tank_light0').hide();
            $('#tank_light01').hide();
            if(rtdata[0].tank_status1!="") {
                $("#tank_status1").append(rtdata[0].tank_status1);
                $('#tank_light0').hide();
                $('#tank_light01').show();
                $('#tank_off').hide();
            }

    }
}

function tank2(val)
{
    switch(val)
    {
        case '1':
            $('#tank_light1').show();
            $('#tank_light11').hide();
            $('#tank_off2').hide();
            if(rtdata[0].tank_status2!= "") {
                $("#tank_status2").append(rtdata[0].tank_status2);
                $('#tank_light1').hide();
                $('#tank_light11').show();
                $('#tank_off2').hide();
            }
            break;
        case '2':
            $('#tank_light1').hide();
            $('#tank_light11').show();
            $('#tank_off2').hide();
            if(rtdata[0].tank_status2!= "") {
                $("#tank_status2").append(rtdata[0].tank_status2);
                $('#tank_light1').hide();
                $('#tank_light11').show();
                $('#tank_off2').hide();
            }
            break;
        default :
            $('#tank_off2').show();
            $('#tank_light1').hide();
            $('#tank_light11').hide();
            if(rtdata[0].tank_status2!= "") {
                $("#tank_status2").append(rtdata[0].tank_status2);
                $('#tank_light1').hide();
                $('#tank_light11').show();
                $('#tank_off2').hide();
            }

    }
}