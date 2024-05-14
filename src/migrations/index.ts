import type { MigrationInterface, QueryRunner,MultiPoint } from 'typeorm'
import { Table, TableColumn } from 'typeorm'

/**
 * 数据库迁移
 */
export class DatabaseInitialization implements MigrationInterface {
  public name = 'initialization' + Date.now()

  private async createOrderTable(queryRunner: QueryRunner) {

  }

  /**
   * 初始化所有表
   * @param queryRunner
   * @returns
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    const orderTable = await queryRunner.getTable('Order')
    if (!orderTable) {
      await this.createOrderTable(queryRunner)
      console.log('orderTable Database created')
    }else{
    }
  }

  public async down(_queryRunner: QueryRunner): Promise<void> {

  }
}
