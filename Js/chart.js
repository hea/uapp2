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
            text: 'US and USSR nuclear stockpiles'
        },
        /*subtitle: {
            text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
                'thebulletin.metapress.com</a>'
        },*/

        xAxis: {
            allowDecimals: false,
            categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
           /* labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            }*/
        },
        yAxis: {
            title: {
                //text: 'Nuclear weapon states'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000 + 'k';
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
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
            name: 'USA',
            data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,1005, 1436,
                   2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,27387, 29459]
        }, {
            name: 'USSR/Russia',
            data: [5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                   4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,15915]
        }]
    });
});