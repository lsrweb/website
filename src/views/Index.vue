<template>
  <swiperParent @init="initMainSwiper">
    <template #default>
      <SwiperSlide data-hash="s1">
        <page1 @init="initPage01" />
      </SwiperSlide>
      <SwiperSlide data-hash="s2">
        <page2 @init="initPage02" ref="page02Init"></page2>
      </SwiperSlide>
      <SwiperSlide data-hash="s3">
        <page3 @init="initPage03" ref="page03Init"></page3>
      </SwiperSlide>
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

const initMainSwiper = (swiper) => {
  console.log('%c主轮播图加载完成', 'color: green; font-size: 14px;', swiper)
  console.log(swiper.slidesEl)
}

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
