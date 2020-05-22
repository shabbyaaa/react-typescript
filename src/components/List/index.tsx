import React from "react";
import { MyIcon } from "../../utils/request";
import { getCount } from "../../utils/utils";
import "./style.less";

function List(props: any) {
  return (
    <div className="ListWraper">
      <h1 className="title">推荐歌单</h1>
      <div className="list">
        {props.recommendList.map((item: any,index:number) => {
          return (
            <div className="listItem" key={index}>
              <div className="img_wrapper">
                <div className="decorate"></div>
                <img
                  src={item.picUrl + "?param=300x300"}
                  width="100%"
                  height="100%"
                  alt="music"
                />
                <div className="play_count">
                  <MyIcon className="iconfont" type="iconerji" />
                  <span className="count">{getCount(item.playCount)}</span>
                </div>
              </div>
              <div className="desc">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(List);
