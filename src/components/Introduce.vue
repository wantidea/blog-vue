<template>
  <div class="box card">
    <div class="logo-box">
      <img :src="setting.logo_url">
    </div>
    <div class="name-box">
      {{ setting.name }}
    </div>
    <div class="title-box">
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

export default class Introduce extends Vue {

}
</script>

<style scoped lang="scss">
@import "src/styles/index";

$logoWidth: 125px;

.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo-box {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0 0 0;

  img {
    width: $logoWidth;
    height: $logoWidth;
  }
}

.name-box {
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: #4a4a4a;
}

.title-box {
  font-size: 14px;
  cursor: pointer;
  color: #4a4a4a;
  padding-bottom: 20px;
}
</style>
