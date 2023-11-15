import { createConnection } from 'mysql2/promise';

export const connectionDBprovider = {
  provide: 'CONNECT_DB',
  useFactory: async () => {
    const connection = await createConnection({
      host: 'localhost',
      user: '',
      password: '',
      database: '',
    });
    return connection;
  },
};
