<template>
  <swiperParent>
    <template #swiper-slide>
      <swiper-slide>
        <page1 @init="initPage01" />
      </swiper-slide>
      <swiper-slide>
        <img
          src="http://www.lontend.com/uploads/20230224/a49194f01379d2516675467c050efde3.jpg"
          alt=""
          class="img-full"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="http://www.lontend.com/uploads/20230224/2050d9a9dcd66ed6bc8ab403a3bfbdce.jpg"
          alt=""
          class="img-full"
        />
      </swiper-slide>
    </template>
  </swiperParent>
</template>
<script setup>
import { SwiperSlide } from 'swiper/vue'

import swiperParent from '@/components/Swiper/Swiper.vue'
import page1 from './Index/Page1/index.vue'

const initPage01 = (swiper) => {
  console.log('%c第一屏加载完成', 'color: green; font-size: 14px;', swiper)
}
</script>
