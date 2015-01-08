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
            categories: ['07/01','07/02','07/03','07/04','07/05','07/06','07/07','07/08','07/09','07/10','07/11','07/12',
                '07/13','07/14','07/15','07/16','07/17','07/18','07/19','07/20','07/21','07/22','07/23','07/24'],
           labels: {
               //rotation:35
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