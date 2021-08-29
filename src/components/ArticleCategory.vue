<template>
  <div class="card box">
    <div class="card-title-box">
      文章分类
    </div>
    <div class="category-box">
      <div v-for="item in categoryOption" :key="item.id" class="category-item" @click="goCategory(item.id)">
        <div class="category-name">
          {{ item.name }}
        </div>
        <div class="category-total">
          ({{ item.total }})
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import apiArticleCategory from '@/api/article/category'

@Options({
  data () {
    return {
      categoryOption: []
    }
  },
  mounted () {
    this.getCategoryOption()
  },
  methods: {
    getCategoryOption () {
      apiArticleCategory.getArticleCount('').then(res => {
        this.categoryOption = res.data
      })
    },
    goCategory (id: number) {
      this.$router.push('/category/articleList?category=' + id)
    }
  }
})

export default class Category extends Vue {

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
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
}

.category-item {
  box-sizing: border-box;
  padding: 5px;
  cursor: pointer;
  display: flex;
  font-size: 14px;

  &:first-child {
    margin-top: 10px;
  }
}

.category-total {
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.5);
}
</style>
