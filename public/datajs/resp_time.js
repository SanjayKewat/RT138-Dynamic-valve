/**
 * Created by Administrator on 12/12/2014.
 */

$(function() {
    $('#txtfrom').datetimepicker({
        timepicker: false,
        format: 'Y-m-d'
    });

    $('#txtto').datetimepicker({
        timepicker: false,
        format: 'Y-m-d'
    });
    $('#data').append(alarmcontent());
    $('.f2').append(alarm_footer());
    $('.f1').append(userinfo());
    user_name();

    //here get selected rigname
    var rigname = window.localStorage.getItem("rgnm");
//    console.log(rigname);
    $('#rig_lbl').text(rigname); //display rigname

    var rig_id=window.localStorage.getItem("rigid");


    var to=new Date();
    var predate=new Date();
    predate.setDate(predate.getMonth()-1);
//            console.log("Prevs "+predate);
//           alert(predate);
    fetchdata(rig_id,predate,to);
//    $('#txtfr').val("0"+(predate.getMonth())+"-"+predate.getDate()+"-"+predate.getFullYear());
//    $('#txtto').val("0"+(to.getMonth()+1)+"-"+to.getDate()+"-"+to.getFullYear());
    if((predate.getMonth()+1)<9)
    {
        $('#txtfrom').val(predate.getFullYear()+"-"+"0"+(predate.getMonth())+"-"+predate.getDate());
        $('#txtto').val(to.getFullYear()+"-"+"0"+(to.getMonth()+1)+"-"+to.getDate());
    }
    else
    {
        $('#txtfrom').val(predate.getFullYear()+"-"+(predate.getMonth())+"-"+predate.getDate());
        $('#txtto').val(to.getFullYear()+"-"+(to.getMonth()+1)+"-"+to.getDate());
    }

    $('#btn_data').click(function(){
        fetchdata(rig_id,$('#txtfrom').val(),$('#txtto').val());
    });



    //making stylish alram start
    $('.tlt').textillate({
    // the default selector to use when detecting multiple texts to animate
    selector: '.texts',

    // enable looping
    loop: true,

    // sets the minimum display time for each text before it is replaced
    minDisplayTime: 2000,

    // sets the initial delay before starting the animation
    // (note that depending on the in effect you may need to manually apply
    // visibility: hidden to the element before running this plugin)
    initialDelay: 0,

    // set whether or not to automatically start animating
    autoStart: true,

    // custom set of 'in' effects. This effects whether or not the
    // character is shown/hidden before or after an animation
    inEffects: [],

    // custom set of 'out' effects
    outEffects: ['hinge'],

    // in animation settings
    in: {
    // set the effect name
    effect: 'fadeInLeftBig',

    // set the delay factor applied to each consecutive character
    delayScale: 1.5,

    // set the delay between each character
    delay: 50,

    // set to true to animate all the characters at the same time
    sync: true,

    // randomize the character sequence
    // (note that shuffle doesn't make sense with sync = true)
    shuffle: false,

    // reverse the character sequence
    // (note that reverse doesn't make sense with sync = true)
    reverse: false,

    // callback that executes once the animation has finished
    callback: function () { }
    },

    // out animation settings.
    out: {
    effect: 'fadeOutRight',
    delayScale: 1.5,
    delay: 50,
    sync: true,
    shuffle: false,
    reverse: false,
    callback: function () { }
    },

    // callback that executes once textillate has finished
    callback: function () {

    }
    });

//    End stylish alram
    window.onresize=table_adjust;
//    table_adjust();
    });
function table_adjust()
{

    var $table = $('table.scroll'),
    $bodyCells = $table.find('tbody tr:first').children(),
    colWidth;
    colWidth = $bodyCells.map(function() {
    return $(this).width();
    }).get();
//alert($(v).width(colWidth[i]+1));
    // Set the width of thead columns
    $table.find('thead tr').children().each(function(i, v) {
    $(v).width(colWidth[i]);
    if(i==0)
    {
    $(v).width(colWidth[i]+1);
    }

    });
    }

function show_dialog() {
    $('#data').modal();

    }

window.onload=function() {

    // get tab container
    var container = document.getElementById("tabContainer");
    // set current tab
    var navitem = container.querySelector(".tabs ul li");
    //store which tab we are on
    var ident = navitem.id.split("_")[1];
    navitem.parentNode.setAttribute("data-current",ident);
    //set current tab with class of activetabheader
    navitem.setAttribute("class","tabActiveHeader");

    //hide two tab contents we don't need
    var pages = container.querySelectorAll(".tabpage");
    for (var i = 1; i < pages.length; i++) {
    pages[i].style.display="none";
    }

    //this adds click event to tabs
    var tabs = container.querySelectorAll(".tabs ul li");
    for (var i = 0; i < tabs.length; i++) {
    tabs[i].onclick=displayPage;


    }

    }

// on click of one of tabs
function displayPage() {
    var current = this.parentNode.getAttribute("data-current");
    //remove class of activetabheader and hide old contents
    document.getElementById("tabHeader_" + current).removeAttribute("class");
    document.getElementById("tabpage_" + current).style.display="none";
    document.getElementById("content" + current).style.display="none";

    var ident = this.id.split("_")[1];

    //add class of activetabheader to new active tab and show contents
    this.setAttribute("class","tabActiveHeader");
    document.getElementById("tabpage_" + ident).style.display="block";
    document.getElementById("content" + ident).style.display="block";
    this.parentNode.setAttribute("data-current",ident);
    table_adjust();

    }



var count=0; // strxml += "<chart canvasBgColor='FFFFFF' xAxisName='      Time' showShadow='0' drawAnchors='0' showBorder='0' formatnumberscale='0'  chartRightMargin='1' chartLeftMargin='1' numberPrefix=''  chartBottomMargin='40' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' numDivLines='8'  showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='000000' showAnchors='1' canvaspadding='0' showPlotBorder='0' divLineColor='666666' divLineThickness='1' divLineAlpha='100' vDivlineAlpha='100' vDivlineIsDashed='0' vDivlineThickness='1' vDivlineColor='b3b3b3' showAlternateHGridColor='0' divLineIsDashed='1' divLineDashLen='5' >";
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
var strxml="",strcategories="", strd1="";



