/**
 * Created by BG-NPC-0064 on 2015/1/9.
 */
$(function(){
    $('#attacktool').highcharts({
        exporting:{
            enabled:false
        },
        credits:{
            enabled:false
        },
        chart: {
            backgroundColor:'',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: ''
        },
        tooltip: {
            //pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        legend:{
            align:'right',
            layout:'vertical',
            verticalAlign:'middle'
        },
        series: [{
            type: 'pie',
            name: '数量',
            data: [
                ['SQL注入攻击',  43123],
                ['漏洞防护',  14636],
                ['协议违规',  6650],
                ['扫描工具',  4514],
                ['跨站脚本攻击',  2979],
                ['文件限制',  1656],
                ['针对IE8的跨站攻击',  926],
                ['爬虫',  366],
                ['疑似跨站攻击',  341],
                ['SQL盲注攻击',  321],
                ['RFI攻击',  88],
                ['目录信息泄露',  50],
                ['缺失报头',  15],
                ['HTTP请求提交内容长度超过设定的上限值',  5],
            ]
        }]
    });



    var myChart = echarts.init(document.getElementById('attacktooltype'));
    var option = {
        title : {
            text : '',
            subtext : ''
        },
        tooltip : {
            trigger: 'item',
            formatter : function (params) {
                return params.seriesName+" "
                    + params.value[1] ;
               /* return params.seriesName + ' （'  + '类目' + params.value[0] + '）<br/>'
                    + params.value[1] + ', '
                    + params.value[2];*/
            }
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        dataZoom: {
            show: true,
            start : 30,
            end : 70
        },
        legend : {
            data : ['SQL注入攻击','跨站脚本攻击','协议违规','文件限制']
        },
        dataRange: {
            show:false,
            min: 0,
            max: 100,
            orient: 'horizontal',
            y: 30,
            x: 'center',
            //text:['高','低'],           // 文本，默认为数值文本
            color:['lightgreen','orange'],
            splitNumber: 5
        },
        grid: {
            y2: 80
        },
        xAxis : [
            {
                type : 'time',
                splitNumber:10,
                data:[
                    new Date("2014/11/20 17:00"),
                    new Date("2014/11/20 17:01"),
                    new Date("2014/11/20 17:02"),
                    new Date("2014/11/20 17:03"),
                    new Date("2014/11/20 17:04"),
                    new Date("2014/11/20 17:05"),
                    new Date("2014/11/20 17:06"),
                    new Date("2014/11/20 17:07"),
                    new Date("2014/11/20 17:08"),
                    new Date("2014/11/20 17:09"),
                    new Date("2014/11/20 17:10"),
                    new Date("2014/11/20 17:11"),
                    new Date("2014/11/20 17:12"),
                    new Date("2014/11/20 17:13"),
                    new Date("2014/11/20 17:14"),
                    new Date("2014/11/20 17:15"),
                    new Date("2014/11/20 17:16"),
                    new Date("2014/11/20 17:17"),
                    new Date("2014/11/20 17:18"),
                    new Date("2014/11/20 17:19"),
                    new Date("2014/11/20 17:20"),
                    new Date("2014/11/20 17:21"),
                    new Date("2014/11/20 17:22"),
                    new Date("2014/11/20 17:23"),
                    new Date("2014/11/20 17:24"),
                    new Date("2014/11/20 17:25"),
                    new Date("2014/11/20 17:26"),
                    new Date("2014/11/20 17:27"),
                    new Date("2014/11/20 17:28"),
                    new Date("2014/11/20 17:29"),
                    new Date("2014/11/20 17:30"),
                    new Date("2014/11/20 17:31"),
                    new Date("2014/11/20 17:32"),
                    new Date("2014/11/20 17:33"),
                    new Date("2014/11/20 17:34"),
                    new Date("2014/11/20 17:35"),
                    new Date("2014/11/20 17:36"),
                    new Date("2014/11/20 17:37"),
                    new Date("2014/11/20 17:38"),
                    new Date("2014/11/20 17:39"),
                    new Date("2014/11/20 17:40"),
                    new Date("2014/11/20 17:41"),
                    new Date("2014/11/20 17:42"),
                    new Date("2014/11/20 17:43"),
                    new Date("2014/11/20 17:44"),
                    new Date("2014/11/20 17:45"),
                    new Date("2014/11/20 17:46"),
                    new Date("2014/11/20 17:47"),
                    new Date("2014/11/20 17:48"),
                    new Date("2014/11/20 17:49"),
                    new Date("2014/11/20 17:50"),
                    new Date("2014/11/20 17:51"),
                    new Date("2014/11/20 17:52"),
                    new Date("2014/11/20 17:53"),
                    new Date("2014/11/20 17:54"),
                    new Date("2014/11/20 17:55"),
                    new Date("2014/11/20 17:56"),
                    new Date("2014/11/20 17:57"),
                    new Date("2014/11/20 17:58"),
                    new Date("2014/11/20 17:59")
                ]
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        animation: false,
        series : [
            {
                name:'SQL注入攻击',
                type:'scatter',
                symbolSize: function (value){
                    return Math.round(value[2]/10);
                },
                data: [
                    [new Date("2014/11/20 17:00"), 	284,56.8],
                    [new Date("2014/11/20 17:01"), 	330,	66],
                    [new Date("2014/11/20 17:02"), 	321,	64.2],
                    [new Date("2014/11/20 17:03"), 	344,	68.8],
                    [new Date("2014/11/20 17:04"), 	324,	64.8],
                    [new Date("2014/11/20 17:05"), 	349,	69.8],
                    [new Date("2014/11/20 17:06"), 	236,	47.2],
                    [new Date("2014/11/20 17:07"), 	190,	38],
                    [new Date("2014/11/20 17:08"), 	158,	31.6],
                    [new Date("2014/11/20 17:09"), 	165,	33],
                    [new Date("2014/11/20 17:10"), 	150,	30],
                    [new Date("2014/11/20 17:11"), 	110,	22],
                    [new Date("2014/11/20 17:12"), 	88	,17.6],
                    [new Date("2014/11/20 17:13"), 	122,	24.4],
                    [new Date("2014/11/20 17:14"), 	211,	42.2],
                    [new Date("2014/11/20 17:15"), 	345,	69],
                    [new Date("2014/11/20 17:16"), 	289,	57.8],
                    [new Date("2014/11/20 17:17"), 	264,	52.8],
                    [new Date("2014/11/20 17:18"), 	112,	22.4],
                    [new Date("2014/11/20 17:19"), 	177,	35.4],
                    [new Date("2014/11/20 17:20"), 	122,	24.4],
                    [new Date("2014/11/20 17:21"), 	161,	32.2],
                    [new Date("2014/11/20 17:22"), 	305,	61],
                    [new Date("2014/11/20 17:23"), 	308,	61.6],
                    [new Date("2014/11/20 17:24"), 	246,	49.2],
                    [new Date("2014/11/20 17:25"), 	293,	58.6],
                    [new Date("2014/11/20 17:26"), 	334,	66.8],
                    [new Date("2014/11/20 17:27"), 	356,	71.2],
                    [new Date("2014/11/20 17:28"), 	310,	62],
                    [new Date("2014/11/20 17:29"), 	264,	52.8],
                    [new Date("2014/11/20 17:30"), 	274,	54.8],
                    [new Date("2014/11/20 17:31"), 	357,	71.4],
                    [new Date("2014/11/20 17:32"), 	338,	67.6],
                    [new Date("2014/11/20 17:33"), 	250,	50],
                    [new Date("2014/11/20 17:34"), 	286,	57.2],
                    [new Date("2014/11/20 17:35"), 	321,	64.2],
                    [new Date("2014/11/20 17:36"), 	350,	70],
                    [new Date("2014/11/20 17:37"), 	242,	48.4],
                    [new Date("2014/11/20 17:38"), 	171,	34.2],
                    [new Date("2014/11/20 17:39"), 	184,	36.8],
                    [new Date("2014/11/20 17:40"), 	213,	42.6],
                    [new Date("2014/11/20 17:41"), 	163,	32.6],
                    [new Date("2014/11/20 17:42"), 	195,	39],
                    [new Date("2014/11/20 17:43"), 	160,	32],
                    [new Date("2014/11/20 17:44"), 	112,	22.4],
                    [new Date("2014/11/20 17:45"), 	205,	41],
                    [new Date("2014/11/20 17:46"), 	164,	32.8],
                    [new Date("2014/11/20 17:47"), 	486,	97.2],
                    [new Date("2014/11/20 17:48"), 	131,	26.2],
                    [new Date("2014/11/20 17:49"), 	64	,12.8],
                    [new Date("2014/11/20 17:50"), 	162,	32.4],
                    [new Date("2014/11/20 17:51"), 	304,	60.8],
                    [new Date("2014/11/20 17:52"), 	300,	60],
                    [new Date("2014/11/20 17:53"), 	193,	38.6],
                    [new Date("2014/11/20 17:54"), 	165,	33],
                    [new Date("2014/11/20 17:55"), 	208,	41.6],
                    [new Date("2014/11/20 17:56"), 	316,	63.2],
                    [new Date("2014/11/20 17:57"), 	391,	78.2],
                    [new Date("2014/11/20 17:58"), 	183,	36.6],
                    [new Date("2014/11/20 17:59"), 	177,	35.4]

                ]
            }
            ,
            {
                 name:'跨站脚本攻击',
                 type:'scatter',
                 symbolSize: function (value){
                    return Math.round(value[2]/10);
                 },
                 data:[[new Date("2014/11/20 17:00"),	7	,1.4],
                     [new Date("2014/11/20 17:01"),	9	,1.8],
                     [new Date("2014/11/20 17:02"),	1	,0.2],
                     [new Date("2014/11/20 17:03"),	8	,1.6],
                     [new Date("2014/11/20 17:04"),	3	,0.6],
                     [new Date("2014/11/20 17:05"),	13,	2.6],
                     [new Date("2014/11/20 17:06"),	6	,1.2],
                     [new Date("2014/11/20 17:07"),	15,	3],
                     [new Date("2014/11/20 17:08"),	9	,1.8],
                     [new Date("2014/11/20 17:09"),	2	,0.4],
                     [new Date("2014/11/20 17:10"),	7	,1.4],
                     [new Date("2014/11/20 17:11"),	2	,0.4],
                     [new Date("2014/11/20 17:12"),	1	,0.2],
                     [new Date("2014/11/20 17:13"),	6	,1.2],
                     [new Date("2014/11/20 17:14"),	0	,0],
                     [new Date("2014/11/20 17:15"),	24,	4.8],
                     [new Date("2014/11/20 17:16"),	14,	2.8],
                     [new Date("2014/11/20 17:17"),	16,	3.2],
                     [new Date("2014/11/20 17:18"),	19,	3.8],
                     [new Date("2014/11/20 17:19"),	31,	6.2],
                     [new Date("2014/11/20 17:20"),	44,	8.8],
                     [new Date("2014/11/20 17:21"),	32,	6.4],
                     [new Date("2014/11/20 17:22"),	4	,0.8],
                     [new Date("2014/11/20 17:23"),	66,	13.2],
                     [new Date("2014/11/20 17:24"),	58,	11.6],
                     [new Date("2014/11/20 17:25"),	32,	6.4],
                     [new Date("2014/11/20 17:26"),	37,	7.4],
                     [new Date("2014/11/20 17:27"),	43,	8.6],
                     [new Date("2014/11/20 17:28"),	21,	4.2],
                     [new Date("2014/11/20 17:29"),	14,	2.8],
                     [new Date("2014/11/20 17:30"),	18,	3.6],
                     [new Date("2014/11/20 17:31"),	2	,0.4],
                     [new Date("2014/11/20 17:32"),	7	,1.4],
                     [new Date("2014/11/20 17:33"),	5	,1],
                     [new Date("2014/11/20 17:34"),	0	,0],
                     [new Date("2014/11/20 17:35"),	5	,1],
                     [new Date("2014/11/20 17:36"),	6	,1.2],
                     [new Date("2014/11/20 17:37"),	1	,0.2],
                     [new Date("2014/11/20 17:38"),	0	,0],
                     [new Date("2014/11/20 17:39"),	4	,0.8],
                     [new Date("2014/11/20 17:40"),	2	,0.4],
                     [new Date("2014/11/20 17:41"),	0	,0],
                     [new Date("2014/11/20 17:42"),	0	,0],
                     [new Date("2014/11/20 17:43"),	16,	3.2],
                     [new Date("2014/11/20 17:44"),	2	,0.4],
                     [new Date("2014/11/20 17:45"),	0	,0],
                     [new Date("2014/11/20 17:46"),	1	,0.2],
                     [new Date("2014/11/20 17:47"),	10,	2],
                     [new Date("2014/11/20 17:48"),	22,	4.4],
                     [new Date("2014/11/20 17:49"),	2	,0.4],
                     [new Date("2014/11/20 17:50"),	1	,0.2],
                     [new Date("2014/11/20 17:51"),	18,	3.6],
                     [new Date("2014/11/20 17:52"),	20,	4],
                     [new Date("2014/11/20 17:53"),	39,	7.8],
                     [new Date("2014/11/20 17:54"),	5	,1],
                     [new Date("2014/11/20 17:55"),	23,	4.6],
                     [new Date("2014/11/20 17:56"),	21,	4.2],
                     [new Date("2014/11/20 17:57"),	32,	6.4],
                     [new Date("2014/11/20 17:58"),	20,	4],
                     [new Date("2014/11/20 17:59"),	13,	2.6]
                 ]
             }
            ,
            {
                name:'协议违规',
                type:'scatter',
                symbolSize: function (value){
                    return Math.round(value[2]/10);
                },
                data:[
                    [new Date("2014/11/20 17:00"),	45,	9],
                    [new Date("2014/11/20 17:01"),	62,	12.4],
                    [new Date("2014/11/20 17:02"),	60,	12],
                    [new Date("2014/11/20 17:03"),	57,	11.4],
                    [new Date("2014/11/20 17:04"),	51,	10.2],
                    [new Date("2014/11/20 17:05"),	60,	12],
                    [new Date("2014/11/20 17:06"),	43,	8.6],
                    [new Date("2014/11/20 17:07"),	61,	12.2],
                    [new Date("2014/11/20 17:08"),	49,	9.8],
                    [new Date("2014/11/20 17:09"),	30,	6],
                    [new Date("2014/11/20 17:10"),	20,	4],
                    [new Date("2014/11/20 17:11"),	20,	4],
                    [new Date("2014/11/20 17:12"),	14,	2.8],
                    [new Date("2014/11/20 17:13"),	14,	2.8],
                    [new Date("2014/11/20 17:14"),	33,	6.6],
                    [new Date("2014/11/20 17:15"),	47,	9.4],
                    [new Date("2014/11/20 17:16"),	57,	11.4],
                    [new Date("2014/11/20 17:17"),	43,	8.6],
                    [new Date("2014/11/20 17:18"),	34,	6.8],
                    [new Date("2014/11/20 17:19"),	46,	9.2],
                    [new Date("2014/11/20 17:20"),	43,	8.6],
                    [new Date("2014/11/20 17:21"),	57,	11.4],
                    [new Date("2014/11/20 17:22"),	49,	9.8],
                    [new Date("2014/11/20 17:23"),	37,	7.4],
                    [new Date("2014/11/20 17:24"),	57,	11.4],
                    [new Date("2014/11/20 17:25"),	56,	11.2],
                    [new Date("2014/11/20 17:26"),	36,	7.2],
                    [new Date("2014/11/20 17:27"),	37,	7.4],
                    [new Date("2014/11/20 17:28"),	56,	11.2],
                    [new Date("2014/11/20 17:29"),	64,	12.8],
                    [new Date("2014/11/20 17:30"),	34,	6.8],
                    [new Date("2014/11/20 17:31"),	44,	8.8],
                    [new Date("2014/11/20 17:32"),	55,	11],
                    [new Date("2014/11/20 17:33"),	54,	10.8],
                    [new Date("2014/11/20 17:34"),	44,	8.8],
                    [new Date("2014/11/20 17:35"),	42,	8.4],
                    [new Date("2014/11/20 17:36"),	55,	11],
                    [new Date("2014/11/20 17:37"),	52,	10.4],
                    [new Date("2014/11/20 17:38"),	36,	7.2],
                    [new Date("2014/11/20 17:39"),	30,	6],
                    [new Date("2014/11/20 17:40"),	27,	5.4],
                    [new Date("2014/11/20 17:41"),	25,	5],
                    [new Date("2014/11/20 17:42"),	29,	5.8],
                    [new Date("2014/11/20 17:43"),	34,	6.8],
                    [new Date("2014/11/20 17:44"),	29,	5.8],
                    [new Date("2014/11/20 17:45"),	25,	5],
                    [new Date("2014/11/20 17:46"),	32,	6.4],
                    [new Date("2014/11/20 17:47"),	58,	11.6],
                    [new Date("2014/11/20 17:48"),	60,	12],
                    [new Date("2014/11/20 17:49"),	40,	8],
                    [new Date("2014/11/20 17:50"),	16,	3.2],
                    [new Date("2014/11/20 17:51"),	44,	8.8],
                    [new Date("2014/11/20 17:52"),	68,	13.6],
                    [new Date("2014/11/20 17:53"),	64,	12.8],
                    [new Date("2014/11/20 17:54"),	66,	13.2],
                    [new Date("2014/11/20 17:55"),	37,	7.4],
                    [new Date("2014/11/20 17:56"),	65,	13],
                    [new Date("2014/11/20 17:57"),	77,	15.4],
                    [new Date("2014/11/20 17:58"),	79,	15.8],
                    [new Date("2014/11/20 17:59"),	46,	9.2]
                ]
            }
            ,
            {
                name:'文件限制',
                type:'scatter',
                symbolSize: function (value){
                    return Math.round(value[2]/10);
                },
                data:[
                    [new Date("2014/11/20 17:00"),	19,	3.8],
                    [new Date("2014/11/20 17:01"),	8	,1.6],
                    [new Date("2014/11/20 17:02"),	19,	3.8],
                    [new Date("2014/11/20 17:03"),	4	,0.8],
                    [new Date("2014/11/20 17:04"),	15,	3],
                    [new Date("2014/11/20 17:05"),	3	,0.6],
                    [new Date("2014/11/20 17:06"),	21,	4.2],
                    [new Date("2014/11/20 17:07"),	3	,0.6],
                    [new Date("2014/11/20 17:08"),	3	,0.6],
                    [new Date("2014/11/20 17:09"),	1	,0.2],
                    [new Date("2014/11/20 17:10"),	14,	2.8],
                    [new Date("2014/11/20 17:11"),	1	,0.2],
                    [new Date("2014/11/20 17:12"),	14,	2.8],
                    [new Date("2014/11/20 17:13"),	0	,0],
                    [new Date("2014/11/20 17:14"),	0	,0],
                    [new Date("2014/11/20 17:15"),	3	,0.6],
                    [new Date("2014/11/20 17:16"),	18,	3.6],
                    [new Date("2014/11/20 17:17"),	34,	6.8],
                    [new Date("2014/11/20 17:18"),	45,	9],
                    [new Date("2014/11/20 17:19"),	1	,0.2],
                    [new Date("2014/11/20 17:20"),	28,	5.6],
                    [new Date("2014/11/20 17:21"),	1	,0.2],
                    [new Date("2014/11/20 17:22"),	0	,0],
                    [new Date("2014/11/20 17:23"),	4	,0.8],
                    [new Date("2014/11/20 17:24"),	0	,0],
                    [new Date("2014/11/20 17:25"),	0	,0],
                    [new Date("2014/11/20 17:26"),	0	,0],
                    [new Date("2014/11/20 17:27"),	0	,0],
                    [new Date("2014/11/20 17:28"),	7	,1.4],
                    [new Date("2014/11/20 17:29"),	0	,0],
                    [new Date("2014/11/20 17:30"),	0	,0],
                    [new Date("2014/11/20 17:31"),	6	,1.2],
                    [new Date("2014/11/20 17:32"),	6	,1.2],
                    [new Date("2014/11/20 17:33"),	3	,0.6],
                    [new Date("2014/11/20 17:34"),	0	,0],
                    [new Date("2014/11/20 17:35"),	3	,0.6],
                    [new Date("2014/11/20 17:36"),	2	,0.4],
                    [new Date("2014/11/20 17:37"),	6	,1.2],
                    [new Date("2014/11/20 17:38"),	15,	3],
                    [new Date("2014/11/20 17:39"),	4	,0.8],
                    [new Date("2014/11/20 17:40"),	0	,0],
                    [new Date("2014/11/20 17:41"),	3	,0.6],
                    [new Date("2014/11/20 17:42"),	0	,0],
                    [new Date("2014/11/20 17:43"),	3	,0.6],
                    [new Date("2014/11/20 17:44"),	14,	2.8],
                    [new Date("2014/11/20 17:45"),	0	,0],
                    [new Date("2014/11/20 17:46"),	1	,0.2],
                    [new Date("2014/11/20 17:47"),	16,	3.2],
                    [new Date("2014/11/20 17:48"),	22,	4.4],
                    [new Date("2014/11/20 17:49"),	12,	2.4],
                    [new Date("2014/11/20 17:50"),	2	,0.4],
                    [new Date("2014/11/20 17:51"),	15,	3],
                    [new Date("2014/11/20 17:52"),	0	,0],
                    [new Date("2014/11/20 17:53"),	0	,0],
                    [new Date("2014/11/20 17:54"),	0	,0],
                    [new Date("2014/11/20 17:55"),	0	,0],
                    [new Date("2014/11/20 17:56"),	0	,0],
                    [new Date("2014/11/20 17:57"),	0	,0],
                    [new Date("2014/11/20 17:58"),	0	,0],
                    [new Date("2014/11/20 17:59"),	0	,0]
                ]
            }
        ]
    };
    myChart.setOption(option);
});