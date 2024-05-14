import { describe, it, beforeAll, afterAll } from 'vitest'
import { initDatabase, queryInfoByAddress } from '../src/region'

describe('查询地址', () => {
  beforeAll(async () => {
    await initDatabase()
  })

  it('按地址查询', async () => {
    const res = await queryInfoByAddress('天河')
    console.log(res)
  })
})
