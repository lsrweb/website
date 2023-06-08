<script>
import { defineComponent, ref, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper'
import { data } from './data'
import { computed } from 'vue'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide
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
    const transitionEnd = (swiper) => {}
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
    const computedPostion = computed(() => {
      const width = window.innerWidth,
        itemClientWidth = width / 5
      return {
        left: `${itemClientWidth * currentIndex.value + itemClientWidth / 2}px`,
        transform: 'translateX(-50%)'
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
    <div class="progress-info-model"></div>
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
  }
  .progress-info-model {
  }
}

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
</style>
