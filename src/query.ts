import { Equal } from 'typeorm'
import { Order, dataSource } from './index'


export async function writeData(id: string, dataType: string) {
  const item = new Order()
  item.dataType = [dataType]
  item.id = id
  const res = await dataSource.manager.upsert(Order, item, ['id'])
  return res
}

export async function readData(id: string) {
  const info = await dataSource.manager.findOneBy(Order, { id: id })
  return info
}
