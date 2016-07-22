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

exports.user_auth=function(req, res,next){
//    handleDisconnect();
    var usrdata=[];

    var usr_name=req.param('uname');
    var strQuery = "SELECT * FROM userdetails where User_name='"+usr_name+"'";


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
                usrdata=rows;
//            console.log(rows[0].User_name);
                req.session.name=rows[0].User_name;
                sess_uname=rows[0].User_name;
                res.json({'usr_dts':usrdata});
                connection.release();
            }
            catch (err)
            {
                res.json({'usr_dts':500});
                connection.release();
            }
        });

    });

}

exports.new_user=function(req, res,next){

//    handleDisconnect();

    var name=req.param('name');
    var usr_name=req.param('uname');
    var pwd=req.param('pwd');
    var email=req.param('email');
    var ph_no=req.param('ph_no');
    var add=req.param('add');

    var strQuery = "insert into userdetails(Name,User_name,Password,Email_Address,Phone_no,Address)values('"+name+"','"+usr_name+"','"+pwd+"','"+email+"','"+ph_no+"','"+add+"')";


    mysqlPool.getConnection(function(err, connection) {
        if(err) throw err;
        connection.query(strQuery, function(err, rows) {
            if(err) {
                connection.release();
                console.error(err);
                res.json({error:err,status:500});
                return;
            }
            try
            {
                res.json({succ:rows,status:200});
                connection.release();
            }
            catch (err)
            {
                res.json({'usr_dts':500});
                connection.release();
            }
        });
    });


}

//connection.destroy();// here closed the connection





