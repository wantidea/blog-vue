<template>
  <top-nav-bar/>

  <main-three-column>
    <template v-slot:box-main-left>
      <hot-article></hot-article>
    </template>

    <template v-slot:box-main-center>
      <new-article-list></new-article-list>
    </template>

    <template v-slot:box-main-right>
      <top-article></top-article>
      <div class="gap-top"></div>
      <article-category></article-category>
    </template>
  </main-three-column>

  <footer-two/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import TopNavBar from '@/layout/navbar/TopNavbar.vue'
import FooterTwo from '@/layout/footer/FooterTwo.vue'
import MainThreeColumn from '@/layout/main/MainThreeColumn.vue'
import Introduce from '@/components/Introduce.vue'
import TopArticle from '@/components/TopArticle.vue'
import NewArticleList from '@/components/NewArticleList.vue'
import ArticleCategory from '@/components/ArticleCategory.vue'
import HotArticle from '@/components/HotArticle.vue'

@Options({
  components: {
    TopNavBar,
    MainThreeColumn,
    FooterTwo,
    Introduce,
    TopArticle,
    NewArticleList,
    ArticleCategory,
    HotArticle
  },
  data () {
    return {}
  },
  methods: {}
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

@media (min-width: $xs) {

}

@media (min-width: $sm) {

}

@media (min-width: $md) {

}

@media (min-width: $lg) {

}
</style>
