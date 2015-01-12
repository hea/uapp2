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


});