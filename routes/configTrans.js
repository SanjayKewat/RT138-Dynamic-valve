var mysql = require('mysql');
var db_confg=require('db_confg');

var mysqlPool  = mysql.createPool({
    host: db_confg.DB.host,
    user: db_confg.DB.user,
    password: db_confg.DB.password,
    database: db_confg.DB.database,
    port: db_confg.DB.port

});
//add gauge
exports.addGauge=function(req, res){



    var   rigid= req.body.rigid;

    var   rigname= req.body.rigname;
    var   gaugename= req.body.gaugename;
//    console.log(rigid);
//    var strQuery1 = "DELETE FROM gauge_master where rig_id='"+rigid+"' and gauge_id='"+gaugeid+"'";

    mysqlPool.getConnection(function(err, connection) {

        if(err) throw err;

        connection.query("SELECT max(gauge_id) as gaugeid FROM gauge_master where rig_id='"+rigid+"'", function(error,rows) {
            if(error){

                console.log(error.message);
            }else {
                var gaugeid=1;

                if(rows.length>0)
                {
                    gaugeid=rows[0].gaugeid+1;
                }

                connection.query("insert into gauge_master(rig_id,rig_name,gauge_id,gauge_name)values('"+rigid+"','"+rigname+"','"+gaugeid+"','"+gaugename+"')", function(error,rows) {
                    if (error) {

                        console.log(error.message);
                    } else {
                        res.send("success");
                        connection.release();
                    }
                });
//            window.location.reload();
            }
        });

    });

}
//add valve
exports.addValve=function(req, res){



    var   rigid= req.body.rigid;

    var   rigname= req.body.rigname;
    var   valvename= req.body.valvename;
//    console.log(rigid);
//    var strQuery1 = "DELETE FROM gauge_master where rig_id='"+rigid+"' and gauge_id='"+gaugeid+"'";

    mysqlPool.getConnection(function(err, connection) {

        if(err) throw err;

        connection.query("SELECT max(valve_id) as valveid FROM valve_master where rig_id='"+rigid+"'", function(error,rows) {
            if(error){

                console.log(error.message);
            }else {
                var valveid=1;

                if(rows.length>0)
                {
                    valveid=rows[0].valveid+1;
                }

                connection.query("insert into valve_master(rig_id,rig_name,valve_id,valve_name)values('"+rigid+"','"+rigname+"','"+valveid+"','"+valvename+"')", function(error,rows) {
                    if (error) {

                        console.log(error.message);
                    } else {
                        res.send("success");
                        connection.release();
                    }
                });
//            window.location.reload();
            }
        });

    });

}
//add pump
exports.addPump=function(req, res){



    var   rigid= req.body.rigid;

    var   rigname= req.body.rigname;
    var   pumpname= req.body.pumpname;
//    console.log(rigid);
//    var strQuery1 = "DELETE FROM gauge_master where rig_id='"+rigid+"' and gauge_id='"+gaugeid+"'";

    mysqlPool.getConnection(function(err, connection) {

        if(err) throw err;

        connection.query("SELECT max(pump_id) as pump_id FROM pump_master where rig_id='"+rigid+"'", function(error,rows) {
            if(error){

                console.log(error.message);
            }else {
                var pump_id=1;

                if(rows.length>0)
                {
                    pump_id=rows[0].pump_id+1;
                }

                connection.query("insert into pump_master(rig_id,rig_name,pump_id,pump_name)values('"+rigid+"','"+rigname+"','"+pump_id+"','"+pumpname+"')", function(error,rows) {
                    if (error) {

                        console.log(error.message);
                    } else {
                        res.send("success");
                        connection.release();
                    }
                });
//            window.location.reload();
            }
        });

    });

}
// add motor
exports.addMotor=function(req, res){



    var   rigid= req.body.rigid;

    var   rigname= req.body.rigname;
    var   motorname= req.body.motorname;
//    console.log(rigid);
//    var strQuery1 = "DELETE FROM gauge_master where rig_id='"+rigid+"' and gauge_id='"+gaugeid+"'";

    mysqlPool.getConnection(function(err, connection) {

        if(err) throw err;

        connection.query("SELECT max(motor_id) as motorid FROM motor_master where rig_id='"+rigid+"'", function(error,rows) {
            if(error){

                console.log(error.message);
            }else {
                var motorid=1;

                if(rows.length>0)
                {
                    motorid=rows[0].motorid+1;
                }

                connection.query("insert into motor_master(rig_id,rig_name,motor_id,motor_name)values('"+rigid+"','"+rigname+"','"+motorid+"','"+motorname+"')", function(error,rows) {
                    if (error) {

                        console.log(error.message);
                    } else {
                        res.send("success");
                        connection.release();
                    }
                });
//            window.location.reload();
            }
        });

    });

}
//Delete Gauge
exports.delGauge=function(req, res){



    var rigid=req.param('rigid');
    var gaugeid=req.param('gaugeid');
    var strQuery1 = "DELETE FROM gauge_master where rig_id='"+rigid+"' and gauge_id='"+gaugeid+"'";

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
                arr='404';
                console.log('Error in Rig Details page '+err);
                res.json({ message: rows });
                connection.release();
            }
        });

    });

}
//Delete Valve
exports.delValve=function(req, res){



    var rigid=req.param('rigid');
    var valveid=req.param('valveid');
    var strQuery1 = "DELETE FROM valve_master where rig_id='"+rigid+"' and valve_id='"+valveid+"'";

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
                arr='404';
                console.log('Error in Rig Details page '+err);
                res.json({ message: rows });
                connection.release();
            }
        });

    });

}
//Delete Pump
exports.delPump=function(req, res){



    var rigid=req.param('rigid');
    var pumpid=req.param('pumpid');
    var strQuery1 = "DELETE FROM pump_master where rig_id='"+rigid+"' and pump_id='"+pumpid+"'";

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
                arr='404';
                console.log('Error in Rig Details page '+err);
                res.json({ message: rows });
                connection.release();
            }
        });

    });

}
//Delete Motor
exports.delMotor=function(req, res){



    var rigid=req.param('rigid');
    var motorid=req.param('motorid');
    var strQuery1 = "DELETE FROM motor_master where rig_id='"+rigid+"' and motor_id='"+motorid+"'";

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
                arr='404';
                console.log('Error in Rig Details page '+err);
                res.json({ message: rows });
                connection.release();
            }
        });

    });

}
// fill drop down rig details in config page
exports.retrigname=function(req, res){

    var strQuery1 = "SELECT rig_id,rig_name FROM rig_master order by rig_id";

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
                res.send(rows);
//                arr=rows;
//                res.json({ message: rows });
                connection.release();
            }
            catch (err)
            {
                arr='404';
                console.log('Error in Rig Details page '+err);
                res.json({ message: rows });
                connection.release();
            }
        });

    });

}

