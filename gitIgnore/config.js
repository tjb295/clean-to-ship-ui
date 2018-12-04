const connectionObj = {
    user: 'tjb295',
    host: 'office5',
    database: 'pinot',
    password: 'tjb295',
    port: 5432
};

const connectionObjLocal = {
    user: 'postgres_user',
    host: '127.0.0.1',
    database: 'application',
    password: 'password',
    port: 5432
}

module.exports = {
    connectionObjLocal,
    connectionObj
}