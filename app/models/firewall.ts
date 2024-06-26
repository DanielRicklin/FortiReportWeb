import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Company from './company.js'
import FirewallType from './firewall_type.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Firewall extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare ip: string

  @column()
  declare port: number

  @column()
  declare apiKey: string

  @column()
  declare companyId: number

  @belongsTo(() => Company)
  declare company: BelongsTo<typeof Company>

  @column()
  declare firewallTypeId: number

  @belongsTo(() => FirewallType)
  declare firewallType: BelongsTo<typeof FirewallType>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}