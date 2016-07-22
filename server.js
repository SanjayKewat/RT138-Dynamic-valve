
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


var usr=require('./routes/usr_authen'); //user authenticate file
var db_confg=require('db_confg');       //DB config module
var ann_area=require('./routes/ann_area'); // Reading pressure data
var rdet=require('./routes/rigdetjson');	//For Rig Details
var rspvalve=require('./routes/rspnstmelog'); //For Response time page
var ptrend=require('./routes/press_trend');//For Pressure Trend page
var hisdata=require('./routes/hist_alm');//For Historical Alarm page
var mwlog=require('./routes/mnth_wise_flog');//For Monthwise log page
var mwfflog=require('./routes/mnth_wise_fflog');//For Monthwise log page
var flogs=require('./routes/flogs');//For Historical Alarm page
var fflogs=require('./routes/fflogs');//For Historical Alarm page
var fflog=require('./routes/funlogjson');	//FUNCTION/FUNCTION FAIL LOGS
var myr=require('./routes/mislogsjson'); //miscellaneous alarm logs*/
var palarm=require('./routes/pmpalrmjson'); // pump alarm
var shut_log=require('./routes/pmpalrmjson'); // shutdown log
var shut_log_charts=require('./routes/pmpalrmjson'); // shutdown log pie charts
var pmp_run_tm=require('./routes/pmpalrmjson'); // pump run time (shutdown logs)
var bop_confg=require('./routes/bop_confg'); // Configure BOP valve
var configT=require('./routes/configTrans'); //sit configuration file.

var fs = require('fs'),
    mysql = require('mysql'),
    connectionsArray = [],
    POLLING_INTERVAL = 1000,
    pollingTimer;
function handleDisconnect() {

    connection = mysql.createConnection({
        host: db_confg.DB.host,
        user: db_confg.DB.user,
        password: db_confg.DB.password,
        database: db_confg.DB.database,
        port: db_confg.DB.port
    }),



// If there is an error connecting to the database
        connection.connect(function(err) {
            // connected! (unless `err` is set)
            if(err) {                                     // or restarting (takes a while sometimes).
                console.log('error when connecting to db:', err);
                setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
            }
        });

    connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
            throw err;                                  // server variable configures this)
        }
    });
};

handleDisconnect();

/*
 setHeaders = function (req,res,next) {
 res.header("X-Powered-By","nodejs");
 // if ajax set access control

 if (req.xhr) { res.header("Access-Control-Allow-Origin",req.header('origin')); res.header("Access-Control-Allow-Headers", "X-Requested-With"); } next();
 };
 */

