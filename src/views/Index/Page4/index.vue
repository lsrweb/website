<script>
import { defineComponent, ref, onMounted } from 'vue'
import { data } from './data'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide
  },
  setup(props, { emit }) {
    onMounted(() => {
      emit('init')
    })
    return {
      modules: [Navigation]
    }
  }
})
</script>

<template>
  <div class="page04">
    <Swiper class="bottomSwiper" :slides-per-view="4" :space-between="30" :navigation="true" :modules="modules">
      <SwiperSlide>
        <div class="main-concent-news">
          <div class="main-concent-news-time mid-top-titel">2023.04.03</div>
          <div class="main-concent-news-title mid-top-titel">
            大理花伴一生玫瑰庄园 大理户外拓展团建纯手工制鲜花饼首选之地
          </div>
          <div class="main-concent-botbox">
            <div class="main-concent-botboxs">
              <div class="main-concent-moreNews"><a href="/news">更多新闻</a></div>
              <div class="main-concent-botbox_content">
                <div class="main-concent-botbox-text">
                  <div class="main-concent-toptitle">新闻动态</div>
                  <div class="main-concent-toptime">2023.04.03</div>
                  <div class="main-concent-topname">
                    <a href="/newsText/72/index">大理花伴一生玫瑰庄园 大理户外拓展团建纯手工制鲜花饼首选之地</a>
                  </div>
                  <div class="main-concent-topinfo">
                    <a href="/newsText/72/index"
                      >大理花伴一生玫瑰庄园&nbsp;大理户外拓展团建纯手工制鲜花饼首选之地；刚刚过去的国庆大假，大理再次登荣云南旅游榜第一的旅游目的地，花伴一生玫瑰庄园这个景点备受关注，记者找到关于这个庄园最近的资料是2019年12月，他们获得了大理白族自治州州级现代农业庄园的称号，一个农业项目，却获得了游客如此青睐，这是为哪般？经过多方探访，我们找到了花伴一生庄园的主理人王婷，请她跟我们讲述了这个庄园的故事。</a
                    >
                  </div>

                  <div class="add-icon">
                    <a href="/newsText/72/index">
                      <img src="/assets/index/image/red_add.png" />
                    </a>
                  </div>
                </div>
                <div class="main-concent-botbox-img">
                  <a href="/newsText/72/index"><img src="/uploads/20230404/45e4f6c53a7e7c8534e483017c38c801.png" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="main-concent-news">
          <div class="main-concent-news-time mid-top-titel">2023.04.03</div>
          <div class="main-concent-news-title mid-top-titel">
            大理花伴一生玫瑰庄园 大理户外拓展团建纯手工制鲜花饼首选之地
          </div>
          <div class="main-concent-botbox">
            <div class="main-concent-botboxs">
              <div class="main-concent-moreNews"><a href="/news">更多新闻</a></div>
              <div class="main-concent-botbox_content">
                <div class="main-concent-botbox-text">
                  <div class="main-concent-toptitle">新闻动态</div>
                  <div class="main-concent-toptime">2023.04.03</div>
                  <div class="main-concent-topname">
                    <a href="/newsText/72/index">大理花伴一生玫瑰庄园 大理户外拓展团建纯手工制鲜花饼首选之地</a>
                  </div>
                  <div class="main-concent-topinfo">
                    <a href="/newsText/72/index"
                      >大理花伴一生玫瑰庄园&nbsp;大理户外拓展团建纯手工制鲜花饼首选之地；刚刚过去的国庆大假，大理再次登荣云南旅游榜第一的旅游目的地，花伴一生玫瑰庄园这个景点备受关注，记者找到关于这个庄园最近的资料是2019年12月，他们获得了大理白族自治州州级现代农业庄园的称号，一个农业项目，却获得了游客如此青睐，这是为哪般？经过多方探访，我们找到了花伴一生庄园的主理人王婷，请她跟我们讲述了这个庄园的故事。</a
                    >
                  </div>

                  <div class="add-icon">
                    <a href="/newsText/72/index">
                      <img src="/assets/index/image/red_add.png" />
                    </a>
                  </div>
                </div>
                <div class="main-concent-botbox-img">
                  <a href="/newsText/72/index"><img src="/uploads/20230404/45e4f6c53a7e7c8534e483017c38c801.png" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="main-concent-news">
          <div class="main-concent-news-time mid-top-titel">2023.04.03</div>
          <div class="main-concent-news-title mid-top-titel">
            大理花伴一生玫瑰庄园 大理户外拓展团建纯手工制鲜花饼首选之地
          </div>
          <div class="main-concent-botbox">
            <div class="main-concent-botboxs">
              <div class="main-concent-moreNews"><a href="/news">更多新闻</a></div>
              <div class="main-concent-botbox_content">
                <div class="main-concent-botbox-text">
                  <div class="main-concent-toptitle">新闻动态</div>
                  <div class="main-concent-toptime">2023.04.03</div>
                  <div class="main-concent-topname">
                    <a href="/newsText/72/index">大理花伴一生玫瑰庄园 大理户外拓展团建纯手工制鲜花饼首选之地</a>
                  </div>
                  <div class="main-concent-topinfo">
                    <a href="/newsText/72/index"
                      >大理花伴一生玫瑰庄园&nbsp;大理户外拓展团建纯手工制鲜花饼首选之地；刚刚过去的国庆大假，大理再次登荣云南旅游榜第一的旅游目的地，花伴一生玫瑰庄园这个景点备受关注，记者找到关于这个庄园最近的资料是2019年12月，他们获得了大理白族自治州州级现代农业庄园的称号，一个农业项目，却获得了游客如此青睐，这是为哪般？经过多方探访，我们找到了花伴一生庄园的主理人王婷，请她跟我们讲述了这个庄园的故事。</a
                    >
                  </div>

                  <div class="add-icon">
                    <a href="/newsText/72/index">
                      <img src="/assets/index/image/red_add.png" />
                    </a>
                  </div>
                </div>
                <div class="main-concent-botbox-img">
                  <a href="/newsText/72/index"><img src="/uploads/20230404/45e4f6c53a7e7c8534e483017c38c801.png" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="main-concent-news">
          <div class="main-concent-news-time mid-top-titel">2023.04.03</div>
          <div class="main-concent-news-title mid-top-titel">
            大理花伴一生玫瑰庄园 大理户外拓展团建纯手工制鲜花饼首选之地
          </div>
          <div class="main-concent-botbox">
            <div class="main-concent-botboxs">
              <div class="main-concent-moreNews"><a href="/news">更多新闻</a></div>
              <div class="main-concent-botbox_content">
                <div class="main-concent-botbox-text">
                  <div class="main-concent-toptitle">新闻动态</div>
                  <div class="main-concent-toptime">2023.04.03</div>
                  <div class="main-concent-topname">
                    <a href="/newsText/72/index">大理花伴一生玫瑰庄园 大理户外拓展团建纯手工制鲜花饼首选之地</a>
                  </div>
                  <div class="main-concent-topinfo">
                    <a href="/newsText/72/index"
                      >大理花伴一生玫瑰庄园&nbsp;大理户外拓展团建纯手工制鲜花饼首选之地；刚刚过去的国庆大假，大理再次登荣云南旅游榜第一的旅游目的地，花伴一生玫瑰庄园这个景点备受关注，记者找到关于这个庄园最近的资料是2019年12月，他们获得了大理白族自治州州级现代农业庄园的称号，一个农业项目，却获得了游客如此青睐，这是为哪般？经过多方探访，我们找到了花伴一生庄园的主理人王婷，请她跟我们讲述了这个庄园的故事。</a
                    >
                  </div>

                  <div class="add-icon">
                    <a href="/newsText/72/index">
                      <img src="/assets/index/image/red_add.png" />
                    </a>
                  </div>
                </div>
                <div class="main-concent-botbox-img">
                  <a href="/newsText/72/index"><img src="/uploads/20230404/45e4f6c53a7e7c8534e483017c38c801.png" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="scss">
.page04 {
  width: 100%;
  height: 100%;
  background: url('http://www.lontend.com/uploads/20230216/98645a5254c86a0e1afbc9a32c330278.jpg') no-repeat center
    center;
  background-size: cover;
  position: relative;
  .bottomSwiper {
    width: 100%;
    height: 3.5rem;
    background-color: #0b0b0b;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    overflow-x: auto;
    .main-concent-news {
      width: 100%;
      flex-shrink: 0;
      text-align: left;
      position: relative;
      background-color: #0b0b0b;
      width: 100%;
      justify-content: space-between;
      color: #fff;
      cursor: default;
      height: 100%;

      .main-concent-news-time {
        font-size: 0.12rem;
        margin: 0 auto;
        margin-top: 1rem;
        width: 70%;
      }
      .main-concent-news-title {
        font-size: 0.18rem;
        width: 70%;
        position: absolute;
        left: 15%;
        height: 1.8rem;
        z-index: 101;
        margin: 0 auto;
        margin-top: 0.5rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }

      .main-concent-botbox {
        position: absolute;
        left: 0;
        top: 100%;
        transition: all 0.3s ease-in-out;
      }
    }
  }
}
</style>
