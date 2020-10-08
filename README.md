## 概要
Nuxt(v2.14.x) + Laravel8.x(Sanctum利用)のSPA認証サンプルです。

### 関係図
![structure](./.doc/images/spa_dev_template.png)

## 初期設定
### コンテナ準備
```
$ docker-compose up
```

### Web
下記コマンドで常時ビルドするようにします。
```
$ docker-compose exec web yarn install
$ docker-compose exec web yarn dev
```

### Api
```
$ docker-compose exec api composer install
$ docker-compose exec api cp .env.example .env
$ docker-compose exec api php artisan key:generate 
$ docker-compose exec api php artisan migrate:refresh --seed
```
## 開発用コマンド
### コンテナ準備
```
$ docker-compose up
```

### Frontend準備
```
$ docker-compose exec web yarn dev
```
