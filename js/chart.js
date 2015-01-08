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
            categories: ['01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00',
                '13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00']
            /* labels: {
             formatter: function () {
             return this.value; // clean, unformatted number for year
             }
             }*/
        },
        yAxis: {
            title: {
                text: '攻击次数'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000 + 'k';
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
            data: [4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                33952, 35804, 37431, 39197, 45000]
        }]
    });
});