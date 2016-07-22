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



exports.ff_logs=function(req, res,next){

    

    var rigid=req.param('rig_id');
	var fm=req.param('frm_dt');
	var tm=req.param('to_dt');
    var strQuery1 = "SELECT * FROM valve_pos_fn_fail_det WHERE rig_id='"+rigid+"' AND date_time >='"+fm+"' AND date_time<= DATE_ADD('"+tm+"',INTERVAL 1 DAY)";
	
  
	
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

                res.json({ message: rows });
                connection.release();
            }
            catch (err)
            {

				console.log('Error in Historical Alarm Details page '+err);
				res.json({ message: 404 });
                connection.release();
            }

        });

    });	

}