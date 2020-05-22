/*
 * @Author: Shabby申
 * @Date: 2020-05-18 20:41:04
 * @Last Modified by: Shabby申
 * @Last Modified time: 2020-05-18 21:01:57
 * @Description: 滑动组件
 * 滑动组件 需要一个父容器包裹，第一个子元素高度超过父容器，就会滑动
 */
import React, {
  forwardRef,
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
} from "react";
import BScroll from "better-scroll";
import debounce from "debounce";
import "./style.less";

interface ScrollProps {
  direction?: "vertical" | "horizontal"; //滚动的方向
  click?: boolean; //是否支持点击
  refresh?: boolean; //是否刷新
  onScroll?: Function; //滑动触发的回调函数
  pullUp?: Function; //上拉加载逻辑
  pullDown?: Function; //下拉加载逻辑
  pullUpLoading?: boolean; //是否显示上拉loading效果
  pullDownLoading?: boolean; //是否显示下拉loading效果
  bounceTop?: boolean; //是否支持向上吸顶
  bounceBottom?: boolean; //是否支持向下吸顶
  children?: React.ReactNode;
}

const Scroll = forwardRef<any, ScrollProps>((props, ref) => {
  const [bScroll, setBScroll] = useState<BScroll>();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const {
    direction = "vertical",
    click = true,
    refresh = true,
    pullUpLoading = false,
    pullDownLoading = false,
    bounceTop = true,
    bounceBottom = true,
  } = props;

  const { pullUp = () => {}, pullDown = () => {}, onScroll = null } = props;

  useEffect(() => {
    if (bScroll) return;
    const scroll = new BScroll(scrollContainerRef.current!, {
      scrollX: direction === "horizontal",
      scrollY: direction === "vertical",
      probeType: 3,
      click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom,
      },
    });
    setBScroll(scroll);
    if (pullUp) {
      scroll.on("scrollEnd", () => {
        // 判断是否滑动到了底部
        if (scroll.y <= scroll.maxScrollY + 100) {
          pullUp();
        }
      });
    }
    if (pullDown) {
      // 判断下拉动作
      scroll.on("touchEnd", (pos: any) => {
        if (pos.y > 50) {
          debounce(pullDown, 0)();
        }
      });
    }
    if (onScroll) {
      scroll.on("scroll", (scroll: number) => {
        onScroll(scroll);
      });
    }
    if (refresh) {
      scroll.refresh();
    }
    return () => {
      scroll.off('scroll');
      setBScroll(undefined);
    }
  },[]);

  useImperativeHandle(ref, () => ({
    refresh() {
      if (bScroll) {
        bScroll.refresh();
        bScroll.scrollTo(0, 0);
      }
    },
    scrollTo(x: number, y: number) {
      if (bScroll) {
        bScroll.refresh();
        bScroll.scrollTo(x, y);
      }
    },
    getBScroll() {
      return bScroll;
    },
  }));

  return (
    <div className="scrollContainer" ref={scrollContainerRef}>
      {props.children}
    </div>
  );
});

export default React.memo(Scroll);
