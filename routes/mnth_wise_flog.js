/**
 * Created by Administrator on 11/7/2014.
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

//Here to read data for Monthwise Function  logs page
exports.mwise_flog_clm = function(req, res,next){
    var rigid=req.param('rig_id');
    var vid=req.param('vid');
    var year=req.param('year');
    var month=req.param('month');
    var cls_arry=[],opn_arry=[];
    var opnQuery = "call mth_wse_opn_flog("+rigid+","+vid+","+year+","+month+")";
    var clsQuery = "call mth_wse_cls_flog("+rigid+","+vid+","+year+","+month+")";

    mysqlPool.getConnection(function(err, connection) {

        if(err) throw err;

        connection.query(opnQuery, function(err, rows) {
            if(err) {
                connection.release();
                console.error(err);
                return;
            }
            try
            {
                opn_arry= rows;
//                res.send(rigid+","+chtid+","+valid);
                connection.release();
            }
            catch (err)
            {

                console.log('Error in Month wise Function logs page '+err);
                opn_arry= 404;
                connection.release();
            }

        });

        connection.query(clsQuery, function(err, rows) {
            if(err) {
                connection.release();
                console.error(err);
                return;
            }
            try
            {
                cls_arry= rows;
//                res.send(rigid+","+chtid+","+valid);
                connection.release();
            }
            catch (err)
            {

                console.log('Error in Month wise Function logs page '+err);
                cls_arry= 404;
                connection.release();
            }

            res.json({open:opn_arry,close:cls_arry});

        });

    });
};


//Here to read data for Monthwise Function  logs page
exports.mwise_flog_sct = function(req, res,next){
    var rigid=req.param('rig_id');
    var vid=req.param('vid');
    var year=req.param('year');
    var month=req.param('month');

    var sqlQuery = "call mnth_wise_flog_sct("+rigid+","+vid+","+year+","+month+")";


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
//                res.send(rigid+","+chtid+","+valid);
                connection.release();
            }
            catch (err)
            {

                console.log('Error in Month wise Function logs page '+err);
                res.json({message:404});
                connection.release();
            }



        });

    });
};


//Here to read data for Function logs Valve Drop down page
exports.flog_drop = function(req, res){

    var strQuery = "SELECT * FROM funt_log_master_view";

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

                console.log('Error in Flog Dropdown  page '+err);
                res.json({ message: 404 });
                connection.release();
            }
        });



    });
};
