function mssql() {
  let MSSQL_DATABASE = process.env.MSSQL_DATABASE;
  let MSSQL_HOST = process.env.MSSQL_HOST;
  let MSSQL_PASSWORD = process.env.MSSQL_PASSWORD;
  let MSSQL_TCP_PORT = process.env.MSSQL_TCP_PORT || '1433';
  let MSSQL_USER = process.env.MSSQL_USER;

  if (!MSSQL_DATABASE || !MSSQL_HOST || !MSSQL_PASSWORD || ! MSSQL_USER) {
    return undefined;
  }

  MSSQL_DATABASE = encodeURIComponent(MSSQL_DATABASE);
  MSSQL_PASSWORD = encodeURIComponent(MSSQL_PASSWORD);
  MSSQL_USER = encodeURIComponent(MSSQL_USER);

  return `mssql://${MSSQL_USER}:${MSSQL_PASSWORD}@${MSSQL_HOST}:${MSSQL_TCP_PORT}/${MSSQL_DATABASE}`;
}

module.exports = {
  host: 'localhost',
  port: 5050,
  public: '../public/',
  paginate: {
    default: 10,
    max: 50
  },
  authentication: {
    oauth: {
      redirect: 'EXTERNAL_URL',
      github: {
        key: 'GITHUB_CLIENT_ID',
        secret: 'GITHUB_CLIENT_SECRET',
        scope: [
          'user:email'
        ],
      },
    },
    entity: 'user',
    service: 'users',
    secret: 'Ej0XhakSOO92QbeyLKDUqsZPQks=',
    authStrategies: [
      'jwt',
      'local'
    ],
    jwtOptions: {
      header: {
        typ: 'access'
      },
      audience: 'https://yourdomain.com',
      issuer: 'feathers',
      algorithm: 'HS256',
      expiresIn: '1d'
    },
    local: {
      usernameField: 'email',
      passwordField: 'password'
    }
  },
  mssql: mssql(),
  sessionSecret: 'replace with unique session secret',
  tlsEnabled: false,
};
