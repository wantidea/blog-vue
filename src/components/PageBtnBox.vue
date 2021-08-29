<template>
  <div class="box">
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
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 10
    },
    count: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      index: this.page,
      pageMax: 1,
      pageList: []
    }
  },
  mounted () {
    this.pageMax = Math.ceil(this.count / this.limit)
    this.pageList = this.getPageNumList(this.page, this.pageMax)
  },
  methods: {
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
    },
    // 分页跳转
    goPage () {
      this.$emit('change')
    },
    // 上一页
    prevPage () {
      this.page--
      if (this.page <= 0) {
        this.page = 1
      }
      this.goPage()
    },
    // 下一页
    nextPage () {
      this.page++
      if (this.page > this.pageMax) {
        this.page = this.pageMax
      }
      this.goPage()
    }
  },
  watch: {
    page (val) {
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

export default class PageBtnBox extends Vue {

}
</script>

<style scoped lang="scss">
@import "src/styles/index";

.box {
  width: 100%;
  padding: 10px;
  background: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

$border: 1px solid rgba(0, 0, 0, 0.2);
$border-radius: 4px;

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
</style>
