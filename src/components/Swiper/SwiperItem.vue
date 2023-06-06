<!-- <template>
  <SwiperSlide :swiper-ref="swiperRef">
    <img :src="imgSrc" alt="" class="img-full" />
  </SwiperSlide>
</template> -->

<script>
import { SwiperSlide } from 'swiper/vue'
import { render } from 'vue'
import { h } from 'vue'
import { defineAsyncComponent } from 'vue'

export default defineAsyncComponent({
  components: {
    SwiperSlide
  },
  props: {
    imgSrc: {
      type: String,
      default: ''
    },
    swiperRef: {
      type: Object,
      default: null
    }
  },
  setup(props) {
    const vNodes = render(
      'SwiperSlide',
      {
        ref: 'swiperRef'
      },
      [
        h('img', {
          src: props.imgSrc,
          alt: '',
          class: 'img-full'
        })
      ]
    )
    return () => vNodes
  }
})
</script>

<style scoped lang="scss">
.img-full {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
