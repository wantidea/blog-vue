<template>
  <div class="navbar-box">
    <div class="navbar-main">
      <div class="navbar-left">
        <router-link class="logo-box" to="/">
          <img :src="setting.logo_url" alt="logo">
          <span>{{ setting.name }}</span>
        </router-link>

        <div class="link-box">
<!--          <router-link class="link-item" to="/">个人主页</router-link>-->
          <router-link class="link-item" to="/category/list">分类</router-link>
<!--          <router-link class="link-item" to="/">标签</router-link>-->
<!--          <router-link class="link-item" to="/">资料</router-link>-->
<!--          <router-link class="link-item" to="/">关于我们</router-link>-->
        </div>
      </div>

      <div class="navbar-right">
        <div class="icon-box">
<!--          <icon-park class="icon-item" type="home-two" theme="outline"/>-->
<!--          <icon-park class="icon-item" type="search" theme="outline"/>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { store } from '@/store/store'

@Options({
  components: {
  },
  data () {
    return {
      setting: store.getState().setting
    }
  }
})

export default class TopNavBar extends Vue {

}
</script>

<style lang="scss" scoped>
@import "src/styles/index";

.navbar-box {
  display: flex;
  width: 100%;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.2);
}

.navbar-main {
  width: 100%;
  display: flex;
  padding: 15px;
  box-sizing: border-box;
  justify-content: space-between;
}

.navbar-left,
.navbar-right {
  display: flex;
}

.logo-box {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  span {
    margin-left: 5px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    color: #4a4a4a;
  }
}

.link-box {
  display: flex;
  align-items: center;

  .link-item {
    color: #4a4a4a;
    text-decoration: none;
    padding: 3px;
    margin-left: 15px;

    &:hover {
      border-bottom: 1px solid #4a4a4a;
    }
  }
}

.icon-box {
  display: flex;
  align-items: center;
  justify-content: center;

  .icon-item {
    margin-left: 10px;
    color: #4a4a4a;
  }
}

@media (min-width: $xs) {

}

@media (min-width: $sm) {

}

@media (min-width: $md) {

}

@media (min-width: $lg) {
  .navbar-main {
    max-width: 1400px;
  }
}
</style>
