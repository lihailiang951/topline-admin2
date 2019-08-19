<template>
  <div class="layout-wrap">
    <AppAside/>
    <AppHeader/>
    <!-- HOME、内容管理、粉丝管理。。。。都显示到这里 -->
  </div>
</template>

<script>
import AppAside from './components/AppAside'
import AppHeader from './components/AppHeader'
export default {
  name: 'AppLayout',
  components: {
    AppAside,
    AppHeader
  },
  data () {
    return {}
  }
}
</script>
<style lang="less" secoped>

</style>
