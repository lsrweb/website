<script>
import { defineComponent, nextTick, ref } from 'vue'
import { data } from './data'
import { Swiper, SwiperSlide } from 'swiper/vue'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide
  },
  setup(props, { emit }) {
    const swiperRef = ref(null)
    const initSwiper = (swiper) => {
      nextTick(() => {
        swiperRef.value = swiper
        emit('init', swiper)
      })
    }
    return {
      modules: [],
      data: data.map((item) => {
        item.showContent = false
        return item
      }),
      initSwiper,
      swiperRef
    }
  }
})
</script>

<template>
  <div class="page04">
    <Swiper
      class="bottomSwiper"
      :slides-per-view="4"
      :navigation="{
        nextEl: '.next',
        prevEl: '.prev'
      }"
      :modules="modules"
      @init="initSwiper"
      :speed="1500"
    >
      <SwiperSlide v-for="item in data" :key="$uuid()">
        <div
          class="main-concent-news"
          @mouseenter="item.showContent = !item.showContent"
          @mouseleave="item.showContent = !item.showContent"
        >
          <Transition name="fadeOut" mode="in-out">
            <div v-show="!item.showContent">
              <div class="main-concent-news-time mid-top-titel">{{ item.date }}</div>
              <div class="main-concent-news-title mid-top-titel">
                {{ item.title }}
              </div>
            </div>
          </Transition>
          <Transition name="slidetBottom" mode="out-in">
            <div class="main-concent-botbox" v-show="item.showContent">
              <div class="main-concent-innerbox">
                <div class="main-concent-moreNews" v-show="item.showContent"><a href="/news">更多新闻</a></div>
                <div class="main-concent-botbox_content">
                  <div class="main-concent-botbox-text">
                    <div class="main-concent-toptitle">{{ item.type }}</div>
                    <div class="main-concent-toptime">{{ item.date }}</div>
                    <div class="main-concent-topname">
                      <a href="/newsText/72/index">{{ item.title }}</a>
                    </div>
                    <div class="main-concent-topinfo">
                      <router-link to="">
                        <!-- tag="div" -->
                        <template #default>
                          <a href="" v-html="item.content"></a>
                        </template>
                      </router-link>
                    </div>

                    <div class="white-circle">
                      <a href="javascript:(0)">
                        <img src="http://www.lontend.com/assets/index/image/red_add.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="main-concent-botbox-img">
                    <router-link to="">
                      <img :src="item.contentBtnImage" />
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </SwiperSlide>
      <template v-slot:container-end>
        <div class="navigation-controller">
          <div class="prev" @click="swiperRef.slidePrev()">&lt;</div>
          <div class="next" @click="swiperRef.slideNext()">&gt;</div>
        </div>
      </template>
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
    overflow: initial;
    :deep(.swiper-wrapper) {
      height: inherit;
    }
    .navigation-controller {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 100;
      font-size: 20px;
      div {
        background-color: #0b0b0b;
        border: 4px solid #fff;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        line-height: 38px;
        text-align: center;
        color: #fff;
        margin-bottom: 20px;
        cursor: pointer;
        &:hover {
          background-color: #fff;
          color: #8d131a;
          line-height: 50px;
          border: 0;
        }
      }
    }
    .main-concent-news {
      width: 100%;
      flex-shrink: 0;
      text-align: left;
      position: absolute;
      background-color: #0b0b0b;
      width: 100%;
      justify-content: space-between;
      color: #fff;
      cursor: default;
      height: 100%;
      cursor: pointer;
      &::after {
        content: '';
        display: block;
        width: 1px;
        height: 50%;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        background: #fff;
        z-index: 100;
      }

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
        top: -90%;
        transition: all 0.3s ease-in-out;
        margin: 0 auto;
        background-color: rgba(255, 255, 255, 0.9);
        .main-concent-innerbox {
          width: 100%;
          height: 100%;
          position: relative;
          .main-concent-moreNews {
            position: absolute;
            right: -0.9rem;
            /* right: 0rem; */
            top: 0;
            width: 0.9rem;
            height: 0.9rem;
            line-height: 0.9rem;
            background-color: #a0141a;
            color: #fff;
            font-size: 0.14rem;
            text-align: center;
          }
          .main-concent-botbox_content {
            .main-concent-botbox-text {
              width: 80%;
              margin: 0 auto;
              .main-concent-toptitle {
                width: 100%;
                height: 0.6rem;
                padding-top: 0.3rem;
                font-size: 0.18rem;
                color: #a0141a;
                border-bottom: 1px solid #ccc;
              }
              .main-concent-toptime {
                width: 100%;
                height: 0.6rem;
                line-height: 0.6rem;
                font-size: 0.16rem;
                color: #999999;
              }
              .main-concent-topname {
                width: 100%;
                height: 0.6rem;
                line-height: 0.3rem;
                font-size: 0.18rem;
                color: #333;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                a {
                  color: inherit;
                }
              }
              .main-concent-topinfo {
                width: 100%;
                height: 0.6rem;
                line-height: 0.3rem;
                font-size: 0.14rem;
                margin-top: 0.1rem;
                color: #666;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                a {
                  color: inherit;
                }
              }
            }
            .main-concent-botbox-img {
              width: 100%;
              height: 2.5rem;
              object-fit: none;
              a {
                width: 100%;
                height: 100%;
                display: block;
              }
              img {
                width: 100%;
                width: 100%;
                // margin-top: 0.2rem;
                object-fit: contain;
              }
            }
          }
        }
      }

      @keyframes slideBottom {
        0% {
          top: 0;
          opacity: 0;
        }
        100% {
          top: -90%;
          opacity: 1;
        }
      }
      .slidetBottom-enter-active {
        animation: slideBottom 0.8s ease-in-out;
      }
      .slidetBottom-leave-active {
        animation: slideBottom 0.3s ease-in-out reverse;
      }

      @keyframes fadeOut {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      .fadeOut-enter-active {
        animation: fadeOut 0.3s ease-in-out;
      }
      .fadeOut-leave-active {
        animation: fadeOut 0.3s ease-in-out reverse;
      }
    }
  }
}
.white-circle {
  margin-top: 0.3rem;
  a {
    width: 0.5rem;
    height: 0.5rem;
    text-align: center;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 0.02rem solid rgba(160, 20, 26, 0.4);
    img {
      width: 0.16rem;
      height: 0.16rem;
    }
    &:before {
      content: '';
      position: absolute;
      top: -0.02rem;
      left: -0.02rem;
      right: -0.02rem;
      bottom: -0.02rem;
      border-radius: 50%;
    }
    &:hover:before {
      border: 0.02rem solid rgba(160, 20, 26, 0.8);
      animation: spin 2s infinite linear;
    }
  }
}
@keyframes spin {
  0%,
  100% {
    clip-path: inset(0 0 60% 0);
  }
  25% {
    clip-path: inset(0 60% 0 0);
  }
  50% {
    clip-path: inset(60% 0 0 0);
  }
  75% {
    clip-path: inset(0 0 0 60%);
  }
}
</style>
