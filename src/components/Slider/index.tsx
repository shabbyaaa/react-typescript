/*
 * @Author: Shabby申
 * @Date: 2020-05-18 18:29:26
 * @Last Modified by: Shabby申
 * @Last Modified time: 2020-05-21 22:19:52
 * @Description: 轮播图组件
 * 注意 引用的less，在此引入swiper.css不会生效，需要子less文件里面引入
 * 如果使用less的模块化，不会出现此问题(modules: true)
 */
import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import { bannerType } from "../../page/Recommend/store/data";
import "./style.less";

type SliderProps = {
  bannerList: bannerType[];
};

const Slider: React.FC<SliderProps> = ({ bannerList = [] }) => {
  const [sliderSwiper, setSliderSwiper] = useState<Swiper>();

  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      let sliderSwiper = new Swiper(".slider-container", {
        loop: true,
        autoplay: {
          delay: 3000,
          //户操作swiper之后，是否禁止autoplay。默认为true：停止。
          disableOnInteraction: false,
        },
        pagination: { el: ".swiper-pagination" },
      });
      setSliderSwiper(sliderSwiper);
    }
  }, [bannerList.length, sliderSwiper]);

  return (
    <div className="sliderWrap">
      <div className="before"></div>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {bannerList.map((item, index) => {
            return (
              <div className="swiper-slide" key={index}>
                <div className="slider-nav">
                  <img
                    src={item.imageUrl}
                    width="100%"
                    height="100%"
                    alt="推荐"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Slider;
