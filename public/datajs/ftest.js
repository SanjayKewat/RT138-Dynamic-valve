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
//                for(i=0;i<=5;i++){
//                    if(value.valve_value==i){
//                        $('#val'+value.valve_id+'_'+i).show();
//                    }
//                    else
//                    {
//                        $('#val'+value.valve_id+'_'+i).hide();
//                    }
//
//                }
            }else if(value.valve_id==5)
            {

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
                segDisplay3.value(value.gauge_value);
                gauge13.value(value.gauge_value);
                gauge3.set(parseInt(value.gauge_value));
                gauge3_s.set(parseInt(value.gauge_value));
            }
            else if(value.gauge_id==2) //Accumulator
            {
               segDisplay2.value(value.gauge_value);
                gauge12.value(value.gauge_value);
                gauge2.set(parseInt(value.gauge_value));
                gauge2_s.set(parseInt(value.gauge_value));
            }
            else if(value.gauge_id==3) //Manifold
            {
               segDisplay1.value(value.gauge_value);
                gauge11.value(value.gauge_value);
                gauge1.set(parseInt(value.gauge_value));
                gauge1_s.set(parseInt(value.gauge_value));
            }
            else if(value.gauge_id==4) //Shear Boost
            {
                segDisplay4.value(value.gauge_value);
                gauge14.value(value.gauge_value);
                gauge4.set(parseInt(value.gauge_value));
                gauge4_s.set(parseInt(value.gauge_value));
            }
            else if(value.gauge_id==5) //Rig Air
            {
                segDisplay5.value(value.gauge_value);
                gauge15.value(value.gauge_value);
                gauge5.set(parseInt(value.gauge_value));
                gauge5_s.set(parseInt(value.gauge_value));
            }

        }
    });



});


