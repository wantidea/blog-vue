<template>
  <div class="card box">
    <div class="card-title-box">
      热门文章
    </div>
    <div v-for="item in articleList" :key="item.id" class="article-box">
      <router-link :to="getArticleUrl(item.id)" class="article-title">
        {{ item.title }}
      </router-link>
      <div class="article-look-total">{{ item.look_total }}
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
    apiArticle.hotQuitList('').then(res => {
      this.articleList = res.data
    })
  },
  methods: {
    getArticleUrl (id: string) {
      return '/article/item?id=' + id
    }
  }
})

export default class HotArticle extends Vue {

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
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px 0 10px 0;

  &:last-child {
    border: none;
    padding-bottom: 0;
  }

  .article-title {
    color: #4a4a4a;
    font-size: 16px;
    text-decoration: none;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .article-look-total {
    color:rgba(100,100,100,1);
    font-size: 10px;
    font-weight: bold;
  }

}

</style>
