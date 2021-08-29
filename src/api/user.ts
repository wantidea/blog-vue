import { CrudApi } from '@/utils/crud'

// 用户
class UserApi extends CrudApi {

}

const prefix = 'user'
const apiUser = new UserApi(prefix)

export default apiUser
