let canvas
let ctx
let flowField

window.onload = function () {
  const canvas = document.getElementById('canvas1')
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height)
  flowField.animate()
}

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height)
  flowField.animate()
})

class FlowFieldEffect {
  #ctx
  #width
  #height
  constructor(ctx, width, height) {
    this.#ctx = ctx
    this.#ctx.strokeStyle = 'white'
    this.#width = width
    this.#height = height
    this.x = 0
    this.y = 0
  }
  #draw(x, y) {
    const length = 300
    this.#ctx.beginPath()
    this.#ctx.moveTo(x, y)
    this.#ctx.lineTo(x + length, y + length)
    this.#ctx.stroke()
  }
  animate() {
    this.#ctx.clearRect(0, 0, this.#width, this.#height)
    this.#draw(this.x, this.y)
    this.x += 0.5
    this.y += 1.5
    console.log('animating')
    requestAnimationFrame(this.animate.bind(this))
  }
}