document.getElementsByName
FusionCharts.setCurrentRenderer('javascript');
$(function() {

    bindyear();

    var rig_id=window.localStorage.getItem("rigid");

//    alert(rsppress);

    var dataXMLLine = "<chart showShadow='0' useMessageLog='1' showRTmenuItem='1' manageResize='1' yAxisMaxValue='10000' formatnumberscale='0'  showRealTimeValue='0' showToolTip='1' tooltipbgcolor='fff' tooltipbordercolor='fff' connectNullData='1' dataStreamURL='rsppress/"+rig_id+"' refreshInterval='1' drawAnchors='1' anchorRadius='1' showBorder='0' chartBottomMargin='60' showLegend='0' legendPosition='below' bgAlpha='0,0' numVDivLines='16' showValues='0' outcnvBaseFontColor='000000' alternateHGridAlpha='100' alternateHGridColor='f2f2f2' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='cccccc'  hoverCapBorderColor='f1f1f2' hoverCapBgColor='f1f1f2'  showAnchors='1' canvaspadding='0' showAlternateHGridColor='0'     showPlotBorder='0' plotborderthickness='1' divlineborderthickness='2' divlinecolor='f1f1f2' divlinealpha='100'><styles><definition><style name='myCaptionFont' type='font' font='Verdana' align='left' size='18' bold='1' underline='1'/></definition><application><apply toObject='Caption' styles='myCaptionFont' /></application></styles><categories><category label='Start'/></categories><dataset seriesName='Manifold' color='33cdce' dashed='1'  lineThickness='2'><set value='0'/></dataset><dataset seriesName='Accumulator' color='003caf' lineThickness='2'><set value='0'/></dataset></chart>";

    /*  var multiline = new FusionCharts("Charts/RealTimeLine.swf", "chart-2", "100%","110%","0", "1");
     multiline.setXMLData(dataXMLLine);
     multiline.setTransparent(true);
     multiline.render('multiline');*/

    var myChart = new FusionCharts({
    "type": "realtimeline",
    "renderAt": "multiline",
    "width": "100%",
    "height": "110%",
    "dataFormat": "xml",
    "dataSource": dataXMLLine

    });

    myChart.render();




//    $('#data').append(alarmcontent());
//    $('.f2').append(alarm_footer());
//    $('.f1').append(userinfo());


    resp_data(rig_id);
    chart_plot(1,rig_id);

//    var socket = io.connect(connection);
//    var pump1,pump2,pump1data,pump2data,presslkg,c_presslkg,slow_rcg,c_slow_rcg;
//    var pump1arry=[], pump2arry=[];
//    socket.on('current_data', function (data) {
//    JSON.stringify(data);
//
////            PUMP 1 DATA START
//    pump1data=""+data.curr_data[0].pump_1_runtime+"";
//    pump1arry=pump1data.split(":");
//
//    $('#p1_hr').text(pump1arry[0].replace("'",""));//Pump1 hour
//    $('#p1_min').text(pump1arry[1]);//Pump1 hour
//    $('#p1_sec').text(pump1arry[2]);//Pump1 sec
//    $('#p1_str').text(data.curr_data[0].pump_1_start_press);//Pump1 start
//    $('#p1_stp').text(data.curr_data[0].pump_1_stop_press.replace("'",""));//Pump1 stop
//
////            PUMP 1 DATA END
//
//
////            PUMP 2 DATA START
//    pump2data=""+data.curr_data[0].pump_2_runtime+"";
//    pump2arry=pump2data.split(":");
//
//    $('#p2_hr').text(pump2arry[0].replace("'",""));//Pump1 hour
//    $('#p2_min').text(pump2arry[1]);//Pump1 hour
//    $('#p2_sec').text(pump2arry[2]);//Pump1 sec
//    $('#p2_str').text(data.curr_data[0].pump_2_start_press);//Pump1 start
//    $('#p2_stp').text(data.curr_data[0].pump_2_stop_press.replace("'",""));//Pump1 stop
//
////            PUMP 2 DATA END
//    var dt= new Date(data.curr_data[0].valve_operated_time);
//    $('#tme_els').text(data.curr_data[0].time_elapsed);//Time elapsed
//    $('#lst_txt').val(data.curr_data[0].valve_operated);//Last Operated Valve
//    $('#dtm_txt').val(dt.toString("dd/MM/yyyy"));//Date/Time
//    $('#rsptm_txt').val(data.curr_data[0].response_time);//Response Time (ms)
//    $('#esttm_txt').val(data.curr_data[0].estimated_time);//Estimated Time on 2nd Valve Operation(sec)
//    $('#rtlkg_txt').val(data.curr_data[0].rate_of_leakage);//Rate of Leakage
//
//
//    pump1=data.curr_data[0].motor_run1_light;// PUMP 1
//    pump2=data.curr_data[0].motor_run2_light;//PUMP 2
//    presslkg=data.curr_data[0].pressure_leakage;//Pressure Leakage
//    slow_rcg=data.curr_data[0].slow_recharge;//Slow Recharge
//
//
//    //PUMP 1 Start
//    if(pump1==1)
//    {
//    $('#pmp1_alm').show();
//    $('#no_pmp1_alm').hide();
//    }
//    else
//    {
//    $('#pmp1_alm').hide();
//    $('#no_pmp1_alm').show();
//    }
//    //PUMP 1 end
//
//
//    //PUMP 2 Start
//    if(pump2==1)
//    {
//    $('#pmp2_alm').show();
//    $('#no_pmp2_alm').hide();
//    }
//    else
//    {
//    $('#pmp2_alm').hide();
//    $('#no_pmp2_alm').show();
//    }
//    //PUMP 2 end
//
////            Pressure leakage start
//    if(presslkg==1)
//    {
//    $('#prss_lkg_alm').show();
//    $('#prss_lkg_noalm').hide();
//    }
//    else
//    {
//    $('#prss_lkg_alm').hide();
//    $('#prss_lkg_noalm').show();
//    }
//    //            Pressure leakage end
//
//
//
//    //    Slow Recharge start
//    if(slow_rcg==1)
//    {
//    $('#slow_rchg_alm').show();
//    $('#slow_rchg_noalm').hide();
//    }
//    else
//    {
//    $('#slow_rchg_noalm').show();
//    $('#slow_rchg_alm').hide();
//    }
//    //       Slow Recharge end
//
//    });

    var today=new Date();
    var mnth=today.getMonth();
    mnth++;

//alert(today.getFullYear()+"  M "+mnth);
    his_rsptm_chart(rig_id,mnth,today.getFullYear());
    $('#month').val(mnth);
    $('#year').val(today.getFullYear());
    $("#vallist1").change(function() {
    var drp1 = $(this).val(); //current element
    var drp2 = $('#vallist2').val();
//        alert(drp1 +'II '+drp2);
    });


    $("#month").change(function(){
    var month=$(this).val();
    var year=$('#year').val();

    his_rsptm_chart(rig_id,month,year);
    });

    $("#year").change(function(){
    var month=$(this).val();
    var year=$('#year').val();

    his_rsptm_chart(rig_id,month,year);
    });



    $('#vallist1').change(function () {
    var id = $(this).val();
    //alert(id);

    if(id==1)
    {
    $('#Anchrt').show();
    $('#Bschrt').hide();
    $('#Chk1chrt').hide();
    $('#Chk2chrt').hide();
    $('#pip1chrt').hide();
    $('#pip2chrt').hide();
    $('#pip3chrt').hide();
    $('#kll1chrt').hide();
    $('#kll2chrt').hide();
    }
    else if(id==2)
    {
    $('#Anchrt').hide();
    $('#Bschrt').show();
    $('#Chk1chrt').hide();
    $('#Chk2chrt').hide();
    $('#pip1chrt').hide();
    $('#pip2chrt').hide();
    $('#pip3chrt').hide();
    $('#kll1chrt').hide();
    $('#kll2chrt').hide();
    }
    else if(id==3)
    {

    $('#Anchrt').hide();
    $('#Bschrt').hide();
    $('#Chk1chrt').show();
    $('#Chk2chrt').hide();
    $('#pip1chrt').hide();
    $('#pip2chrt').hide();
    $('#pip3chrt').hide();
    $('#kll1chrt').hide();
    $('#kll2chrt').hide();
    }
    else if (id == 4) {

    $('#Anchrt').hide();
    $('#Bschrt').hide();
    $('#Chk1chrt').hide();
    $('#Chk2chrt').show();
    $('#pip1chrt').hide();
    $('#pip2chrt').hide();
    $('#pip3chrt').hide();
    $('#kll1chrt').hide();
    $('#kll2chrt').hide();
    }
    else if (id == 5) {

    $('#Anchrt').hide();
    $('#Bschrt').hide();
    $('#Chk1chrt').hide();
    $('#Chk2chrt').hide();
    $('#pip1chrt').show();
    $('#pip2chrt').hide();
    $('#pip3chrt').hide();
    $('#kll1chrt').hide();
    $('#kll2chrt').hide();
    }
    else if (id == 6) {

    $('#Anchrt').hide();
    $('#Bschrt').hide();
    $('#Chk1chrt').hide();
    $('#Chk2chrt').hide();
    $('#pip1chrt').hide();
    $('#pip2chrt').show();
    $('#pip3chrt').hide();
    $('#kll1chrt').hide();
    $('#kll2chrt').hide();
    }
    else if (id == 7) {

    $('#Anchrt').hide();
    $('#Bschrt').hide();
    $('#Chk1chrt').hide();
    $('#Chk2chrt').hide();
    $('#pip1chrt').hide();
    $('#pip2chrt').hide();
    $('#pip3chrt').show();
    $('#kll1chrt').hide();
    $('#kll2chrt').hide();
    }
    else if (id == 8) {

    $('#Anchrt').hide();
    $('#Bschrt').hide();
    $('#Chk1chrt').hide();
    $('#Chk2chrt').hide();
    $('#pip1chrt').hide();
    $('#pip2chrt').hide();
    $('#pip3chrt').hide();
    $('#kll1chrt').show();
    $('#kll2chrt').hide();
    }
    else if (id == 9) {

    $('#Anchrt').hide();
    $('#Bschrt').hide();
    $('#Chk1chrt').hide();
    $('#Chk2chrt').hide();
    $('#pip1chrt').hide();
    $('#pip2chrt').hide();
    $('#pip3chrt').hide();
    $('#kll1chrt').hide();
    $('#kll2chrt').show();
    }

    });

    $('#vallist2').change(function () {
    var id = $(this).val();
    //alert(id);

    if (id == 1) {
    $('#Anchrt2').show();
    $('#Bschrt2').hide();
    $('#Chk1chrt2').hide();
    $('#Chk2chrt2').hide();
    $('#pip1chrt2').hide();
    $('#pip2chrt2').hide();
    $('#pip3chrt2').hide();
    $('#kll1chrt2').hide();
    $('#kll2chrt2').hide();
    }
    else if (id == 2) {
    $('#Anchrt2').hide();
    $('#Bschrt2').show();
    $('#Chk1chrt2').hide();
    $('#Chk2chrt2').hide();
    $('#pip1chrt2').hide();
    $('#pip2chrt2').hide();
    $('#pip3chrt2').hide();
    $('#kll1chrt2').hide();
    $('#kll2chrt2').hide();
    }
    else if (id == 3) {

    $('#Anchrt2').hide();
    $('#Bschrt2').hide();
    $('#Chk1chrt2').show();
    $('#Chk2chrt2').hide();
    $('#pip1chrt2').hide();
    $('#pip2chrt2').hide();
    $('#pip3chrt2').hide();
    $('#kll1chrt2').hide();
    $('#kll2chrt2').hide();
    }
    else if (id == 4) {

    $('#Anchrt2').hide();
    $('#Bschrt2').hide();
    $('#Chk1chrt2').hide();
    $('#Chk2chrt2').show();
    $('#pip1chrt2').hide();
    $('#pip2chrt2').hide();
    $('#pip3chrt2').hide();
    $('#kll1chrt2').hide();
    $('#kll2chrt2').hide();
    }
    else if (id == 5) {

    $('#Anchrt2').hide();
    $('#Bschrt2').hide();
    $('#Chk1chrt2').hide();
    $('#Chk2chrt2').hide();
    $('#pip1chrt2').show();
    $('#pip2chrt2').hide();
    $('#pip3chrt2').hide();
    $('#kll1chrt2').hide();
    $('#kll2chrt2').hide();
    }
    else if (id == 6) {

    $('#Anchrt2').hide();
    $('#Bschrt2').hide();
    $('#Chk1chrt2').hide();
    $('#Chk2chrt2').hide();
    $('#pip1chrt2').hide();
    $('#pip2chrt2').show();
    $('#pip3chrt2').hide();
    $('#kll1chrt2').hide();
    $('#kll2chrt2').hide();
    }
    else if (id == 7) {

    $('#Anchrt2').hide();
    $('#Bschrt2').hide();
    $('#Chk1chrt2').hide();
    $('#Chk2chrt2').hide();
    $('#pip1chrt2').hide();
    $('#pip2chrt2').hide();
    $('#pip3chrt2').show();
    $('#kll1chrt2').hide();
    $('#kll2chrt2').hide();
    }
    else if (id == 8) {

    $('#Anchrt2').hide();
    $('#Bschrt2').hide();
    $('#Chk1chrt2').hide();
    $('#Chk2chrt2').hide();
    $('#pip1chrt2').hide();
    $('#pip2chrt2').hide();
    $('#pip3chrt2').hide();
    $('#kll1chrt2').show();
    $('#kll2chrt2').hide();
    }
    else if (id == 9) {

    $('#Anchrt2').hide();
    $('#Bschrt2').hide();
    $('#Chk1chrt2').hide();
    $('#Chk2chrt2').hide();
    $('#pip1chrt2').hide();
    $('#pip2chrt2').hide();
    $('#pip3chrt2').hide();
    $('#kll1chrt2').hide();
    $('#kll2chrt2').show();
    }

    });

    $('#vallist3').change(function () {
    var id = $(this).val();
    //alert(id);

    if (id == 1) {
    $('#Anchrt3').show();
    $('#Bschrt3').hide();
    $('#Chk1chrt3').hide();
    $('#Chk2chrt3').hide();
    $('#pip1chrt3').hide();
    $('#pip2chrt3').hide();
    $('#pip3chrt3').hide();
    $('#kll1chrt3').hide();
    $('#kll2chrt3').hide();
    }
    else if (id == 2) {
    $('#Anchrt3').hide();
    $('#Bschrt3').show();
    $('#Chk1chrt3').hide();
    $('#Chk2chrt3').hide();
    $('#pip1chrt3').hide();
    $('#pip2chrt3').hide();
    $('#pip3chrt3').hide();
    $('#kll1chrt3').hide();
    $('#kll2chrt3').hide();
    }
    else if (id == 3) {

    $('#Anchrt3').hide();
    $('#Bschrt3').hide();
    $('#Chk1chrt3').show();
    $('#Chk2chrt3').hide();
    $('#pip1chrt3').hide();
    $('#pip2chrt3').hide();
    $('#pip3chrt3').hide();
    $('#kll1chrt3').hide();
    $('#kll2chrt3').hide();
    }
    else if (id == 4) {

    $('#Anchrt3').hide();
    $('#Bschrt3').hide();
    $('#Chk1chrt3').hide();
    $('#Chk2chrt3').show();
    $('#pip1chrt3').hide();
    $('#pip2chrt3').hide();
    $('#pip3chrt3').hide();
    $('#kll1chrt3').hide();
    $('#kll2chrt3').hide();
    }
    else if (id == 5) {

    $('#Anchrt3').hide();
    $('#Bschrt3').hide();
    $('#Chk1chrt3').hide();
    $('#Chk2chrt3').hide();
    $('#pip1chrt3').show();
    $('#pip2chrt3').hide();
    $('#pip3chrt3').hide();
    $('#kll1chrt3').hide();
    $('#kll2chrt3').hide();
    }
    else if (id == 6) {

    $('#Anchrt3').hide();
    $('#Bschrt3').hide();
    $('#Chk1chrt3').hide();
    $('#Chk2chrt3').hide();
    $('#pip1chrt3').hide();
    $('#pip2chrt3').show();
    $('#pip3chrt3').hide();
    $('#kll1chrt3').hide();
    $('#kll2chrt3').hide();
    }
    else if (id == 7) {

    $('#Anchrt3').hide();
    $('#Bschrt3').hide();
    $('#Chk1chrt3').hide();
    $('#Chk2chrt3').hide();
    $('#pip1chrt3').hide();
    $('#pip2chrt3').hide();
    $('#pip3chrt3').show();
    $('#kll1chrt3').hide();
    $('#kll2chrt3').hide();
    }
    else if (id == 8) {

    $('#Anchrt3').hide();
    $('#Bschrt3').hide();
    $('#Chk1chrt3').hide();
    $('#Chk2chrt3').hide();
    $('#pip1chrt3').hide();
    $('#pip2chrt3').hide();
    $('#pip3chrt3').hide();
    $('#kll1chrt3').show();
    $('#kll2chrt3').hide();
    }
    else if (id == 9) {

    $('#Anchrt3').hide();
    $('#Bschrt3').hide();
    $('#Chk1chrt3').hide();
    $('#Chk2chrt3').hide();
    $('#pip1chrt3').hide();
    $('#pip2chrt3').hide();
    $('#pip3chrt3').hide();
    $('#kll1chrt3').hide();
    $('#kll2chrt3').show();
    }

    });
    });

