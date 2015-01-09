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
                ['漏洞防护', 13221],
                ['扫描工具', 10221],
                ['SQL注入攻击', 23244],
                {
                    name: '跨站脚本工具',
                    y: 10523,
                    sliced: true,
                    selected: true
                },
                ['爬虫', 9056],
                ['针对ie9跨站工具',8345],
                ['缺失报头',6214],
                ['文件限制',5278],
                ['协议违规',4834]
            ]
        }]
    });

    $('#pie1').highcharts({
        exporting:{
            enabled:false
        },
        credits:{
            enabled:false
        },
        chart: {
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
                ['漏洞防护', 13221],
                ['扫描工具', 10221],
                ['SQL注入攻击', 23244],
                {
                    name: '跨站脚本工具',
                    y: 10523,
                    sliced: true,
                    selected: true
                },
                ['爬虫', 9056],
                ['针对ie9跨站工具',8345],
                ['缺失报头',6214],
                ['文件限制',5278],
                ['协议违规',4834]
            ]
        }]
    });

    $('#pie2').highcharts({
        exporting:{
            enabled:false
        },
        credits:{
            enabled:false
        },
        chart: {
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
                ['漏洞防护', 13221],
                ['扫描工具', 10221],
                ['SQL注入攻击', 23244],
                {
                    name: '跨站脚本工具',
                    y: 10523,
                    sliced: true,
                    selected: true
                },
                ['爬虫', 9056],
                ['针对ie9跨站工具',8345],
                ['缺失报头',6214],
                ['文件限制',5278],
                ['协议违规',4834]
            ]
        }]
    });
});