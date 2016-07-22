/**
 * Created by Administrator on 3/4/2015.
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

//Valve Configuration
exports.valv_confg=function(req,res){


    var rig_id=req.param('rig_id');
    var qrysql="SELECT * FROM valve_master where rig_id="+rig_id;
    mysqlPool.getConnection(function(err, connection) {
        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'error',
                err:    err.code
            });
        } else {
            connection.query(qrysql, function(err, rows, fields) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'error',
                        err: err.code
                    });
                }
                res.json({
                    result: 'All rows retrived successfully',
                    err:    '',
                    // fields: fields, //for this u get information about current table, db
                    json:   rows,
                    length: rows.length

                });
                connection.release();
            });
        }
    });
};


//Motor Configuration
exports.motor_confg=function(req,res){


    var rig_id=req.param('rig_id');
    var qrysql="SELECT * FROM motor_master where rig_id="+rig_id;
    mysqlPool.getConnection(function(err, connection) {
        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'error',
                err:    err.code
            });
        } else {
            connection.query(qrysql, function(err, rows, fields) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'error',
                        err: err.code
                    });
                }
                res.json({
                    result: 'All rows retrived successfully',
                    err:    '',
                    // fields: fields, //for this u get information about current table, db
                    json:   rows,
                    length: rows.length

                });
                connection.release();
            });
        }
    });
};

//Pump Configuration
exports.pump_confg=function(req,res){


    var rig_id=req.param('rig_id');
    var qrysql="SELECT * FROM pump_master where rig_id="+rig_id;
    mysqlPool.getConnection(function(err, connection) {
        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'error',
                err:    err.code
            });
        } else {
            connection.query(qrysql, function(err, rows, fields) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'error',
                        err: err.code
                    });
                }
                res.json({
                    result: 'All rows retrived successfully',
                    err:    '',
                    // fields: fields, //for this u get information about current table, db
                    json:   rows,
                    length: rows.length

                });
                connection.release();
            });
        }
    });
};