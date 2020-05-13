<template>
  <div v-if="mVisible" v-drag :class="'h-drag ' + dragClass">
    <div :class="'header ' + dragHeaderClass">
      <div class="left">
        <slot name="left" />
      </div>

      <div class="center">
        <slot name="center" />
      </div>

      <div class="right">
        <slot name="right" />
      </div>
    </div>

    <div :class="'content ' + dragContentClass">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropbox',
  directives: {
    drag: {
      bind (el, binding, vnode){
        el.setAttribute('uid', vnode.context._uid)
      },
      inserted (el, binding, vnode) {
        console.log(vnode)
        // 除了自身之外最大的 z-index
        const getMaxZIndex = () => {
          const allEl = document.body.querySelectorAll('.h-drag')
          const maxZindex = Array.from(allEl).reduce((accZIndex, curEl) => {
            let curZIndex = getComputedStyle(curEl).zIndex
            if (curEl.getAttribute('uid') !== el.getAttribute('uid') && /^\d+$/.test(curZIndex)) {
              curZIndex = Number.parseInt(curZIndex, 10)
              return accZIndex > curZIndex ? accZIndex : curZIndex
            }
            return accZIndex
          }, 0)
          return maxZindex
        }
        el.style.zIndex = getMaxZIndex() + 1
        
        // const setZIndex = () => {
        //   const allEl = document.body.querySelectorAll('.h-drag')
        //   Array.from(allEl).forEach(item => {
        //     if (item.getAttribute('uid') != el.getAttribute('uid')) {
        //       item.style.zIndex = 99
        //     }
        //   })
        //   el.style.zIndex = 100
        // }

        const container = el.parentNode

        const elTop = Number.parseInt(vnode.context.top.split(/^d+/)[0])
        const elLeft = Number.parseInt(vnode.context.left.split(/^d+/)[0])
        el.style.top = `${container.offsetTop + elTop}px`
        el.style.left = `${container.offsetLeft + elLeft}px`

        const header = el.querySelector('.h-drag .header')
        const noDragEls = vnode.context.dragdisable.map(name => {
          let noDragEl = el.querySelector(`.h-drag .header .${name}`)
          noDragEl.style.cursor = 'default'
          return noDragEl
        })

        let isMouseDown, initX, initY
        let minX, minY, maxX, maxY

        el.addEventListener('mousedown', () => {
          console.log(el.getBoundingClientRect().width)
          let maxZindex = getMaxZIndex()
          let elZIndex = getComputedStyle(el).zIndex
          if (maxZindex > elZIndex)
            el.style.zIndex = maxZindex + 1
        },false)

        header.addEventListener('mousedown', e => {
          // 点击 禁止拖动的元素及其内部元素 返回
          if (noDragEls.some(item => item.contains(e.target))) {
            e.preventDefault()
            return false
          }
          // e.target.style.cursor = 'move'
          isMouseDown = true
          initX = e.pageX - el.getBoundingClientRect().left
          initY = e.pageY - el.getBoundingClientRect().top
        })

        document.addEventListener('mouseup', () => {
          isMouseDown = false
        })

        // el.addEventListener('mouseup', e => {
        //   if (e.clientY > window.innerHeight || e.clientY < 0 || e.clientX < 0 || e.clientX > window.innerWidth) {
        //     isMouseDown = false
        //   }
        // })

        document.addEventListener('mousemove', e => {
          if (isMouseDown) {
            let cx = e.clientX - initX
            let cy = e.clientY - initY
            minX = container.offsetLeft
            minY = container.offsetTop
            maxX = container.offsetLeft + container.getBoundingClientRect().width - el.getBoundingClientRect().width
            maxY = container.offsetTop + container.getBoundingClientRect().height - el.getBoundingClientRect().height

            if (cx < minX) {
              cx = minX
            }

            if (cy < minY) {
              cy = minY
            }

            if (cx > maxX) {
              cx = maxX
            }

            if (cy > maxY) {
              cy = maxY
            }

            el.style.left = cx + 'px'
            el.style.top = cy + 'px'
          }
        })

      }
    }
  },
  props: {
    dragClass: {
      type: String,
      default: ''
    },
    dragHeaderClass: {
      type: String,
      default: ''
    },
    dragContentClass: {
      type: String,
      default: ''
    },
    dragdisable: {
      type: Array,
      default: () => []
    },
    visible: {
      type: Boolean,
      default: true
    },
    top: {
      type: String,
      default: '0'
    },
    left: {
      type: String,
      default: '0px'
    }
  },
  computed: {
    mVisible: {
      get () {
        return this.visible
      },
      set (v) {
        this.$emit('update:visible', v)
      }
    }
  },
  mounted () {
    // console.log(this.zIndex)
  }
}
</script>

<style lang="scss" scoped>
.h-drag {
  user-select: none;
  display: flex;
  flex-direction: column;
  position: absolute;
  box-shadow: 0px 0px 10px 0px rgba(25, 25, 25, 0.14);
  .header {
    user-select: none;
    display: flex;
    cursor: move;
    align-items: center;

    > div {
      height: 100%;
      display: flex;
      align-items: center;
      cursor: move;
    }

    .left {
      padding:0px 8px;
    }
    .center {
      flex: 1;
      display: flex;
      justify-content: center;
    }
    .right {
      padding:0px 8px;
    }
  }
  .content {
    flex: 1;
    padding: 8px;
  }
}
</style>
