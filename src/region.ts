import 'reflect-metadata'
import fs from 'node:fs/promises'
import path from 'node:path'
import { Column, DataSource, Entity, ILike, PrimaryColumn } from 'typeorm'
import { ensureFile, remove } from 'fs-extra'

@Entity('gd')
export class RegionInfo {
  @PrimaryColumn()
  ogc_fid: string

  @Column()
  WKT_GEOMETRY: string

  @Column()
  address: string

  @Column()
  name: string
}

export const dbPath = path.join(__dirname, '../data/gd.sqlite')

const dataSource = new DataSource({
  type: 'better-sqlite3',
  database: dbPath,
  synchronize: false,
  entities: [RegionInfo],
//   driver: require('better-sqlite3-multiple-ciphers'),
//   prepareDatabase: (db) => {
//     db.pragma(`cipher='sqlcipher'`)
//     db.pragma(`legacy=4`) // sqlcipher版本
//     db.pragma(`key=xag456`) // 数据库密码
//   },
})

export async function initDatabase() {
  await dataSource.initialize()
  const res = await fs.stat(dbPath)
  console.log(res)
}

export async function queryInfoByAddress(address: string) {
  const res = await dataSource.manager.find(RegionInfo, {
    where: {
      //  address: ILike(`%${address}%`),
      name: ILike(`%${address}%`),
    },
    take: 10,
  })

  return res
}
