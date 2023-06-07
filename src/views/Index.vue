<template>
  <swiperParent>
    <template #swiper-slide>
      <swiper-slide>
        <page1 @init="initPage01" />
      </swiper-slide>
      <swiper-slide>
        <page2 @init="initPage02" ref="page02Init"></page2>
      </swiper-slide>
      <swiper-slide>
        <page3 @init="initPage03" ref="page03Init"></page3>
      </swiper-slide>
    </template>
  </swiperParent>
</template>
<script setup>
import { ref } from 'vue'

import { SwiperSlide } from 'swiper/vue'

import swiperParent from '@/components/Swiper/Swiper.vue'
import page1 from './Index/Page1/index.vue'
import page2 from './Index/Page2/index.vue'
import page3 from './Index/Page3/index.vue'

const initPage01 = (swiper) => {
  console.log('%c第一屏加载完成', 'color: green; font-size: 14px;', swiper)
}

const page02Init = ref(null)
const initPage02 = (swiper) => {
  console.log('%c第二屏加载完成', 'color: green; font-size: 14px;', swiper)
}

const page03Init = ref(null)
const initPage03 = (swiper) => {
  console.log('%c第三屏加载完成', 'color: green; font-size: 14px;', swiper)
}
</script>
