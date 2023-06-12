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
      const ctx = canvas.value.getContext('2d') // 获取canvas上下文
      canvasCtx.value = ctx // 保存canvas上下文
      const total = props.total // 声明变量存储总页数
      const current = props.current // 声明变量存储当前页数

      function drawOutLine() {
        ctx.beginPath() // 开始线条绘制
        ctx.lineWidth = 1 // 设置线条宽度
        ctx.strokeStyle = '#ccc' // 设置线条颜色
        ctx.arc(25, 25, 20, 0, 2 * Math.PI) // 绘制圆形
        ctx.stroke() // 开始绘制
      }
      drawOutLine()

      ctx.font = '14px' // 设置字体大小
      ctx.fillStyle = '#ccc' // 设置字体颜色

      ctx.textAlign = 'center' // 设置字体水平对齐方式
      ctx.textBaseline = 'middle' // 设置字体 垂直/基线 对齐方式

      ctx.fillStyle = '#a0141a' // 设置字体填充颜色
      ctx.fillText(current <= 0 ? 1 : current + 1, 15, 25) // 绘制文字

      ctx.fillStyle = '#ccc' // 设置字体填充颜色
      ctx.fillText('/', 25, 25) // 绘制文字

      ctx.font = '16px Arial' // 设置字体大小
      ctx.fillText(total, 35, 25) // 绘制文字

      function updateCtxArc() {
        ctx.beginPath() // 开始线条绘制
        ctx.lineWidth = 1 // 设置线条宽度
        ctx.strokeStyle = '#fff' // 设置线条颜色
        ctx.arc(25, 25, 20, 1.5 * Math.PI, (1.5 + ((current <= 0 ? 1 : current + 1) / total) * 2) * Math.PI) // 绘制圆形

        ctx.stroke() // 开始绘制
      }
      updateCtxArc()
    }

    const updateNumber = () => {
      canvasCtx.value.clearRect(0, 0, 50, 50) // 清空画布已有内容
      initCanvas() // 重新绘制
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
