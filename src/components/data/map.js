import React, { Component } from 'react';
import EchartsReact from "echarts-for-react"
import "echarts/map/js/china"
class ChinaMap extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props,content){
        super(props,content)
    }
    render(){
        var option = {
            title : {
                text: '今日地区交易统计',
                subtext: '数据来自xx',
                textStyle:{
                    color:"#fff"
                },
                x:'center'
            },
            tooltip : {
            },
           
            dataRange: {
                x: 'left',
                y: 'center',
                splitList: [
                    {start: 100, label: '100以上',color: '#f00'},
                    {start: 80, end:100, label: '40-60', color: '#FF5151'},
                    {start: 60, end: 80, label: '30-40', color: '#ff7575'},
                    {start: 40, end: 60, label: '20-30', color: '#FF9797'},
                    {start: 20, end: 40, label: '10-20', color: '#FFB5B5'},
                    {start: 0, end: 20, label: '0-10', color: '#FFD2D2'}
                    ],
                    textStyle: {
                    color: '#3899FF' // 值域文字颜色
                    }
              
            },
            roamController: {
                show: true,
                x: 'right',
                mapTypeControl: {
                    'china': true
                }
            },
            series : [
                {
                    name: '交易量',
                    type: 'map',
                    mapType: 'china',
                    // 控制地图大小
                    mapLocation: {
                        x: '240',
                        y: 'center',
                        height: '75%'
                    },
                    roam: false,
                    itemStyle:{
                        normal:{
                            label:{
                                show:true,
                                textStyle: {
                                   color: "rgb(255, 155, 0)"
                                }
                            }
                        },
                        emphasis:{label:{show:true}}
                    },
                    data:[
                        {name: '北京',value:20},
                        {name: '天津',value: 0},
                        {name: '上海',value:40},
                        {name: '重庆',value: 50},
                        {name: '河北',value: 60},
                        {name: '河南',value:0},
                        {name: '云南',value: 0},
                        {name: '辽宁',value: 0},
                        {name: '黑龙江',value:0},
                        {name: '湖南',value: 0},
                        {name: '安徽',value:0},
                        {name: '山东',value: 0},
                        {name: '新疆',value:0},
                        {name: '江苏',value:0},
                        {name: '浙江',value: 0},
                        {name: '江西',value:0},
                        {name: '湖北',value: 0},
                        {name: '广西',value: 0},
                        {name: '甘肃',value: 0},
                        {name: '山西',value: 0},
                        {name: '内蒙古',value: 0},
                        {name: '陕西',value:0},
                        {name: '吉林',value:0},
                        {name: '福建',value:0},
                        {name: '贵州',value: 0},
                        {name: '广东',value: 0},
                        {name: '青海',value: 0},
                        {name: '西藏',value: 0},
                        {name: '四川',value:0},
                        {name: '宁夏',value:0},
                        {name: '海南',value: 0},
                        {name: '台湾',value: 0},
                        {name: '香港',value: 0},
                        {name: '澳门',value: 0}
                    ]
                }
            ]
        };
        return(
            <div>
                <EchartsReact option={option} style={{height:4.5+"rem",width:'100%'}} />
            </div>
        )
    }
}
export default ChinaMap