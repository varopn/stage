import { table } from "console";
import {Model, Column, Table, DataType} from "sequelize-typescript";

@Table({
    timestamps: false,
})
export class User extends Model<User> {

  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  })
  id?: number;

  @Column({
    type: DataType.STRING,
  })
  name?: string;

  @Column({
    type: DataType.INTEGER,
  })
  age?: number;

  @Column({
    type: DataType.STRING,
  })
  additional_info?: string;
}
