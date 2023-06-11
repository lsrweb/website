<template>
  <div class="page6">
    <div class="content-container h-100">
      <img src="http://www.lontend.com/assets/index/image/bg6.png?v=1" class="bg-cover" />
      <div class="main-concent">
        <div class="main-concent-top-box">
          <div class="main-concent-top-guanyu">
            <div class="main-concent-top-title"><a style="color: #c2c2c2" href="/about">关于朗庭</a></div>
            <div class="main-left-text"><a style="color: #c2c2c2" href="/summary">集团概况</a></div>
            <div class="main-left-text"><a style="color: #c2c2c2" href="/duty">社会责任</a></div>
            <div class="main-left-text"><a style="color: #c2c2c2" href="/deve">发展历程</a></div>
            <div class="main-left-text"><a style="color: #c2c2c2" href="/contact">联系我们</a></div>
          </div>
          <div class="main-concent-top-guanyu">
            <div class="main-concent-top-title"><a style="color: #c2c2c2" href="/layoutHome">产业布局</a></div>
            <div class="main-left-text"><a style="color: #c2c2c2" href="/layoutEstate">文化旅游 </a></div>
            <div class="main-left-text"><a style="color: #c2c2c2" href="/charity">国际健康</a></div>
            <div class="main-left-text"><a style="color: #c2c2c2" href="/layoutCity">朗庭荟</a></div>
          </div>
          <div class="main-concent-top-guanyu">
            <div class="main-concent-top-title"><a style="color: #c2c2c2" href="/case_recom">产业案例</a></div>
            <div class="main-left-text"><a style="color: #c2c2c2" href="/case_recom">推荐案例</a></div>
            <div class="main-left-text"><a style="color: #c2c2c2" href="/case_class_list">分类案例</a></div>
          </div>
          <div class="main-concent-top-guanyu">
            <div class="main-concent-top-title"><a style="color: #c2c2c2" href="/news">新闻中心</a></div>
          </div>
          <div class="main-concent-top-guanyu">
            <div class="main-concent-top-title"><a style="color: #c2c2c2" href="/talent">人才战略</a></div>
            <div class="main-left-text"><a style="color: #c2c2c2" href="/job_recruit">职位招聘</a></div>
          </div>
        </div>
        <div class="main-concent-mid-codebox">
          <div></div>
          <div class="main-left-photo">
            <div class="main-left-photoss">TEL: 400-881-8722</div>
            <div class="main-left-emila">咨询邮箱：LT@lontend.com</div>
            <div class="main-left-emila">地址：江苏省南京市建邺区江东中路100号朗昇希尔顿酒店2楼</div>
          </div>
        </div>
        <div class="main-bottom-addres">
          <div class="main-bottom-riods">
            Copyright © 2022 江苏朗庭控股集团有限公司版权所有. 苏ICP备2022038333号
            <span>
              <a href="/legalAid" style="color: inherit">法律声明</a> |
              <a href="/privacy" style="color: inherit">隐私政策</a>
            </span>
          </div>
          <div class="main-bottom-reoprt">
            <div>
              <img src="http://www.lontend.com/assets/index/image/WeChat.png" />
            </div>
            <div>
              <img src="http://www.lontend.com/assets/index/image/trill.png" />
            </div>
            <div>
              <img src="http://www.lontend.com/assets/index/image/micro.png" />
            </div>
            <div>
              <img src="http://www.lontend.com/assets/index/image/media.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="main-left-map">
        <div>
          <img src="http://www.lontend.com/uploads/20220928/32051cb07b39ffd8dcd4d7569aa5bd0a.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.page6 {
  width: 100%;
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

  .main-concent-top-box {
    position: absolute;
    left: 10%;
    width: 65%;
    max-width: 800px;
    top: 20%;
    display: flex;
    justify-content: space-between;
  }
  .main-concent-top-guanyu {
    width: 10%;
    text-align: center;
    pointer-events: auto;
  }
  .main-concent-top-title {
    line-height: 0.16rem;
    color: #ffffff;
    font-size: 0.2rem;
    margin-bottom: 0.3rem;
  }
  .main-left-text {
    font-size: 0.16rem;
    color: #c2c2c2;
    line-height: 0.5rem;
    text-align: center;
    opacity: 0.39;
  }
  .main-concent-mid-codebox {
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 11%;
    top: 60%;
    right: 11%;
  }

  .main-left-ul {
    position: absolute;
    left: 5%;
    top: 18%;
  }

  .main-left-ul li {
    float: left;
    line-height: 0.16rem;
    color: #ffffff;
    font-size: 0.2rem;
    padding-left: 1.12rem;
  }

  .main-left-title {
    position: absolute;
    top: 25%;
    left: 11%;
  }

  .main-left-tilre {
    position: absolute;
    top: 25%;
    left: 4.05rem;
  }

  .main-left-tipad {
    position: absolute;
    top: 25%;
    left: 7.9rem;
  }

  .main-left-teapod {
    position: absolute;
    top: 25%;
    left: 9.9rem;
  }

  .main-left-map {
    position: absolute;
    top: 0;
    right: 0;
  }

  .main-left-map img {
    width: 7.2rem;
  }

  .main-left-photo {
    /* position: fixed;
  right: 10%;
  bottom: 25%; */
    text-align: right;
    margin-top: 0.3rem;
  }

  .main-left-emila {
    font-size: 0.16rem;
    color: #ffffff;
    line-height: 0.3rem;
    opacity: 0.3;
  }

  .main-left-photoss {
    font-size: 0.24rem;
    color: #ffffff;
    line-height: 0.5rem;
    opacity: 0.3;
  }

  .main-bottom-Accounts {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* position: absolute;
  left: 11%;
  top: 58%; */
    width: 2.5rem;
  }
  .main-bottom-Accounts img {
    width: 1.09rem;
    height: 1.09rem;
  }

  .main-bottom-Accounts p {
    font-size: 0.16rem;
    color: #ffffff;
    opacity: 0.3;
    text-align: center;
  }

  .main-bottom-addres {
    border-top: 1px solid #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 8%;
    right: 8%;
    height: 1rem;
    line-height: 1rem;
    top: 88%;
  }

  .main-bottom-riods {
    font-size: 0.14rem;
    color: #696969;
    margin-top: -0.3rem;
  }

  .main-bottom-reoprt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1.5rem;
    height: 1rem;
    line-height: 1rem;
    margin-top: -3% !important;
    font-size: 65px;
    /* // margin-top: -0.4rem; */
  }

  .main-bottom-reoprt img {
    width: 0.3rem;
    height: 0.3rem;
  }
}
</style>
