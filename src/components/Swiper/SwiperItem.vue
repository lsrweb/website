<script setup>
import { defineAsyncComponent } from 'vue'
const props = defineProps(['imgSrc', 'swiperRef'])
console.log(props.swiperRef)
</script>
<script>
import { SwiperSlide } from 'swiper/vue'

export default {
  components: {
    SwiperSlide
  }
}
</script>

<template>
  <SwiperSlide :swiper-ref="swiperRef">
    <img :src="imgSrc" alt="" class="img-full" />
  </SwiperSlide>
</template>

<style scoped lang="scss">
.img-full {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
