import * as actionTypes from './actionType';
import produce from 'immer';
import { RecommendStateType } from './data';

const defaultState: RecommendStateType = {
  bannerList: [],
  recommendList: [],
}

export default (state = defaultState, action: any) => {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.CHANGE_BANNER:
        draft.bannerList = action.data;
        break;
      case actionTypes.CHANGE_RECOMMEND_LIST:
        draft.recommendList = action.data;
        break;
      default:
        return state;
    }
  })
}