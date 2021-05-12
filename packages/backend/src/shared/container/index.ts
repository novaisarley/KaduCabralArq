import { container } from 'tsyringe';

import '@shared/container/providers';

import { IEmployeesRepository } from '@modules/employee/repositories/IEmployeesRepository';
import { EmployeesRepository } from '@modules/employee/infra/typeorm/repositories/EmployeesRepository';

import { IUsersRepository } from '@modules/user/repositories/IUsersRepository';
import { UsersRepository } from '@modules/user/infra/typeorm/repositories/UsersRepository';

import { ICodesRepository } from '@modules/user/repositories/ICodesRepository';
import { CodesRepository } from '@modules/user/infra/typeorm/repositories/CodesRepository';

container.registerSingleton<IEmployeesRepository>(
  'EmployeesRepository',
  EmployeesRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ICodesRepository>(
  'CodesRepository',
  CodesRepository,
);
