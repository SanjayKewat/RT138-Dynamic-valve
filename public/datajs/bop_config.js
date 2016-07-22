/**
 * Created by Administrator on 3/4/2015.
 */

$(function(){

    var rig_id=window.localStorage.getItem("rigid");
    valv_confg(rig_id);
    motor_confg(rig_id);
    pump_confg(rig_id);
});


function valv_confg(rig_id){
    var valve_data='',valve_data1='',valv_class='',li_class='';
    var id=0;
    $.get('/valv_confg/'+rig_id,{},function(data){
        if(data.length>12){
            valv_class='liver_smll';
            li_class='li_cmn_smll';
        }
        else{
            valv_class='liver';
            li_class='li_cmn';
        }
        $.each(data.json,function(idx,valve){
            id++;
            if(id==1){
                for(i=0;i<=5;i++){
                    if(i==0){
                        valve_data1+='<ul><li><div id="val'+id+'_'+i+'" style="display:block;"><img class="liver" src="svg/valv_'+i+'.svg" /></div></li>';
                    }
                    else
                    {
                        valve_data1+='<li><div id="val'+id+'_'+i+'" style="display:none;"><img class="liver" src="svg/valv_'+i+'.svg" /></div></li>';
                    }

                }
                valve_data1+='<li class="li_cmn">'+valve.valve_name+'</li></ul>';
            }
            else
            {
                valve_data+='<div class="child_'+(id)+'" style="float: left;"><ul>';
                for(i=0;i<=5;i++){
                    if(i==0){
                        valve_data+='<li><div id="count'+id+'_'+i+'" style="display:block;"><img class="'+valv_class+'" src="svg/valv_'+i+'.svg" /></div></li>';
                    }
                    else
                    {
                        valve_data+='<li><div id="count'+id+'_'+i+'" style="display:none;"><img class="'+valv_class+'" src="svg/valv_'+i+'.svg" /></div></li>';
                    }

                }
                valve_data+='<li class="'+li_class+'">'+valve.valve_name+'</li>';
                valve_data+='</ul></div>';
            }



        });
        $('.by').append(valve_data1);
        $('.dyn_valve').append(valve_data);
    });
}

function motor_confg(rig_id){
    var motor_data='',motor_cls='';
    var id=0;
    $.get('/motor_confg/'+rig_id,{},function(data){


        $.each(data.json,function(idx,valve){
            if(data.length>1){
                motor_cls='motor_hover_2';

            }
            else{
                motor_cls='motor_hover_1';
            }

            id++;


            motor_data+='<div class="motor_'+(id)+'" style="float:left;">';

                for(i=0;i<=2;i++){
                    if(i==0){
                        motor_data+='<div id="motor_'+id+'_'+i+'" style="display:block;"><img class="motor_clss_'+id+'" src="svg/motor_'+id+'_'+i+'.svg"/></div>';
                    }
                    else{
                        motor_data+='<div id="motor_'+id+'_'+i+'" style="display:none;"><img class="motor_clss_'+id+'" src="svg/motor_'+id+'_'+i+'.svg"/></div>';
                    }

                }
            motor_data+='<div id="motor_'+id+'_status" class="motor_status_'+id+'" style="display:block;"></div>';
            motor_data+='</div>';



        });
        $('#motor_hover').addClass(motor_cls);
        $('.dyn_mtr').append(motor_data);
    });
}

function pump_confg(rig_id){
    var pump_data='';
    var id=0;
    $.get('/pump_confg/'+rig_id,{},function(data){

        $.each(data.json,function(idx,valve){
            id++;

            pump_data+='<div id="pump_'+id+'" style="float: right;"><img class="pump_css" src="svg/pump.svg" /></div>';

        });

        $('.dyn_pump').append(pump_data);
    });
}