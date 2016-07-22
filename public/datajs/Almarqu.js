/**
 * Created by Administrator on 10/30/2014.
 */

// create a new websocket
var socket = io.connect(connection);

var ctr=0,cal= 0,alm_arr2=[];
socket.on('notification', function (data) {
    ++ctr;
    var tr = "",tr_alm='',f_tab='',tr1 = "",tr_alm1='',f_tab1='',li='',t_count= 0,t_count_1= 0,alm_arr=[];
    var rig_id = window.localStorage.getItem("rigid");
    $.each(data.users,function(index,user){

        if(user.rig_id==rig_id){
            if(user.alarm_group_id==1){
                t_count++;
                if(user.alarm_clear =='-')
                {

                    tr_alm+='<tr  class="Alarm_notsolve"><td style=width:40%;>'+user.alarm_name+'</td><td style=width:18%;>'+user.alarm_day+'</td><td style=width:21%;>'+user.alarm_time+'</td><td style=width:21%;>'+user.alarm_clear+'</td></tr>';
//                        li+='<li>'+user.a_name+'</li>';
                    alm_arr.push(user.alarm_name);
                }else
                {
                    tr+='<tr class="Alarm_solve"><td style=width:40%;>'+user.alarm_name+'</td><td style=width:18%;>'+user.alarm_day+'</td><td style=width:21%;>'+user.alarm_time+'</td><td style=width:21%;>'+user.alarm_clear+'</td></tr>';

                }
            }
            else
            {
                t_count_1++;
                if(user.alarm_clear =='-')
                {

                    tr_alm1+='<tr  class="Alarm_notsolve"><td style=width:40%;>'+user.alarm_name+'</td><td style=width:18%;>'+user.alarm_day+'</td><td style=width:21%;>'+user.alarm_time+'</td><td style=width:21%;>'+user.alarm_clear+'</td></tr>';
//                        li+='<li>'+user.a_name+'</li>';
                    alm_arr.push(user.alarm_name);
                }else
                {
                    tr1+='<tr class="Alarm_solve"><td style=width:40%;>'+user.alarm_name+'</td><td style=width:18%;>'+user.alarm_day+'</td><td style=width:21%;>'+user.alarm_time+'</td><td style=width:21%;>'+user.alarm_clear+'</td></tr>';

                }
            }

        }


    });

    if(t_count==1){
        cal=8-t_count;
    }  else
    {
        cal=7-t_count;
    }

//        console.log(data.message.Array[2].String.length);
    if(cal>0)
    {
        for(i=0;i<cal;i++)
        {
            tr+="<tr class='Alarm_solve'><td style=width:40%;></td><td style=width:18%;></td><td style=width:21%;></td><td style=width:21%;></td><</tr>";

        }
    }
    f_tab=tr_alm+tr;


    if(t_count_1==1){
        cal=8-t_count_1;
    }  else
    {
        cal=7-t_count_1;
    }

//        console.log(data.message.Array[2].String.length);
    if(cal>0)
    {
        for(i=0;i<cal;i++)
        {
            tr1+="<tr class='Alarm_solve'><td style=width:40%;></td><td style=width:18%;></td><td style=width:21%;></td><td style=width:21%;></td><</tr>";

        }
    }

    f_tab1=tr_alm1+tr1;
//    f_tab+=tr;

    //>>>>>>******************** Start Execute 1 times when page load **************************>>>>>>>>>>>>>
    if(ctr==1){
        alm_arr2=alm_arr;
        console.log('one time');
        $('#alm_nm').html('');
            if(alm_arr.length==0)
            {

                $(".f2").css({
                    'background': 'rgb(51, 51, 51)','background-size': 'cover'
                });

                $('#alm_nm').html('<li></li>');
            }
        else{
            var k= 0,j=0;
            $(".f2").css({
                'background-image':'url(/images/t_back.svg)','background-size': 'cover',
                'background-color':'#333333'
            });
            for(i=0;i<alm_arr2.length;i++){

                if(k%8==0)
                {
                    k=0;
                    j++;
                    $('#alm_nm').append('<li id=li_'+j+'></li>');
                }

                $('#li_'+j).append(alm_arr2[i]+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
                k++;

//                            $('#alm_nm').append('<li>'+alm_arr2[i]+'</li>');

            }
        }
        $('#valarm').html(f_tab);
        $('#oalarm').html(f_tab1);
    }

    //>>>>>>******************** End Execute 1 times when page load **************************>>>>>>>>>>>>>


    //>>>>>>******************** Start Call when value changed in DB **************************>>>>>>>>>>>>>
    if(alm_arr.length != alm_arr2.length)
    {
        alm_arr2=[];
        alm_arr2=alm_arr;
//                    alert('value changed '+alm_arr2.length);
        $('#alm_nm').html('');

            if(alm_arr.length==0)
            {

                $(".f2").css({
                    'background': 'rgb(51, 51, 51)','background-size': 'cover'
                });

                $('#alm_nm').html('<li></li>');
            }
            else
            {
            var k= 0,j=0;
            $(".f2").css({
                'background-image':'url(/svg/t_back.svg)','background-size': 'cover',
                'background-color':'#333333'
            });
            for(i=0;i<alm_arr2.length;i++){

                if(k%8==0)
                {
                    k=0;
                    j++;
                    $('#alm_nm').append('<li id=li_'+j+'></li>');
                }

                $('#li_'+j).append(alm_arr2[i]+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
                k++;

//                            $('#alm_nm').append('<li>'+alm_arr2[i]+'</li>');

            }
        }
        $('#valarm').html(f_tab);
        $('#oalarm').html(f_tab1);
    }

    //>>>>>>******************** End Call when value changed in DB **************************>>>>>>>>>>>>>



    /*Display Current date&time*/
var dt=new Date(data.time);
$('#dttm').text(dt.toString("dd/MM/yyyy")+' '+dt.toString("hh:mm:ss tt"));
    // $('time').html('Last Update:' + data.time);

});

