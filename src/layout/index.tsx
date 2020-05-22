/*
 * @Author: Shabby申 
 * @Date: 2020-05-17 12:38:17 
 * @Last Modified by: Shabby申
 * @Last Modified time: 2020-05-21 22:18:48
 * @description: 布局样式
 */
import React from 'react';
import routes from '../route';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
// import { Route, Switch, Redirect, NavLink } from 'dva/router';
import { MyIcon } from '../utils/request';
import './style.less';

export default function BasicLayout() {
  return (
    <div>
      <div className="topWrap">
        <span><MyIcon type="iconcaidan" className="iconfont" /></span>
        <span>云音乐</span>
        <span><MyIcon type="iconsearch" className="iconfont" /></span>
      </div>
      <div className="tabWrap">
        {
          routes.map(item => {
            return (
              <NavLink activeClassName="active" to={item.path} key={item.key}>
                {item.name}
              </NavLink>
            )
          })
        }
      </div>
      <Switch>
        {
          routes.map(item => {
            return <Route path={item.path} component={item.component} key={item.key} />
          })
        }
        <Redirect to="/recommend" />
      </Switch>
    </div>
  );
}

