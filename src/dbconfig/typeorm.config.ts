import { TypeOrmModuleOptions } from '@nestjs/typeorm';
//TODO real data
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'project',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  logging: false,
};
