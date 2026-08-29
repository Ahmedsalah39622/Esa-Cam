const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

async function testAndMigrate() {
  const hostsToTry = [
    'srv1788.hstgr.io',
    '193.203.168.173',
  ];

  for (const host of hostsToTry) {
    const config = {
      host: host,
      user: 'u407531143_esa',
      password: 'qW7~21D!0',
      database: 'u407531143_esa',
      port: 3306,
      connectTimeout: 8000,
    };

    console.log(`Trying connection to Hostinger MySQL at ${host}:3306...`);
    try {
      const connection = await mysql.createConnection(config);
      console.log(`🎉 SUCCESS! Connected directly to Hostinger MySQL database at ${host}!`);

      const schemaSql = fs.readFileSync(path.join(__dirname, '../schema.sql'), 'utf8');
      const statements = schemaSql
        .split(';')
        .map((s) => s.trim())
        .filter((s) => s.length > 0 && !s.startsWith('--'));

      for (const stmt of statements) {
        if (stmt.trim()) {
          try {
            await connection.query(stmt);
            console.log(`Executed: ${stmt.slice(0, 45)}...`);
          } catch (stmtErr) {
            console.warn(`Statement notice: ${stmtErr.message}`);
          }
        }
      }

      const [tables] = await connection.query('SHOW TABLES');
      console.log('✅ Live Database Tables in phpMyAdmin:', tables);

      await connection.end();
      return;
    } catch (err) {
      console.log(`Connection to ${host} failed: ${err.message}`);
    }
  }
}

testAndMigrate();