function showid(id) {

//           alert(id);
    chart_plot(id,1);
    $(".awesome").removeClass("awesome");
    $('#tr_val_'+(id-1)).addClass("awesome");
    }

function resp_data(rig_id)
{

    var cal= 0,k=0;
    $.get('/rsp_val/'+rig_id, {}, function(data){
    JSON.stringify(data);
//alert(data.message.Cluster[0].Array[0].String[1].Val);
    for(i=0;i<data.message.length;i++)
    {



    var res_date= new Date(data.message[i].resp_time_date);
    var prv_date= new Date(data.message[i].prev_resp_time_date);
    var bsln_date= new Date(data.message[i].bs_line_resp_time_date);
    if(i==0)
    {
    $("#valve_data").append("<tr   class='awesome' onclick=showid(" + data.message[i].valve_id + "); id='tr_val_"+k+"'><td>"+(i+1)+"</td><td>" +data.message[i].valve_name+ "</td><td>"+parseFloat(data.message[i].resp_time).toFixed(2)+ "</td><td>" + res_date.toString("dd/MM/yyyy") + "<br>" + res_date.toString("hh:mm") + "</td><td>"+parseFloat(data.message[i].prev_resp_time).toFixed(2)+ "</td><td>" + prv_date.toString("dd/MM/yyyy") + "<br>" + prv_date.toString("hh:mm")  + "</td><td>"+parseFloat(data.message[i].bs_line_resp_time).toFixed(2)+"</td><td>"+bsln_date.toString("dd/MM/yyyy") +"<br>" + bsln_date.toString("hh:mm")+"</td></tr>");

    }
    else {
    $("#valve_data").append("<tr onclick=showid(" + data.message[i].valve_id + "); id='tr_val_"+k+"'><td>"+(i+1)+"</td><td>" +data.message[i].valve_name+ "</td><td>"+parseFloat(data.message[i].resp_time).toFixed(2)+ "</td><td>" + res_date.toString("dd/MM/yyyy") + "<br>" + res_date.toString("hh:mm") + "</td><td>"+parseFloat(data.message[i].prev_resp_time).toFixed(2)+ "</td><td>" + prv_date.toString("dd/MM/yyyy") + "<br>" + prv_date.toString("hh:mm")  + "</td><td>"+parseFloat(data.message[i].bs_line_resp_time).toFixed(2)+"</td><td>"+bsln_date.toString("dd/MM/yyyy") + "<br>" + bsln_date.toString("hh:mm")+"</td></tr>");

    }
    k++;

    }

//        rest of rows
    if(data.message.length>14)
    {
    cal=14-(data.message.length);
    }


    if(data.message.length==1)
    {
    cal=15-(data.message.length);
    }
    else
    {
    cal=14-(data.message.length);
    }



    //console.log(data.message.Array[1].String.length);
    if(cal>0)
    {
    for(i=0;i<cal;i++)
    {
    $("#valve_data").append("<tr  class='awesome_1'  ><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");

    }
    }

    });
    }

function chart_plot(val_id,rig_id)
{
//    alert('V : '+val_id+' R Id '+rig_id);

    $.get('/rsp_cht/'+rig_id+'/'+val_id, {}, function(data){
        JSON.stringify(data);
        var len= 0,mid= 0,arr=[];
        var strxml="",strcategories="", strd="";

        //           First Chart SHEAR BOOST  start
        for(i=0;i<data.message.length;i++){
            if(data.message[i].chart_id==1) {
                len++;
                arr.push(data.message[i].pressure)
            }
        }

        mid=Math.round(len/2);
        //            mid=Math.floor(len/2); A Number, representing the nearest integer when rounding downwards
        strxml += "<chart canvasBgColor='FFFFFF' xAxisName='      Time' showShadow='0' drawAnchors='0' showBorder='0' formatnumberscale='0'  chartRightMargin='1' chartLeftMargin='1' numberPrefix=''  chartBottomMargin='40' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' numDivLines='8'  showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='000000' showAnchors='1' canvaspadding='0' showPlotBorder='0' divLineColor='666666' divLineThickness='1' divLineAlpha='100' vDivlineAlpha='100' vDivlineIsDashed='0' vDivlineThickness='1' vDivlineColor='b3b3b3' showAlternateHGridColor='0' divLineIsDashed='1' divLineDashLen='5' >";
        //    strxml+="<chart chartTopMargin='40'  xAxisName='Month' yAxisName='Revenue' numberPrefix='$' showValues='0'>";
        strxml += "<styles>";
        strxml += "<definition>";
        strxml += "<style name='myCaptionFont' type='font' font='Verdana' align='left' size='18' bold='1' underline='1'/>";
        strxml += "</definition>";
        strxml += "<application>";
        strxml += "<apply toObject='Caption' styles='myCaptionFont' />";
        strxml += "</application>";
        strxml += "</styles>";
        strcategories += "<categories>";
        strd += "<dataset seriesName='Plot1'  color='0071bc' dashed='0' lineThickness='2'>";
        for(i=0;i<arr.length;i++)
        {

            if(i==mid)
            {
                strcategories +="<vLine color='000000' thickness='4' />";
            }
            strd += "<set value='" + arr[i] + "'/>";
            strcategories += "<category label=''/>";


        }
        strcategories += "</categories>";
        strd += "</dataset>";
        strxml += strcategories + strd + "</chart>";

        var shera = new FusionCharts('FusionCharts/MSline.swf', 'chart-shear', '100%', '110%', '0', '1');
        shera.setXMLData(strxml);
        shera.setTransparent(true);
        shera.render('shear_chart');

        //           First Chart SHEAR BOOST End



        //           II Chart Manifold  start
        len= 0,mid= 0,arr=[];
        strxml="",strcategories="", strd="";

        for(i=0;i<data.message.length;i++){
            if(data.message[i].chart_id==2) {
                len++;
                arr.push(data.message[i].pressure)
            }
        }

        mid=Math.round(len/2);
        strxml += "<chart canvasBgColor='FFFFFF' xAxisName='      Time' showShadow='0' drawAnchors='0' showBorder='0' formatnumberscale='0'  chartRightMargin='1' chartLeftMargin='1' numberPrefix=''  chartBottomMargin='40' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' numDivLines='8'  showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='000000' showAnchors='1' canvaspadding='0' showPlotBorder='0' divLineColor='666666' divLineThickness='1' divLineAlpha='100' vDivlineAlpha='100' vDivlineIsDashed='0' vDivlineThickness='1' vDivlineColor='b3b3b3' showAlternateHGridColor='0' divLineIsDashed='1' divLineDashLen='5' >";
        //    strxml+="<chart chartTopMargin='40'  xAxisName='Month' yAxisName='Revenue' numberPrefix='$' showValues='0'>";
        strxml += "<styles>";
        strxml += "<definition>";
        strxml += "<style name='myCaptionFont' type='font' font='Verdana' align='left' size='18' bold='1' underline='1'/>";
        strxml += "</definition>";
        strxml += "<application>";
        strxml += "<apply toObject='Caption' styles='myCaptionFont' />";
        strxml += "</application>";
        strxml += "</styles>";
        strcategories += "<categories>";
        strd += "<dataset seriesName='Plot1'  color='0071bc' dashed='0' lineThickness='2'>";
        for(i=0;i<arr.length;i++)
        {

            if(i==mid)
            {
                strcategories +="<vLine color='000000' thickness='4' />";
            }
            strd += "<set value='" + arr[i] + "'/>";
            strcategories += "<category label=''/>";


        }
        strcategories += "</categories>";
        strd += "</dataset>";
        strxml += strcategories + strd + "</chart>";

        var mani = new FusionCharts('FusionCharts/MSline.swf', 'chart-mani', '100%', '110%', '0', '1');
        mani.setXMLData(strxml);
        mani.setTransparent(true);
        mani.render('mani_chart');

        //          II Chart Manifold End


        //            III Chart Annular  start
        len= 0,mid= 0,arr=[];
        strxml="",strcategories="", strd="";

        for(i=0;i<data.message.length;i++){
            if(data.message[i].chart_id==3) {
                len++;
                arr.push(data.message[i].pressure)
            }
        }

        mid=Math.round(len/2);
        strxml += "<chart canvasBgColor='FFFFFF' xAxisName='      Time' showShadow='0' drawAnchors='0' showBorder='0' formatnumberscale='0'  chartRightMargin='1' chartLeftMargin='1' numberPrefix=''  chartBottomMargin='40' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' numDivLines='8'  showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='000000' showAnchors='1' canvaspadding='0' showPlotBorder='0' divLineColor='666666' divLineThickness='1' divLineAlpha='100' vDivlineAlpha='100' vDivlineIsDashed='0' vDivlineThickness='1' vDivlineColor='b3b3b3' showAlternateHGridColor='0' divLineIsDashed='1' divLineDashLen='5' >";
        //    strxml+="<chart chartTopMargin='40'  xAxisName='Month' yAxisName='Revenue' numberPrefix='$' showValues='0'>";
        strxml += "<styles>";
        strxml += "<definition>";
        strxml += "<style name='myCaptionFont' type='font' font='Verdana' align='left' size='18' bold='1' underline='1'/>";
        strxml += "</definition>";
        strxml += "<application>";
        strxml += "<apply toObject='Caption' styles='myCaptionFont' />";
        strxml += "</application>";
        strxml += "</styles>";
        strcategories += "<categories>";
        strd += "<dataset seriesName='Plot1'  color='0071bc' dashed='0' lineThickness='2'>";
        for(i=0;i<arr.length;i++)
        {

            if(i==mid)
            {
                strcategories +="<vLine color='000000' thickness='4' />";
            }
            strd += "<set value='" + arr[i] + "'/>";
            strcategories += "<category label=''/>";


        }
        strcategories += "</categories>";
        strd += "</dataset>";
        strxml += strcategories + strd + "</chart>";

        var ann = new FusionCharts('FusionCharts/MSline.swf', 'chart-ann', '100%', '110%', '0', '1');
        ann.setXMLData(strxml);
        ann.setTransparent(true);
        ann.render('ann_chart');

        //          III Chart Annular End

    });

    }

