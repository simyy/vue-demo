import $ from 'zepto'

export default {
  bind (el, binding, vNode) {
    console.log(el)
    console.log(binding)
    [binding.expression]();
  }
}
