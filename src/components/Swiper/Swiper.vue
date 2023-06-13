<template>
  <div class="main-swiper-page">
    <Swiper
      :slides-per-view="1"
      :direction="'vertical'"
      :mousewheel="true"
      :modules="modules"
      :nested="true"
      :initialSlide="0"
      :speed="1000"
      ref="mySwiper"
      @init="initMainSwiper"
      @slideChange="slideChange"
      @transition-end="transitionEnd"
      @transition-start="transitionStart"
    >
      <slot></slot>
      <template v-slot:container-end>
        <LBCircleCount :current="current" />
      </template>
    </Swiper>
  </div>
</template>
<script>
import { nextTick, ref } from 'vue'
import { Swiper } from 'swiper/vue'
import { Mousewheel, HashNavigation } from 'swiper'
import LBCircleCount from '../LBCircleCount.vue'

export default {
  components: {
    Swiper,
    LBCircleCount
  },
  setup(props, { emit }) {
    const mySwiper = ref(null)

    const swiperList = [
      {
        imgSrc:
          'http://www.lontend.com/uploads/20230214/f422d360396e6b87f0afcba7039e870b.jpg'
      },
      {
        imgSrc:
          'http://www.lontend.com/uploads/20230224/a49194f01379d2516675467c050efde3.jpg'
      },
      {
        imgSrc:
          'http://www.lontend.com/uploads/20230224/2050d9a9dcd66ed6bc8ab403a3bfbdce.jpg'
      }
    ]

    const initMainSwiper = (swiper) => {
      nextTick(() => {
        emit('init', swiper)
      })
    }
    const current = ref(0)
    const slideChange = (swiper) => {
      emit('slideChange', swiper)
      current.value = swiper.realIndex
    }

    const transitionEnd = (swiper) => {
      emit('transitionEnd', swiper)
    }

    const transitionStart = (swiper) => {
      emit('transitionStart', swiper)
    }

    return {
      mySwiper,
      modules: [Mousewheel, HashNavigation],

      swiperList,
      initMainSwiper,
      slideChange,
      transitionEnd,
      transitionStart,
      current
    }
  }
}
</script>

<style>
.swiper-wrapper {
  height: 100vh;
}
.swiper-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
