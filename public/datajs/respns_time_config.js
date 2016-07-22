/**
 * Created by Administrator on 3/18/2015.
 */

$(function(){

    var rig_id=window.localStorage.getItem("rigid");
    pump_table_config(rig_id);
});

function pump_table_config(rig_id){
    var pump_data='';
    var id= 0,wdth= 0,f_wdth= 0,m_lft= 0,tot_pmp=0;



    $.get('/pump_confg/'+rig_id,{},function(data){
        tot_pmp=data.length;
        m_lft=tot_pmp*2;
        wdth=Math.floor(100/tot_pmp);
//        f_wdth=wdth-(m_lft*tot_pmp);
        f_wdth=wdth-(m_lft);

        $.each(data.json,function(idx,valve){
            id++;
            pump_data+='<div class="pump" style="width:'+f_wdth+'%; margin-left:'+m_lft+'%;float:left;">';
            pump_data+='<table style="width:100%;text-align:center;"><tr valign="middle" class="tr36"><td colspan="5">';
            for(i=0;i<=1;i++){
                if(i==0){
                    pump_data+='<img id="no_pmp_'+id+'_'+i+'"  class="tr_pump1" src="svg/'+i+'_cir.svg">';
                }
                else{
                    pump_data+='<img id="no_pmp_'+id+'_'+i+'" style="display:none;" class="tr_pump1" src="svg/'+i+'_cir.svg">';
                }
            }
            pump_data+='<span class="pmp">PUMP '+id+'</span></td></tr>';
            pump_data+='<tr valign="middle" class="tr55"><td colspan="3">Total Pump Runtime</td><td rowspan="2">Start Pressure<br />(psi)</td><td rowspan="2">Stop Pressure<br />(psi)</td></tr>';
            pump_data+='<tr valign="middle" class="tr31"><td>Hour</td><td>Minute</td><td>Seconds</td></tr>';
            pump_data+='<tr valign="middle" class="tr36"><td><label id="p_'+id+'_hr">hr</label></td><td><label id="p_'+id+'_min">min</label></td><td><label id="p_'+id+'_sec">sec</label></td><td><label id="p_'+id+'_str">sec</label></td><td><label id="p_'+id+'_stp">sec</label></td></tr>';
            pump_data+='</table></div>';
        });

        $('.pump_content').append(pump_data);
    });
}