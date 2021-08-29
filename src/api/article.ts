import { CrudApi } from '@/utils/crud'
import request from '@/utils/request'

// 文章
class ArticleApi extends CrudApi {
  // 读取最新文章列表
  newList (data: any) {
    return request({
      url: this.prefix + 'newList',
      method: 'get',
      params: data
    })
  }

  // 侧边栏最新快捷导航
  newQuitList (data: any) {
    return request({
      url: this.prefix + 'newQuitList',
      method: 'get',
      params: data
    })
  }

  // 侧边栏热门快捷导航
  hotQuitList (data: any) {
    return request({
      url: this.prefix + 'hotQuitList',
      method: 'get',
      params: data
    })
  }
}

const prefix = 'article'
const apiArticle = new ArticleApi(prefix)

export default apiArticle
