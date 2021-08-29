import { CrudApi } from '@/utils/crud'

// 收藏
class CollectionApi extends CrudApi {

}

const prefix = 'collection'
const apiCollection = new CollectionApi(prefix)

export default apiCollection
