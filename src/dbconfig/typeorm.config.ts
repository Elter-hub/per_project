import { TypeOrmModuleOptions } from '@nestjs/typeorm';
//TODO real data
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 3306,
  username: '',
  password: '',
  database: 'jwtauth.db',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  logging: false,
};
