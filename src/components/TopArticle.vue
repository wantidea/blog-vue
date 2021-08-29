<template>
  <div class="card box">
    <div class="card-title-box">
      近期更新
    </div>
    <div v-for="item in articleList" :key="item.id" class="article-box">
      <div v-if="item.banner_url" class="article-left">
        <router-link :to="getArticleUrl(item.id)" class="banner-box" v-if="item.banner_url">
          <img :src="item.banner_url" alt="banner">
        </router-link>
      </div>
      <div class="article-right">
        <div class="time-box">
          {{ item.created_date }}
        </div>
        <router-link :to="getArticleUrl(item.id)" class="title-box">
          {{ item.title }}
        </router-link>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import apiArticle from '@/api/article'

@Options({
  data () {
    return {
      articleList: []
    }
  },
  mounted () {
    apiArticle.newQuitList('').then(res => {
      this.articleList = res.data
    })
  },
  methods: {
    getArticleUrl (id: string) {
      return '/article/item?id=' + id
    }
  }
})

export default class TopArticle extends Vue {

}
</script>

<style scoped lang="scss">
@import "src/styles/index";

.box {
  width: 100%;
  padding: 20px !important;
}

.card-title-box {
  color: #4a4a4a;
  font-weight: bold;
}

.article-box {
  display: flex;
  margin-top: 16px;
}

.article-left {
  width: 100px;
  margin-right: 10px;

  .banner-box {
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: auto;
    }
  }
}

.article-right {
  .time-box {
    font-size: 10px;
    color: #4a4a4a;
  }

  .title-box {
    color: #4a4a4a;
    font-size: 16px;
    text-decoration: none;
  }
}

</style>
