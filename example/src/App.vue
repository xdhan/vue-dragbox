<template>
  <div id="app">
    <div class="top">
      <div class="item">
        <transition name="top-left">
          <dropbox
            :class="collapsed ? 'is-collapsed' : '' "
            drag-class="drag"
            drag-content-class="drag-content"
            drag-header-class="drag-header"
            :dragdisable="['left']"
            left="150"
            top="120"
            :visible.sync="dragTopLeftVisible"
          >
            <template #left>
              <span
                class="collapsed"
                @click="collapsed = !collapsed"
              >{{ collapsed ? '▲' : '▼' }}</span>
            </template>
            <template #center>
              可收缩
            </template>

            <template #content>
              content
            </template>
          </dropbox>
        </transition>
      </div>

      <div class="item">
        <dropbox
          drag-class="drag"
          drag-content-class="drag-content"
          drag-header-class="drag-header"
          :dragdisable="['right']"
          left="150"
          top="120"
          :visible="dragTopRightVisible"
        >
          <template #center>
            可关闭
          </template>

          <template #right>
            <span
              class="close"
              @click="dragTopRightVisible = false"
            >x</span>
          </template>

          <template #content>
            content
          </template>
        </dropbox>

        <div class="toolbar">
          <span class="open-close" @click="dragTopRightVisible = !dragTopRightVisible">
            {{ dragTopRightVisible ? '关 闭' : '打 开' }}
          </span>
        </div>
      </div>
    </div>

    <div class="bottom">
      <dropbox
        drag-class="drag"
        drag-content-class="drag-content1"
        drag-header-class="drag-header1"
        left="300"
        top="100"
        :visible="dragBottomVisible1"
      >
        <template #center>
          窗口 1
        </template>

        <template #content>
          content
        </template>
      </dropbox>

      <dropbox
        drag-class="drag"
        drag-content-class="drag-content2"
        drag-header-class="drag-header2"
        left="400"
        top="150"
        :visible="dragBottomVisible2"
      >
        <template #center>
          窗口 2
        </template>

        <template #content>
          content
        </template>
      </dropbox>

      <dropbox
        drag-class="drag"
        drag-content-class="drag-content3"
        drag-header-class="drag-header3"
        left="500"
        top="200"
        :visible="dragBottomVisible3"
      >
        <template #center>
          窗口 3
        </template>

        <template #content>
          content
        </template>
      </dropbox>
    </div>
  </div>
</template>

<script>
import dropbox from 'dropbox'
export default {
  components: { dropbox },
  data () {
    return {
      dragTopLeftVisible: true,
      dragTopRightVisible: true,
      dragBottomVisible1: true,
      dragBottomVisible2: true,
      dragBottomVisible3: true,
      collapsed: false
    }
  },
  mounted () {
    let arr = [1, 2, 299, 8, 31231, 4, 2, 353]
    let res = arr.reduce((acc, cur) => {
      if (cur < 300) return acc > cur ? acc : cur
      return acc
    })
    console.log(res)
  }
}
</script>

<style lang="scss">
body {
  padding: 0px;
  margin: 0;
}
#app {
  height: 100vh;
  min-width: 900px;
  display: flex;
  flex-direction: column;

  > div {
    flex: 1;
  }

  .top {
    display: flex;
    justify-content: space-between;
    .item {
      flex: 1;
      margin: 20px;
      border: 1px solid gainsboro;
    }
  }

  .bottom {
    margin: 0 20px 20px 20px;
    border: 1px solid gainsboro;
  }
}

.drag {
  width: 200px;
  height: 200px;
  transition: height 0.3s linear 0s;

  &.is-collapsed {
    height: 40px;
    .content {
      display: none;
    }
  }

  .close {
    padding: 2px;
    width: 20px;
    height: 20px;
    font-size: 16px;
    text-align: center;
    line-height: 18px;
    color: #909399;
    cursor: pointer;

    &:hover {
      color: #409eff;
    }
  }
}
.drag-header {
  height: 40px;
  border-bottom: 1px solid #e4e7ed;
}
.drag-header1 {
  height: 40px;
  background-color: #191919;
  color: #ffffff;
}

.drag-header2 {
  height: 40px;
  color: #ffffff;
  background-color: #409eff;
}

.drag-header3 {
  height: 40px;
  background-color: #ffffff;
  border-bottom: 1px solid #e4e7ed;
}

.drag-content {
  background-color: #ffffff;

  &.is-collapsed {
    height: 0px;
  }
}
.drag-content1 {
  background-color: #ffffff;
  color: green;
}

.drag-content2 {
  background-color: #ffffff;
}
.drag-content3 {
  background-color: #ffffff;
}

.collapsed {
  padding: 2px;
  cursor: pointer;
}

.toolbar {
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  span {
    color: #ffffff;
    background-color: #409EFF;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
  }
}
</style>
