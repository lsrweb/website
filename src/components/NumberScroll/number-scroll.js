class NumberScroll {
  constructor(options) {
    const defaultOptions = {
      speed: '2s', // 滚动速度, 每多少秒滚动一次
      delay: 0, // 延迟多少秒开始
      init: true, // 是否初始化
      startNumber: 0, // 开始的数字
      callback: null // 回调函数
    }
    this.options = Object.assign({}, defaultOptions, options)
    this.init()
  }

  init() {
    this.$el = this.options.el || this.options.element
    this.$el.style.transition = `all ${this.options.speed} ease-in-out`

    this.interval = null

    this.endNumber = parseInt(this.$el.textContent) || 0 // 结束的数字
    this.startNumber = this.options.startNumber || 0 // 开始的数字
    this.currentNumber = 0 // 当前的数字

    if (this.options.init && this.$el) {
      this.start()
    }
  }

  start() {
    const startTime = Date.now() // 开始的时间
    const duration = this.options.speed.replace('s', '') * 1000 // 数字滚动持续的时间
    const delay = this.options.delay * 1000 // 延迟几秒开始滚动,注意延迟期间数字不会变化

    const endNumber = this.endNumber // 结束的数字
    const startNumber = this.startNumber // 开始的数字

    const callback = this.options.callback // 回调函数

    // 延时检测
    if (delay) {
      setTimeout(() => {
        this.interval = setInterval(() => {
          this.animateDelay(startTime, delay, duration, endNumber, startNumber, callback)
        }, 1000 / 60)
      }, delay)
    } else {
      this.interval = setInterval(() => {
        this.animateDelay(startTime, delay, duration, endNumber, startNumber, callback)
      }, 1000 / 60)
    }
  }

  animateDelay(startTime, delay, duration, endNumber, startNumber, callback) {
    const time = Date.now() - startTime - delay
    // 如果时间超过了持续时间,则停止滚动
    if (time >= duration) {
      this.stop()
      this.$el.textContent = endNumber
      if (callback) {
        callback()
      }
      return
    }
    // 计算当前的数字
    this.currentNumber = Math.floor((endNumber - startNumber) * (time / duration) + startNumber)
    this.$el.textContent = this.currentNumber

    if (callback) {
      callback()
    }
  }

  stop() {
    clearInterval(this.interval)
  }
}

export default NumberScroll
