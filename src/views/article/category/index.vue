<template>
  <top-nav-bar/>

  <main-two-column>
    <template v-slot:box-main-left>
      <top-article></top-article>
      <div class="gap-top"></div>
      <hot-article></hot-article>

    </template>

    <template v-slot:box-main-right>
      <article-category></article-category>
    </template>
  </main-two-column>

  <footer-two/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import TopNavBar from '@/layout/navbar/TopNavbar.vue'
import FooterTwo from '@/layout/footer/FooterTwo.vue'
import MainTwoColumn from '@/layout/main/MainTwoColumn.vue'
import Introduce from '@/components/Introduce.vue'
import TopArticle from '@/components/TopArticle.vue'
import ArticleCategory from '@/components/ArticleCategory.vue'
import HotArticle from '@/components/HotArticle.vue'

@Options({
  components: {
    TopNavBar,
    MainTwoColumn,
    FooterTwo,
    Introduce,
    TopArticle,
    ArticleCategory,
    HotArticle
  },
  data () {
    return {}
  }
})

export default class Index extends Vue {

}
</script>

<style lang="scss" scoped>
@import "src/styles/index";

// 间隔
$gap: 20px;

.gap-top {
  margin-top: $gap;
}

.article-box {
  overflow: hidden;

  .article-title {
    font-size: 26px;
    color: #4a4a4a;
  }
}

.banner-box {
  width: 100%;
  max-height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }

}

.header-box {
  padding: 20px;
}

.article-time {
  color: #4f4f4f;
  font-size: 10px;
}

.header-bottom {
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.article-content-box {
  padding: 0 20px 20px 20px;
}

@media (min-width: $xs) {

}

@media (min-width: $sm) {

}

@media (min-width: $md) {

}

@media (min-width: $lg) {

}
</style>

<style>
</style>
