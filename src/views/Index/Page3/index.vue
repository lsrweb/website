<script>
import { defineComponent, ref, nextTick, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper'
import { data } from './data'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    RouterLink
  },
  setup(props, { emit }) {
    const swiperRef = ref(null)
    const init = (swiper) => {
      emit('init', swiper)
      nextTick(() => {
        swiperRef.value = swiper
        setAnimate()
      })
    }
    const currentIndex = ref(0)

    const slideChange = (swiper) => {
      currentIndex.value = swiper.realIndex
      arrowImage.value.display = 'block'
      arrowImage.value.top = '0.2rem'
    }
    // eslint-disable-next-line no-unused-vars
    const transitionEnd = (swiper) => {}
    // eslint-disable-next-line no-unused-vars
    const transitionStart = (swiper) => {
      setAnimate()
    }

    const setAnimate = () => {
      arrowImage.value.style.display = 'none'
      arrowImage.value.classList.remove('bottomToTop')
      setTimeout(() => {
        arrowImage.value.style.display = 'block'
        arrowImage.value.classList.add('bottomToTop')
      }, 100)
    }

    const uuid = () => {
      return Math.random().toString(16).slice(2)
    }

    const arrowImage = ref(null)
    const windowWidth = ref(window.innerWidth)
    const computedPostion = computed(() => {
      const width = windowWidth.value,
        itemClientWidth = width / 5
      return {
        left: `${itemClientWidth * currentIndex.value + itemClientWidth / 2}px`,
        transform: 'translateX(-50%)'
      }
    })

    onMounted(() => {
      window.onresize = () => {
        windowWidth.value = window.innerWidth
      }
    })

    const toSlide = (index) => {
      swiperRef.value.slideTo(index)
    }

    return {
      init,
      slideChange,
      transitionStart,
      transitionEnd,
      toSlide,
      Autoplay,

      data,
      uuid,
      currentIndex,
      arrowImage,
      computedPostion
    }
  }
})
</script>

