import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync('database/my.db')

export default db;