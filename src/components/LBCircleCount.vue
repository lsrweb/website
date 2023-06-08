<template>
  <canvas ref="canvas" width="50" height="50"></canvas>
</template>

<script>
import { watch } from 'vue'
import { onMounted, ref } from 'vue'

export default {
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 6
    }
  },
  setup(props) {
    const canvas = ref(null)

    watch(
      () => props.current,
      () => {
        updateNumber()
      }
    )

    const canvasCtx = ref(null)
    const initCanvas = () => {
      const ctx = canvas.value.getContext('2d')
      canvasCtx.value = ctx
      const total = props.total
      const current = props.current

      function drawOutLine() {
        ctx.beginPath()
        ctx.lineWidth = 1
        ctx.strokeStyle = '#ccc'
        ctx.arc(25, 25, 20, 0, 2 * Math.PI)
        ctx.stroke()
      }
      drawOutLine()

      ctx.font = '14px '
      ctx.fillStyle = '#ccc'

      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      ctx.fillStyle = '#a0141a'
      ctx.fillText(current <= 0 ? 1 : current + 1, 15, 25)

      ctx.fillStyle = '#ccc'
      ctx.fillText('/', 25, 25)

      ctx.font = '16px Arial'
      ctx.fillText(total, 35, 25)

      function updateCtxArc() {
        ctx.beginPath()
        ctx.lineWidth = 1
        ctx.strokeStyle = '#fff'
        ctx.arc(25, 25, 20, 1.5 * Math.PI, (1.5 + ((current <= 0 ? 1 : current + 1) / total) * 2) * Math.PI)
        ctx.stroke()
      }
      updateCtxArc()
    }

    const updateNumber = () => {
      canvasCtx.value.clearRect(0, 0, 50, 50)
      initCanvas()
    }
    onMounted(() => {
      initCanvas()
    })

    return {
      canvas,
      updateNumber,
      initCanvas
    }
  }
}
</script>

<style scoped>
canvas {
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 20;
}
</style>
