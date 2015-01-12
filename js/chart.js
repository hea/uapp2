/**
 * Created by liuzy on 2015/1/8.
 */

$(function(){
    Date.prototype.Format = function(fmt)
    { //author: meizz
        var o = {
            "M+" : this.getMonth()+1,                 //月份
            "d+" : this.getDate(),                    //日
            "h+" : this.getHours(),                   //小时
            "m+" : this.getMinutes(),                 //分
            "s+" : this.getSeconds(),                 //秒
            "q+" : Math.floor((this.getMonth()+3)/3), //季度
            "S"  : this.getMilliseconds()             //毫秒
        };
        if(/(y+)/.test(fmt))
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(var k in o)
            if(new RegExp("("+ k +")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        return fmt;
    }

    $('#areaChart').highcharts({
        exporting:{
            enabled:false
        },
        credits:{
            enabled:false
        },
        chart: {
            type: 'area',
            backgroundColor:''
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
               rotation:65
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
            //color:'#F57C0E',
            data: [37385, 39055, 31205, 25226, 18945, 14235, 9400, 9521, 8974, 8522,
                7037, 9087, 10234, 11205, 13044, 15393, 17935, 20062, 21417,
                24178, 30067, 31431, 34197, 47000]
        }]
    });

    var mychart=$('#areaChart').highcharts();
    var cmsa_categories=[];
    for(var i=0;i<24;i++){
        cmsa_categories.push((new Date()).Format("MM-dd ") +i);
    }
    mychart.xAxis[0].setCategories(cmsa_categories);



    $('#areaRChart2').highcharts({
        exporting:{
            enabled:false
        },

        credits:{
            enabled:false
        },
        chart: {
            type: 'area',
            backgroundColor:''
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
            labels: {
                rotation:65
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
            name: '告警次数',
            data: [0,0,0,0,0,0,529,1782,1995,2845,2713,2773,2569,3363,2011,1375,15917,37673,125,0,0,0,0,0,]
        }]
    });

    var areaRChart=$('#areaRChart2').highcharts();
    //var cmsa_categorie=[];
    /*for(var i=0;i<24;i++){
        cmsa_categorie.push(i);
    }*/
    areaRChart.xAxis[0].setCategories(cmsa_categories);

});