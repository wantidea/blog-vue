import { reactive, readonly } from 'vue'
import SettingApi from '@/api/setting'

class Store {
  protected state = reactive({
    tokenKey: '',
    token: '',
    setting: {
      logo: '',
      logo_url: '',
      name: '',
      title: ''
    }
  })

  getState () {
    return readonly(this.state)
  }

  getTokenKey (): string {
    return this.getState().tokenKey
  }

  setToken (token: string): void {
    this.state.token = token
  }

  getToken (): string {
    return readonly(this.state).token
  }

  setSetting () {
    SettingApi.list('').then(res => {
      this.state.setting.logo = res.data.logo
      this.state.setting.logo_url = res.data.logo_url
      this.state.setting.name = res.data.name
      this.state.setting.title = res.data.title
    })
  }
}

export const store: Store = new Store()
