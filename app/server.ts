import http from 'http';
import express from 'express';
import { getConnectionOptions, createConnection, BaseEntity } from 'typeorm';
import apiRouter from './apiRouter';

const PORT = 8080;
const HOST = '0.0.0.0';

// DB接続
(async () => {
  const connectionOptions = await getConnectionOptions();
  const connection = await createConnection(connectionOptions);
  // Set ActiveRecord
  BaseEntity.useConnection(connection);
})()
  .catch((e) => {
    console.error('Database Connection Error');
    console.error(e);
  })
  .finally();

// アプリレベルでのルーティング設定
const app = express();
app.use('/api', apiRouter);

// Webサーバー初期化
const server = http.createServer(app);
server.listen(PORT, HOST);

// Webサーバー起動
server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr?.port}`;
  console.log(`Listening on ${bind}`);
});