//app.use(setHeaders);
app.set('port', process.env.PORT || 1000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');  // here is code to spesify the jade page directory
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Assign session
app.use(express.cookieParser());
app.use(express.session({secret: 'aasdasdsa1asd32'}));

// end session

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/views');         // here is code to spesify the html page directory
app.engine('html', require('ejs').renderFile);  //render html using ejs module



// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

/*app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
 });*/



/*
 *
 * HERE IT IS THE COOL PART
 * This function loops on itself since there are sockets connected to the page
 * sending the result of the database query after a constant interval
 *
 */

var pollingLoop = function() {

    // Doing the database query

    var query = connection.query('SELECT * FROM alarm_table'),//reading value for current alarm.
        users = []; // array to store alarm data

    // setting the query listeners
    query
        .on('error', function (err) {
            // Handle error, and 'end' event will be emitted after this as well
            console.log('Error while reading Today Alarms table data : '+err);
            updateSockets(err);
        })
        .on('result', function (user) {
            // it fills our array looping on each user row inside the db
            users.push(user);
        })
        .on('end', function () {
            // loop on itself only if there are sockets still connected
            if (connectionsArray.length) {
                pollingTimer = setTimeout(pollingLoop, POLLING_INTERVAL);

                updateSockets({
                    users: users
                });
            }
        });






};

var current_poll=function(){

    var valve_query = connection.query('SELECT * FROM valve_master'),//reading value for current data.
        gauge_query = connection.query('SELECT * FROM gauge_master'),
        motor_query = connection.query('SELECT * FROM motor_master'),
        valve_data= [],gauge_data= [],motor_data= []; // array to store alarm data

    // Query retrieving valve Data listeners
    valve_query
        .on('error', function (err) {
            // Handle error, and 'end' event will be emitted after this as well
            console.log('Error while reading Current table data : '+err);
            current_sockets(err);
        })
        .on('result', function (c_data) {
            // it fills our array looping on each user row inside the db
            valve_data.push(c_data);
        })
        .on('end', function () {
            // loop on itself only if there are sockets still connected
            /*   if (connectionsArray.length) {
             pollingTimer = setTimeout(current_poll, POLLING_INTERVAL);

             current_sockets({
             curr_data: current_data
             });
             }*/
        });
    // Query retrieving Gauge Data listeners
    gauge_query
        .on('error', function (err) {
            // Handle error, and 'end' event will be emitted after this as well
            console.log('Error while reading Current table data : '+err);
            current_sockets(err);
        })
        .on('result', function (c_data) {
            // it fills our array looping on each user row inside the db
            gauge_data.push(c_data);
        })
        .on('end', function () {
            // loop on itself only if there are sockets still connected
            /*  if (connectionsArray.length) {
             pollingTimer = setTimeout(current_poll, POLLING_INTERVAL);

             current_sockets({
             curr_data: current_data
             });
             }*/
        });
    // Query retrieving Motor Data listeners
    motor_query
        .on('error', function (err) {
            // Handle error, and 'end' event will be emitted after this as well
            console.log('Error while reading Current table data : '+err);
            current_sockets(err);
        })
        .on('result', function (c_data) {
            // it fills our array looping on each user row inside the db
            motor_data.push(c_data);
        })
        .on('end', function () {
            // loop on itself only if there are sockets still connected
            if (connectionsArray.length) {
                pollingTimer = setTimeout(current_poll, POLLING_INTERVAL);

                current_sockets({
                    Valve_Data: valve_data,Gauge_Data:gauge_data,Motor_Data:motor_data
                });
            }
        });
};

var map_poll=function(){

    var map_query = connection.query('SELECT * FROM rig_master'),//reading value for Map data.
        map_data = []; // array to store alarm data

    // setting the query listeners
    map_query
        .on('error', function (err) {
            // Handle error, and 'end' event will be emitted after this as well
            console.log('Error while reading Map data : '+err);
            map_sockets(err);
        })
        .on('result', function (m_data) {
            // it fills our array looping on each user row inside the db
            map_data.push(m_data);
        })
        .on('end', function () {
            // loop on itself only if there are sockets still connected
            if (connectionsArray.length) {
                pollingTimer = setTimeout(map_poll, POLLING_INTERVAL);

                map_sockets({
                    map_data: map_data
                });
            }
        });

};


var choke_real=function(){

    var chk_query = connection.query('SELECT * FROM choke_real'),//reading value for Choke data.

        chk_data = []; // array to store alarm data


    // setting the query listeners
    chk_query
        .on('error', function (err) {
            // Handle error, and 'end' event will be emitted after this as well
            console.log('Error while reading Choke data : '+err);
            choke_sockets(err);
        })
        .on('result', function (m_data) {
            // it fills our array looping on each user row inside the db
            chk_data.push(m_data);
        })
        .on('end', function () {
            // loop on itself only if there are sockets still connected
            if (connectionsArray.length) {
                pollingTimer = setTimeout(choke_real, POLLING_INTERVAL);


                choke_sockets({
                    choke_data: chk_data
                });
            }
        });
};


var pump_real=function(){

    var pmp_query = connection.query('SELECT * FROM pump_master'),//reading value for Choke data.
        pmp_data = []; // array to store alarm data

    // setting the query listeners
    pmp_query
        .on('error', function (err) {
            // Handle error, and 'end' event will be emitted after this as well
            console.log('Error while reading Choke data : '+err);
            pump_sockets(err);
        })
        .on('result', function (m_data) {
            // it fills our array looping on each user row inside the db
            pmp_data.push(m_data);
        })
        .on('end', function () {
            // loop on itself only if there are sockets still connected
             if (connectionsArray.length) {
             pollingTimer = setTimeout(pump_real, POLLING_INTERVAL);


                 pump_sockets({
                     pump_data:pmp_data
                 });
             }
        });


};

// creating a new websocket to keep the content updated without any AJAX request
io.sockets.on('connection', function(socket) {

    console.log('Number of connections:' + connectionsArray.length);
    // starting the loop only if at least there is one user connected
    if (!connectionsArray.length) {
        pollingLoop();
        current_poll();
        map_poll();
        choke_real();
        pump_real();
    }


    socket.on('disconnect', function() {
        var socketIndex = connectionsArray.indexOf(socket);
        console.log('socket = ' + socketIndex + ' disconnected');
        if (socketIndex >= 0) {
            connectionsArray.splice(socketIndex, 1);
        }
    });

    url = "ws://169.254.96.208:1000";
    try {
        socket = window['MozWebSocket'] ? new MozWebSocket(url) : new WebSocket(url);
        socket.onopen = function(){
            console.log('Socket is now open.');
        };
        socket.onerror = function (error) {
            console.error('There was an un-identified Web Socket error');
        };
        socket.onmessage = function (message) {
            console.info("Message: %o", message.data);
        };
        socket.onclose = function() {
            console.info( 'Socket is now closed.' );
        }
    } catch (e) {
        console.error('Sorry, the web socket at "%s" is un-available', url);
    }

    setTimeout(function(){
        socket.send("Hello World");
    }, 1000);

    console.log('A new socket is connected!');
    connectionsArray.push(socket);

});

var updateSockets = function(data) {
    // adding the time of the last update
    data.time = new Date();
    // sending new data to all the sockets connected
    connectionsArray.forEach(function(tmpSocket) {
        tmpSocket.volatile.emit('notification', data);
    });
};

//sending valve & gauge data
var current_sockets = function(data) {
    // adding the time of the last update
//    data.time = new Date();
    // sending new data to all the sockets connected
    connectionsArray.forEach(function(tmpSocket) {
        tmpSocket.volatile.emit('current_data', data);
    });
};

//sending Choke realtime & other (response time) data
var choke_sockets = function(data) {
    connectionsArray.forEach(function(tmpSocket) {
        tmpSocket.volatile.emit('choke_data', data);
    });
};

//sending Choke realtime & other (response time) data
var pump_sockets = function(data) {
    connectionsArray.forEach(function(tmpSocket) {
        tmpSocket.volatile.emit('pump_data', data);
    });
};

//sending map data
var map_sockets = function(data) {
    // adding the time of the last update
    data.time = new Date();
    // sending new data to all the sockets connected
    connectionsArray.forEach(function(tmpSocket) {
        tmpSocket.volatile.emit('map_data', data);
    });
};



//====>>> Data fetching Function start here ==========>>

////====>> Fetching data for Fusion chart start =======>>

app.get('/accarea/:rig_id', ann_area.acc);   //fetch  realtime data for Area Accumulator pressure
app.get('/maniarea/:rig_id',ann_area.mani);  //fetch  realtime data for Area Manifold pressure
app.get('/annarea/:rig_id', ann_area.ann);   //fetch  realtime data for Area Annular pressure
app.get('/bsarea/:rig_id',ann_area.shear);    //fetch  realtime data for Area Shear BOOST pressure
app.get('/rgair/:rig_id',ann_area.rig);        //fetch  realtime data for Area Rig Air pressure
app.get('/dpress/:rig_id',ann_area.all);   //fetch realtime data for Ann,Manifold,Rig Air & Acc pressure
app.get('/press/:rig_id',ann_area.casing);  //fetch realtime data for Drill pipe & casing pressure
app.get('/rsppress/:rig_id',ann_area.rsptmdt);  //fetch realtime data for Responsetime Manifold pipe & Annular pressure
app.post('/ADDGAUGE',configT.addGauge); // insert gauge
app.post('/ADDVALVE',configT.addValve); // insert valve
app.post('/ADDPUMP',configT.addPump); // insert pump
app.post('/ADDMOTOR',configT.addMotor); // insert motor
app.get('/delValve/:rigid/:valveid',configT.delValve);//For del valve
app.get('/delGauge/:rigid/:gaugeid',configT.delGauge);//For del Gauge
app.get('/delPump/:rigid/:pumpid',configT.delPump);//For del Pump
app.get('/delMotor/:rigid/:motorid',configT.delMotor);//For del Motor
app.get('/fill_rig',configT.retrigname);//For Rig Details
app.get('/fill_gauge/:rigid',configT.retgauge);//For gauge detail
app.get('/fill_valve/:rigid',configT.retvalve);//For valve detail
app.get('/fill_pump/:rigid',configT.retpump);//For pump detail
app.get('/fill_motor/:rigid',configT.retMotor);//For Motor detail

////====>> Fetching data for Fusion chart End=======>>



app.get('/usrinfo/:uname',usr.user_auth);//User Details page
app.get('/newuser/:name/:uname/:pwd/:email/:ph_no/:add',usr.new_user);// add new user Details page
app.get('/check_usrnme',function(req, res, next) {

    var sess_uname='',rigname='';
    try{
        if(req.session.name||req.session.rig_name)
        {
//        console.log('session  exit');
            sess_uname=req.session.name;
//            rigname=req.session.rig_name;
            /*      rigname='Rig12';
             res.json({usrname:sess_uname,rignm:rigname});*/
            res.send(sess_uname);
        }
    }
    catch (err)
    {
        res.render('login.html');
    }

});// Check username & display on text
app.get('/det/:rig_id',rdet.rigdata);//For Rig Details
app.get('/bop_set/:rig_id/:bop_stack_id',rdet.bop_st_config);//For bop stack configuration Details
app.get('/pmp_st/:rig_id',rdet.pmp_stng);//For Pump setting
app.get('/base_st/:rig_id',rdet.base_stng);//For base setting
app.get('/rsp_val/:rig_id', rspvalve.getdata);  // Responsetime table details
app.get('/rsp_cht/:rig_id/:val_id', rspvalve.rspchart);  //Here to read data for Response time chart before & after 5 seconds
app.get('/his_rsp/:rig_id/:month/:year', rspvalve.his_rsp);
app.get('/bop_ctrl/:rig_id/:from/:to', ptrend.bop_cntrl); //reading  pressure trend data for BOP control
app.get('/csng_cntrl/:rig_id/:from/:to', ptrend.csng_cntrl); //reading  pressure trend data for Casing control
app.get('/alm_hist/:rig_id/:from/:to', hisdata.alrm_hist); //reading Historical Alarm data page
app.get('/mwise_flog_clm/:rig_id/:vid/:year/:month', mwlog.mwise_flog_clm); //reading data for monthwise column chart
app.get('/mnth_wise_flog_sct/:rig_id/:vid/:year/:month', mwlog.mwise_flog_sct); //reading data for monthwise column chart
app.get('/flog_drop', mwlog.flog_drop); //reading data for function log valve dropdown
app.get('/mwise_fflog_clm/:rig_id/:vid/:year/:month', mwfflog.mwise_fflog_clm); //reading data for monthwise column chart
app.get('/mnth_wise_fflog_sct/:rig_id/:vid/:year/:month', mwfflog.mwise_fflog_sct); //reading data for monthwise column chart
app.get('/fflog_drop', mwfflog.fflog_drop); //reading data for function log valve dropdown
app.get('/funlog/:year/:rig_id',flogs.fldata);//function logs monthly
app.get('/ffunlog/:year/:rig_id',fflogs.fldata);//function logs monthly
app.get('/logs/:rig_id/:frm_dt/:to_dt',fflog.ff_logs);//FUNCTION/FUNCTION FAIL LOGS
app.get('/misyr/:rig_id/:year',myr.misyrdata);//miscellaneous alarm logs year data
app.get('/miss_log_clm/:rig_id/:ls_id/:year/:month',myr.miss_log_clm);//miscellaneous alarm logs month column data
app.get('/miss_log_sct/:rig_id/:ls_id/:year/:month',myr.miss_log_sct);//miscellaneous alarm logs month column data
app.get('/loss_drop',myr.loss_drop);//miscellaneous  logs dropdown
app.get('/pump/:rig_id/:year_val',palarm.pumpdata); //pump alarms data
app.get('/slog/:rig_id/:year_val',shut_log.slogdata); //shutdown logs
app.get('/slog_chart/:rig_id/:year_val',shut_log_charts.slogdata_chart); //shutdown logs
app.get('/pmp_rtime/:rig_id/:year_val',pmp_run_tm.pump_rtime);  // pump run time (shutdown logs)

app.get('/valv_confg/:rig_id',bop_confg.valv_confg);//Configure BOP Valve
app.get('/motor_confg/:rig_id',bop_confg.motor_confg);//Configure BOP Motor
app.get('/pump_confg/:rig_id',bop_confg.pump_confg);//Configure BOP Pump

//====>>> Data fetching Function end here ==========>>



//===>> Rendering HTML page start from here ====>>

app.get('/bopconfg',function(req,res,next){ //check DB configuration
    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('Config.ejs');
    }
    else
    {
        res.render('login.html');
    }

});
app.get('/db',function(req,res,next){ //check DB configuration
    res.send(db_confg.DB);
});

