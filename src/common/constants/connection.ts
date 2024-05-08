export type Connection = {
  CONNECTION_STRING: string;
  DB: string;
  DBNAME: string;
};

export const dbConnection: Connection = {
  CONNECTION_STRING: 'MYSQL://12341234/xxx',
  DB: 'MYSQL',
  DBNAME: 'TEST',
};
