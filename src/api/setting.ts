import { CrudApi } from '@/utils/crud'
import request from '@/utils/request'

// 设置
class SettingApi extends CrudApi {
  public list (data: any) {
    return request({
      url: this.prefix + 'list',
      method: 'get',
      params: data
    })
  }
}

const prefix = 'setting'
const apiSetting = new SettingApi(prefix)

export default apiSetting