app.get('/',function(req, res, next) {   //Ist page of website rt138
//    totsec= 0;sec= 0;hr= 0;min=0;
    res.render('login.html');
});


app.get('/login',function(req, res, next) { //Login Page
    totsec= 0;sec= 0;hr= 0;min=0;
    /*    res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "X-Requested-With");*/

    res.render('login.html');

});
app.get('/logout', function(req, res, next){ //Logout link
    totsec= 0;sec= 0;hr= 0;min=0;
    req.session.destroy();
    res.render('login.html');
});


app.get('/new_usr',function(req, res, next) { //New user Page
    res.render('new_user.html');
});
app.get('/rigdts',function(req, res, next){  // Rig Details page(RIG DETAILS,BOP STACK CONFIGURATION,PUMP SETTINGS,BASELINE SETTINGS)

    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('rig_info.html');
    }
    else
    {
        res.render('login.html');
    }
});
app.get('/map',function(req, res, next){ // World Map page

    /*  res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "X-Requested-With");*/

    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('world_map.html');
    }
    else
    {
        res.render('login.html');
    }

});
app.get('/home',function(req, res, next){ //Home page for navigation
    if(req.session.name)
    {
        //        console.log('session  exit');
        res.render('home.html');
    }
    else
    {
        res.render('login.html');
    }

});
app.get('/bop',function(req, res, next){
    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('bop.html');
    }
    else
    {
        res.render('login.html');
    }
});
app.get('/chk',function(req, res, next){ //Choke Manifold page

    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('choke.html');
    }
    else
    {
        res.render('login.html');
    }

});
app.get('/ftest',function(req, res, next) { // (FUNCTION Test)


    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('function_test.html');
    }
    else
    {
        res.render('login.html');
    }

});

