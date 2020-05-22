import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { Store } from './store';
import Layout from "./layout";

// exact和Switch都是让路由匹配独一无二的作用(比如匹配 /home 就不会匹配到 / , / 的页面不会被渲染)
const history = createBrowserHistory();
ReactDOM.render(
  <Provider store={Store}>
    <Router history={history}>
      <Route path="/" component={Layout}></Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// 若使用dva数据流需要配置dva
// import dva from "dva";
// import { Router, Route } from "dva/router";
// const app = dva({
//   history: createBrowserHistory(),
// });
// app.router(({ history }) => {
//   return (
//     <Router history={history}>
//       <Route path="/" exact component={BasicLayout}></Route>
//     </Router>
//   );
// });
// app.start("#root");
