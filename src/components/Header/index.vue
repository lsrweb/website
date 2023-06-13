<template>
  <div class="fixed-header">
    <div class="container">
      <a href="">
        <img
          src="http://www.lontend.com/assets/index/image/logo.png"
          alt=""
          class="pc-logo"
        />
      </a>
      <a href="">
        <img
          src="http://www.lontend.com/assets/index/image/mobile_logo.png"
          alt=""
          class="pe-logo"
        />
      </a>
      <ul class="navigation" v-show="!menuToggle">
        <li v-for="(item, index) in navData" :key="index">
          <router-link :to="item.path">{{ item.name }}</router-link>
          <ul class="submenu" v-if="item.children && item.children.length > 0">
            <li v-for="(child, index) in item.children" :key="index">
              <router-link :to="child.path">{{ child.name }}</router-link>
            </li>
          </ul>
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
          <div class="pc">
            <img
              src="http://www.lontend.com/assets/index/image/menu.png"
              alt=""
              v-show="menuToggle"
              @click="menuToggle = !menuToggle"
            />
            <img
              src="http://www.lontend.com/assets/index/image/close.png"
              alt=""
              v-show="!menuToggle"
              @click="menuToggle = !menuToggle"
            />
          </div>
          <div class="pe">
            <img
              src="http://www.lontend.com/assets/index/image/m_menuimg.png"
              alt=""
              v-show="!menuToggle"
              @click="menuToggle = !menuToggle"
              class=""
            />
            <img
              src="http://www.lontend.com/assets/index/image/gb.png"
              alt=""
              v-show="menuToggle"
              @click="menuToggle = !menuToggle"
            />
          </div>
        </div>
      </div>
    </div>
    <Transition mode="in" name="slide-bottom">
      <div class="searchForm" v-show="searchToggle">
        <div class="searchBox">
          <input
            type="text"
            placeholder="请输入关键字"
            name=""
            id=""
            value=""
          />
          <img
            src="http://www.lontend.com/assets/index/image/seach.png"
            class="search_onclick"
          />
        </div>
      </div>
    </Transition>

    <Transition mode="in-out" name="slide-right">
      <div class="pe-nav" v-show="menuToggle">
        <ul class="pe-menu container">
          <li v-for="(item, index) in navData" :key="index">
            <router-link :to="item.path">{{ item.name }}</router-link>
            <span
              class="arrow-icon"
              @click=";[(item.showMenu = !item.showMenu)]"
              v-show="item.children && item.children.length > 0"
            >
              <svg :class="['icon svgfont', { rotate: item.showMenu }]">
                <use xlink:href="#icon-arrow-right"></use>
              </svg>
            </span>

            <Transition mode="out-in" name="slide-left">
              <ul
                :class="['submenu', { h100: item.showMenu }]"
                v-show="
                  item.children && item.children.length > 0 && item.showMenu
                "
              >
                <li v-for="(child, index) in item.children" :key="index">
                  <router-link :to="child.path">{{ child.name }}</router-link>
                </li>
              </ul>
            </Transition>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  setup() {
    const searchToggle = ref(false)
    const menuToggle = ref(false)

    const navData = ref([
      {
        name: '首页',
        path: '/'
      },
      {
        name: '关于朗庭',
        path: '/',
        children: [
          {
            name: '集团概况',
            path: '/'
          },
          {
            name: '社会责任',
            path: '/'
          },
          {
            name: '发展历程',
            path: '/'
          },
          {
            name: '联系我们',
            path: '/'
          }
        ]
      },
      {
        name: '产业布局',
        path: '/',
        children: [
          {
            name: '集团概况',
            path: '/'
          },
          {
            name: '社会责任',
            path: '/'
          },
          {
            name: '发展历程',
            path: '/'
          },
          {
            name: '联系我们',
            path: '/'
          }
        ]
      },
      {
        name: '产业案例',
        path: '/'
      },
      {
        name: '新闻中心',
        path: '/'
      },
      {
        name: '人才战略',
        path: '/'
      }
    ])

    onMounted(() => {
      function setBaseFontSize() {
        let clientWidth = document.documentElement.clientWidth
        if (clientWidth < 1200) {
          clientWidth = 1200
        } else if (clientWidth > 1920) {
          clientWidth = 1920
        }
        document.documentElement.style.fontSize =
          (clientWidth / 1920) * 100 + 'px'
      }
      setBaseFontSize()
      window.addEventListener('resize', setBaseFontSize)
    })

    // 1200 close menu
    matchMedia('(min-width: 1200px)').addListener((e) => {
      if (e.matches) {
        menuToggle.value = false
        searchToggle.value = false
      }
    })

    return {
      searchToggle,
      menuToggle,
      navData: navData.value.map((item) => {
        item.showMenu = false
        return item
      })
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
    height: inherit;
    margin: 0 auto;
    > a {
      display: flex;
      align-items: center;
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
      margin-top: 24px;
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
      }
      .toggle-box {
        float: right;

        img {
          width: 32px;
        }
        .pe {
          img {
            width: 22px;
          }
        }
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

    @media (max-width: 1200px) {
      img.pe-logo {
        display: block;
        width: 2.2rem;
      }
      img.pc-logo {
        display: none;
      }
      ul.navigation {
        display: none;
      }
      .toggle-show {
        margin-top: 0;
        height: 100%;
        width: max-content;

        > div {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .search-box {
          margin-top: 0;
          margin-right: 10px;
          .pe {
            display: none;
          }
          .pe {
            display: block;
            img {
              width: 16px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 1200px) {
    background-color: #fff;
  }
  .searchForm {
    width: 100%;
    background: rgba(255, 255, 255, 0.8);
    padding: 20px 0;
    position: absolute;
    left: 0;
    top: 70px;
    font-size: 16px;
    color: #666;
    .searchBox {
      width: 500px;
      margin: 0 auto;
      position: relative;
      padding: 5px 15px;
      line-height: 34px;
      box-sizing: border-box;
      color: #606266;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      input {
        width: 92%;
        font-family: inherit;
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
        color: fieldtext;
      }
      img {
        position: absolute;
        right: 10px;
        top: 13px;
        width: 18px;
      }
    }
  }
}

.pe-nav {
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: 100%;
  a {
    display: block;
    height: 50px;
    color: #000;
    line-height: 50px;
    padding-left: 0;
    font-size: 16px;
  }
  > ul {
    display: flex;
    flex-direction: column;
    li {
      position: relative;
      transition: height 0.3s ease-in-out;
      a {
        border-bottom: 1px solid #eae9e9;
      }
      .arrow-icon {
        position: absolute;
        right: 10px;
        top: 0;
        height: 50px;
        font-size: small;

        .icon,
        * {
          width: 20px;
          height: 100%;
          transition: all 0.3s ease-in-out;
        }
        .rotate {
          transform: rotate(90deg);
        }
      }
    }
    .submenu {
      margin-left: 5%;
      transition: all 0.3s ease-in-out;
      &.h100 {
        height: auto;
      }
    }
  }
  @media (min-width: 1200px) {
    display: none;
  }
}

// animate
@keyframes slideBottom {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.slide-bottom-enter-active {
  animation: slideBottom 0.3s;
}
.slide-bottom-leave-active {
  animation: slideBottom 0.3s reverse;
}

@keyframes slide-left {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.slide-left-enter-active {
  animation: slide-left 0.3s;
}
.slide-left-leave-active {
  animation: slide-left 0.3s reverse;
}

@keyframes slide-right {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.slide-right-enter-active {
  animation: slide-right 0.3s;
}
.slide-right-leave-active {
  animation: slide-right 0.3s reverse;
}
</style>
