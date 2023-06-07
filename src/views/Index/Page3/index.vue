<script>
import { defineComponent, defineEmits } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper'
import { data } from './data'
import { ref } from 'vue'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide
  },
  setup(props, { emit }) {
    const init = (swiper) => {
      emit('init', swiper)
    }

    const currentIndex = ref(0)

    const slideChange = (swiper) => {
      currentIndex.value = swiper.realIndex
    }
    const transitionEnd = (swiper) => {
      console.log(swiper)
    }
    const uuid = () => {
      return Math.random().toString(16).slice(2)
    }
    return {
      init,
      slideChange,
      transitionEnd,
      Autoplay,

      data,
      uuid,
      currentIndex
    }
  }
})
</script>

<template>
  <div class="page03">
    <Swiper
      :speed="1000"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false
      }"
      :allow-touch-move="false"
      :modules="[Autoplay]"
      :loop="false"
      :initial-slide="0"
      @init="init"
      @slide-change="slideChange"
      @transition-end="transitionEnd"
      class="page03-swiper"
    >
      <SwiperSlide v-for="(item, index) in data" :key="index">
        <img :src="item.image" alt="" />
      </SwiperSlide>
    </Swiper>

    <div class="progress-controller">
      <div :class="['item_', { active: currentIndex == index }]" v-for="(item, index) in data" :key="uuid()">
        {{ item.name }}
      </div>
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
      border-bottom: rgba(255, 255, 255, 0.2) solid 0.01rem;
      overflow: visible !important;
      box-sizing: content-box;
    }
  }
  .progress-info-model {
  }
}
</style>
