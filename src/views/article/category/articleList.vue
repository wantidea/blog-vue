<template>
  <top-nav-bar/>

  <main-three-column>
    <template v-slot:box-main-left>
      <hot-article></hot-article>
    </template>

    <template v-slot:box-main-center>
      <div class="title-box card">
        分类：{{ category.name }}
      </div>
      <div class="gap-top"></div>

      <category-article-list :categoryId="category.id"></category-article-list>
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
import PageBtnBox from '@/components/PageBtnBox.vue'
import CategoryArticleList from '@/components/CategoryArticleList.vue'
import ArticleCategory from '@/components/ArticleCategory.vue'
import apiArticleCategory from '@/api/article/category'
import HotArticle from '@/components/HotArticle.vue'

@Options({
  components: {
    TopNavBar,
    MainThreeColumn,
    FooterTwo,
    Introduce,
    TopArticle,
    PageBtnBox,
    CategoryArticleList,
    ArticleCategory,
    HotArticle
  },
  data () {
    return {
      category: {
        id: 0,
        name: ''
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.category.id = parseInt(this.$route.query.category)
      apiArticleCategory.item({ id: this.category.id }).then(res => {
        this.category.name = res.data.name
      })
    }
  },
  watch: {
    $route (to) {
      if (to.query.category) {
        if (to.query.category !== this.category.id) {
          this.init()
        }
      }
    }
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

.title-box {
  padding: 20px;
  font-size: 24px;
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
