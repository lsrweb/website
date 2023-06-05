<script setup>
import { ref } from 'vue'

const navData = ref([
  {
    title: '首页',
    path: 'index',
    id: 1
  },
  {
    title: '关于朗廷',
    path: 'index',
    id: 2,
    children: [
      {
        title: '集团概况',
        path: 'index',
        id: 21
      },
      {
        title: '社会责任',
        path: 'index',
        id: 22
      },
      {
        title: '发展历程',
        path: 'index',
        id: 23
      },
      {
        title: '联系我们',
        path: 'index',
        id: 24
      }
    ]
  },
  {
    title: '产业布局',
    path: 'index',
    id: 3
  },
  {
    title: '产业案例',
    path: 'index',
    id: 4
  },
  {
    title: '新闻中心',
    path: 'index',
    id: 5
  },
  {
    title: '人才战略',
    path: 'index',
    id: 6
  }
])

const navToggle = ref(false)
</script>

<template>
  <div class="header-top-fixed">
    <div class="center-container">
      <div class="left_">
        <a href="">
          <img src="http://www.lontend.com/assets/index/image/logo.png" alt="" />
        </a>
      </div>
      <div class="right_">
        <div class="r_left_">
          <ul v-show="!navToggle">
            <!--            <li>-->
            <!--              <router-link to="index">首页</router-link>-->
            <!--            </li>-->
            <!--            <li>-->
            <!--              <router-link to="index">关于朗廷</router-link>-->
            <!--              <div class="submenu">-->
            <!--                <router-link to="to">集团概况</router-link>-->
            <!--                <router-link to="to">社会责任</router-link>-->
            <!--                <router-link to="to">发展历程</router-link>-->
            <!--                <router-link to="to">联系我们</router-link>-->
            <!--              </div>-->
            <!--            </li>-->
            <!--            <li>-->
            <!--              <router-link to="index">产业布局</router-link>-->
            <!--            </li>-->
            <!--            <li>-->
            <!--              <router-link to="index">产业案例</router-link>-->
            <!--            </li>-->
            <!--            <li>-->
            <!--              <router-link to="index">新闻中心</router-link>-->
            <!--            </li>-->
            <!--            <li>-->
            <!--              <router-link to="index">人才战略</router-link>-->
            <!--            </li>-->
            <li v-for="item in navData" :key="item.id">
              <router-link :to="item.path">{{ item.title }}</router-link>
              <template v-if="item.children && item.children.length > 0">
                <div class="submenu">
                  <router-link v-for="child in item.children" :key="child.id" :to="child.path">
                    {{ child.title }}
                  </router-link>
                </div>
              </template>
            </li>
          </ul>
        </div>
        <div class="r_right_">
          <div class="search">
            <img src="http://www.lontend.com/assets/index/image/search.png" alt="" />
          </div>
          <div class="close-toggle" @click="navToggle = !navToggle">
            <img
              src="http://www.lontend.com/assets/index/image/close.png"
              alt=""
              class="close"
              v-show="!navToggle"
            />
            <img
              src="http://www.lontend.com/assets/index/image/menu.png"
              alt=""
              class="open"
              v-show="navToggle"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-top-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  z-index: 10;

  .center-container {
    width: 85%;
    margin: 0 auto;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;

    > .left_ {
      img {
        width: 2.08rem;
        height: 0.36rem;
        display: block;
        object-fit: contain;
      }
    }

    > .right_ {
      display: flex;
      width: 42%;
      justify-content: space-between;

      .r_left_ {
        width: 90%;

        ul {
          height: 100%;
          max-width: 70%;
          justify-content: space-between;
        }

        li {
          height: 50px;
          line-height: 50px;
          position: relative;
          border-bottom: 2px solid transparent;

          &:after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 0;
            width: 100%;
            height: 20px;
            background-color: transparent;
          }

          &:hover {
            border-color: #fff;

            div.submenu {
              display: flex;
            }
          }

          div.submenu {
            position: absolute;
            top: 60px;
            left: 0;
            width: max-content;
            background-color: rgba(255, 255, 255, 0.7);
            padding: 12px 32px;
            display: none;
            border-radius: 8px;

            a {
              color: rgb(102, 102, 102);
              font-size: 14px;
              margin-right: 50px;

              &:last-child {
                margin-right: 0;
              }
            }
          }

          a {
            font-size: 16px;
            display: block;
            height: 100%;
          }
        }
      }

      .r_right_ {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
          display: inline-block;
          width: 32px;
          height: 32px;
        }

        .close-toggle {
          display: flex;
          align-items: center;
        }
        //
        //img.open {
        //  display: none;
        //}

        .search {
          display: flex;
          align-items: center;

          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
}

.r_left_ ul {
  display: flex;
  align-items: center;
}
</style>
