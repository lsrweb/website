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
    >
      <slot></slot>
    </Swiper>
  </div>
</template>
<script>
import { nextTick, ref } from 'vue'
import { Swiper } from 'swiper/vue'
import { Mousewheel, HashNavigation } from 'swiper'

export default {
  components: {
    Swiper
  },
  setup(props, { emit }) {
    const mySwiper = ref(null)

    const swiperList = [
      {
        imgSrc: 'http://www.lontend.com/uploads/20230214/f422d360396e6b87f0afcba7039e870b.jpg'
      },
      {
        imgSrc: 'http://www.lontend.com/uploads/20230224/a49194f01379d2516675467c050efde3.jpg'
      },
      {
        imgSrc: 'http://www.lontend.com/uploads/20230224/2050d9a9dcd66ed6bc8ab403a3bfbdce.jpg'
      }
    ]

    const initMainSwiper = (swiper) => {
      nextTick(() => {
        emit('init', swiper)
      })
    }

    const slideChange = (swiper) => {
      emit('slideChange', swiper)
    }

    return {
      mySwiper,
      modules: [Mousewheel, HashNavigation],

      swiperList,
      initMainSwiper,
      slideChange
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