<template>
  <div class="page03">
    <Swiper
      :speed="1000"
      :autoplay="{
        delay: 115000,
        disableOnInteraction: false
      }"
      :allow-touch-move="false"
      :modules="[Autoplay]"
      :loop="false"
      :initial-slide="0"
      @init="init"
      @slide-change="slideChange"
      @transition-end="transitionEnd"
      @transition-start="transitionStart"
      class="page03-swiper"
      :nested="true"
    >
      <SwiperSlide v-for="(item, index) in data" :key="index">
        <img :src="item.image" alt="" />
      </SwiperSlide>
    </Swiper>

    <div class="progress-controller">
      <div
        :class="['item_', { active: currentIndex == index }]"
        v-for="(item, index) in data"
        :key="uuid()"
        @click="toSlide(index)"
      >
        <span>
          {{ item.name }}
        </span>
      </div>
      <img
        src="http://www.lontend.com/assets/index/image/progress-icon.png"
        alt=""
        :style="computedPostion"
        class="bottomToTop"
        ref="arrowImage"
      />
    </div>
    <div class="progress-info-model">
      <TransitionGroup mode="out-in" name="heightAnimate">
        <div
          :class="[
            'item_',
            {
              active: currentIndex == index
            }
          ]"
          v-for="(item, index) in data"
          :key="$uuid()"
          v-show="index == currentIndex"
        >
          <div class="type">{{ item.type }}</div>
          <div class="title">{{ item.name }}</div>
          <div class="content">
            <p class="text-ellipsis-4">
              {{ item.desc }}
            </p>
          </div>
          <div class="white-circle">
            <a href="javascript:(0)">
              <img
                src="	http://www.lontend.com/assets/index/image/red_add.png"
                alt=""
              />
            </a>
          </div>
          <div class="sanjiao"></div>
          <div class="more_case">
            <RouterLink to="more_case"> 更多案例 </RouterLink>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page03 {
  position: relative;
  .progress-controller {
    position: absolute;
    bottom: 10%;
    z-index: 20;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    height: 1rem;
    width: 100%;
    .item_ {
      width: 20%;
      font-size: 0.16rem;
      font-weight: 500;
      color: #ffffff;
      opacity: 0.6;
      padding-bottom: 0.2rem;
      position: relative;
      height: 0.45rem;
      text-align: center;
      border-bottom: rgba(255, 255, 255, 0.3) solid 0.02rem;
      overflow: visible;
      box-sizing: content-box;
      cursor: pointer;
      &::after {
        content: '';
        position: absolute;
        bottom: -0.05rem;
        left: 50%;
        transform: translateX(-50%);
        width: 0.1rem;
        height: 0.1rem;
        border-radius: 50%;
        background-color: #ffffff;
        transition: all 0.3s;
      }
      &.active {
        border: none;
        height: 1.1rem;
      }
    }

    img {
      position: absolute;
      width: 1.73rem;
      height: 1.24rem;
      left: 0;
      top: 1rem;
      transition: all 0.3s;
      animation: bottomToTop 0.3s forwards;
    }

    @media (max-width: 1200px) {
      img {
        width: 0.73rem;
        height: 30px;
      }
      .item_ {
        height: 0.45rem;
        &.active {
          height: 0.68rem;
        }
      }
    }
  }
  .progress-info-model {
    position: absolute;
    right: 3.47rem;
    top: 40%;
    transform: translateY(-50%);
    z-index: 20;
    background-color: rgba(255, 255, 255, 0.8);
    height: 540px;
    max-width: 400px;
    .item_ {
      // padding: 0.81rem 0.53rem;
      overflow: hidden;
      .type {
        font-size: 0.18rem;
        color: #a0141a;
        margin-bottom: 0.3rem;
      }
      .title {
        font-size: 0.42rem;
        color: #333333;
        margin-bottom: 0.45rem;
      }
      .content p {
        font-size: 0.16rem;
        color: #333333;
        line-height: 0.3rem;
        margin-bottom: 0.22rem;
      }

      div.sanjiao {
        position: absolute;
        content: '';
        left: -0.4rem;
        top: 0.6rem;
        width: 0.4rem;
        height: 0.6rem;
        clip-path: polygon(100% 80%, 100% 0%, 0% 95%);
        background-color: rgba(255, 255, 255, 0.8);
      }
      div.more_case {
        transition: all 0.3s;
        align-self: flex-end;
        height: 0.92rem;
        background: #a0141a;
        font-size: 0.14rem;
        color: #ffffff;
        line-height: 0.92rem;
        text-align: center;
        position: absolute;
        right: 100%;
        bottom: 0px;
        white-space: nowrap;
        overflow: hidden;
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
      &.active {
        padding: 0.81rem 0.53rem;

        .more_case {
          width: 0.92rem;
          animation: widthMoreCase 0.8s forwards;
        }
        @keyframes widthMoreCase {
          from {
            width: 0;
          }
          to {
            width: 0.92rem;
          }
        }
      }
    }
    @media (max-width: 1200px) {
      right: 10px;
      height: 350px;
      margin-left: 75px;
      width: 60%;
      .item_ {
        .type,
        .title {
          margin-bottom: 10px;
        }
        .content p {
          font-size: 0.24rem;
          line-height: 0.4rem;
        }
      }
    }
  }
}
.text-ellipsis-4 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

@media (min-width: 1200px) {
  @keyframes bottomToTop {
    0% {
      top: 1;
    }
    100% {
      top: 0.3rem;
    }
  }
  .bottomToTop {
    animation: bottomToTop 0.3s;
  }
}
@media (max-width: 1200px) {
  @keyframes bottomToTop {
    0% {
      top: 1;
    }
    100% {
      top: 44px;
    }
  }
  .bottomToTop {
    animation: bottomToTop 0.3s;
  }
}

.heightAnimate-enter-active {
  animation: heightAnimate 3.8s;
  padding-bottom: 0 !important;
}
.heightAnimate-leave-active {
  animation: heightAnimate 3.8s reverse;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  display: none !important;
}
@keyframes heightAnimate {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}
</style>
