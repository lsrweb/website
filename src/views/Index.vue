<template>
  <swiperParent @init="initMainSwiper" @slideChange="mainSlideChange">
    <template #default>
      <SwiperSlide data-hash="0">
        <page1 @init="initPage01" />
      </SwiperSlide>
      <SwiperSlide data-hash="1">
        <page2 @init="initPage02" ref="page02Init"></page2>
      </SwiperSlide>
      <SwiperSlide data-hash="2">
        <page3 @init="initPage03" ref="page03Init"></page3>
      </SwiperSlide>
      <SwiperSlide data-hash="3">
        <page4 @init="initPage04" ref="page04Init"></page4>
      </SwiperSlide>
      <SwiperSlide data-hash="4">
        <page5 @init="initPage05" ref="page05Init"></page5>
      </SwiperSlide>
      <SwiperSlide data-hash="5">
        <page6 @init="initPage05" ref="page06Init"></page6>
      </SwiperSlide>
    </template>
  </swiperParent>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue'

import { SwiperSlide } from 'swiper/vue'

import swiperParent from '@/components/Swiper/Swiper.vue'
import page1 from './Index/Page1/index.vue'
import page2 from './Index/Page2/index.vue'
import page3 from './Index/Page3/index.vue'
import page4 from './Index/Page4/index.vue'
import page5 from './Index/Page5/index.vue'
import page6 from './Index/Page6/index.vue'

const mainSwiperRef = ref(null)
const initMainSwiper = (swiper) => {
  console.log('%c主轮播图加载完成', 'color: green; font-size: 12px;')
  mainSwiperRef.value = swiper
}

const mainSlideChange = (swiper) => {
  const hash = swiper.slides[swiper.realIndex].dataset.hash
  function setHash(VAL) {
    location.hash = VAL
  }
  setHash(hash)
}

onMounted(() => {
  const hash = location.hash.slice(1)
  nextTick(() => {
    if (!hash) return
    if (!mainSwiperRef.value) return console.error('main swiper is not ready,init failed!')
    mainSwiperRef.value.slideTo(hash, 0, false)
  })
})

// eslint-disable-next-line no-unused-vars
const initPage01 = (swiper) => {
  console.log('%c第一屏加载完成', 'color: green; font-size: 12px;')
}

const page02Init = ref(null)
// eslint-disable-next-line no-unused-vars
const initPage02 = (swiper) => {
  console.log('%c第二屏加载完成', 'color: green; font-size: 12px;')
}

const page03Init = ref(null)
// eslint-disable-next-line no-unused-vars
const initPage03 = (swiper) => {
  console.log('%c第三屏加载完成', 'color: green; font-size: 12px;')
}

const page04Init = ref(null)
// eslint-disable-next-line no-unused-vars
const initPage04 = () => {
  console.log('%c第四屏加载完成', 'color: green; font-size: 12px;')
}

const page05Init = ref(null)
// eslint-disable-next-line no-unused-vars
const initPage05 = () => {
  console.log('%c第五屏加载完成', 'color: green; font-size: 12px;')
}

const page06Init = ref(null)
// eslint-disable-next-line no-unused-vars
const initPage06 = () => {
  console.log('%c第六屏加载完成', 'color: green; font-size: 12px;')
}
</script>
