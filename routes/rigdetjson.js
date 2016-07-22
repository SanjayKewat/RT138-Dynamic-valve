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



exports.rigdata=function(req, res,next){

    var arr=[];
	
    var rigid=req.param('rig_id');
    var strQuery1 = "SELECT * FROM rig_master where rig_id='"+rigid+"'";
	
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
            arr=rows;			
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


exports.bop_st_config=function(req, res,next){

    var arr=[];
	
    var rigid=req.param('rig_id');
	var bopstid=req.param('bop_stack_id');
    var strQuery2 = "SELECT * FROM bop_stack_config where rig_id='"+rigid+"' AND bop_stack_id='"+bopstid+"'";
	
    mysqlPool.getConnection(function(err, connection) {

        if(err) throw err;

        connection.query(strQuery2, function(err, rows) {
            if(err) {
                connection.release();
                console.error(err);               
                return;
            }
           try
            {
            arr=rows;			
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


exports.pmp_stng=function(req, res,next){

    
	var arr=[];

    var rigid=req.param('rig_id');
    var strQuery3 = "SELECT * FROM pump_setting where rig_id='"+rigid+"'";
  
	
	mysqlPool.getConnection(function(err, connection) {

        if(err) throw err;

        connection.query(strQuery3, function(err, rows) {
            if(err) {
                connection.release();
                console.error(err);               
                return;
            }
           try
            {
            arr=rows;			
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


exports.base_stng=function(req, res,next){

    
	var arr=[];

    var rigid=req.param('rig_id');
    var strQuery4 = "SELECT * FROM baseline_setting where rig_id='"+rigid+"'";
  
	
	mysqlPool.getConnection(function(err, connection) {

        if(err) throw err;

        connection.query(strQuery4, function(err, rows) {
            if(err) {
                connection.release();
                console.error(err);               
                return;
            }
           try
            {
            arr=rows;			
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






