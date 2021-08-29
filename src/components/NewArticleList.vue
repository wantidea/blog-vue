<template>
  <div class="box">
    <div v-for="item in newArticleList" :key="item.id" class="article-item">
      <div v-if="item.banner_url" class="banner-box">
        <img :src="item.banner_url" alt="banner">
      </div>

      <div class="tag-box">
        发布于 {{ item.created_date }}
      </div>

      <div class="title-box">
        {{ item.title }}
      </div>
      <router-link :to="getArticleUrl(item.id)" class="info-btn">阅读详情</router-link>
    </div>

    <div class="page-btn-box">
      <div class="page-btn" :style="page <= 1 ? 'display:none;':''" @click="prevPage()">&lt;</div>
      <div v-for="i in pageList"
           :key="i"
           class="page-btn" :class="page===i?'check-btn':''"
           @click="goPage(i)">{{
          i
        }}
      </div>
      <div class="page-btn" :style="page >= pageMax ? 'display:none;':''" @click="nextPage()">&gt;</div>
    </div>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import apiArticle from '@/api/article'

@Options({
  data () {
    return {
      page: 1, // 当前页数
      count: 0, // 数据总数
      limit: 10, // 一页最大数量
      pageMax: 1,
      pageList: [],
      newArticleList: []
    }
  },
  mounted () {
    this.getNewArticleList(this.page, this.limit)
  },
  methods: {
    // 读取列表
    getNewArticleList (page: number, limit: number) {
      apiArticle.newList({
        page: page,
        page_size: limit
      }).then(res => {
        this.newArticleList = res.data.data
        this.count = res.data.count

        this.pageMax = Math.ceil(this.count / this.limit)
        this.pageList = this.getPageNumList(this.page, this.pageMax)
      })
    },

    getArticleUrl (id: string) {
      return '/article/item?id=' + id
    },

    // 分页跳转
    goPage (page: number) {
      this.page = page
      this.getNewArticleList(this.page, this.limit)
    },

    // 上一页
    prevPage () {
      this.page--
      if (this.page <= 0) {
        this.page = 1
      }
    },

    // 下一页
    nextPage () {
      this.page++
      if (this.page > this.pageMax) {
        this.page = this.pageMax
      }
    },

    // 获取分页符列表
    getPageNumList (page: number, pageMax: number) {
      let minPage = page - 4
      let maxPage = page + 4

      if (minPage <= 0) {
        minPage = 1
      }

      if (maxPage > pageMax) {
        maxPage = pageMax
      }

      const pageList = []
      for (let i = minPage; i <= maxPage; i++) {
        pageList.push(i)
      }
      return pageList
    }

  },
  watch: {
    page (val) {
      this.goPage(val)
      this.pageList = this.getPageNumList(val, this.pageMax)
    },
    count (val) {
      this.pageMax = Math.ceil(val / this.limit)
    },
    pageMax (val) {
      this.pageList = this.getPageNumList(this.page, val)
    }
  }
})

export default class NewArticleList extends Vue {

}
</script>

<style lang="scss" scoped>
@import "src/styles/index";

$border: 1px solid rgba(0, 0, 0, 0.2);
$border-radius: 4px;

.article-item {
  padding: 10px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-bottom: 16px;

  .banner-box {
    max-height: 300px;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
    }
  }

  .tag-box {
    padding: 14px 0 0 14px;
    font-size: 12px;
    color: #4a4a4a;
  }

  .title-box {
    font-size: 26px;
    font-weight: 520;
    padding: 6px 0 0 14px;
  }

  .info-btn {
    text-decoration: none;
    color: #4a4a4a;
    background: rgba(0, 0, 0, 0.1);
    padding: 3px 10px;
    border-radius: 3px;
    margin: 16px 14px;
    display: inline-block;
    font-size: 12px;
  }
}

.page-btn-box {
  width: 100%;
  padding: 10px;
  background: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

.page-btn {
  padding: 8px 13px;
  cursor: pointer;
  border-top: $border;
  border-left: $border;
  border-bottom: $border;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;

  &:hover {
    background: rgb(0, 0, 0);
    color: #ffffff;
  }

  &:first-child {
    border-top-left-radius: $border-radius;
    border-bottom-left-radius: $border-radius;
  }

  &:last-child {
    border-right: $border;
    border-top-right-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
  }
}

.check-btn {
  color: #ffffff;
  background: rgba(0, 0, 0, 0.7);
  border: none;
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
