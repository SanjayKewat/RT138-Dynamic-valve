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



exports.misyrdata=function(req, res,next){



    var year=req.param('year');
    var rigid=req.param('rig_id');

//    var tm=req.param('to');

    var strQuery1 = " SELECT * FROM yr_miss WHERE rig_id='"+rigid+"' AND yr ='"+year+"' order by loss_id";
    var strQuery2 = " SELECT * FROM mnth_miss WHERE rig_id='"+rigid+"' AND yr ='"+year+"' order by loss_id";

    var yr_miss=[],mnth_miss=[];

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

                yr_miss=rows;
//                res.json({ message: rows });
                connection.release();
            }
            catch (err)
            {

                console.log('Error in Function Log Details page '+err);
//                res.json({ message: 404 });
                yr_miss=404;
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
                mnth_miss=rows;
//                res.json({ message2: rows });
                connection.release();
            }
            catch (err)
            {

                console.log('Error in Function Log Details page '+err);
                mnth_miss=404;
                connection.release();
            }
            res.json({ message:yr_miss,message1:mnth_miss });

        });

    });

}




//Here to read data for Monthwise Function  logs page
exports.miss_log_clm = function(req, res,next){
    var rigid=req.param('rig_id');
    var lsid=req.param('ls_id');
    var year=req.param('year');
    var month=req.param('month');
    var sqlQuery = "call miss_log_clm("+rigid+","+lsid+","+year+","+month+")";

    mysqlPool.getConnection(function(err, connection) {

        if(err) throw err;


        connection.query(sqlQuery, function(err, rows) {
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

                console.log('Error in Month wise MISCELLANEOUS logs page '+err);
                res.json({ message: 404 });
                connection.release();
            }



        });

    });
};


//Here to read data for Monthwise MISCELLANEOUS  logs page
exports.miss_log_sct = function(req, res,next){
    var rigid=req.param('rig_id');
    var lsid=req.param('ls_id');
    var year=req.param('year');
    var month=req.param('month');
    var sqlQuery = "call miss_log_sct("+rigid+","+lsid+","+year+","+month+")";


    mysqlPool.getConnection(function(err, connection) {

        if(err) throw err;

        connection.query(sqlQuery, function(err, rows) {
            if(err) {
                connection.release();
                console.error(err);
                return;
            }
            try
            {
                res.json({message:rows});
                connection.release();
            }
            catch (err)
            {

                console.log('Error in Month wise MISCELLANEOUS logs page '+err);
                res.json({message:404});
                connection.release();
            }



        });

    });
};


//Here to read data for MISCELLANEOUS logs Valve Drop down page
exports.loss_drop = function(req, res){

    var strQuery = "SELECT * FROM loss_master_view";

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

                console.log('Error in MISCELLANEOUS Dropdown  page '+err);
                res.json({ message: 404 });
                connection.release();
            }
        });



    });
};