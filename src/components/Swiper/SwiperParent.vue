<template>
  <swiper
    :slides-per-view="1"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :direction="'vertical'"
    :mousewheel="true"
    :modules="modules"
    :hashNavigation="true"
    :initialSlide="0"
    :speed="1000"
  >
    <swiper-slide>
      <img
        src="http://www.lontend.com/uploads/20230214/f422d360396e6b87f0afcba7039e870b.jpg"
        alt=""
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="http://www.lontend.com/uploads/20230224/a49194f01379d2516675467c050efde3.jpg"
        alt=""
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="http://www.lontend.com/uploads/20230224/2050d9a9dcd66ed6bc8ab403a3bfbdce.jpg"
        alt=""
      />
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel } from 'swiper'

import 'swiper/css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Mousewheel]
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
