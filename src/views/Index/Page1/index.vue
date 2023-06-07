<script>
import { SwiperSlide, Swiper } from 'swiper/vue'
import { defineComponent, getCurrentInstance, nextTick, ref, defineEmits } from 'vue'
import { Autoplay, Navigation } from 'swiper'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    defineEmits(['init'])

    // 拦截 swiper 实例
    const swiperRef = ref(null)
    const { proxy } = getCurrentInstance()

    // event handler
    const transitionEnd = (swiper) => {}
    const init = (swiper) => {
      // throw swiper instance to parent component
      proxy.$emit('init', swiper)
      // init nextTick
      nextTick(() => {
        swiper.autoplay.stop() // stop autoplay
        const initOneClientWidthArrEl = swiper.slides[0].querySelectorAll('.title_ p')
        // // set text animation
        initOneClientWidthArrEl.forEach((el) => {
          const clientWidth = el.clientWidth // get element client width
          el.style.visibility = 'visible'
          el.style.width = 0
          // width from 0 to clientWidth
          function textAnimate(callback) {
            const timer = setInterval(() => {
              if (el.clientWidth < clientWidth) {
                el.style.width = el.clientWidth + 1 + 'px'
              } else {
                clearInterval(timer)
                callback()
              }
            }, 10)
          }
          textAnimate(function () {
            swiper.autoplay.start()
          })
        })
      })
    }
    return {
      swiperRef,
      transitionEnd,
      init,
      Autoplay,
      Navigation
    }
  }
})
</script>

<template>
  <div class="page">
    <Swiper
      :speed="1500"
      ref="swiperRef"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false
      }"
      :allow-touch-move="false"
      :modules="[Autoplay, Navigation]"
      :navigation="{
        nextEl: '.next-btn',
        prevEl: '.prev-btn'
      }"
      :loop="true"
      :initial-slide="0"
      @transition-end="transitionEnd"
      @init="init"
    >
      <SwiperSlide class="relative">
        <img
          src="http://qiniu.picgo.srliforever.ltd/ddde08c7fc9e83767deda76f4e5a64f1_3138206301741634501.webp"
          alt=""
          class="img-full relative z-10"
        />
        <div class="container">
          <div class="info-pos absolute absolute-y-center z-20">
            <div class="title_">
              <p>心逐世界 甄选全球</p>
              <p>致力成为文化旅游一站式服务商</p>
            </div>
            <div class="controller flex align-center">
              <div
                class="prev-btn"
                @mouseenter="
                  (event) => {
                    event.target.style.backgroundColor = '#a0141a'
                  }
                "
                @mouseleave="
                  (event) => {
                    event.target.style.backgroundColor = 'unset'
                  }
                "
              >
                <img src="http://www.lontend.com/assets/index/image/back_arrow.png" alt="" />
              </div>
              <div
                class="next-btn"
                @mouseenter="
                  (event) => {
                    event.target.style.backgroundColor = '#a0141a'
                  }
                "
                @mouseleave="
                  (event) => {
                    event.target.style.backgroundColor = 'unset'
                  }
                "
              >
                <img src="http://www.lontend.com/assets/index/image/back_arrow.png" alt="" class="rotate-180" />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="relative">
        <img
          src="http://qiniu.picgo.srliforever.ltd/%E6%98%9F%E7%A9%BA%20%E5%A5%B3%E5%AD%A9%E5%AD%90%20%E5%A5%BD%E7%9C%8B%20%E5%94%AF%E7%BE%8E%20%E5%8A%A8%E6%BC%AB%E9%AB%98%E6%B8%85%E5%A3%81%E7%BA%B8_%E5%BD%BC%E5%B2%B8%E5%A3%81%E7%BA%B8.jpg"
          alt=""
          class="img-full"
        />
        <div class="container">
          <div class="info-pos absolute absolute-y-center z-20">
            <div class="title_">
              <p>心逐世界 甄选全球</p>
              <p>致力成为文化旅游一站式服务商</p>
            </div>
            <div class="controller flex align-center">
              <div
                class="prev-btn"
                @mouseenter="
                  (event) => {
                    event.target.style.backgroundColor = '#a0141a'
                  }
                "
                @mouseleave="
                  (event) => {
                    event.target.style.backgroundColor = 'unset'
                  }
                "
              >
                <img src="http://www.lontend.com/assets/index/image/back_arrow.png" alt="" />
              </div>
              <div
                class="next-btn"
                @mouseenter="
                  (event) => {
                    event.target.style.backgroundColor = '#a0141a'
                  }
                "
                @mouseleave="
                  (event) => {
                    event.target.style.backgroundColor = 'unset'
                  }
                "
              >
                <img src="http://www.lontend.com/assets/index/image/back_arrow.png" alt="" class="rotate-180" />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="relative">
        <img
          src="http://qiniu.picgo.srliforever.ltd/%E6%88%B4%E7%9C%BC%E9%95%9C%E7%9A%84%E7%BE%8E%E5%A5%B3%20%E9%95%BF%E5%8F%91%20%E8%80%B3%E7%8E%AF%20%E9%A1%B9%E9%93%BE%20%E5%8A%A8%E6%BC%AB%E5%A3%81%E7%BA%B8_%E5%BD%BC%E5%B2%B8%E5%A3%81%E7%BA%B8.jpg"
          alt=""
          class="img-full"
        />
        <div class="container">
          <div class="info-pos absolute absolute-y-center z-20">
            <div class="title_">
              <p>心逐世界 甄选全球</p>
              <p>致力成为文化旅游一站式服务商</p>
            </div>
            <div class="controller flex align-center">
              <div
                class="prev-btn"
                @mouseenter="
                  (event) => {
                    event.target.style.backgroundColor = '#a0141a'
                  }
                "
                @mouseleave="
                  (event) => {
                    event.target.style.backgroundColor = 'unset'
                  }
                "
              >
                <img src="http://www.lontend.com/assets/index/image/back_arrow.png" alt="" />
              </div>
              <div
                class="next-btn"
                @mouseenter="
                  (event) => {
                    event.target.style.backgroundColor = '#a0141a'
                  }
                "
                @mouseleave="
                  (event) => {
                    event.target.style.backgroundColor = 'unset'
                  }
                "
              >
                <img src="http://www.lontend.com/assets/index/image/back_arrow.png" alt="" class="rotate-180" />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="scss">
.page {
  :deep(.swiper-slide:nth-child(1)) {
    p {
      visibility: hidden;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  .info-pos {
    color: #fff;
    p {
      width: max-content;
    }
    p:nth-child(1) {
      font-size: 0.4rem;
    }
    p:nth-child(2) {
      font-size: 0.25rem;
      height: 1rem;
      margin-top: 16px;
    }
    .prev-btn,
    .next-btn {
      width: 0.52rem;
      height: 0.52rem;
      cursor: pointer;
      border-radius: 50%;
      border: 0.01rem solid #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      &.prev-btn {
        margin-right: 0.16rem;
      }
      img {
        width: 0.16rem;
        height: 0.16rem;
      }
    }
  }
}
</style>