function bindyear()
{
    var dt=new Date();
    for(i=dt.getFullYear();i>=2010;i--)
    {
    $('#year').append('<option value='+i+'>'+i+'</option>');
    }
    }


function his_rsptm_chart(rigid,month,year)
{
    $.get('/his_rsp/'+rigid+'/'+month+'/'+year, {}, function(data){
        JSON.stringify(data);


//        small chart variable
        var smlann = "",smlbs = "",mlchk1 = "",smlchk1,smlchk2 = "",smlPipe1 = "",smlPipe2 = "",smlPipe3 = "",smlKill1 = "",smlKill2 = "";

//        small chart variable
        var BAnn = "",BBs = "",Bchk1 = "",Bchk2 = "",Bpip1 = "",Bpip2 = "",Bpip3 = "",Bkl1 = "",Bkl2 = "";

        var arr=[];
        var strxml="",strcategories="", strd="";

        if(data.message.length==0)
        {
            alert("Data not available in Year "+$('#year').val()+" Month "+$('#month option:selected').text()+". Please check another month.")
        }
        else {


            //      small  Annular Chart start


            strxml += "<chart canvasBgColor='FFFFFF' xAxisName='      Time' showShadow='0' drawAnchors='0' showBorder='0' formatnumberscale='0'  chartRightMargin='1' chartLeftMargin='1' numberPrefix=''  chartBottomMargin='40' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' numDivLines='8'  showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='000000' showAnchors='1' canvaspadding='0' showPlotBorder='0' divLineColor='666666' divLineThickness='1' divLineAlpha='100' vDivlineAlpha='100' vDivlineIsDashed='0' vDivlineThickness='1' vDivlineColor='b3b3b3' showAlternateHGridColor='0' divLineIsDashed='1' divLineDashLen='5' >";
            //    strxml+="<chart chartTopMargin='40'  xAxisName='Month' yAxisName='Revenue' numberPrefix='$' showValues='0'>";
            strxml += "<styles>";
            strxml += "<definition>";
            strxml += "<style name='myCaptionFont' type='font' font='Verdana' align='left' size='18' bold='1' underline='1'/>";
            strxml += "</definition>";
            strxml += "<application>";
            strxml += "<apply toObject='Caption' styles='myCaptionFont' />";
            strxml += "</application>";
            strxml += "</styles>";
            strcategories += "<categories>";
            strd += "<dataset seriesName='Plot1'  color='0071bc' dashed='0' lineThickness='2'>";
            for (i = 0; i < data.message.length; i++) {
                if (data.message[i].valve_id == 1) {
                    strd += "<set value='" + data.message[i].value + "'/>";
                    strcategories += "<category label=''/>";
                }
            }


            strcategories += "</categories>";
            strd += "</dataset>";
            strxml += strcategories + strd + "</chart>";

            smlann = strxml;

            var an = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst1', '100%', '110%', '0', '1');
            an.setXMLData(smlann);
            an.setTransparent(true);
            an.render('Anchrt');


            var an2 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst12', '100%', '110%', '0', '1');
            an2.setXMLData(smlann);
            an2.setTransparent(true);
            an2.render('Anchrt2');

            var an3 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst13', '100%', '110%', '0', '1');
            an3.setXMLData(smlann);
            an3.setTransparent(true);
            an3.render('Anchrt3');

            //      small  Annular Chart End


            //      small  BS Chart start


            strxml = "";
            strcategories = "";
            strd = "";


            strxml += "<chart canvasBgColor='FFFFFF' xAxisName='      Time' showShadow='0' drawAnchors='0' showBorder='0' formatnumberscale='0'  chartRightMargin='1' chartLeftMargin='1' numberPrefix=''  chartBottomMargin='40' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' numDivLines='8'  showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='000000' showAnchors='1' canvaspadding='0' showPlotBorder='0' divLineColor='666666' divLineThickness='1' divLineAlpha='100' vDivlineAlpha='100' vDivlineIsDashed='0' vDivlineThickness='1' vDivlineColor='b3b3b3' showAlternateHGridColor='0' divLineIsDashed='1' divLineDashLen='5' >";
            //    strxml+="<chart chartTopMargin='40'  xAxisName='Month' yAxisName='Revenue' numberPrefix='$' showValues='0'>";
            strxml += "<styles>";
            strxml += "<definition>";
            strxml += "<style name='myCaptionFont' type='font' font='Verdana' align='left' size='18' bold='1' underline='1'/>";
            strxml += "</definition>";
            strxml += "<application>";
            strxml += "<apply toObject='Caption' styles='myCaptionFont' />";
            strxml += "</application>";
            strxml += "</styles>";
            strcategories += "<categories>";
            strd += "<dataset seriesName='Plot1'  color='0071bc' dashed='0' lineThickness='2'>";
            for (i = 0; i < data.message.length; i++) {
                if (data.message[i].valve_id == 2) {
                    strd += "<set value='" + data.message[i].value + "'/>";
                    strcategories += "<category label=''/>";
                }
            }

            strcategories += "</categories>";
            strd += "</dataset>";
            strxml += strcategories + strd + "</chart>";
            smlbs = strxml;

            var bsh = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst2', '100%', '110%', '0', '1');
            bsh.setXMLData(smlbs);
            bsh.setTransparent(true);
            bsh.render('Bschrt');

            var bsh2 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst22', '100%', '110%', '0', '1');
            bsh2.setXMLData(smlbs);
            bsh2.setTransparent(true);
            bsh2.render('Bschrt2');

            var bsh3 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst23', '100%', '110%', '0', '1');
            bsh3.setXMLData(smlbs);
            bsh3.setTransparent(true);
            bsh3.render('Bschrt3');

            //      small  BS Chart end


            //      small  Choke1 Chart start
            strxml = "";
            strcategories = "";
            strd = "";

            strxml += "<chart canvasBgColor='FFFFFF' xAxisName='      Time' showShadow='0' drawAnchors='0' showBorder='0' formatnumberscale='0'  chartRightMargin='1' chartLeftMargin='1' numberPrefix=''  chartBottomMargin='40' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' numDivLines='8'  showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='000000' showAnchors='1' canvaspadding='0' showPlotBorder='0' divLineColor='666666' divLineThickness='1' divLineAlpha='100' vDivlineAlpha='100' vDivlineIsDashed='0' vDivlineThickness='1' vDivlineColor='b3b3b3' showAlternateHGridColor='0' divLineIsDashed='1' divLineDashLen='5' >";
            //    strxml+="<chart chartTopMargin='40'  xAxisName='Month' yAxisName='Revenue' numberPrefix='$' showValues='0'>";
            strxml += "<styles>";
            strxml += "<definition>";
            strxml += "<style name='myCaptionFont' type='font' font='Verdana' align='left' size='18' bold='1' underline='1'/>";
            strxml += "</definition>";
            strxml += "<application>";
            strxml += "<apply toObject='Caption' styles='myCaptionFont' />";
            strxml += "</application>";
            strxml += "</styles>";
            strcategories += "<categories>";
            strd += "<dataset seriesName='Plot1'  color='0071bc' dashed='0' lineThickness='2'>";
            for (i = 0; i < data.message.length; i++) {
                if (data.message[i].valve_id == 3) {
                    strd += "<set value='" + data.message[i].value + "'/>";
                    strcategories += "<category label=''/>";
                }
            }

            strcategories += "</categories>";
            strd += "</dataset>";
            strxml += strcategories + strd + "</chart>";
            smlchk1 = strxml;

            var chk1 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst3', '100%', '110%', '0', '1');
            chk1.setXMLData(smlchk1);
            chk1.setTransparent(true);
            chk1.render('Chk1chrt');

            var chk12 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst32', '100%', '110%', '0', '1');
            chk12.setXMLData(smlchk1);
            chk12.setTransparent(true);
            chk12.render('Chk1chrt2');

            var chk13 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst33', '100%', '110%', '0', '1');
            chk13.setXMLData(smlchk1);
            chk13.setTransparent(true);
            chk13.render('Chk1chrt3');

            //      small  Choke1 Chart end


            //      small  Choke2 Chart start

            strxml = "";
            strcategories = "";
            strd = "";
            strxml += "<chart canvasBgColor='FFFFFF' xAxisName='      Time' showShadow='0' drawAnchors='0' showBorder='0' formatnumberscale='0'  chartRightMargin='1' chartLeftMargin='1' numberPrefix=''  chartBottomMargin='40' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' numDivLines='8'  showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='000000' showAnchors='1' canvaspadding='0' showPlotBorder='0' divLineColor='666666' divLineThickness='1' divLineAlpha='100' vDivlineAlpha='100' vDivlineIsDashed='0' vDivlineThickness='1' vDivlineColor='b3b3b3' showAlternateHGridColor='0' divLineIsDashed='1' divLineDashLen='5' >";
            //    strxml+="<chart chartTopMargin='40'  xAxisName='Month' yAxisName='Revenue' numberPrefix='$' showValues='0'>";
            strxml += "<styles>";
            strxml += "<definition>";
            strxml += "<style name='myCaptionFont' type='font' font='Verdana' align='left' size='18' bold='1' underline='1'/>";
            strxml += "</definition>";
            strxml += "<application>";
            strxml += "<apply toObject='Caption' styles='myCaptionFont' />";
            strxml += "</application>";
            strxml += "</styles>";
            strcategories += "<categories>";
            strd += "<dataset seriesName='Plot1'  color='0071bc' dashed='0' lineThickness='2'>";

            for (i = 0; i < data.message.length; i++) {
                if (data.message[i].valve_id == 4) {
                    strd += "<set value='" + data.message[i].value + "'/>";
                    strcategories += "<category label=''/>";
                }
            }

            strcategories += "</categories>";
            strd += "</dataset>";
            strxml += strcategories + strd + "</chart>";
            smlchk2 = strxml;

            var chk2 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst4', '100%', '110%', '0', '1');
            chk2.setXMLData(smlchk2);
            chk2.setTransparent(true);
            chk2.render('Chk2chrt');

            var chk22 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst42', '100%', '110%', '0', '1');
            chk22.setXMLData(smlchk2);
            chk22.setTransparent(true);
            chk22.render('Chk2chrt2');

            var chk23 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst43', '100%', '110%', '0', '1');
            chk23.setXMLData(smlchk2);
            chk23.setTransparent(true);
            chk23.render('Chk2chrt3');

            //      small  Choke2 Chart end


            //      Pipe1 Chart start

            strxml = "";
            strcategories = "";
            strd = "";


            strxml += "<chart canvasBgColor='FFFFFF' xAxisName='      Time' showShadow='0' drawAnchors='0' showBorder='0' formatnumberscale='0'  chartRightMargin='1' chartLeftMargin='1' numberPrefix=''  chartBottomMargin='40' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' numDivLines='8'  showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='000000' showAnchors='1' canvaspadding='0' showPlotBorder='0' divLineColor='666666' divLineThickness='1' divLineAlpha='100' vDivlineAlpha='100' vDivlineIsDashed='0' vDivlineThickness='1' vDivlineColor='b3b3b3' showAlternateHGridColor='0' divLineIsDashed='1' divLineDashLen='5' >";
            //    strxml+="<chart chartTopMargin='40'  xAxisName='Month' yAxisName='Revenue' numberPrefix='$' showValues='0'>";
            strxml += "<styles>";
            strxml += "<definition>";
            strxml += "<style name='myCaptionFont' type='font' font='Verdana' align='left' size='18' bold='1' underline='1'/>";
            strxml += "</definition>";
            strxml += "<application>";
            strxml += "<apply toObject='Caption' styles='myCaptionFont' />";
            strxml += "</application>";
            strxml += "</styles>";
            strcategories += "<categories>";
            strd += "<dataset seriesName='Plot1'  color='0071bc' dashed='0' lineThickness='2'>";
            for (i = 0; i < data.message.length; i++) {
                if (data.message[i].valve_id == 5) {
                    strd += "<set value='" + data.message[i].value + "'/>";
                    strcategories += "<category label=''/>";
                }
            }

            strcategories += "</categories>";
            strd += "</dataset>";
            strxml += strcategories + strd + "</chart>";
            smlPipe1 = strxml;

            var pp1 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst5', '100%', '110%', '0', '1');
            pp1.setXMLData(smlPipe1);
            pp1.setTransparent(true);
            pp1.render('pip1chrt')

            var pp12 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst52', '100%', '110%', '0', '1');
            pp12.setXMLData(smlPipe1);
            pp12.setTransparent(true);
            pp12.render('pip1chrt2')

            var pp13 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst53', '100%', '110%', '0', '1');
            pp13.setXMLData(smlPipe1);
            pp13.setTransparent(true);
            pp13.render('pip1chrt3')


            //      small  Pipe1 Chart end


            //      Pipe2 Chart start

            strxml = "";
            strcategories = "";
            strd = "";


            strxml += "<chart canvasBgColor='FFFFFF' xAxisName='      Time' showShadow='0' drawAnchors='0' showBorder='0' formatnumberscale='0'  chartRightMargin='1' chartLeftMargin='1' numberPrefix=''  chartBottomMargin='40' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' numDivLines='8'  showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='000000' showAnchors='1' canvaspadding='0' showPlotBorder='0' divLineColor='666666' divLineThickness='1' divLineAlpha='100' vDivlineAlpha='100' vDivlineIsDashed='0' vDivlineThickness='1' vDivlineColor='b3b3b3' showAlternateHGridColor='0' divLineIsDashed='1' divLineDashLen='5' >";
            //    strxml+="<chart chartTopMargin='40'  xAxisName='Month' yAxisName='Revenue' numberPrefix='$' showValues='0'>";
            strxml += "<styles>";
            strxml += "<definition>";
            strxml += "<style name='myCaptionFont' type='font' font='Verdana' align='left' size='18' bold='1' underline='1'/>";
            strxml += "</definition>";
            strxml += "<application>";
            strxml += "<apply toObject='Caption' styles='myCaptionFont' />";
            strxml += "</application>";
            strxml += "</styles>";
            strcategories += "<categories>";
            strd += "<dataset seriesName='Plot1'  color='0071bc' dashed='0' lineThickness='2'>";
            for (i = 0; i < data.message.length; i++) {
                if (data.message[i].valve_id == 6) {
                    strd += "<set value='" + data.message[i].value + "'/>";
                    strcategories += "<category label=''/>";
                }
            }

            strcategories += "</categories>";
            strd += "</dataset>";
            strxml += strcategories + strd + "</chart>";
            smlPipe2 = strxml;

            var pp2 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst6', '100%', '110%', '0', '1');
            pp2.setXMLData(smlPipe2);
            pp2.setTransparent(true);
            pp2.render('pip2chrt');

            var pp22 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst62', '100%', '110%', '0', '1');
            pp22.setXMLData(smlPipe2);
            pp22.setTransparent(true);
            pp22.render('pip2chrt2');

            var pp23 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst63', '100%', '110%', '0', '1');
            pp23.setXMLData(smlPipe2);
            pp23.setTransparent(true);
            pp23.render('pip2chrt3');


            //      small  Pipe2 Chart end


            //      Pipe3 Chart start

            strxml = "";
            strcategories = "";
            strd = "";


            strxml += "<chart canvasBgColor='FFFFFF' xAxisName='      Time' showShadow='0' drawAnchors='0' showBorder='0' formatnumberscale='0'  chartRightMargin='1' chartLeftMargin='1' numberPrefix=''  chartBottomMargin='40' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' numDivLines='8'  showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='000000' showAnchors='1' canvaspadding='0' showPlotBorder='0' divLineColor='666666' divLineThickness='1' divLineAlpha='100' vDivlineAlpha='100' vDivlineIsDashed='0' vDivlineThickness='1' vDivlineColor='b3b3b3' showAlternateHGridColor='0' divLineIsDashed='1' divLineDashLen='5' >";
            //    strxml+="<chart chartTopMargin='40'  xAxisName='Month' yAxisName='Revenue' numberPrefix='$' showValues='0'>";
            strxml += "<styles>";
            strxml += "<definition>";
            strxml += "<style name='myCaptionFont' type='font' font='Verdana' align='left' size='18' bold='1' underline='1'/>";
            strxml += "</definition>";
            strxml += "<application>";
            strxml += "<apply toObject='Caption' styles='myCaptionFont' />";
            strxml += "</application>";
            strxml += "</styles>";
            strcategories += "<categories>";
            strd += "<dataset seriesName='Plot1'  color='0071bc' dashed='0' lineThickness='2'>";
            for (i = 0; i < data.message.length; i++) {
                if (data.message[i].valve_id == 7) {
                    strd += "<set value='" + data.message[i].value + "'/>";
                    strcategories += "<category label=''/>";
                }
            }

            strcategories += "</categories>";
            strd += "</dataset>";
            strxml += strcategories + strd + "</chart>";
            smlPipe3 = strxml;

            var pp3 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst7', '100%', '110%', '0', '1');
            pp3.setXMLData(smlPipe3);
            pp3.setTransparent(true);
            pp3.render('pip3chrt');

            var pp32 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst72', '100%', '110%', '0', '1');
            pp32.setXMLData(smlPipe3);
            pp32.setTransparent(true);
            pp32.render('pip3chrt2');

            var pp33 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst73', '100%', '110%', '0', '1');
            pp33.setXMLData(smlPipe3);
            pp33.setTransparent(true);
            pp33.render('pip3chrt3');


            //      small  Pipe3 Chart end


            //      Kill1 Chart start

            strxml = "";
            strcategories = "";
            strd = "";

            strxml += "<chart canvasBgColor='FFFFFF' xAxisName='      Time' showShadow='0' drawAnchors='0' showBorder='0' formatnumberscale='0'  chartRightMargin='1' chartLeftMargin='1' numberPrefix=''  chartBottomMargin='40' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' numDivLines='8'  showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='000000' showAnchors='1' canvaspadding='0' showPlotBorder='0' divLineColor='666666' divLineThickness='1' divLineAlpha='100' vDivlineAlpha='100' vDivlineIsDashed='0' vDivlineThickness='1' vDivlineColor='b3b3b3' showAlternateHGridColor='0' divLineIsDashed='1' divLineDashLen='5' >";
            //    strxml+="<chart chartTopMargin='40'  xAxisName='Month' yAxisName='Revenue' numberPrefix='$' showValues='0'>";
            strxml += "<styles>";
            strxml += "<definition>";
            strxml += "<style name='myCaptionFont' type='font' font='Verdana' align='left' size='18' bold='1' underline='1'/>";
            strxml += "</definition>";
            strxml += "<application>";
            strxml += "<apply toObject='Caption' styles='myCaptionFont' />";
            strxml += "</application>";
            strxml += "</styles>";
            strcategories += "<categories>";
            strd += "<dataset seriesName='Plot1'  color='0071bc' dashed='0' lineThickness='2'>";
            for (i = 0; i < data.message.length; i++) {
                if (data.message[i].valve_id == 8) {
                    strd += "<set value='" + data.message[i].value + "'/>";
                    strcategories += "<category label=''/>";
                }
            }


            strcategories += "</categories>";
            strd += "</dataset>";
            strxml += strcategories + strd + "</chart>";
            smlKill1 = strxml;

            var kll1 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst8', '100%', '110%', '0', '1');
            kll1.setXMLData(smlKill1);
            kll1.setTransparent(true);
            kll1.render('kll1chrt');

            var kll12 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst82', '100%', '110%', '0', '1');
            kll12.setXMLData(smlKill1);
            kll12.setTransparent(true);
            kll12.render('kll1chrt2');

            var kll13 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst83', '100%', '110%', '0', '1');
            kll13.setXMLData(smlKill1);
            kll13.setTransparent(true);
            kll13.render('kll1chrt3');


            //      small  Kill1 Chart end


            //      Kill2 Chart start

            strxml = "";
            strcategories = "";
            strd = "";


            strxml += "<chart canvasBgColor='FFFFFF' xAxisName='      Time' showShadow='0' drawAnchors='0' showBorder='0' formatnumberscale='0'  chartRightMargin='1' chartLeftMargin='1' numberPrefix=''  chartBottomMargin='40' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' numDivLines='8'  showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='000000' showAnchors='1' canvaspadding='0' showPlotBorder='0' divLineColor='666666' divLineThickness='1' divLineAlpha='100' vDivlineAlpha='100' vDivlineIsDashed='0' vDivlineThickness='1' vDivlineColor='b3b3b3' showAlternateHGridColor='0' divLineIsDashed='1' divLineDashLen='5' >";
            //    strxml+="<chart chartTopMargin='40'  xAxisName='Month' yAxisName='Revenue' numberPrefix='$' showValues='0'>";
            strxml += "<styles>";
            strxml += "<definition>";
            strxml += "<style name='myCaptionFont' type='font' font='Verdana' align='left' size='18' bold='1' underline='1'/>";
            strxml += "</definition>";
            strxml += "<application>";
            strxml += "<apply toObject='Caption' styles='myCaptionFont' />";
            strxml += "</application>";
            strxml += "</styles>";
            strcategories += "<categories>";
            strd += "<dataset seriesName='Plot1'  color='0071bc' dashed='0' lineThickness='2'>";
            for (i = 0; i < data.message.length; i++) {
                if (data.message[i].valve_id == 9) {
                    strd += "<set value='" + data.message[i].value + "'/>";
                    strcategories += "<category label=''/>";
                }
            }


            strcategories += "</categories>";
            strd += "</dataset>";
            strxml += strcategories + strd + "</chart>";
            smlKill2 = strxml;

            var kll2 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst9', '100%', '110%', '0', '1');
            kll2.setXMLData(smlKill2);
            kll2.setTransparent(true);
            kll2.render('kll2chrt');

            var kll22 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst92', '100%', '110%', '0', '1');
            kll22.setXMLData(smlKill2);
            kll22.setTransparent(true);
            kll22.render('kll2chrt2');

            var kll23 = new FusionCharts('FusionCharts/MSline.swf', 'chart-vlst93', '100%', '110%', '0', '1');
            kll23.setXMLData(smlKill2);
            kll23.setTransparent(true);
            kll23.render('kll2chrt3');


            //      small  Kill2 Chart end


            //big chart

            //Annular chart

            strxml = "";
            strcategories = "";
            strd = "";

            strxml += "<chart canvasBgColor='FFFFFF' xAxisName='Time'  yAxisName='Response time(s)' showShadow='0' drawAnchors='0' showBorder='0' formatnumberscale='0'  chartRightMargin='1' chartLeftMargin='1' numberPrefix=''  chartBottomMargin='40' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' numDivLines='8'  showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='000000' showAnchors='1' canvaspadding='0' showPlotBorder='0' divLineColor='666666' divLineThickness='1' divLineAlpha='100' vDivlineAlpha='100' vDivlineIsDashed='0' vDivlineThickness='1' vDivlineColor='b3b3b3' showAlternateHGridColor='0' divLineIsDashed='1' divLineDashLen='5' >";

            //    strxml+="<chart chartTopMargin='40'  xAxisName='Month' yAxisName='Revenue' numberPrefix='$' showValues='0'>";
            strxml += "<styles>";
            strxml += "<definition>";
            strxml += "<style name='xaxisfont' type='font' font='Verdana' align='left' size='14' bold='1' underline='0'/>";
            strxml += "<style name='yaxisfont' type='font' font='Verdana' align='left' size='10' bold='1' underline='0'/>";
            strxml += "</definition>";
            strxml += "<application>";
            strxml += "<apply toObject='YAxisName' styles='yaxisfont' />";
            strxml += "<apply toObject='XAxisName' styles='xaxisfont' />";
            strxml += "</application>";
            strxml += "</styles>"
            strcategories += "<categories>";
            strd += "<dataset seriesName='Plot1'  color='0071bc' dashed='0' lineThickness='2'>";

            for (i = 0; i < data.message.length; i++) {
                if (data.message[i].valve_id == 1) {
                    strd += "<set value='" + data.message[i].value + "'/>";
                    strcategories += "<category label=''/>";
                }
            }

            strcategories += "</categories>";
            strd += "</dataset>";
            strxml += strcategories + strd + "</chart>";

            BAnn = strxml;

            var bigannu = new FusionCharts('FusionCharts/MSline.swf', 'chart-bigannu', '100%', '110%', '0', '1');
            bigannu.setXMLData(BAnn);
            bigannu.setTransparent(true);
            bigannu.render('bigAnn');


            //BlindShear chart


            strxml = "";
            strcategories = "";
            strd = "";


            strxml += "<chart canvasBgColor='FFFFFF' xAxisName='Time' yAxisName='Response time(s)' showShadow='0' drawAnchors='0' showBorder='0' formatnumberscale='0'  chartRightMargin='1' chartLeftMargin='1' numberPrefix=''  chartBottomMargin='40' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' numDivLines='8'  showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='000000' showAnchors='1' canvaspadding='0' showPlotBorder='0' divLineColor='666666' divLineThickness='1' divLineAlpha='100' vDivlineAlpha='100' vDivlineIsDashed='0' vDivlineThickness='1' vDivlineColor='b3b3b3' showAlternateHGridColor='0' divLineIsDashed='1' divLineDashLen='5' >";
            //    strxml+="<chart chartTopMargin='40'  xAxisName='Month' yAxisName='Revenue' numberPrefix='$' showValues='0'>";
            strxml += "<styles>";
            strxml += "<definition>";
            strxml += "<style name='xaxisfont' type='font' font='Verdana' align='left' size='14' bold='1' underline='0'/>";
            strxml += "<style name='yaxisfont' type='font' font='Verdana' align='left' size='10' bold='1' underline='0'/>";
            strxml += "</definition>";
            strxml += "<application>";
            strxml += "<apply toObject='YAxisName' styles='yaxisfont' />";
            strxml += "<apply toObject='XAxisName' styles='xaxisfont' />";
            strxml += "</application>";
            strxml += "</styles>";
            strcategories += "<categories>";
            strd += "<dataset seriesName='Plot1'  color='0071bc' dashed='0' lineThickness='2'>";
            for (i = 0; i < data.message.length; i++) {
                if (data.message[i].valve_id == 2) {
                    strd += "<set value='" + data.message[i].value + "'/>";
                    strcategories += "<category label=''/>";
                }
            }

            strcategories += "</categories>";
            strd += "</dataset>";
            strxml += strcategories + strd + "</chart>";

            BBs = strxml;
            var bigbshr = new FusionCharts('FusionCharts/MSline.swf', 'chart-bigshear', '100%', '110%', '0', '1');
            bigbshr.setXMLData(BBs);
            bigbshr.setTransparent(true);
            bigbshr.render('bigBs');


            //Choke1 chart

            strxml = "";
            strcategories = "";
            strd = "";


            strxml += "<chart canvasBgColor='FFFFFF' xAxisName='Time' yAxisName='Response time(s)' showShadow='0' drawAnchors='0' showBorder='0' formatnumberscale='0'  chartRightMargin='1' chartLeftMargin='1' numberPrefix=''  chartBottomMargin='40' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' numDivLines='8'  showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='000000' showAnchors='1' canvaspadding='0' showPlotBorder='0' divLineColor='666666' divLineThickness='1' divLineAlpha='100' vDivlineAlpha='100' vDivlineIsDashed='0' vDivlineThickness='1' vDivlineColor='b3b3b3' showAlternateHGridColor='0' divLineIsDashed='1' divLineDashLen='5' >";
            //    strxml+="<chart chartTopMargin='40'  xAxisName='Month' yAxisName='Revenue' numberPrefix='$' showValues='0'>";
            strxml += "<styles>";
            strxml += "<definition>";
            strxml += "<style name='xaxisfont' type='font' font='Verdana' align='left' size='14' bold='1' underline='0'/>";
            strxml += "<style name='yaxisfont' type='font' font='Verdana' align='left' size='10' bold='1' underline='0'/>";
            strxml += "</definition>";
            strxml += "<application>";
            strxml += "<apply toObject='YAxisName' styles='yaxisfont' />";
            strxml += "<apply toObject='XAxisName' styles='xaxisfont' />";
            strxml += "</application>";
            strxml += "</styles>";
            strcategories += "<categories>";
            strd += "<dataset seriesName='Plot1'  color='0071bc' dashed='0' lineThickness='2'>";
            for (i = 0; i < data.message.length; i++) {
                if (data.message[i].valve_id == 3) {
                    strd += "<set value='" + data.message[i].value + "'/>";
                    strcategories += "<category label=''/>";
                }
            }
            strcategories += "</categories>";
            strd += "</dataset>";
            strxml += strcategories + strd + "</chart>";

            Bchk1 = strxml;

            var bigchk1 = new FusionCharts('FusionCharts/MSline.swf', 'chart-bigchk1', '100%', '110%', '0', '1');
            bigchk1.setXMLData(Bchk1);
            bigchk1.setTransparent(true);
            bigchk1.render('bigchk1');


            //Choke2 chart


            strxml = "";
            strcategories = "";
            strd = "";


            strxml += "<chart canvasBgColor='FFFFFF' xAxisName='Time' yAxisName='Response time(s)' showShadow='0' drawAnchors='0' showBorder='0' formatnumberscale='0'  chartRightMargin='1' chartLeftMargin='1' numberPrefix=''  chartBottomMargin='40' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' numDivLines='8'  showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='000000' showAnchors='1' canvaspadding='0' showPlotBorder='0' divLineColor='666666' divLineThickness='1' divLineAlpha='100' vDivlineAlpha='100' vDivlineIsDashed='0' vDivlineThickness='1' vDivlineColor='b3b3b3' showAlternateHGridColor='0' divLineIsDashed='1' divLineDashLen='5' >";
            //    strxml+="<chart chartTopMargin='40'  xAxisName='Month' yAxisName='Revenue' numberPrefix='$' showValues='0'>";
            strxml += "<styles>";
            strxml += "<definition>";
            strxml += "<style name='xaxisfont' type='font' font='Verdana' align='left' size='14' bold='1' underline='0'/>";
            strxml += "<style name='yaxisfont' type='font' font='Verdana' align='left' size='10' bold='1' underline='0'/>";
            strxml += "</definition>";
            strxml += "<application>";
            strxml += "<apply toObject='YAxisName' styles='yaxisfont' />";
            strxml += "<apply toObject='XAxisName' styles='xaxisfont' />";
            strxml += "</application>";
            strxml += "</styles>";
            strcategories += "<categories>";
            strd += "<dataset seriesName='Plot1'  color='0071bc' dashed='0' lineThickness='2'>";
            for (i = 0; i < data.message.length; i++) {
                if (data.message[i].valve_id == 4) {
                    strd += "<set value='" + data.message[i].value + "'/>";
                    strcategories += "<category label=''/>";
                }
            }

            strcategories += "</categories>";
            strd += "</dataset>";
            strxml += strcategories + strd + "</chart>";

            Bchk2 = strxml;
            var bigchk2 = new FusionCharts('FusionCharts/MSline.swf', 'chart-bigchk2', '100%', '110%', '0', '1');
            bigchk2.setXMLData(Bchk2);
            bigchk2.setTransparent(true);
            bigchk2.render('bigchk2');


            //Pipe1 chart


            strxml = "";
            strcategories = "";
            strd = "";


            strxml += "<chart canvasBgColor='FFFFFF' xAxisName='Time' yAxisName='Response time(s)' showShadow='0' drawAnchors='0' showBorder='0' formatnumberscale='0'  chartRightMargin='1' chartLeftMargin='1' numberPrefix=''  chartBottomMargin='40' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' numDivLines='8'  showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='000000' showAnchors='1' canvaspadding='0' showPlotBorder='0' divLineColor='666666' divLineThickness='1' divLineAlpha='100' vDivlineAlpha='100' vDivlineIsDashed='0' vDivlineThickness='1' vDivlineColor='b3b3b3' showAlternateHGridColor='0' divLineIsDashed='1' divLineDashLen='5' >";
            //    strxml+="<chart chartTopMargin='40'  xAxisName='Month' yAxisName='Revenue' numberPrefix='$' showValues='0'>";
            strxml += "<styles>";
            strxml += "<definition>";
            strxml += "<style name='xaxisfont' type='font' font='Verdana' align='left' size='14' bold='1' underline='0'/>";
            strxml += "<style name='yaxisfont' type='font' font='Verdana' align='left' size='10' bold='1' underline='0'/>";
            strxml += "</definition>";
            strxml += "<application>";
            strxml += "<apply toObject='YAxisName' styles='yaxisfont' />";
            strxml += "<apply toObject='XAxisName' styles='xaxisfont' />";
            strxml += "</application>";
            strxml += "</styles>";
            strcategories += "<categories>";
            strd += "<dataset seriesName='Plot1'  color='0071bc' dashed='0' lineThickness='2'>";

            for (i = 0; i < data.message.length; i++) {
                if (data.message[i].valve_id == 5) {
                    strd += "<set value='" + data.message[i].value + "'/>";
                    strcategories += "<category label=''/>";
                }
            }

            strcategories += "</categories>";
            strd += "</dataset>";
            strxml += strcategories + strd + "</chart>";

            Bpip1 = strxml;
            var bigp1 = new FusionCharts('FusionCharts/MSline.swf', 'chart-bigpp1', '100%', '110%', '0', '1');
            bigp1.setXMLData(Bpip1);
            bigp1.setTransparent(true);
            bigp1.render('bigpp1');


            //Pipe2 chart


            strxml = "";
            strcategories = "";
            strd = "";

            strxml += "<chart canvasBgColor='FFFFFF' xAxisName='Time' yAxisName='Response time(s)' showShadow='0' drawAnchors='0' showBorder='0' formatnumberscale='0'  chartRightMargin='1' chartLeftMargin='1' numberPrefix=''  chartBottomMargin='40' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' numDivLines='8'  showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='000000' showAnchors='1' canvaspadding='0' showPlotBorder='0' divLineColor='666666' divLineThickness='1' divLineAlpha='100' vDivlineAlpha='100' vDivlineIsDashed='0' vDivlineThickness='1' vDivlineColor='b3b3b3' showAlternateHGridColor='0' divLineIsDashed='1' divLineDashLen='5' >";
            //    strxml+="<chart chartTopMargin='40'  xAxisName='Month' yAxisName='Revenue' numberPrefix='$' showValues='0'>";
            strxml += "<styles>";
            strxml += "<definition>";
            strxml += "<style name='xaxisfont' type='font' font='Verdana' align='left' size='14' bold='1' underline='0'/>";
            strxml += "<style name='yaxisfont' type='font' font='Verdana' align='left' size='10' bold='1' underline='0'/>";
            strxml += "</definition>";
            strxml += "<application>";
            strxml += "<apply toObject='YAxisName' styles='yaxisfont' />";
            strxml += "<apply toObject='XAxisName' styles='xaxisfont' />";
            strxml += "</application>";
            strxml += "</styles>";
            strcategories += "<categories>";
            strd += "<dataset seriesName='Plot1'  color='0071bc' dashed='0' lineThickness='2'>";
            for (i = 0; i < data.message.length; i++) {
                if (data.message[i].valve_id == 6) {
                    strd += "<set value='" + data.message[i].value + "'/>";
                    strcategories += "<category label=''/>";
                }
            }

            strcategories += "</categories>";
            strd += "</dataset>";
            strxml += strcategories + strd + "</chart>";

            Bpip2 = strxml;

            var bigp2 = new FusionCharts('FusionCharts/MSline.swf', 'chart-bigpp2', '100%', '110%', '0', '1');
            bigp2.setXMLData(Bpip2);
            bigp2.setTransparent(true);
            bigp2.render('bigpp2');


            //Pipe3 chart

            strxml = "";
            strcategories = "";
            strd = "";

            strxml += "<chart canvasBgColor='FFFFFF' xAxisName='Time' yAxisName='Response time(s)' showShadow='0' drawAnchors='0' showBorder='0' formatnumberscale='0'  chartRightMargin='1' chartLeftMargin='1' numberPrefix=''  chartBottomMargin='40' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' numDivLines='8'  showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='000000' showAnchors='1' canvaspadding='0' showPlotBorder='0' divLineColor='666666' divLineThickness='1' divLineAlpha='100' vDivlineAlpha='100' vDivlineIsDashed='0' vDivlineThickness='1' vDivlineColor='b3b3b3' showAlternateHGridColor='0' divLineIsDashed='1' divLineDashLen='5' >";
            //    strxml+="<chart chartTopMargin='40'  xAxisName='Month' yAxisName='Revenue' numberPrefix='$' showValues='0'>";
            strxml += "<styles>";
            strxml += "<definition>";
            strxml += "<style name='xaxisfont' type='font' font='Verdana' align='left' size='14' bold='1' underline='0'/>";
            strxml += "<style name='yaxisfont' type='font' font='Verdana' align='left' size='10' bold='1' underline='0'/>";
            strxml += "</definition>";
            strxml += "<application>";
            strxml += "<apply toObject='YAxisName' styles='yaxisfont' />";
            strxml += "<apply toObject='XAxisName' styles='xaxisfont' />";
            strxml += "</application>";
            strxml += "</styles>";
            strcategories += "<categories>";
            strd += "<dataset seriesName='Plot1'  color='0071bc' dashed='0' lineThickness='2'>";
            for (i = 0; i < data.message.length; i++) {
                if (data.message[i].valve_id == 7) {
                    strd += "<set value='" + data.message[i].value + "'/>";
                    strcategories += "<category label=''/>";
                }
            }

            strcategories += "</categories>";
            strd += "</dataset>";
            strxml += strcategories + strd + "</chart>";

            Bpip3 = strxml;
            var bigp3 = new FusionCharts('FusionCharts/MSline.swf', 'chart-bigpp3', '100%', '110%', '0', '1');
            bigp3.setXMLData(Bpip3);
            bigp3.setTransparent(true);
            bigp3.render('bigpp3');


            //Kill1 chart

            strxml = "";
            strcategories = "";
            strd = "";

            strxml += "<chart canvasBgColor='FFFFFF' xAxisName='Time' yAxisName='Response time(s)' showShadow='0' drawAnchors='0' showBorder='0' formatnumberscale='0'  chartRightMargin='1' chartLeftMargin='1' numberPrefix=''  chartBottomMargin='40' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' numDivLines='8'  showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='000000' showAnchors='1' canvaspadding='0' showPlotBorder='0' divLineColor='666666' divLineThickness='1' divLineAlpha='100' vDivlineAlpha='100' vDivlineIsDashed='0' vDivlineThickness='1' vDivlineColor='b3b3b3' showAlternateHGridColor='0' divLineIsDashed='1' divLineDashLen='5' >";
            //    strxml+="<chart chartTopMargin='40'  xAxisName='Month' yAxisName='Revenue' numberPrefix='$' showValues='0'>";
            strxml += "<styles>";
            strxml += "<definition>";
            strxml += "<style name='xaxisfont' type='font' font='Verdana' align='left' size='14' bold='1' underline='0'/>";
            strxml += "<style name='yaxisfont' type='font' font='Verdana' align='left' size='10' bold='1' underline='0'/>";
            strxml += "</definition>";
            strxml += "<application>";
            strxml += "<apply toObject='YAxisName' styles='yaxisfont' />";
            strxml += "<apply toObject='XAxisName' styles='xaxisfont' />";
            strxml += "</application>";
            strxml += "</styles>";
            strcategories += "<categories>";
            strd += "<dataset seriesName='Plot1'  color='0071bc' dashed='0' lineThickness='2'>";
            for (i = 0; i < data.message.length; i++) {
                if (data.message[i].valve_id == 8) {
                    strd += "<set value='" + data.message[i].value + "'/>";
                    strcategories += "<category label=''/>";
                }
            }

            strcategories += "</categories>";
            strd += "</dataset>";
            strxml += strcategories + strd + "</chart>";

            Bkl1 = strxml;

            var bigkll1 = new FusionCharts('FusionCharts/MSline.swf', 'chart-bigkll1', '100%', '110%', '0', '1');
            bigkll1.setXMLData(Bkl1);
            bigkll1.setTransparent(true);
            bigkll1.render('bigkll1');

            //Kill2 chart

            strxml = "";
            strcategories = "";
            strd = "";

            strxml += "<chart canvasBgColor='FFFFFF' xAxisName='Time' yAxisName='Response time(s)' showShadow='0' drawAnchors='0' showBorder='0' formatnumberscale='0'  chartRightMargin='1' chartLeftMargin='1' numberPrefix=''  chartBottomMargin='40' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' numDivLines='8'  showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='000000' showAnchors='1' canvaspadding='0' showPlotBorder='0' divLineColor='666666' divLineThickness='1' divLineAlpha='100' vDivlineAlpha='100' vDivlineIsDashed='0' vDivlineThickness='1' vDivlineColor='b3b3b3' showAlternateHGridColor='0' divLineIsDashed='1' divLineDashLen='5' >";
            //    strxml+="<chart chartTopMargin='40'  xAxisName='Month' yAxisName='Revenue' numberPrefix='$' showValues='0'>";
            strxml += "<styles>";
            strxml += "<definition>";
            strxml += "<style name='xaxisfont' type='font' font='Verdana' align='left' size='14' bold='1' underline='0'/>";
            strxml += "<style name='yaxisfont' type='font' font='Verdana' align='left' size='10' bold='1' underline='0'/>";
            strxml += "</definition>";
            strxml += "<application>";
            strxml += "<apply toObject='YAxisName' styles='yaxisfont' />";
            strxml += "<apply toObject='XAxisName' styles='xaxisfont' />";
            strxml += "</application>";
            strxml += "</styles>";
            strcategories += "<categories>";
            strd += "<dataset seriesName='Plot1'  color='0071bc' dashed='0' lineThickness='2'>";
            for (i = 0; i < data.message.length; i++) {
                if (data.message[i].valve_id == 9) {
                    strd += "<set value='" + data.message[i].value + "'/>";
                    strcategories += "<category label=''/>";
                }
            }

            strcategories += "</categories>";
            strd += "</dataset>";
            strxml += strcategories + strd + "</chart>";

            Bkl2 = strxml;
            var bigkll2 = new FusionCharts('FusionCharts/MSline.swf', 'chart-bigkll2', '100%', '110%', '0', '1');
            bigkll2.setXMLData(Bkl2);
            bigkll2.setTransparent(true);
            bigkll2.render('bigkll2');
        }

    });
    }


