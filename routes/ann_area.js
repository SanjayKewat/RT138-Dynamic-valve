/**
 * Created by Administrator on 4/25/2014.
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


//,mani='',ann='',shr='',rigar='';



//Here to read data for Accumulator Pressure start & his gauge_id is 2
exports.acc = function(req, res,next){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var acc_arr='';
    var rig_id=req.param('rig_id');
    var strQuery = "SELECT * FROM gauge_master where gauge_id=2 and rig_id='"+rig_id+"'";


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

                acc_arr=rows[0].gauge_value;
                connection.release();
            }
            catch (err)
            {
                console.log("Guage page error :"+err);
                connection.release();
            }
            res.send('&label='+h+':'+m+':'+s+'&value='+acc_arr+'&Update=1');
        });

    });

};

//Here to read data for Manifold Pressure start & his gauge_id is 3
exports.mani = function(req, res){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var mani_arr='';
    var rig_id=req.param('rig_id');
    var strQuery = "SELECT * FROM gauge_master where gauge_id=3 and rig_id='"+rig_id+"'";


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

                mani_arr=rows[0].gauge_value;
                connection.release();
            }
            catch (err)
            {
                console.log("Guage page error :"+err);
                connection.release();
            }
            res.send('&label='+h+':'+m+':'+s+'&value='+mani_arr+'&Update=1');
        });

    });
};

//Here to read data for Annular Pressure start & his gauge_id is 1
exports.ann = function(req, res){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ann_arr='';
    var rig_id=req.param('rig_id');
    var strQuery = "SELECT * FROM gauge_master where gauge_id=1 and rig_id='"+rig_id+"'";


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

                ann_arr=rows[0].gauge_value;
                connection.release();
            }
            catch (err)
            {
                console.log("Guage page error :"+err);
                connection.release();
            }
            res.send('&label='+h+':'+m+':'+s+'&value='+ann_arr+'&Update=1');
        });

    });

//    console.log('Rig ID '+rig_id);
};


//Here to read data for Shear Boost Pressure start & his gauge_id is 4
exports.shear = function(req, res){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var shear_arr='';
    var rig_id=req.param('rig_id');
    var strQuery = "SELECT * FROM gauge_master where gauge_id=4 and rig_id='"+rig_id+"'";


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

                shear_arr=rows[0].gauge_value;
                connection.release();
            }
            catch (err)
            {
                console.log("Guage page error :"+err);
                connection.release();
            }
            res.send('&label='+h+':'+m+':'+s+'&value='+shear_arr+'&Update=1');
        });

    });
};


//Here to read data for Rig Air Pressure start & his gauge_id is 5
exports.rig = function(req, res){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var rig_arr='';
    var rig_id=req.param('rig_id');
    var strQuery = "SELECT * FROM gauge_master where gauge_id=5 and rig_id='"+rig_id+"'";


    mysqlPool.getConnection(function(err, connection) {

        if(err) throw err;

        connection.query(strQuery, function(err, rows) {
            if(err) {
                connection.release();
                console.error(err);
                res.json({'usr_dts':500});
                return;
            }
            try
            {

                rig_arr=rows[0].gauge_value;
                connection.release();
            }
            catch (err)
            {
                console.log("Guage page error :"+err);
                connection.release();
            }
            res.send('&label='+h+':'+m+':'+s+'&value='+rig_arr+'&Update=1');
        });

    });
};


//Here to read data for All Pressure start
exports.all = function(req, res){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
var acc='',man='',ann='',air='',shr='';
    var rig_id=req.param('rig_id');
   /* var annQuery =  "SELECT * FROM gauge_master where gauge_id=1 and rig_id='"+rig_id+"'";//Annular
    var accQuery =  "SELECT * FROM gauge_master where gauge_id=2 and rig_id='"+rig_id+"'";//Accumulator
    var maniQuery =  "SELECT * FROM gauge_master where gauge_id=3 and rig_id='"+rig_id+"'";//Manifold
    var shrQuery =  "SELECT * FROM gauge_master where gauge_id=4 and rig_id='"+rig_id+"'";//Shear Boost
    var rairQuery =  "SELECT * FROM gauge_master where gauge_id=5 and rig_id='"+rig_id+"'";//Rig Air

    mysqlPool.getConnection(function(err, connection) {

        if(err) throw err;

        connection.query(annQuery, function(err, rows) {
            if(err) {
                connection.release();
                console.error(err);
                res.json({'usr_dts':500});
                return;
            }
            try
            {

                ann=rows[0].gauge_value;
                connection.release();
            }
            catch (err)
            {
                console.log("Guage page error :"+err);
                connection.release();
            }

        });

    });


    mysqlPool.getConnection(function(err, connection) {

        if(err) throw err;

        connection.query(accQuery, function(err, rows) {
            if(err) {
                connection.release();
                console.error(err);
                res.json({'usr_dts':500});
                return;
            }
            try
            {

                acc=rows[0].gauge_value;
                connection.release();
            }
            catch (err)
            {
                console.log("Guage page error :"+err);
                connection.release();
            }

        });

    });

    mysqlPool.getConnection(function(err, connection) {

        if(err) throw err;

        connection.query(maniQuery, function(err, rows) {
            if(err) {
                connection.release();
                console.error(err);
                res.json({'usr_dts':500});
                return;
            }
            try
            {

                man=rows[0].gauge_value;
                connection.release();
            }
            catch (err)
            {
                console.log("Guage page error :"+err);
                connection.release();
            }

        });

    });

    mysqlPool.getConnection(function(err, connection) {

        if(err) throw err;

        connection.query(shrQuery, function(err, rows) {
            if(err) {
                connection.release();
                console.error(err);
                res.json({'usr_dts':500});
                return;
            }
            try
            {

                man=rows[0].gauge_value;
                connection.release();
            }
            catch (err)
            {
                console.log("Guage page error :"+err);
                connection.release();
            }

        });

    });

    mysqlPool.getConnection(function(err, connection) {

        if(err) throw err;

        connection.query(rairQuery, function(err, rows) {
            if(err) {
                connection.release();
                console.error(err);
                return;
            }
            try
            {


                air=rows[0].gauge_value;
                connection.release();
            }
            catch (err)
            {
                console.log("Guage page error :"+err);
                connection.release();
            }
            res.send('&label='+h+':'+m+':'+s+'&value='+ann+'|'+acc+'|'+man+'|'+air+'|'+shr+'&Update=1');
        });

    });*/

    var strQuery = "SELECT * FROM gauge_master where rig_id='"+rig_id+"'";
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

                if(rows[0].gauge_id==1) //Annular
                {
                    ann=rows[0].gauge_value;
                }
                if(rows[1].gauge_id==2) //Accumulator
                {
                    acc=rows[1].gauge_value;
                }
                if(rows[2].gauge_id==3) //Manifold
                {
                    man=rows[2].gauge_value;
                }
                if(rows[3].gauge_id==4) //Shear Boost
                {
                    shr=rows[3].gauge_value;
                }
                if(rows[4].gauge_id==5) //Rig Air
                {
                    air=rows[4].gauge_value;
                }

                connection.release();
            }
            catch (err)
            {
                console.log("Guage page error :"+err);
                connection.release();
            }
            res.send('&label='+h+':'+m+':'+s+'&value='+ann+'|'+acc+'|'+man+'|'+air+'|'+shr+'&Update=1');
        });
    });

};

