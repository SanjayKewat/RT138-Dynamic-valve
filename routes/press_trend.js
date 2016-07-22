/**
 * Created by Administrator on 11/5/2014.
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


//Here to read data for Pressure trend(Bop control) page
exports.bop_cntrl = function(req, res,next){
    var rigid=req.param('rig_id');
    var from=req.param('from');
    var to=req.param('to');
    var strQuery = "SELECT  * FROM ptrend where press_id in(1,2,3,5) and rig_id='"+rigid+"' and date_time between '"+from+"' and adddate('"+to+"',1)";

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

//        console.log("details RID"+rigid+" F "+from+" T"+to);

    });
};



//Here to read data for Pressure trend(Choke control) page
exports.csng_cntrl = function(req, res,next){
    var rigid=req.param('rig_id');
    var from=req.param('from');
    var to=req.param('to');
    var strQuery = "SELECT  * FROM ptrend where press_id in(4,6) and rig_id='"+rigid+"' and date_time between '"+from+"' and adddate('"+to+"',1)";

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

