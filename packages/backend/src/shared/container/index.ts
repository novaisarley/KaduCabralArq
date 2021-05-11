import { container } from 'tsyringe';

import '@shared/container/providers';

import { EmployeesRepository } from '@modules/employee/infra/typeorm/repositories/EmployeesRepository';
import { IEmployeesRepository } from '@modules/employee/repositories/IEmployeesRepository';

// import { IUsersRepository } from '@modules/user/repositories/IUsersRepository';
// import { UsersRepository } from '@modules/user/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IEmployeesRepository>(
  'EmployeesRepository',
  EmployeesRepository,
);

// container.registerSingleton<IUsersRepository>(
//   'UsersRepository',
//   UsersRepository,
// );
