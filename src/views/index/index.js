import React from 'react';
import "../../css/index.css"
import ChinaMap from '../../components/data/map';
import MapArea from "../../components/data/maparea"
import Rchart1 from "../../components/data/rchart1"
import Rchart2 from "../../components/data/rchart2"
import Circle from "../../components/circle"
import { format } from 'upath';
class Index extends React.Component {
    constructor(props){
        super(props);
        this.state={
            "date":"11"
        }
    }
    render() {
        let arr=[1,2,3,4,5,6,7,8,9,10];
        return (
            <div>
                <div className="head">
                    <h1>xx生态平台数据中心</h1>
                    <div className="weather">
                       <img src=""  alt=""/><span>多云转小雨  {this.state.date}</span><span id="showTime"></span>
                    </div>
                </div>
                {/**中间部分 */}

                <div className="mainbox">
        <ul className="clearfix">
            <li className="tl">
                <div className="boxall" style={{height: 1.9+"rem"}}>
                    <div className="alltitle">今日订单统计</div>
                    <div className="allnav tab1" id="echart1">
                        <div>
                            <ul>
                                <li>
                                    160
                                </li>
                                <li>
                                   今日总单
                                </li>
                            </ul>
                        </div>
                        <div>
                        <ul>
                             <li>
                                    160
                                </li>
                                <li>
                                   今日客户
                                </li>
                            </ul>
                        </div>
                        <Circle data={80}></Circle>
                    </div>
                    <div className="boxfoot"></div>
                </div>
                <div className="boxall" style={{height:6.1+"rem"}}>
                    <div className="alltitle">今日下单Top10客户</div>
                    <div className="allnav nowOrder" id="echart2">
                      <ul>
                            {
                                arr.map((item)=>{
                                 
                                    let classStyle="";
                                     // eslint-disable-next-line default-case
                                     switch (item){
                                         case 1:
                                         classStyle="t1" 
                                             break;
                                         case 2:
                                         classStyle="t2" 
                                            break;
                                        case 3:
                                         classStyle="t3" 
                                            break;
                                        default:
                                         classStyle="" 
                                         
                                     }
                                    return (<li key={item}>
                                        <span className={classStyle}>{item}</span>哈尔比恒联志科技开发有限公司
                                      </li>)
                                })
                            }
                        </ul>
                    </div>
                    <div className="boxfoot"></div>
                </div>
                 
            </li>
            <li>
               {/* <div className="bar">
                    <div className="barbox">
                        <ul className="clearfix">
                            <li className="pulll_left counter">12581189</li>
                            <li className="pulll_left counter">3912410</li>
                        </ul>
                    </div>
                    <div className="barbox2">
                        <ul className="clearfix">
                            <li className="pulll_left">2018年总收入情况 </li>
                            <li className="pulll_left">2018年总支出情况</li>
                        </ul>
                    </div>
                </div>*/}
                <div className="map">
                    <div className="map1"><img src={require("../../images/lbx.png")} alt=""/></div>
                    <div className="map2"><img src={require("../../images/jt.png")} alt="" /></div>
                    <div className="map3"><img src={require("../../images/map.png")} alt="" /></div>
                    <div className="map4" id="map_1">
                         <ChinaMap></ChinaMap>  
                    </div>
                </div>
                <div>
                </div>
                <div className="dataArea">
                    <MapArea></MapArea>
                </div>
            </li>
            <li>
                <div className="boxall" style={{height:4+"rem"}}>
                    <div className="alltitle">近7日交易量统计</div>
                    <div className="allnav" id="echart4">
                    <Rchart1></Rchart1>
                    </div>
                    <div className="boxfoot"></div>
                </div>
                <div className="boxall" style={{height: 3.99+"rem"}}>
                    <div className="alltitle">今日事业部交易量统计</div>
                    <div className="allnav" id="echart5">
                        <Rchart2></Rchart2>
                    </div>
                    <div className="boxfoot"></div>
                </div>
            </li>
        </ul>
    </div>

            </div>

                )
            }
        
            componentDidMount(){
                let _this=this;
                var timer1 = setInterval(function () {
                    var date = new Date();
                    var year = date.getFullYear(); //当前年份
                    var month = formart((date.getMonth()+1)); //当前月份
                    var data = formart(date.getDate()); //天
                    var hours = formart(date.getHours()); //小时
                    var minute = formart(date.getMinutes()); //分
                    var second =formart(date.getSeconds()); //秒
                    var ampm = hours < 12 ? 'am' : 'pm';
                    _this.setState({
                        date:year+"-"+month+"-"+data+" "+hours+":"+minute+":"+second
                    })
                
                }, 1000)
            }

        }
        function formart(str){
            str=str<10?"0"+str:str;
            return str;
        }
export default Index