app.get('/pumpalm',function(req, res, next) { // Pump Alarm page (PUMP ALARM LOGS,MISCELLANEOUS LOGS,SHUTDOWN LOGS)


    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('pump_alarms.html');
    }
    else
    {
        res.render('login.html');
    }

});
app.get('/logs',function(req, res, next) { // Valve page logs (FUNCTION/FUNCTION FAIL LOGS)


    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('fflogs.html');
    }
    else
    {
        res.render('login.html');
    }

});

app.get('/gauge',function(req, res, next){  // Gauge page with area chart


    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('gauges.html');
    }
    else
    {
        res.render('login.html');
    }

});

app.get('/fflog',function(req, res, next){ //Monthwise Log details page(Function fail,logs)

    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('monthffaillog.html');
    }
    else
    {
        res.render('login.html');
    }
});

app.get('/flog',function(req, res, next){ //Monthwise Log details page(Function fail,logs)


    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('monthflog.html');
    }
    else
    {
        res.render('login.html');
    }
});


app.get('/resptme',function(req, res, next){ //Response Time Log details page (REAL TIME VALVE RESPONSE TIME,RESPONSE TIME LOGS,HISTORICAL RESPONSE TIME)


    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('respnstime.html');
    }
    else
    {
        res.render('login.html');
    }
});

app.get('/ptrend',function(req, res, next){ //Historical Pressure Log page

    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('presstrend.html');
    }
    else
    {
        res.render('login.html');
    }
});

app.get('/freal',function(req, res, next){

    res.render('f_real.html');

});

app.get('/hisalm',function(req, res, next){ //Historical Alarm details page


    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('alarmhistoric.html');
    }
    else
    {
        res.render('login.html');
    }
});


app.get('/cdata',function(req, res, next){
    res.render('data.html');
});

app.get('/mqu',function(req, res, next){
    res.render('marque.html');
});

app.get('/current',function(req, res, next){

    res.render('current.html');
});

app.get('/test',function(req, res){

    res.render('test.html');
});


//===>> Rendering HTML page End from here ====>>

http.listen(1000, function(){
    console.log('Express server listening on port 1000');
});