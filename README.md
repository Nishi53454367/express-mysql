# express-typeorm-jest
以下の提供を目的としたサンプルリポジトリです。
- Dockerを使用したNode.js + Express(TypeScript) + MySQLのAPI開発環境
- k8sデプロイ用Dockerfile(DBが必要なため単体では動作しません)
- typeormを使用したマイグレーション、DB操作(selectのみ)サンプル
- typeorm-seedingを使用した初期レコード登録サンプル
- Jestとsupertestを使用したテストコードのサンプル

# 起動手順
## 1. node_modulesインストール
ビルド
```
docker-compose build
```

コンテナを一時起動してログイン
```
docker-compose run --rm node sh
```

ライブラリインストール
```
yarn install
```

コンテナ終了
```
exit
```

## 2. テーブル作成&データ登録
コンテナ起動
```
docker-compose up -d
```

コンテナログイン
```
docker-compose exec node sh
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

## 3. 動作確認
以下に接続してユーザー情報一覧が返却されればOK  
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
