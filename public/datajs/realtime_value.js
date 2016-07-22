/**
 * Created by Administrator on 3/12/2015.
 */
var socket = io.connect(connection);

socket.on('current_data', function (data) {
var rig_id=window.localStorage.getItem("rigid");
    //Access valve Data
    $.each(data.Valve_Data,function(idx,value){

        if(value.rig_id==rig_id){
        if(value.valve_id==1){
            for(i=0;i<=5;i++){
                if(value.valve_value==i){
                $('#val'+value.valve_id+'_'+i).show();
                }
                else
                {
                    $('#val'+value.valve_id+'_'+i).hide();
                }

            }
        }
            else{
            for(i=0;i<=5;i++){
                if(value.valve_value==i){
                    $('#count'+value.valve_id+'_'+i).show();
                }
                else
                {
                    $('#count'+value.valve_id+'_'+i).hide();
                }

            }
        }
        }

    });


    //Access Gauge Data
    $.each(data.Gauge_Data,function(idx,value){

        if(value.rig_id==rig_id)
        {
            if(value.gauge_id==1) //Annular
            {
                segDisplay1.value(value.gauge_value);
                gauge11.value(value.gauge_value);
                gauge1.set(parseInt(value.gauge_value));
                gauge1_s1.set(parseInt(value.gauge_value));
            }
            else if(value.gauge_id==2) //Accumulator
            {
                segDisplay2.value(value.gauge_value);
                gauge12.value(value.gauge_value);
                gauge2.set(parseInt(value.gauge_value));
                gauge2_s1.set(parseInt(value.gauge_value));
            }
            else if(value.gauge_id==3) //Manifold
            {
                segDisplay3.value(value.gauge_value);
                gauge13.value(value.gauge_value);
                gauge3.set(parseInt(value.gauge_value));
                gauge3_s1.set(parseInt(value.gauge_value));
            }
            else if(value.gauge_id==4) //Shear Boost
            {
                segDisplay4.value(value.gauge_value);
                gauge14.value(value.gauge_value);
                gauge4.set(parseInt(value.gauge_value));
                gauge4_s1.set(parseInt(value.gauge_value));
            }
            else if(value.gauge_id==5) //Rig Air
            {
                segDisplay5.value(value.gauge_value);
                gauge15.value(value.gauge_value);
                gauge5.set(parseInt(value.gauge_value));
                gauge5_s1.set(parseInt(value.gauge_value));
            }

        }
    });

    //Access Motor Data
    $.each(data.Motor_Data,function(idx,value){
    if(value.rig_id==rig_id){
        for(i=0;i<=2;i++){
            if(value.motor_value==i){
                $('#motor_'+value.motor_id+'_'+i).show();
                $('#motor_'+value.motor_id+'_status').html(value.motor_msg);
            }
            else
            {
                $('#motor_'+value.motor_id+'_'+i).hide();
            }

        }
    }

    });

});


socket.on('choke_data', function (data) {
    var rig_id=window.localStorage.getItem("rigid");

    //Access Choke Data
    $.each(data.choke_data,function(idx,value){
        if(value.rig_id==rig_id) {

            /*MODE LIGHTS*/

//            BOP LIGHTS
            if(value.bop_mode_light==1){
                $('.light1').show();
            }
            else{
                $('.light1').hide();
            }

            //   DIVERTER LIGHTS
            if(value.divert_mode_light==1){
                $('.light2').show();
            }
            else{
                $('.light2').hide();
            }

            //   port_opn1 LIGHTS
            if(value.port_opn1==1){
                $('.light3').show();
            }
            else{
                $('.light3').hide();
            }

            //   port_opn1 LIGHTS
            if(value.port_opn2==1){
                $('.light4').show();
            }
            else{
                $('.light4').hide();
            }




            //Manifold & Accumulator Status
            if(value.accum_status==1){
                $('#acc_0_1').show();
                $('#acc_0_0').hide();

                $('#manifold_div_1').show();
                $('#manifold_div_0').hide();
            }
            else{
                $('#acc_0_1').hide();
                $('#acc_0_0').show();

                $('#manifold_div_0').show();
                $('#manifold_div_1').hide();
            }

        }
    });


});