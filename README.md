# express-typeorm-jest
以下を実装したNode.js × TypeScript × Express × TypeORM × Jest × MySQLのAPI開発サンプルリポジトリです。
- typeormを使用したマイグレーション、DB操作(select)サンプル
- typeorm-seedingを使用した初期レコード登録サンプル
- Jestとsupertestを使用したテストコードのサンプル
- k8sデプロイ用Dockerfile(接続用データベースが必要)

# ローカル環境構築手順
## ビルド
```
docker-compose build
```

## node_modulesインストール
### コンテナ一時起動
```
docker-compose run --rm node sh
```

### コンテナ内でnode_modulesインストール
```
yarn install
```

### 終わったらコンテナ終了
```
exit
```

## テーブル作成&データ登録
### コンテナ起動
```
docker-compose up -d
```

### コンテナログイン
```
docker-compose exec node sh
```

### .env作成
```
cp .env.dev .env
```

### マイグレーション実行
```
yarn migrate:run
```

### シード実行
```
yarn seed:run
```

## 動作確認
以下に接続してユーザー情報一覧が返却されればOK  
http://localhost:8080/api/users

## テストコード実行方法
### コンテナログイン
```
docker-compose exec node sh
```

### Jest実行
```
yarn test
```
