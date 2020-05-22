import Recommend from './page/Recommend';
import Singers from './page/Singers';
import Rank from './page/Rank';

export default [
  {
    key: 1,
    path: "/recommend",
    name: '推荐',
    component: Recommend
  },
  {
    key: 2,
    path: "/singers",
    name: '歌手',
    component: Singers
  },
  {
    key: 3,
    path: "/rank",
    name: '排行榜',
    component: Rank
  },
]