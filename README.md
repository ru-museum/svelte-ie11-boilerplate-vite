# svelte-ie11-boilerplate-vite
svelte-boilerplate for IE11 with Vite

# 特徴
- この Svelte apps は [Vite](https://github.com/vitejs/vite) による template に基づいています。  
以下の手順で作成されています。
```
　# npm init vite@latest my-project --template svelte-ts
```

- TypeScript 及び SCSS(SASS) に対応しています。

- 特に IE11 に対応するためのものです(バージョン 11.1087.16299.0 で確認)。  

- Android 4.4- で確認しています。  

- 開発環境：Linux(Debian), Node.js 17.0.1。  

# 構築手順
1. cron を作成し依存ライブラリーのインストールをします。

- この boilerplate に基づき新規の project を構築するには [degit](https://github.com/Rich-Harris/degit) を使用します。

```
npx degit ru-museum/svelte-ie11-boilerplate-vite svelte-app
cd svelte-app
npm install
```
### 【注意】
```
! could not find commit hash for master
```
上記エラーが表示された場合は、branch 名を指定して下さい(**#main**)。
```
npx degit ru-museum/svelte-ie11-boilerplate-vite#main svelte-app
```

- 社会情勢によりデフォルト branch 名は、**master** から **main** へ変更されています。  
　※ **npm** 又は **degit** 側が未対応の理由に依ると思われます。

　　参照 ⇒ [github / renaming: Renaming the default branch from master](https://github.com/github/renaming)

- 構築するには [Node.js](https://nodejs.org/) のインストールが必要です。  
　  
2. [Vite](https://github.com/vitejs/vite) をスタートします。

```
npm run dev
```

- ブラウザで [localhost:5000](http://localhost:5000/) にアクセスしますと初期画面が表示されます。
- 各機能が正常に表示されていることを確認して下さい。  
　  
3. 公開用にビルドします。

```
npm run build
```
- フォルダ **public** 内のデータはビルド時に **dist** 内へコピーされます。  
　  

4. WEB 上へ公開するには、dist フォルダ内の必要なファイルをアップします。










