import * as actionTypes from './actionType';
import request from '../../../utils/request';
import { RecommendStateType } from './data';
import { ServerIP } from '../../../utils/request'

export interface changeBannerListType {
  type: typeof actionTypes.CHANGE_BANNER;
  data: RecommendStateType
}

export interface changeRecommendListType {
  type: typeof actionTypes.CHANGE_RECOMMEND_LIST;
  data: RecommendStateType
}

export const changeBannerList = (data: RecommendStateType): changeBannerListType => ({
  type: actionTypes.CHANGE_BANNER,
  data,
})

export const changeRecommendList = (data: RecommendStateType): changeRecommendListType => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data,
});

export const getBannerList = () => {
  return (dispatch: any) => {
    const url = ServerIP + '/banner'
      request("POST", url).then((res: any) => {
        dispatch(changeBannerList(res.banners));
      }).catch((e) => {
        console.log('e :>> ', e);
      })
  }
}

export const getRecommendList = () => {
  return (dispatch: any) => {
    const url = ServerIP + '/personalized'
      request("POST", url).then((res: any) => {
        dispatch(changeRecommendList(res.result));
      }).catch((e) => {
        console.log('e :>> ', e);
      })
  }
}