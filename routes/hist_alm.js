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



exports.alrm_hist=function(req, res,next){

    

    var rigid=req.param('rig_id');
	var fm=req.param('from');
	var tm=req.param('to');
    var strQuery1 = "SELECT * FROM alarm_table_hist WHERE rig_id='"+rigid+"' AND alarm_day >='"+fm+"' AND alarm_clear<= DATE_ADD('"+tm+"',INTERVAL 1 DAY)";
	
  
	
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