/**
 * Created by Administrator on 6/5/2014.
 */

var mysql = require('mysql');
var db_confg=require('db_confg');

var mysqlPool  = mysql.createPool({
    host: db_confg.DB.host,
    user: db_confg.DB.user,
    password: db_confg.DB.password,
    database: db_confg.DB.database,
    port: db_confg.DB.port

});



exports.fldata=function(req, res){



    var year=req.param('year');
    var rigid=req.param('rig_id');
    console.log(rigid);
//    var tm=req.param('to');

    var strQuery1 = " SELECT * FROM fyr_opn_tot WHERE rig_id='"+rigid+"' AND yr ='"+year+"' order by valve_id";
    var strQuery2 = " SELECT * FROM fyr_clos_tot WHERE rig_id='"+rigid+"' AND yr ='"+year+"' order by valve_id";
    var strQuery3 = " SELECT * FROM ffmnth_opn_tot WHERE rig_id='"+rigid+"' AND yr ='"+year+"' order by valve_id";
    var strQuery4 = " SELECT * FROM ffmnth_clos_tot WHERE rig_id='"+rigid+"' AND yr ='"+year+"' order by valve_id";
    var strQuery5 = " SELECT * FROM valve_master WHERE rig_id='"+rigid+"' order by valve_id";
    var year_f_log_open=[],year_f_log_close=[],mnth_f_log_open=[],mnth_f_log_close=[],no_of_valve=[];

    mysqlPool.getConnection(function(err, connection) {

        if(err) throw err;

        connection.query(strQuery1, function(err, rows) {
            if(err) {
                connection.release();
                console.error(err);
                return;
            }
            try
            {

                year_f_log_open=rows;
//                res.json({ message: rows });
                connection.release();
            }
            catch (err)
            {

                console.log('Error in Function Log Details page '+err);
//                res.json({ message: 404 });
                year_f_log_open=404;
                connection.release();
            }

        });



        connection.query(strQuery2, function(err, rows) {
            if(err) {
                connection.release();
                console.error(err);
                return;
            }
            try
            {
                year_f_log_close=rows;
//                res.json({ message2: rows });
                connection.release();
            }
            catch (err)
            {

                console.log('Error in Function Log Details page '+err);
                year_f_log_close=404;
                connection.release();
            }
            //  res.json({ message: year_f_log_open,message1:year_f_log_close });

        });

        connection.query(strQuery3, function(err, rows) {
            if(err) {
                connection.release();
                console.error(err);
                return;
            }
            try
            {
                mnth_f_log_open=rows;
//                res.json({ message2: rows });
                connection.release();
            }
            catch (err)
            {

                console.log('Error in Function Log Details page '+err);
                mnth_f_log_open=404;
                connection.release();
            }
            //     res.json({ message: year_f_log_open,message1:year_f_log_close });

        });

        connection.query(strQuery5, function(err, rows) {
            if(err) {
                connection.release();
                console.error(err);
                return;
            }
            try
            {
                no_of_valve=rows;
//                res.json({ message2: rows });
                connection.release();
            }
            catch (err)
            {

                console.log('Error in Function Log Details page '+err);
                no_of_valve=404;
                connection.release();
            }
            //     res.json({ message: year_f_log_open,message1:year_f_log_close });

        });
        connection.query(strQuery4, function(err, rows) {
            if(err) {
                connection.release();
                console.error(err);
                return;
            }
            try
            {
                mnth_f_log_close=rows;
//                res.json({ message2: rows });
                connection.release();
            }
            catch (err)
            {

                console.log('Error in Function Log Details page '+err);
                mnth_f_log_close=404;
                connection.release();
            }
            res.json({ message: year_f_log_open,message1:year_f_log_close,message3: mnth_f_log_open,message4:mnth_f_log_close,nov:no_of_valve  });

        });

    });

}