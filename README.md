# svelte-ie11-boilerplate-vite
svelte-boilerplate for IE11 with Vite

# 特徴
- **svelte 5** へのバージョンアップがされています（2026-04-14）。  

- この Svelte apps は [Vite](https://github.com/vitejs/vite) による template に基づいています。  
以下の手順で作成されています。
```
　# npm create vite@latest my-project
   〇 Svelte
   〇 Typescript
```

- TypeScript 及び SCSS(SASS) に対応しています。

- 特に IE11 に対応するためのものです(バージョン 11.1087.16299.0 で確認)。  

- Android 4.4- で確認しています。  

- 開発環境：
```
# uname -osr
  Linux 6.19.11+deb14-amd64 GNU/Linux
# node --version
  v24.8.0
```
# 構築手順
1. cron を作成し依存ライブラリーのインストールをします。
- この boilerplate に基づき新規の project を構築します。
- 構築するには [Node.js](https://nodejs.org/) のインストールが必要です。  
```
npm install ru-museum/svelte-ie11-boilerplate-vite#main svelte-app
cd svelte-app
npm install
```
　  
2. [Vite](https://github.com/vitejs/vite) をスタートします。
```
npm run dev
```

- ブラウザで [localhost:5000](http://localhost:5000/) にアクセスしますと初期画面が表示されます。
- 各機能（TypeScript、SCSS 等）が正常に表示されていることを確認して下さい。  
　  
3. 公開用にビルドします。

```
npm run build
```
- フォルダ **public** 内のデータはビルド時に **dist** 内へコピーされます。  
　  

4. WEB 上へ公開するには、dist フォルダ内の必要なファイルをアップします。










