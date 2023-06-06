<template>
  <div class="fixed-header">
    <div class="container">
      <a href="">
        <img src="http://www.lontend.com/assets/index/image/logo.png" alt="" class="pc-logo" />
      </a>
      <a href="">
        <img src="http://www.lontend.com/assets/index/image/mobile_logo.png" alt="" class="pe-logo" />
      </a>
      <a href="">
        <img src="http://www.lontend.com/assets/index/image/mobile_logo.png" alt="" class="pe-logo" />
      </a>
      <ul class="navigation" style="">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/about">关于朗庭</router-link>
          <ul class="submenu">
            <li><router-link to="/summary">集团概况</router-link></li>
            <li><router-link to="/duty">社会责任</router-link></li>
            <li><router-link to="/deve">发展历程</router-link></li>
            <li><router-link to="/contact">联系我们</router-link></li>
          </ul>
        </li>
        <li>
          <router-link to="/layoutHome">产业布局</router-link>
        </li>
        <li>
          <router-link to="/case_recom">产业案例</router-link>
        </li>
        <li>
          <router-link to="/news">新闻中心</router-link>
        </li>
        <li>
          <router-link to="/talent">人才战略</router-link>
        </li>
      </ul>
      <div class="toggle-show">
        <div class="search-box">
          <div class="pc">
            <img
              src="http://www.lontend.com/assets/index/image/search.png"
              alt=""
              v-show="!searchToggle"
              @click="searchToggle = !searchToggle"
            />
            <img
              src="http://www.lontend.com/assets/index/image/close-icon.png"
              alt=""
              v-show="searchToggle"
              @click="searchToggle = !searchToggle"
            />
          </div>
          <div class="pe">
            <img
              src="http://www.lontend.com/assets/index/image/seach.png"
              alt=""
              v-show="!searchToggle"
              @click="searchToggle = !searchToggle"
            />
            <img
              src="http://www.lontend.com/assets/index/image/gb.png"
              alt=""
              v-show="searchToggle"
              @click="searchToggle = !searchToggle"
            />
          </div>
        </div>
        <div class="toggle-box">
          <img
            src="http://www.lontend.com/assets/index/image/menu.png"
            alt=""
            v-show="!menuToggle"
            @click="menuToggle = !menuToggle"
          />
          <img
            src="http://www.lontend.com/assets/index/image/close.png"
            alt=""
            v-show="menuToggle"
            @click="menuToggle = !menuToggle"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  setup() {
    const searchToggle = ref(false)
    const menuToggle = ref(false)

    onMounted(() => {
      function setBaseFontSize() {
        let clientWidth = document.documentElement.clientWidth
        if (clientWidth < 1200) {
          clientWidth = 1200
        } else if (clientWidth > 1920) {
          clientWidth = 1920
        }
        if (document.body.clientWidth < 900) {
          document.querySelector('.investCase .swiper').style.height = '370px'
        }
        document.documentElement.style.fontSize = (clientWidth / 1920) * 100 + 'px'
      }
      setBaseFontSize()
      window.addEventListener('resize', setBaseFontSize)
    })

    return {
      searchToggle,
      menuToggle
    }
  }
}
</script>

<style lang="scss" scoped>
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 10;

  .fixed-header.transparent {
    background: transparent;
  }

  .container {
    width: 85%;
    height: 100%;
    margin: 0 auto;
    > a {
      display: inline-block;
      height: 100%;
      float: left;
      img {
        height: 100%;
      }
    }
    img.pe-logo {
      display: none;
    }
    img.pc-logo {
      width: 2.2rem;
      height: 1.1rem;
    }
    ul.navigation {
      width: 76%;
      position: relative;
      list-style: none;
      float: left;
      margin-top: 10px;
      display: flex;
      justify-content: flex-end;

      > li {
        display: inline-block;
        margin: 0;
        padding: 0;
        float: left;
        line-height: 20px;
        position: relative;
        padding: 18px 22px;
        a {
          padding-bottom: 8px;
          font-size: 16px;
          color: #fff;
          text-decoration: none;
          display: block;
        }
        ul.submenu {
          position: absolute;
          top: 60px;
          left: 0;
          width: 100%;
          background: #fff;
          display: none;
          border-radius: 6px;
          list-style: none;
          margin: 0;
          padding: 0;
          z-index: 99;
          li {
            display: inline-block;
            margin: 0;
            float: left;
            line-height: 20px;
            position: relative;
            padding: 18px 22px;
            a {
              padding: 10px 20px;
              font-size: 14px;
              color: #333;
              text-decoration: none;
              display: block;
              padding: 14px 20px;
              width: 100%;
              color: #666;
              font-size: 14px;
              text-decoration: none;
              display: inline-block;
              float: left;
              clear: both;
              white-space: nowrap;
              box-sizing: border-box;
              -moz-box-sizing: border-box;
              -webkit-box-sizing: border-box;
            }
          }
        }
        &:hover {
          a {
            border-bottom: 2px solid #fff;
          }
          ul.submenu {
            display: flex;
            width: max-content;
          }
        }
      }
    }
    .toggle-show {
      width: 90px;
      float: right;
      margin-top: 22px;
      overflow: hidden;
      img {
        width: 32px;
      }
      * {
        font-size: initial;
      }
      .search-box {
        width: 20px;
        float: left;
        font-size: 0;
        margin-top: 8px;

        img {
          width: 22px;
          margin-right: 10px;
        }
        .pe {
          display: none;
        }
        @media screen and (max-width: 1200px) {
          .pe {
            display: block;
          }
          .pc {
            display: none;
          }
        }
      }
      .toggle-box {
        float: right;
        img {
          width: 32px;
        }
      }
    }
  }
}
</style>
