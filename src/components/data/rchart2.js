import React, { Component } from 'react';
import EchartsReact from "echarts-for-react"
class Rchart2 extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props,content){
        super(props,content)
    }
    render(){
        let  option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow"
                }
            },
            grid: {
                left: "0%",
                top: "10px",
                right: "0%",
                bottom: "2%",
                containLabel: true
            },
            xAxis: [{
                type: "category",
                data: ["浙江", "上海","t","f","d"],
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
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12",
                    },
                },
            }],
            yAxis: [{
                type: "value",
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12",
                    },
                },
                axisTick: {
                    show: false,
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
                data: [2, 3,3,4,5],
                barWidth: "35%",
                itemStyle: {
                    normal: {
                        color: "#2f89cf",
                        opacity: 1,
                        barBorderRadius: 5,
                    }
                }
            }]
        };
        return(
            <div>
                <EchartsReact  option={option} style={{height:3.2+"rem",width:'100%'}}/>
            </div>
        )
    }
}
export default Rchart2