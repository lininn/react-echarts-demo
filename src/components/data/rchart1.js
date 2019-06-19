import React, { Component } from 'react';
import EchartsReact from "echarts-for-react";
import echarts from "echarts"
class Rchart1 extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props,content){
        super(props,content)
    }
    render(){
      let  option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    lineStyle: {
                        color: "#dddc6b"
                    },
                    type: 'cross'
                }
            },
            legend: {
                top: "0%",
                data: ["订单量", "交易额"],
                textStyle: {
                    color: "rgba(255,255,255,.5)",
                    fontSize: "12",
                }
            },
           
            xAxis: [
            
                {
                type: "category",
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12,
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.2)"
                    }
                },
                data: ["01", "02", "03", "04"]
            }, {
                axisPointer: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                position: "bottom",
                offset: 20,
            }],
            yAxis: [{},{
                type: "value",
                name: '订单量',
                position: 'left',
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.6)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12,
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.2)"
                    }
                }
            },{
                type: 'value',
                name: '交易额',
                position: 'right',
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.6)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12,
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.2)"
                    }
                }
            }],
            series: [{
                name: "订单量",
                type:'bar',
               
                yAxisIndex: 1,
                lineStyle: {
                    normal: {
                        color: "#0184d5"
                    }
                },
                barWidth:20,
                itemStyle: {
                    normal: {
                        color: "#0184d5",
                        borderColor: "rgba(221, 220, 107, .1)",
                   
                    }
                },
                data: [3, 4, 3, 4]
            }, {
                name: "交易额",
                type:'line',
                smooth: true,
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                yAxisIndex: 2,
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(0, 216, 135, 0.4)"
                        }, {
                            offset: 0.8,
                            color: "rgba(0, 216, 135, 0.1)"
                        }], false),
                        shadowColor: "rgba(0, 0, 0, 0.1)",
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#00d887",
                        borderColor: "rgba(221, 220, 107, .1)",
                     
                    }
                },
                data: [5, 3, 100, 6,]
            } ]
        };
        return (
            <div>
                <EchartsReact option={option}  style={{height:3.5+"rem",width:'100%'}}/>
            </div>
        )
    }
}
export default Rchart1