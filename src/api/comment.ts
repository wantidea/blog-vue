import { CrudApi } from '@/utils/crud'

// 评论
class CommentApi extends CrudApi {

}

const prefix = 'collection'
const apiComment = new CommentApi(prefix)

export default apiComment