// fill gauge details in config page
exports.retgauge=function(req, res){
    var rigid=req.param('rigid');

    var strQuery1 = "SELECT * FROM gauge_master where rig_id='"+rigid+"'";

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
                res.send(rows);
//                arr=rows;
//                res.json({ message: rows });
                connection.release();
            }
            catch (err)
            {
                arr='404';
                console.log('Error in Rig Details page '+err);
                res.json({ message: rows });
                connection.release();
            }
        });

    });

}

// fill valve detail in config page

exports.retvalve=function(req, res){
    var rigid=req.param('rigid');

    var strQuery1 = "SELECT * FROM valve_master where rig_id='"+rigid+"'";

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
                res.send(rows);
//                arr=rows;
//                res.json({ message: rows });
                connection.release();
            }
            catch (err)
            {
                arr='404';
                console.log('Error in Rig Details page '+err);
                res.json({ message: rows });
                connection.release();
            }
        });

    });

}


//fill pump detail in config page
exports.retpump=function(req, res){
    var rigid=req.param('rigid');

    var strQuery1 = "SELECT * FROM pump_master where rig_id='"+rigid+"'";

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
                res.send(rows);
//                arr=rows;
//                res.json({ message: rows });
                connection.release();
            }
            catch (err)
            {
                arr='404';
                console.log('Error in Rig Details page '+err);
                res.json({ message: rows });
                connection.release();
            }
        });

    });

}

//fill motor detail in config page retMotor
exports.retMotor=function(req, res){
    var rigid=req.param('rigid');

    var strQuery1 = "SELECT * FROM motor_master where rig_id='"+rigid+"'";

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
                res.send(rows);
//                arr=rows;
//                res.json({ message: rows });
                connection.release();
            }
            catch (err)
            {
                arr='404';
                console.log('Error in Rig Details page '+err);
                res.json({ message: rows });
                connection.release();
            }
        });

    });

}