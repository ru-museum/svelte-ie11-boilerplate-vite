import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
  
// IE11 対応
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({

   plugins: [
   
     svelte(),

     // IE11 対応
     legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
     })
      
   ],
   
  /**
   * 以下は必要の無い場合は不要です。
   */ 

  // PORT の変更：
  server: {
     port: 5000,
  },

  // ERROR：
  // ./dist/index.html を開いた時、参照ファイルが読み込まれない場合への対処。
  //  "/assets/..." => "./assets/..." と build される様にする。
  base : './',
   
})
