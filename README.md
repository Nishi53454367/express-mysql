# express-typeorm-jest
Express(TypeScript) + TypeORM + Jestのサンプル

# 起動手順
ビルド
```
docker-compose build
```

コンテナログイン
```
docker-compose exec node sh
```

ライブラリインストール
```
yarn install
```

.env作成
```
cp .env.dev .env
```

マイグレーション実行
```
yarn migrate:run
```

シード実行
```
yarn seed:run
```

コンテナ終了
```
exit
```

コンテナ起動
```
docker-compose up -d
```

以下でユーザー情報一覧が返却されればOK
http://localhost:8080/api/users

# テストコード実行方法
コンテナログイン
```
docker-compose exec node sh
```

Jest実行
```
yarn test
```
