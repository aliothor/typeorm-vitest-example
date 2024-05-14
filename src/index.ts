import 'reflect-metadata'
import path from 'node:path'
import { DataSource, Equal } from 'typeorm'
import { ensureFile } from 'fs-extra'
import { DatabaseInitialization } from './migrations'
import { Order } from './entities/Order'

const configPath = './data'
export const databasePath = path.join(configPath, 'database.sqlite')

/**
 * electron使用sqlcipher加密sqlite数据库
 */
export const dataSource = new DataSource({
  type: 'better-sqlite3',
  // driver: require('better-sqlite3-multiple-ciphers'),
  database: databasePath,
  synchronize: false,
  entities: [Order],
  migrations: [DatabaseInitialization],
  metadataTableName: 'migrations',
  // prepareDatabase: (db) => {
  //   db.pragma(`cipher='sqlcipher'`)
  //   db.pragma(`legacy=4`) // sqlcipher版本
  //   db.pragma(`key=xag456`) // 数据库密码
  // },
})

/**
 * 初始化数据库
 */
export async function initDatabase() {
  await ensureFile(databasePath)
  await dataSource.initialize()
  await dataSource.runMigrations()
}

export { Order }
