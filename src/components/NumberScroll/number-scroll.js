class NumberScroll {
  constructor(selector, options = {}) {
    this.selector = selector
    this.options = options
    this.element = document.querySelectorAll(selector)
    this.init()
  }

  init() {
    console.log(this.element)
  }

  start() {}

  stop() {}

  animate(timestamp) {}

  update() {}

  round(value) {}

  format(value) {}

  get easingFunctions() {
    return {}
  }
}

export default NumberScroll
