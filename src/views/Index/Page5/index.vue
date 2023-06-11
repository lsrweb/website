<template>
  <div class="page5">
    <div class="content-container h-100">
      <!--bg5.jpg-->
      <img src="http://www.lontend.com/uploads/20230224/9282b246c840fe13d93a1b41dc18f3c5.jpg" class="bg-cover" />
      <div class="main-concent">
        <dl class="main-top-title">
          <dt class="main-top-dt">朗庭，缔造臻美生活</dt>
          <dd class="main-top-dd"></dd>
        </dl>
        <div class="main-mid-box">
          <div class="main-mid-assets">
            <div class="main-mid-num scroll">
              <strong class="scroll-number" data-step="0.1" data-speed="3s">50</strong>
              <b>+</b>
              <span>亿</span>
            </div>
            <div class="main-mid-text">总资产</div>
          </div>
          <div class="main-mid-line"></div>
          <div class="main-mid-time">
            <div class="main-mid-num">
              <strong class="scroll-number" data-step="150">2010</strong>
            </div>
            <div class="main-mid-text">成立时间</div>
          </div>
          <div class="main-mid-line"></div>
          <div class="main-mid-partner">
            <div class="main-mid-num">
              <strong class="scroll-number" data-step="40">1000</strong>
              <span>+</span>
            </div>
            <div class="main-mid-text">合作伙伴</div>
          </div>
        </div>
        <div class="main-bottom-but">
          <a href="about">
            <div class="main-bottom-but-mid">
              <div>关于朗庭</div>
              <div>&gt;</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import NumberScroll from '@/components/NumberScroll/number-scroll'

export default defineComponent({
  name: 'Page5',
  components: {},
  props: {},
  emits: [],
  setup(props, ctx) {
    onMounted(() => {
      document.querySelectorAll('.scroll-number').forEach((element) => {
        const scroller = new NumberScroll({
          el: element,
          step: element.dataset.step,
          speed: element.dataset.speed,
          delay: element.dataset.delay,
          init: true,
          callback: null
        })
      })
    })
    return {}
  }
})
</script>

<style lang="scss" scoped>
.page5 {
  height: 100%;
}
.content-container {
  position: relative;
  height: 100%;
  .bg-cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
  }
  .main-concent {
    position: absolute;
    top: 25%;
    left: 30%;
    width: 40%;
    height: auto;
    color: #fff;
    .main-top-title {
      width: 100%;
      text-align: center;
      border: 0px solid #fff;
      height: 1rem;
      overflow: hidden;
      position: relative;
      dt {
        font-size: 0.42rem;
        height: 0.42rem;
        font-weight: 400;
        margin-bottom: 0.3rem;
        position: absolute;
        width: 100%;
        text-align: center;
        letter-spacing: 4px;
      }
      dd {
        font-size: 0.16rem;
        height: 0.16rem;
        font-weight: 300;
        position: absolute;
        top: 1.72rem;
        width: 100%;
        text-align: center;
      }
    }
    .main-mid-box {
      display: flex;
      justify-content: space-between;
      text-align: center;
      height: 1.2rem;
      font-weight: 300;
      margin-top: 0.5rem;
      position: relative;
      overflow: hidden;
      .main-mid-assets {
        text-align: center;
        height: 1.2rem;
        position: relative;
        .main-mid-num {
          height: 0.8rem;
          font-size: 0.82rem;
          position: relative;
          .scroll-number {
            font-weight: 300;
          }
          b {
            position: absolute;
            right: -25%;
            font-weight: 300;
            top: 0;
            font-size: 0.24rem;
          }
          span {
            position: absolute;
            right: -25%;
            bottom: -10%;
            font-size: 0.18rem;
          }
        }
        .main-mid-text {
          padding-top: 0.2rem;
          font-size: 0.16rem;
          position: absolute;
          width: 100%;
          text-align: center;
        }
      }
      .main-mid-line {
        width: 1px;
        height: 0.6rem;
        border-right: 1px solid #fff;
        margin-top: 0.4rem;
      }
      .main-mid-time {
        text-align: center;
        height: 0.8rem;
        font-size: 0.82rem;
        position: relative;
        .main-mid-num {
          height: 0.8rem;
          font-size: 0.82rem;
          position: relative;
          strong {
            font-weight: 300;
          }
        }
        .main-mid-text {
          padding-top: 0.2rem;
          font-size: 0.16rem;
          position: absolute;
          width: 100%;
          text-align: center;
        }
      }
      .main-mid-partner {
        /* width: 32%; */
        text-align: center;
        height: 0.8rem;
        font-size: 0.82rem;
        position: relative;
        .main-mid-num {
          height: 0.8rem;
          font-size: 0.82rem;
          position: relative;
          strong {
            font-weight: 300;
          }
          span {
            position: absolute;
            right: -1%;
            top: 0;
            font-size: 0.24rem;
          }
        }
        .main-mid-text {
          padding-top: 0.2rem;
          font-size: 0.16rem;
          position: absolute;
          width: 100%;
          text-align: center;
        }
      }
    }
    .main-bottom-but {
      width: 2.5rem;
      font-size: 0.16rem;
      text-align: center;
      line-height: 0.7rem;
      height: 0.7rem;
      margin: 0 auto;
      background-color: #a0141a;
      position: relative;
      overflow: hidden;
      margin-top: 0.7rem;
      .main-bottom-but-mid {
        width: 86%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        position: absolute;
        // left: -2.5rem;
        left: 0.15rem;
      }
    }
  }
}
</style>
