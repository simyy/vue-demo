import $ from 'zepto'
import home from '../views/home'

export default {
  bind (mel, binding, vNode) {
    let el = $(mel);
    el.on('scroll', () => {
      let height = parseFloat(el.height())
      let scrollTop = parseFloat(el.scrollTop())
      let totalHeight = height + scrollTop
      if (el[0].scrollHeight - totalHeight <= 3) {
        console.log(`${el.height()}-${el.scrollTop()}-${el[0].scrollHeight}`)
        binding.value()
      }
    })
  }
}
