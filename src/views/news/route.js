import asyncComponent from "../../components/async"
 var routes1=[
  {
      path:"/news",
      component:asyncComponent(()=>import("./news"))
  }
]
export default routes1