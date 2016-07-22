/**
 * Created by Administrator on 4/18/2014.
 */


function alarm_footer()
{


    var content='<div class="tlt" style="text-align:center;width:95%;padding-left: 5%;"><ul class="texts" id="alm_nm"><li id="alm"></li></ul></div>';
    return content;

}


function alarmcontent()
{
    var content='<div class="maintab"><table style="width: 100%; background-color:#4d4d4d;opacity: 1.0;filter: alpha(opacity=100); margin-top: 12px;padding-bottom: 5px; text-align:center; color:#fff;"><tr><th style="width:15%;">ALARMS TODAY</th><th style="width:28%;">ALARM NAME</th><th style="width:12%;">ALARM DAY</th><th style="width:15%;">ALARM TIME</th><th style="width:15%;">ALARM CLEAR TIME</th><th style="width:15%;"></th></tr><tr><td style="color:#fff;">VALVE ALARMS :</td><td colspan="4" ><div class="dv_valm"><table id="valvealarm" style="width:100%; background-color:#fff;overflow-y: scroll;"><tbody id="valarm"></tbody></table></div></td></tr><tr><td></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td style="color:#fff;">OTHER ALARMS :</td><td colspan="4"><div class="dv_othalm"><table id="otheralarm" style="width:100%;background-color:#fff; overflow-y: scroll;"><tbody id="oalarm"></tbody></table></div></td><td valign="bottom"><a id="his" class="alarm_button" href="/hisalm">ALARMS HISTORY</a></td></tr><tr><td>&nbsp;</td><td colspan="3" style="text-align:left; padding-top: 8px;">Alarm tables will be automatically cleared at 12:00 am local time</td><td>&nbsp;</td></tr></table></div><div class="small"><div><div style="text-align: left;">ALARMS TODAY</div><table   style="width:100%;  background-color:#fff;color: #000; overflow-y: scroll;"><thead><tr><td style="width:40%;">ALARM NAME</td><td style="width:20%;">ALARM DAY</td><td style="width:20%;">ALARM TIME</td><td style="width:20%;">ALARM CLEAR TIME</td></tr></thead></table><div style="text-align: center;color: #fff; height: 20px; padding: 5px;">VALVE ALARM</div></div><div style="height: 207px;overflow-y: scroll;background-color:#fff;"><table id="valvealarm1" style="width:100%;"><tbody id="valarm1"></tbody></table></div><div style="text-align: center;color: #fff; height: 20px; padding: 5px;">OTHER ALARM TODAY</div><div style="height: 207px;overflow-y: scroll;"><table id="otheralarm1" style="width:100%;background-color:#fff; overflow-y: scroll;"><tbody id="oalarm1"></tbody></table></div><div>Alarm tables will be automatically cleared at 12:00 am local time</div><div><a id="his1" class="alarm_button" href="/hisalm">ALARMS HISTORY</a></div></div>';
    return content;
}

function userinfo()
{
    var content=' <table  style="width: 100%;text-align: center;margin-top: .2%; color: #fff;"><tr><td><label id="cmp_lbl">COMPANY NAME</label></td><td>|&nbsp;&nbsp;</td><td>RIG NAME : <label id="rig_lbl"></label></td><td>|&nbsp;&nbsp;</td><td>OPERATOR : <label id="opr_lbl">ONGC</label></td><td>|&nbsp;&nbsp;</td><td>BOP TYPE : <label id="bop_lbl">Annular Blowout Preventer</label></td><td>|&nbsp;&nbsp;</td><td>MODEL : <label id="mdl_lbl">PB-PBC</label></td><td>|&nbsp;&nbsp;</td><td>Bore size : <label id="bsize_lbl">13-5/8</label></td><td>|&nbsp;&nbsp;</td><td>USER :<label id="usr">SANJAY</label></td><td>|&nbsp;&nbsp;</td><td>RUNNING DURATION :<label id="tme">1:32 24</label></td><td>|&nbsp;&nbsp;</td><td><label id="dttm">02/04/2014 11.50 AM</label></td></tr></table>';

    return content;
}

function user_name()
{
    $.get('/check_usrnme',{},function(data){
//        $('#opr_lbl').text(data);
        $('#usr').text(data);
    });
}