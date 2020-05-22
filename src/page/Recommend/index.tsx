import React, { useEffect } from "react";
import { connect } from "react-redux";
import Slider from "../../components/Slider";
import List from "../../components/List";
import Scroll from "../../components/Scroll";
import * as actionTypes from "./store/action";
import { bannerType, recommendType } from "./store/data";
import { initState } from "../../store";
import "./style.less";

interface RecommendProps {
  bannerList: bannerType[];
  recommendList: recommendType[];
  getBannerDataDispatch: () => void;
  getRecommendListDataDispatch: () => void;
}

const Recommend: React.FC<RecommendProps> = ({
  bannerList,
  recommendList,
  getBannerDataDispatch,
  getRecommendListDataDispatch,
}) => {
  useEffect(() => {
    if (!bannerList.length) {
      getBannerDataDispatch();
    }
    if (!recommendList.length) {
      getRecommendListDataDispatch();
    }
  }, []);
  return (
    <div className="content">
      <Scroll>
        {/* scroll组件只能让第一个子元素滑动，因此加一个div包裹 */}
        <div>
          <Slider bannerList={bannerList} />
          <List recommendList={recommendList} />
        </div>
      </Scroll>
    </div>
  );
};

const mapStateToProps = (state: initState) => ({
  bannerList: state.recommend.bannerList,
  recommendList: state.recommend.recommendList,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
