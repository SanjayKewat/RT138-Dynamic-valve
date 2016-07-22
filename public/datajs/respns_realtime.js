/**
 * Created by Administrator on 3/18/2015.
 */
var socket = io.connect(connection);

socket.on('pump_data', function (data) {
    var rig_id=window.localStorage.getItem("rigid");

    //Access Pump Data
    $.each(data.pump_data,function(idx,value){
        if(value.rig_id==rig_id) {

            for(i=0;i<=1;i++){
                if(value.pump_status==i){
                    $('#no_pmp_'+value.pump_id+'_'+i).show();

                }
                else
                {
                    $('#no_pmp_'+value.pump_id+'_'+i).hide();
                }
            }


      // PUMP Split datetime into hr min sec
      var dt=new Date(value.pump_runtime);
     $('#p_'+value.pump_id+'_hr').text(dt.getHours());
     $('#p_'+value.pump_id+'_min').text(dt.getMinutes());
     $('#p_'+value.pump_id+'_sec').text(dt.getSeconds());


     $('#p_'+value.pump_id+'_str').text(value.pump_start_press);
     $('#p_'+value.pump_id+'_stp').text(value.pump_stop_press);
        }

    });


});

socket.on('choke_data', function (data) {
    var rig_id=window.localStorage.getItem("rigid");


    //Access Response Data
    $.each(data.choke_data,function(idx,value){
        if(value.rig_id==rig_id) {

        $('#lst_txt').val(value.valve_operated);//Last Operated Valve
        $('#dtm_txt').val(value.valve_operated_time);//Date/Time
        $('#rsptm_txt').val(value.response_time);//Response Time(ms)
        $('#esttm_txt').val(value.estimated_time);//Estimated Time on 2nd Valve Operation(sec)


        if(value.pressure_leakage==1)
        {
        $('#prss_lkg_alm').show();
        $('#prss_lkg_noalm').hide();
        }
        else
        {
        $('#prss_lkg_alm').hide();
        $('#prss_lkg_noalm').show();
        }

        $('#rtlkg_txt').val(value.rate_of_leakage);//Rate of Leakage


         //    Slow Recharge start
        if(value.slow_recharge==1)
        {
        $('#slow_rchg_alm').show();
        $('#slow_rchg_noalm').hide();
        }
        else
        {
        $('#slow_rchg_noalm').show();
        $('#slow_rchg_alm').hide();
        }
    //       Slow Recharge end


       $('#tme_els').text(value.time_elapsed);//Estimated Time on 2nd Valve Operation(sec)

        }

    });


});