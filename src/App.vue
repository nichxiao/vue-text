<template>
  <div id="app">
    <router-view></router-view>
    <m-tabbar v-model="select">
      <m-tabbar-item id="index" isRouter>
          <img src="./assets/images/home.png" slot="icon-normal"><img src="./assets/images/home-active.png" slot="icon-active">首页
      </m-tabbar-item>
      <m-tabbar-item id="AudioBook" isRouter>
          <img src="./assets/images/comments.png" slot="icon-normal"><img src="./assets/images/comments-active.png" slot="icon-active">书影音
      </m-tabbar-item>
      <m-tabbar-item id="Broadcast" isRouter>
          <img src="./assets/images/person.png" slot="icon-normal"><img src="./assets/images/person-active.png" slot="icon-active">广播
      </m-tabbar-item>
      <m-tabbar-item id="group" isRouter>
          <img src="./assets/images/shop.png" slot="icon-normal"><img src="./assets/images/shop-active.png" slot="icon-active">小组
      </m-tabbar-item>
      <m-tabbar-item id="mine" isRouter>
          <img src="./assets/images/iconfont-jixieqimo.png" slot="icon-normal"><img src="./assets/images/iconfont-jixieqimo-active.png" slot="icon-active">我的
      </m-tabbar-item>
    </m-tabbar>
  </div>
</template>

<script>
  import mTabbar from "./components/tabbar"
  import mTabbarItem from "./components/tabbar-item"
  export default {
    name: 'app',
    components: {
      mTabbar,
      mTabbarItem
    },
    data(){
      return {
        select:"index"
      }
    }
  }
</script>

<style>

