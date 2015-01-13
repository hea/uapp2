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
                return params.seriesName + ' （'  + '类目' + params.value[0] + '）<br/>'
                    + params.value[1] + ', '
                    + params.value[2];
            }
        },
        toolbox: {
            show : true,
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
            data : ['SQL注入攻击','跨站脚本攻击','漏洞防护','疑似跨站攻击']
        },
        dataRange: {
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
                splitNumber:10
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
                data: (function () {
                    var d = [];
                    var len = 0;
                    var now = new Date();
                    var value;
                    while (len++ < 150) {
                        d.push([
                            new Date(2014, 11, 9, 0, Math.round(Math.random()*10000)),
                            (Math.random()*30).toFixed(2) - 0,
                            (Math.random()*100).toFixed(2) - 0
                        ]);
                    }
                    return d;
                })()
            },
            {
                name:'跨站脚本攻击',
                type:'scatter',
                symbolSize: function (value){
                    return Math.round(value[2]/10);
                },
                data: (function () {
                    var d = [];
                    var len = 0;
                    var now = new Date();
                    var value;
                    while (len++ < 150) {
                        d.push([
                            new Date(2014, 11, 9, 0, Math.round(Math.random()*10000)),
                            (Math.random()*30).toFixed(2) - 0,
                            (Math.random()*100).toFixed(2) - 0
                        ]);
                    }
                    return d;
                })()
            },
            {
                name:'漏洞防护',
                type:'scatter',
                symbolSize: function (value){
                    return Math.round(value[2]/10);
                },
                data: (function () {
                    var d = [];
                    var len = 0;
                    var now = new Date();
                    var value;
                    while (len++ < 150) {
                        d.push([
                            new Date(2014, 11, 9, 0, Math.round(Math.random()*10000)),
                            (Math.random()*30).toFixed(2) - 0,
                            (Math.random()*100).toFixed(2) - 0
                        ]);
                    }
                    return d;
                })()
            },
            {
                name:'疑似跨站攻击',
                type:'scatter',
                symbolSize: function (value){
                    return Math.round(value[2]/10);
                },
                data: (function () {
                    var d = [];
                    var len = 0;
                    var now = new Date();
                    var value;
                    while (len++ < 150) {
                        d.push([
                            new Date(2014, 11, 9, 0, Math.round(Math.random()*10000)),
                            (Math.random()*30).toFixed(2) - 0,
                            (Math.random()*100).toFixed(2) - 0
                        ]);
                    }
                    return d;
                })()
            }
        ]
    };
    myChart.setOption(option);
});