//Here to read data for Responsetime
exports.rsptmdt = function(req, res){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var acc='',man='';
    var rig_id=req.param('rig_id');
    var strQuery = "SELECT * FROM choke_real where rig_id='"+rig_id+"'";


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

                acc=rows[0].acc_pres_in;
                man=rows[0].man_pres_in;
                connection.release();
            }
            catch (err)
            {
                console.log("Responsetime page error :"+err);
                connection.release();
            }
            res.send('&label='+h+':'+m+':'+s+'&value='+man+'|'+acc+'&Update=1&msgTitle=Pressure&msgText=Accumulator Pressure : '+acc+' Manifold Pressure : '+parseInt(man));
        });

    });
};

//Here to read data for CHOKE MANIFOLD page
exports.casing = function(req, res){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var drll='',cas='';
    var rig_id=req.param('rig_id');
    var strQuery = "SELECT * FROM choke_real where rig_id='"+rig_id+"'";


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

                drll=rows[0].drill_pipe_pressure;
                cas=rows[0].casing_pressure;
                connection.release();
            }
            catch (err)
            {
                console.log("CHOKE MANIFOLD page error :"+err);
                connection.release();
            }
            res.send('&label='+h+':'+m+':'+s+'&value='+drll+'|'+cas+'&Update=1');
        });

    });
};