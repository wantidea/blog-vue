<template>
  <div class="footer-box">
    <div class="footer-main">
      {{ setting.title }}
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

export default class Footer extends Vue {

}
</script>

<style lang="scss" scoped>
@import "src/styles/index";

.footer-box {
  margin-top: 100px;
  display: flex;
  width: 100%;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.footer-main {
  width: 100%;
  display: flex;
  padding: 40px 0;
  box-sizing: border-box;
  justify-content: center;
  color: #4a4a4a;
  font-weight: bold;
}

@media (min-width: $xs) {

}

@media (min-width: $sm) {

}

@media (min-width: $md) {

}

@media (min-width: $lg) {
  .footer-main {
    max-width: 1400px;
  }
}
</style>
