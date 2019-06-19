import React, { Component } from 'react';
import EchartsReact from "echarts-for-react"
class MapArea extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props,content){
        super(props,content)
    }
    render(){
     let   option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow"
                }
            },
            xAxis: [{
               type: "value",
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12",
                    },
                },
            }],
            yAxis: [{
                
                data: ["浙江", "上海", "江苏", "广东", "北京", "深圳", "安徽"],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12",
                    },
                },
              
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            series: [{
                type: "bar",
                data: [1500, 1200, 600, 200, 300, 300, 900],
                barWidth: "55%",
                itemStyle: {
                    normal: {
                        color: "#27d08a",
                        opacity: 1,
                        barBorderRadius: 5,
                    }
                }
            }]
        };
        return (
            <div>
                <EchartsReact  option={option}  style={{height:3.5+"rem",width:'100%'}}/>
            </div>
        )
    }
}
export default MapArea