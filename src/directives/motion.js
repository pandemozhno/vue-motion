import {
  getKeyframes
} from '../keyframes'

import {
  parseOptions
} from '../helpers'


const motion = {
  // called before bound element's attributes
  // or event listeners are applied
  created(el, { arg, value, modifiers }, vnode, prevVnode) {
    if (value.name === undefined) return
    const keyframesEffectsNames = value.name.split(' ')
    // скрыть элемент есть есть такие кейфреймы
    let keyframes = getKeyframes(keyframesEffectsNames)
    // parse options
    const options = parseOptions(value, keyframesEffectsNames.length)

    keyframes.forEach((keyframe, index) => {
      let animation = el.animate(keyframe, options[index])
      animation.pause()
    })

  },
  // called right before the element is inserted into the DOM.
  beforeMount(el, binding, vnode, prevVnode) {},
  // called when the bound element's parent component
  // and all its children are mounted.
  mounted(el, binding, vnode, prevVnode) {
    console.log('vnode', vnode)
    const animationsArray = el.getAnimations()
    animationsArray.forEach(animation => {
      let animationPromise = animation.ready
      animationPromise.then((aP) => {
        console.log('ap', aP)
        animation.currentTime = 0
        animation.play()
      })
    })
  },
  // called before the parent component is updated
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // called after the parent component and
  // all of its children have updated
  updated(el, binding, vnode, prevVnode) {
  },
  // called before the parent component is unmounted
  beforeUnmount(el, binding, vnode, prevVnode) {
    console.log('ss', prevVnode)
    console.log('UNMOUNTED', vnode)
  },
  // called when the parent component is unmounted
  unmounted(el, binding, vnode, prevVnode) {}
}
export default motion