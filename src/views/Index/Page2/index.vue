<template>
  <div class="page relative">
    <Swiper
      :speed="1500"
      :autoplay="{
        delay: 1115000,
        disableOnInteraction: false
      }"
      :nested="true"
      :modules="[Autoplay]"
      :loop="false"
      :initial-slide="0"
      @init="init"
      @slide-change="slideChange"
      @transition-end="transitionEnd"
      class="page02-swiper"
    >
      <SwiperSlide
        class="relative"
        v-for="item in swiperData"
        :key="item.image"
      >
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
              <img
                src="http://www.lontend.com/assets/index/image/add_white.png"
                alt=""
              />
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
        <div
          class="bg-black"
          :style="{ height: realIndex == index ? '0' : '100%' }"
        ></div>
        <div
          class="bg-white"
          :style="{ height: realIndex == index ? '100%' : '0' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { SwiperSlide, Swiper } from 'swiper/vue'
import {
  getCurrentInstance,
  nextTick,
  defineComponent,
  defineEmits,
  ref
} from 'vue'
import { Autoplay } from 'swiper'
import { datas } from './data'

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

    const swiperData = datas

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

      @media (max-width: 1200px) {
        top: 44%;
        .type-title {
          margin-bottom: 10px;
        }
        .content p {
          font-size: 0.23rem;
          line-height: 24px;
        }
        .main-title {
          width: auto;
          div {
            height: auto;
            font-size: 0.7rem;
          }
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
        @media (max-width: 1200px) {
          width: 100%;
          text-align: center;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 9;
          div {
            font-size: 0.18rem;
          }
        }
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
      .bg-black {
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 5;
        top: 0;
        transition: all 0.3s ease-in-out;
      }
      @media (max-width: 1200px) {
        width: 1.8rem;
        height: 2rem;
        .bg-black {
          height: 100% !important;
        }
        &.active .bg-white {
          height: 100% !important;
        }
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
