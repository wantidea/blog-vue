<template>
  <top-nav-bar/>

  <main-two-column>
    <template v-slot:box-main-left>
      <top-article></top-article>
      <div class="gap-top"></div>
      <article-category></article-category>
    </template>

    <template v-slot:box-main-right>
      <div class="card article-box">
        <div class="banner-box">
          <img :src="article.banner_url">
        </div>
        <div class="header-box">
          <div class="header-top">
            <div class="article-title">
              {{ article.title }}
            </div>
          </div>
          <div class="header-bottom">
            <div class="article-time">
              浏览：{{ article.look_total }}
            </div>
            <div class="article-time">
              更新：{{ article.updated_date }}
            </div>
          </div>
        </div>
        <div class="article-content-box">
          <div class="article-content" v-html="article.content" v-highlight></div>
        </div>
      </div>
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
import apiArticle from '@/api/article'

@Options({
  components: {
    TopNavBar,
    MainTwoColumn,
    FooterTwo,
    Introduce,
    TopArticle,
    ArticleCategory
  },
  data () {
    return {
      name: '离骚',
      article: {},
      id: 0
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.id = this.$route.query.id
      apiArticle.item({ id: this.id }).then(res => {
        this.article = res.data
      })
    }
  },
  watch: {
    $route (to) {
      if (to.query.id) {
        if (to.query.id !== this.id) {
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
  display: flex;
  justify-content: flex-start;
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  .article-time {
    margin-right: 10px;
  }
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

<style lang="scss">
.article-content {
  img {
    max-width: 100%;
  }

  a {
    color: #4a4a4a;
  }
}
</style>
