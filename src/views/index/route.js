import asyncComponent from "../../components/async"
export default [
  {
      path:"/",
      component:asyncComponent(()=>import("./index")),
      exact:true
  }
]