function bigchart(a) {
    if (a == 1) {
    $('#bigAnn').show();
    $('#bigBs').hide();
    $('#bigchk1').hide();
    $('#bigchk2').hide();
    $('#bigpp1').hide();
    $('#bigpp2').hide();
    $('#bigpp3').hide();
    $('#bigkll1').hide();
    $('#bigkll2').hide();


    $('#info').text('Annular Valve');

    }

    else if (a == 2) {
    $('#bigAnn').hide();
    $('#bigBs').show();
    $('#bigchk1').hide();
    $('#bigchk2').hide();
    $('#bigpp1').hide();
    $('#bigpp2').hide();
    $('#bigpp3').hide();
    $('#bigkll1').hide();
    $('#bigkll2').hide();

    $('#info').text('Blind Shear Valve');
    }

    else if (a == 3) {
    $('#bigAnn').hide();
    $('#bigBs').hide();
    $('#bigchk1').show();
    $('#bigchk2').hide();
    $('#bigpp1').hide();
    $('#bigpp2').hide();
    $('#bigpp3').hide();
    $('#bigkll1').hide();
    $('#bigkll2').hide();

    $('#info').text('Choke Line 1 Valve');
    }
    else if (a == 4) {
    $('#bigAnn').hide();
    $('#bigBs').hide();
    $('#bigchk1').hide();
    $('#bigchk2').show();
    $('#bigpp1').hide();
    $('#bigpp2').hide();
    $('#bigpp3').hide();
    $('#bigkll1').hide();
    $('#bigkll2').hide();

    $('#info').text('Choke Line 2 Valve');
    }
    else if (a == 5) {
    $('#bigAnn').hide();
    $('#bigBs').hide();
    $('#bigchk1').hide();
    $('#bigchk2').hide();
    $('#bigpp1').show();
    $('#bigpp2').hide();
    $('#bigpp3').hide();
    $('#bigkll1').hide();
    $('#bigkll2').hide();

    $('#info').text('Piperam 1 Valve');
    }
    else if (a == 6) {
    $('#bigAnn').hide();
    $('#bigBs').hide();
    $('#bigchk1').hide();
    $('#bigchk2').hide();
    $('#bigpp1').hide();
    $('#bigpp2').show();
    $('#bigpp3').hide();
    $('#bigkll1').hide();
    $('#bigkll2').hide();

    $('#info').text('Piperam 2 Valve');
    }
    else if (a == 7) {
    $('#bigAnn').hide();
    $('#bigBs').hide();
    $('#bigchk1').hide();
    $('#bigchk2').hide();
    $('#bigpp1').hide();
    $('#bigpp2').hide();
    $('#bigpp3').show();
    $('#bigkll1').hide();
    $('#bigkll2').hide();

    $('#info').text('Piperam 3 Valve');
    }
    else if (a == 8) {
    $('#bigAnn').hide();
    $('#bigBs').hide();
    $('#bigchk1').hide();
    $('#bigchk2').hide();
    $('#bigpp1').hide();
    $('#bigpp2').hide();
    $('#bigpp3').hide();
    $('#bigkll1').show();
    $('#bigkll2').hide();

    $('#info').text('Killline 1 Valve');
    }
    else if (a == 9) {
    $('#bigAnn').hide();
    $('#bigBs').hide();
    $('#bigchk1').hide();
    $('#bigchk2').hide();
    $('#bigpp1').hide();
    $('#bigpp2').hide();
    $('#bigpp3').hide();
    $('#bigkll1').hide();
    $('#bigkll2').show();

    $('#info').text('Killline 2 Valve');
    }
    }

