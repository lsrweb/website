class NumberScroll {
  constructor(options) {
    const defaultOptions = {
      step: 1, // 每次滚动的数字
      speed: '3s', // 每个数字滚动的时间
      delay: 0, // 延迟多少秒开始
      init: true, // 是否初始化
      callback: null // 回调函数
    }
    this.options = { ...options, ...defaultOptions }
    this.init()
  }

  init() {
    this.el = this.options.el
    if (!this.el) return
    this.targetNumber = parseInt(this.el.textContent)
    this.currentNumber = 0
    this.interval = null

    if (this.options.init && this.options.el) {
      this.start()
    }
  }

  start() {
    const startTime = Date.now() // 开始时间
    const duration = parseInt(this.options.speed) * 1000 // 持续时间,应在多少秒内完成
    const delay = parseInt(this.options.delay) // 延迟时间
    const step = this.options.step // 每次滚动的数字
    const targetNumber = this.targetNumber // 目标数字
    const currentNumber = this.currentNumber // 当前数字

    this.interval = setInterval(() => {
      const currentTime = Date.now() // 当前时间
      const time = currentTime - startTime - delay // 已经过去的时间
      const percent = time / duration // 已经过去的百分比
      const current = currentNumber + targetNumber * percent * step // 当前数字
      if (percent >= 1) {
        this.el.textContent = targetNumber
        this.stop()
        this.options.callback && this.options.callback()
      } else {
        this.el.textContent = parseInt(current)
      }
    }, 16)
  }

  stop() {
    clearInterval(this.interval)
  }
}

export default NumberScroll
