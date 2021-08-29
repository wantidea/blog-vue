import request from '../utils/request'

export class CrudApi {
  public prefix: string

  public constructor (prefix: string) {
    this.prefix = '/client/blog/' + prefix + '/'
  }

  public add (data: any) {
    return request({
      url: this.prefix + 'add',
      method: 'post',
      data
    })
  }

  public del (data: any) {
    return request({
      url: this.prefix + 'del',
      method: 'delete',
      data
    })
  }

  public upd (data: any) {
    return request({
      url: this.prefix + 'upd',
      method: 'put',
      data
    })
  }

  public item (data: any) {
    return request({
      url: this.prefix + 'item',
      method: 'get',
      params: data
    })
  }

  public list (data: any) {
    return request({
      url: this.prefix + 'list',
      method: 'get',
      params: data
    })
  }
}
