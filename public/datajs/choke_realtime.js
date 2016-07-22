/**
 * Created by Administrator on 3/12/2015.
 */
var socket = io.connect(connection);

socket.on('choke_data', function (data) {
var rig_id=window.localStorage.getItem("rigid");

    //Access Choke Data
    $.each(data.choke_data,function(idx,value){
        if(value.rig_id==rig_id) {

            //Drill Gauge data
            gauge1.set(parseInt(value.drill_pipe_pressure));gauge1_s1.set(parseInt(value.drill_pipe_pressure));
            segDisplay.value(value.drill_pipe_pressure);segDisplay_s1.value(value.drill_pipe_pressure);
            gauge.value(value.drill_pipe_pressure);gauge_s1.value(value.drill_pipe_pressure);

            //Casing Gauge data
            gauge2.set(parseInt(value.casing_pressure)); gauge2_s2.set(parseInt(value.casing_pressure));
            segDisplay_2.value(value.casing_pressure);segDisplay_2_s2.value(value.casing_pressure);
            gauge_2.value(value.casing_pressure);gauge_2_s2.value(value.casing_pressure);

            //Details Pump
            $('#stroke1').text(parseInt(value.pump_1_stroke_min));
            $('#stroke2').text(parseInt(value.pump_2_stroke_min));
            $('#tstroke1').text(parseInt(value.pump_1_counter_reg));
            $('#tstroke2').text(parseInt(value.pump_2_counter_reg));
            $('#chk_pump1').text(parseInt(value.choke_handpump_hydraulic_pres));


            //Choke 1 & 2 %
            gauge3.set(parseInt(value.choke_1_open_percent));gauge3_s3.set(parseInt(value.choke_1_open_percent));
            gauge4.set(parseInt(value.choke_2_open_percent)); gauge4_s4.set(parseInt(value.choke_2_open_percent));
            $('#g1_txt').text(Math.round(value.choke_1_open_percent)+' %');
            $('#g2_txt').text(Math.round(value.choke_2_open_percent)+' %');
        }
    });

    //Access Choke Data
    $.each(data.pmp_data,function(idx,value) {
       console.log(value.pump_status+' RIG NAME '+value.rig_name);
    });
});