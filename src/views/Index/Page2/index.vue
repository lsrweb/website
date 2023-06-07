<template>
  <div class="page relative">
    <Swiper
      :speed="1500"
      :autoplay="{
        delay: 1115000,
        disableOnInteraction: false
      }"
      :allow-touch-move="false"
      :modules="[Autoplay]"
      :loop="false"
      :initial-slide="0"
      @init="init"
      @slide-change="slideChange"
      @transition-end="transitionEnd"
      class="page02-swiper"
    >
      <SwiperSlide class="relative" v-for="(item, index) in swiperData" :key="uuid()">
        <img :src="item.image" alt="" class="img-full relative z-10" />
        <div :class="['pos-info absolute absolute-y-center']">
          <div class="type-title">
            {{ item.type }}
          </div>
          <div class="main-title">
            <div>
              {{ item.title }}
            </div>
          </div>
          <div class="content">
            <p>
              {{ item.content }}
            </p>
          </div>
          <div class="white-circle">
            <a href="javascript:(0)">
              <img src="http://www.lontend.com/assets/index/image/add_white.png" alt="" />
            </a>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="pagination-controller absolute z-20 right-left-animate">
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

<script>
import { SwiperSlide, Swiper } from 'swiper/vue'
import { getCurrentInstance, nextTick, ref, defineComponent, defineEmits } from 'vue'
import { Autoplay } from 'swiper'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    defineEmits(['init'])

    const { proxy } = getCurrentInstance()

    const swiperRef = ref(null)

    const setAnimate = (index, swiper, animateName = 'top-bottom-animate') => {
      const { slides } = swiper
      const slide = slides[index]
      const animate = slide.querySelector('.pos-info')
      animate.classList.add(animateName)
      animate.classList.add('block')
      return 1
    }

    const setAnimatePagination = () => {
      const pagination = document.querySelector('.pagination-controller')
      pagination.classList.add('right-left-animate')
    }

    const init = (swiper) => {
      proxy.$emit('init', swiper)

      swiperRef.value = swiper

      nextTick(() => {
        setAnimate(0, swiper)
        setAnimatePagination()
      })
    }
    const realIndex = ref(0)
    const slideChange = (swiper) => {
      realIndex.value = swiper.realIndex
    }
    const toSlide = (index) => {
      swiperRef.value.slideTo(index, 1500, false)
    }

    const swiperData = [
      {
        type: '产业布局',
        title: '文化旅游',
        image:
          'http://qiniu.picgo.srliforever.ltd/%E6%98%9F%E7%A9%BA%20%E5%A5%B3%E5%AD%A9%E5%AD%90%20%E5%A5%BD%E7%9C%8B%20%E5%94%AF%E7%BE%8E%20%E5%8A%A8%E6%BC%AB%E9%AB%98%E6%B8%85%E5%A3%81%E7%BA%B8_%E5%BD%BC%E5%B2%B8%E5%A3%81%E7%BA%B8.jpg',
        content:
          '朗庭文旅，致力成为打造文化旅游一站式服务商，产业涵盖了文旅综合体完整开发、高定文旅服务。具体业务范围包含：五星级酒店投资与管理、文化乐园咨询与开发、高定文旅设计与开发、海外游学研学项目研发等。'
      },
      {
        type: '产业布局',
        title: '国际健康',
        image:
          'http://qiniu.picgo.srliforever.ltd/%E6%88%B4%E7%9C%BC%E9%95%9C%E7%9A%84%E7%BE%8E%E5%A5%B3%20%E9%95%BF%E5%8F%91%20%E8%80%B3%E7%8E%AF%20%E9%A1%B9%E9%93%BE%20%E5%8A%A8%E6%BC%AB%E5%A3%81%E7%BA%B8_%E5%BD%BC%E5%B2%B8%E5%A3%81%E7%BA%B8.jpg',
        content:
          '朗庭文旅，致力成为打造文化旅游一站式服务商，产业涵盖了文旅综合体完整开发、高定文旅服务。具体业务范围包含：五星级酒店投资与管理、文化乐园咨询与开发、高定文旅设计与开发、海外游学研学项目研发等。'
      },
      {
        type: '产业布局',
        title: '朗庭荟',
        image:
          'http://qiniu.picgo.srliforever.ltd/%E5%85%A8%E7%BD%91%E9%A6%96%E5%8F%91%E3%80%8A%E9%93%83%E8%8A%BD%E4%B9%8B%E6%97%85%E3%80%8B%E7%94%B5%E8%84%91%E9%AB%98%E6%B8%85%E5%A3%81%E7%BA%B8_%E5%BD%BC%E5%B2%B8%E5%A3%81%E7%BA%B8.jpg',
        content:
          '朗庭文旅，致力成为打造文化旅游一站式服务商，产业涵盖了文旅综合体完整开发、高定文旅服务。具体业务范围包含：五星级酒店投资与管理、文化乐园咨询与开发、高定文旅设计与开发、海外游学研学项目研发等。'
      }
    ]

    const uuid = () => {
      return Math.random().toString(36).slice(2)
    }
    const transitionEnd = (swiper) => {
      const { realIndex } = swiper
      setAnimate(realIndex, swiper)
    }

    return {
      swiperData,
      init,
      slideChange,
      toSlide,
      realIndex,
      transitionEnd,
      uuid,
      Autoplay
    }
  }
})
</script>

