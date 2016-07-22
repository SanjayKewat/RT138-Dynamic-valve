/**
 * Created by Administrator on 3/4/2015.
 */

$(function(){

    var rig_id=window.localStorage.getItem("rigid");
    valv_confg(rig_id);

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
            }else if(valve.valve_name=='Blind/Shear')
            {
                valve_data+='<div class="child_'+(id)+'" style="float: left;"><ul>';
                valve_data+='<li><div id="val'+id+'_0" style="display:block;"><img class="liver" src="svg/cancelled_valve2-18.svg" /></div></li>';
                valve_data+='<li class="'+li_class+'">'+valve.valve_name+'</li>';
                valve_data+='</ul></div>';
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

