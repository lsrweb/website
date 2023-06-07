<template>
  <Swiper
    :slides-per-view="1"
    :direction="'vertical'"
    :mousewheel="true"
    :modules="modules"
    :hashNavigation="true"
    :initialSlide="1"
    :speed="1000"
    ref="mySwiper"
  >
    <slot name="swiper-slide"></slot>
  </Swiper>
</template>
<script>
import { ref } from 'vue'
import { Swiper } from 'swiper/vue'
import { Mousewheel } from 'swiper'

export default {
  name: 'SwiperIndex',
  components: {
    Swiper
  },
  setup() {
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

    return {
      mySwiper,
      modules: [Mousewheel],

      swiperList
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