function fetchdata(rigid,frm,to) {
    var f = new Date(Date.parse(frm));
    var t = new Date(Date.parse(to));

//console.log("From "+frm+"  To  "+to);
    if (f > t) {
        alert('Make sure From Date not be greater than To Date');
    }
    else {



            $.get('/bop_ctrl/' + rigid + '/' + frm + '/' + to, {}, function (data) {
                JSON.stringify(data);

                $('#lgnd_bop').show();
                $('#lgnd_chk').hide();
                var strxml = "", str_cate1 = "", Ac = "",dt="";

                strxml = "<chart chartLeftMargin='0' formatnumberscale='0' compactDataMode='1' dataSeparator='|' showBorder='0' showShadow='0' chartBottomMargin='50' showLegend='0' drawAnchors='0' legendPosition='below' bgAlpha='0,0'  showValues='1' yAxisname='Recharge Time' canvasbgalpha='60' canvasbgangle='90' canvasBorderThickness='1' canvasBorderAlpha='20' baseFontColor='000000' canvasBorderColor='000000' paletteThemeColor='C0C0C0' divLineColor='5D57A5' divLineAlpha='40' vDivLineAlpha='40' dynamicAxis='1'>";
                str_cate1 = "<categories>";
                Ac = "<dataset seriesName='Accumulator Pressure' color='0071bc' dashed='1'>";

                if(data.message.length!=0)
                {
                    for (i = 0; i < data.message.length; i++) {
                        if (data.message[i].press_id == 2) //Accumulator pressure data
                        {
                            dt=new Date(data.message[i].date_time);
                            Ac += data.message[i].pressure + '|';
                            str_cate1 +=dt.toString("dd-MM-yyyy")+" "+ dt.toString("hh:mm tt") + '|';
                        }

                    }
                }
                else
                {
                    alert('Data not available in selected range. Please check another date range.');
                }



                str_cate1 += "</categories>";

                Ac += "</dataset>";

                strxml += str_cate1 + Ac+"</chart>";


                document.getElementsByName
                FusionCharts.setCurrentRenderer('javascript');


                var line = new FusionCharts('FusionCharts/ZoomLine.swf', 'chart-121', '100%', '105%', '0', '0');
                line.setXMLData(strxml);
                line.setTransparent(true);
                line.render('bop');


            });



    }
}
