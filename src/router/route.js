import React from 'react';
import { 
    BrowserRouter as Router
} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from "../views/index/route";
import routes1 from "../views/news/route";

var routesArr=[
    ...routes,
    ...routes1
];
console.log(routesArr);
class RouteMap extends React.Component{
    render(){
        return(
           <div>
              <Router>
                 {renderRoutes(routesArr)} 
              </Router>
            </div>    
         
             
         
        )
    }
}
export default RouteMap;