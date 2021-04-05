import { Server } from 'http';
import supertest from 'supertest';
import express from 'express';
import apiRouter from './apiRouter';
import User from './src/db/entities/User';

// Server
let server: Server;

// supertest
let agent: supertest.SuperAgentTest;

// アプリレベルでのルーティング設定
const app = express();
app.use('/api', apiRouter);

describe('sampleテスト', () => {
  beforeEach((done) => {
    // Webサーバー(Mock)初期化
    server = app.listen(4000, () => {
      agent = supertest.agent(server);
      done();
    });
  });

  afterEach((done) => {
    // Webサーバー(Mock)終了
    return server && server.close(done);
  });

  it('テストコード', async () => {
    // レスポンス
    let users = [];
    const user = new User();
    user.firstName = 'hoge';
    user.lastName = 'fuga';
    user.age = 30;
    users.push(user);

    // User findメソッドをMock化
    const userFindMock = jest
      .spyOn(User, 'find')
      .mockReturnValue((async () => {
        return users;
      })().catch().finally());

    // テスト実行
    const response = await agent.get('/api/users').send();

    // Mockが呼ばれたか確認
    expect(userFindMock).toHaveBeenCalled();

    // 結果確認
    expect(response.status).toBe(200);
    expect(response.body).toEqual(users);
  });
});