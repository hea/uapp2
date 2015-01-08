/**
 * Created by liuzy on 2015/1/8.
 */

$(function(){
    $('#areaChart').highcharts({
        exporting:{
            enabled:false
        },
        credits:{
            enabled:false
        },
        chart: {
            type: 'area'
        },
        title: {
            text: ''
        },
        /*subtitle: {
         text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
         'thebulletin.metapress.com</a>'
         },*/

        xAxis: {
            allowDecimals: false,
            categories: ['7日 01:00','7日 02:00','7日 03:00','7日 04:00','7日 05:00','7日 06:00','7日 07:00','7日 08:00','7日 09:00','7日 10:00','7日 11:00','1日 12:00',
                '7日 13:00','7日 14:00','7日 15:00','7日 16:00','7日 17:00','7日 18:00','7日 19:00','7日 20:00','7日 21:00','7日 22:00','7日 23:00','24:00'],
           labels: {
               rotation:35
             }
        },
        yAxis: {
            //categories:[10000,20000,30000,40000],
            title: {
                text: '攻击次数'
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },

        tooltip: {
            pointFormat: '{series.name} <b>{point.y:,.0f}</b>'
        },
        plotOptions: {
            area: {
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: '攻击次数',
            color:'#F57C0E',
            data: [37385, 39055, 31205, 25226, 18945, 14235, 9400, 9521, 8974, 8522,
                7037, 9087, 10234, 11205, 13044, 15393, 17935, 20062, 21417,
                24178, 30067, 31431, 34197, 47000]
        }]
    });
});