import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.renameColumn('e_mail', 'email')
      table.dropColumn('last_login_at')
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {})
  }
}