<style scoped lang="scss">
.page {
  .page02-swiper {
    .pos-info {
      left: 7.5%;
      z-index: 10;
      display: none;

      .type-title {
        font-size: 0.28rem;
        font-weight: 700;
        color: #a0141a;
        margin-bottom: 0.34rem;
      }
      .main-title {
        margin-bottom: 0.16rem;
        display: flex;
        flex-direction: column;
        width: 210px;
        div {
          font-size: 1rem;
          font-weight: 300;
          color: #ffffff;
          line-height: 1.1rem;
          height: 2.2rem;
        }
      }
      .content {
        font-size: 0.16rem;
        color: #ffffff;
        line-height: 0.28rem;
        /* overflow: hidden; */
        display: -webkit-box;
        /* -webkit-box-orient: vertical; */
        /* -webkit-line-clamp: 2; */
        width: 3.2rem;
        p {
          color: #fff;
        }
      }
      .white-circle {
        margin-top: 0.3rem;
        a {
          width: 0.5rem;
          height: 0.5rem;
          text-align: center;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border: 0.02rem solid rgba(255, 255, 255, 0.4);
          img {
            width: 0.16rem;
            height: 0.16rem;
          }
          &:before {
            content: '';
            position: absolute;
            top: -0.02rem;
            left: -0.02rem;
            right: -0.02rem;
            bottom: -0.02rem;
            border-radius: 50%;
          }
          &:hover:before {
            border: 0.02rem solid rgba(255, 255, 255, 0.8);
            animation: spin 2s infinite linear;
          }
        }
      }
      @keyframes spin {
        0%,
        100% {
          clip-path: inset(0 0 60% 0);
        }
        25% {
          clip-path: inset(0 60% 0 0);
        }
        50% {
          clip-path: inset(60% 0 0 0);
        }
        75% {
          clip-path: inset(0 0 0 60%);
        }
      }
    }
  }
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

// animate from top to bottom
@keyframes topBottom {
  0% {
    transform: translateY(-200%);
  }
  100% {
    transform: translateY(-50%);
  }
}
.top-bottom-animate {
  animation: topBottom 0.5s ease-in-out;
  animation-fill-mode: forwards;
}

// animate from right to left
@keyframes rightLeft {
  0% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(0);
  }
}
.right-left-animate {
  animation: rightLeft 0.5s ease-in-out;
  animation-fill-mode: forwards;
}
</style>
