/**
 * Created by Administrator on 5/9/2014.
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

//Here to read data for Response time table page
exports.getdata = function(req, res,next){
    var rigid=req.param('rig_id');

    var strQuery ="SELECT * FROM response_time_data_view where rig_id='"+rigid+"'";

    mysqlPool.getConnection(function(err, connection) {

        if(err) throw err;

        connection.query(strQuery, function(err, rows) {
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

                console.log('Error in  Response time table page : '+err);
                res.json({ message: rows });
                connection.release();
            }
        });

    });
};



//Here to read data for Response time chart before & after 5 seconds
exports.rspchart = function(req, res,next){
    var rigid=req.param('rig_id');
      var valid=req.param('val_id');
    var strQuery = "SELECT * FROM response_time_chart where rig_id='"+rigid+"' and valve_id='"+valid+"'";

    mysqlPool.getConnection(function(err, connection) {

        if(err) throw err;

        connection.query(strQuery, function(err, rows) {
            if(err) {
                connection.release();
                console.error(err);
                return;
            }
            try
            {
                res.json({ message: rows });
//                res.send(rigid+","+chtid+","+valid);
                connection.release();
            }
            catch (err)
            {

                console.log('Error in Rig Details page '+err);
                res.json({ message: rows });
                connection.release();
            }
        });

    });
};


//Here to read data for Response time chart Historical
exports.his_rsp = function(req, res,next){
    var rigid=req.param('rig_id');
    var month=req.param('month');
    var year=req.param('year');
    var strQuery = "SELECT * FROM valve_data_hist where rig_id='"+rigid+"' and month(date_time)="+month+" and year(date_time)="+year;

    mysqlPool.getConnection(function(err, connection) {

        if(err) throw err;

        connection.query(strQuery, function(err, rows) {
            if(err) {
                connection.release();
                console.error(err);
                return;
            }
            try
            {
                res.json({ message: rows });
//                res.send(rigid+","+chtid+","+valid);
                connection.release();
            }
            catch (err)
            {

                console.log('Error in Response Time page '+err);
                res.json({ message: 404 });
                connection.release();
            }
        });

    });
};


