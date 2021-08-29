<template>
  <div class="box">
    <div class="box-main grid">

      <div class="box-main-left">
        <slot name="box-main-left"></slot>
      </div>

      <div class="box-main-right">
        <slot name="box-main-right"></slot>
      </div>
    </div>

  </div>
</template>

<script lang="ts">

import { Vue } from 'vue-class-component'

export default class MainTwoColumn extends Vue {
}
</script>

<style lang="scss" scoped>
@import "src/styles/index";

// 间隔
$gap: 20px;

.box {
  width: 100%;
  display: flex;
  justify-content: center;
}

.box-main {
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
}

.box-main-left,
.box-main-right {
  box-sizing: border-box;
}

.box-main-left {
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 2;
  padding: $gap/2 0;
}

.box-main-right {
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 2;
  padding: $gap/2 0;
}

@media (min-width: $xs) {

}

@media (min-width: $sm) {
  .box-main {
    grid-template-columns: 34% 66%;
  }

  .box-main-left {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 2;
    padding: $gap;
  }

  .box-main-right {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;
    padding: $gap $gap $gap 0;
  }
}

@media (min-width: $md) {

}

@media (min-width: $lg) {
  .box-main {
    max-width: 1400px;
    grid-template-columns: 25% 75%;
  }
}
</style>
