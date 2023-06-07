<script setup>
import { SwiperSlide, Swiper } from 'swiper/vue'
import { getCurrentInstance, nextTick, ref } from 'vue'
import { Autoplay } from 'swiper'

defineEmits(['init'])

const { proxy } = getCurrentInstance()

const swiperRef = ref(null)

const init = (swiper) => {
  proxy.$emit('init', swiper)

  swiperRef.value = swiper
}
const realIndex = ref(0)
const slideChange = (swiper) => {
  realIndex.value = swiper.realIndex
}
const toSlide = (index) => {
  swiperRef.value.slideTo(index)
}

const swiperData = [
  {
    type: '产业布局',
    title: '文化旅游',
    content:
      '朗庭文旅，致力成为打造文化旅游一站式服务商，产业涵盖了文旅综合体完整开发、高定文旅服务。具体业务范围包含：五星级酒店投资与管理、文化乐园咨询与开发、高定文旅设计与开发、海外游学研学项目研发等。'
  },
  {
    type: '产业布局',
    title: '国际健康',
    content:
      '朗庭文旅，致力成为打造文化旅游一站式服务商，产业涵盖了文旅综合体完整开发、高定文旅服务。具体业务范围包含：五星级酒店投资与管理、文化乐园咨询与开发、高定文旅设计与开发、海外游学研学项目研发等。'
  },
  {
    type: '产业布局',
    title: '朗庭荟',
    content:
      '朗庭文旅，致力成为打造文化旅游一站式服务商，产业涵盖了文旅综合体完整开发、高定文旅服务。具体业务范围包含：五星级酒店投资与管理、文化乐园咨询与开发、高定文旅设计与开发、海外游学研学项目研发等。'
  }
]
</script>

<template>
  <div class="page relative">
    <Swiper
      :speed="1500"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false
      }"
      :allow-touch-move="false"
      :modules="[Autoplay]"
      :loop="true"
      :initial-slide="0"
      @init="init"
      @slide-change="slideChange"
    >
      <SwiperSlide class="relative">
        <img
          src="http://www.lontend.com/uploads/20230214/5d4e2e2d01da79a11b57f249d77ccf42.jpg"
          alt=""
          class="img-full relative z-10"
        />
      </SwiperSlide>
      <SwiperSlide class="relative">
        <img
          src="	http://www.lontend.com/uploads/20230224/d679d4a57da59306b6d55e03c42ab0e6.jpg"
          alt=""
          class="img-full"
        />
      </SwiperSlide>
      <SwiperSlide class="relative">
        <img
          src="http://www.lontend.com/uploads/20230222/04b8eb218bae0a91b4f228068c9c8e8b.jpg"
          alt=""
          class="img-full"
        />
      </SwiperSlide>
    </Swiper>
    <div class="pagination-controller absolute z-20">
      <!--      <div @click="toSlide(0)" :class="['item_', realIndex == 0 ? 'active' : '']">-->
      <!--        <div class="content-box">-->
      <!--          <img-->
      <!--            :src="-->
      <!--              realIndex == 0-->
      <!--                ? 'http://www.lontend.com/assets/index/image/hotel_active.png'-->
      <!--                : 'http://www.lontend.com/assets/index/image/hotel.png'-->
      <!--            "-->
      <!--            alt=""-->
      <!--          />-->
      <!--          <div>文化旅游</div>-->
      <!--        </div>-->
      <!--        <div class="bg-white" :style="{ height: realIndex == 0 ? '214px' : '0' }"></div>-->
      <!--      </div>-->
      <div
        v-for="(data, index) in swiperData"
        :key="index"
        :class="['item_', realIndex == index ? 'active' : '']"
        @click="toSlide(index)"
      >
        <div class="content-box">
          <img
            :src="
              realIndex == index
                ? 'http://www.lontend.com/assets/index/image/hotel_active.png'
                : 'http://www.lontend.com/assets/index/image/hotel.png'
            "
            alt=""
          />
          <div>{{ data.title }}</div>
        </div>
        <div class="bg-white" :style="{ height: realIndex == index ? '214px' : '0' }"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  .pagination-controller {
    bottom: 10%;
    right: 0;
    display: flex;
    justify-content: center;
    .item_ {
      background-color: rgba(0, 0, 0, 0.5);
      width: 2.4rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      padding-top: 0.4rem;
      padding-bottom: 0.4rem;
      position: relative;

      img {
        width: 0.81rem;
        height: 0.81rem;
        margin-bottom: 0.24rem;
      }
      div {
        font-size: 18px;
      }
      .content-box {
        position: relative;
        z-index: 10;
      }
      .bg-white {
        position: absolute;
        height: 0;
        background-color: rgba(255, 255, 255, 0.7);
        width: 100%;
        z-index: 5;
        bottom: 0;
        transition: all 0.3s ease-in-out;
      }
    }
    .active {
      background: unset;
      img {
        content: attr(data-activ);
      }
      div {
        color: #000000;
      }
    }
  }
}
</style>
