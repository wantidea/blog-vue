import { CrudApi } from '@/utils/crud'
import request from '@/utils/request'

// 文章分类
class ArticleCategoryApi extends CrudApi {
  // 读取分类选项
  getOption (data: any) {
    return request({
      url: this.prefix + 'option',
      method: 'get',
      params: data
    })
  }

  // 分类文章数量
  getArticleCount (data: any) {
    return request({
      url: this.prefix + 'articleCount',
      method: 'get',
      params: data
    })
  }

  // 读取分类文章列表
  getArticleList (data: any) {
    return request({
      url: this.prefix + 'articleList',
      method: 'get',
      params: data
    })
  }
}

const prefix = 'article/category'
const apiArticleCategory = new ArticleCategoryApi(prefix)

export default apiArticleCategory
