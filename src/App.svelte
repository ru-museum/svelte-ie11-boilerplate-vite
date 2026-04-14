<script lang="ts">

  import svelteLogo from './assets/svelte.svg'
  import viteLogo from './assets/vite.svg'
  import Counter from './lib/Counter.svelte'

	let name: string = $state(0)
	const buttons: string = [
	     { name: "foo", color: "red"  },
	     { name: "bar", color: "blue" },
	     { name: "baz", color: "green"}
	];

</script>

<div class="container">

<h1>svelte-ie11-boilerplate-vite</h1>
<h2>Vite - Svelte - Typescript</h2>
<h3>/src/App.svelte</h3>

<h2>環境構築</h2>
<ol>
  <li><h3>project</h3>
<pre>
npm create vite@latest project-name
◯ Svelte  
◯ Typescript
</pre>  
</li>
  <li><h3>main.ts</h3>
<pre>
import './app.css' 
+ import './style.css'
</pre>  
  </li>

<li><h3>IE 11: plugin-legacy</h3>
<ol style="list-style-type: decimal-leading-zero;">
  <li><h4>インストール</h4>
<pre>
# npm i -D @vitejs/plugin-legacy
</pre>  

</li>
<li><h4>vite.config.ts</h4>
<pre class="w600">
import &#123; defineConfig &#125; from 'vite';
import &#123; svelte &#125; from '@sveltejs/vite-plugin-svelte';

// IE11 対応
<strong>import legacy from '@vitejs/plugin-legacy';</strong>

export default defineConfig(&#123;
   plugins: [
      svelte(),<strong>
      // IE11 対応
      legacy(&#123;
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      &#125;)</strong>
   ],
   server: &#123;
      // PORT 変更：必要なければ不要（default：3000）　　
      port: 5000
   &#125;,
   // 表示エラーの出力修正： "/assets/..." => "./assets/..."　
   base : './',
&#125;)
</pre>
</li>
</ol>

  </li>

  <li><h3>tsconfig.json</h3>
<pre class="w600">
ERROR:
The TypeScript option <strong>verbatimModuleSyntax</strong> is now required 
when using Svelte files with lang="ts". Please add it to 
your tsconfig.json.

// tsconfig.app.json ではなく直接 <strong>tsconfig.json</strong> に記述します。
&#123;
  "compilerOptions": &#123;
    <strong>"verbatimModuleSyntax": true,</strong>
  &#125;,
</pre>
  </li>

  <li><h3>package.json</h3>
<pre class="w500">
"@sveltejs/vite-plugin-svelte": "^7.0.0",
"@tsconfig/svelte": "^5.0.8",
"@types/node": "^25.6.0",
"@vitejs/plugin-legacy": "^8.0.1",
"marked": "^18.0.0",
"sass": "^1.99.0",
"svelte": "^5.55.3",
"svelte-check": "^4.4.6",
"svelte-preprocess": "^6.0.3",
"tslib": "^2.8.1",
"typescript": "^5.9.3",
"vite": "^8.0.8",
"whatwg-fetch": "^3.6.20"
</pre>
※ typescript は svelte-preprocess 依存のため "5.9.3" です。
  </li>

 <li><h3>Typescript：</h3>
	<ul>
		<li><strong>Typescript</strong> はそのまま使えます。</li>
	</ul>	 
	 
   <h4>動作テスト</h4>
<pre>
&lt;script <strong>lang="ts"</strong>&gt;
const buttons<strong>: string</strong> = [
 &#123; name: "foo", color: "red"  &#125;,
 &#123; name: "bar", color: "blue" &#125;,
 &#123; name: "baz", color: "green"&#125;
];
&lt;/script&gt;
</pre>    

{#each buttons as {name, color}, i}
  <button class="btn" style="background-color:{color};">
   {name}
  </button>
{/each}
 <br>
 <br>
  <Counter />

  </li>
   
   <li><h3>SCSS</h3>
   
   <ol style="list-style-type: decimal-leading-zero;">
     <li><h4>インストール：</h4>
<pre class="w300">
npm i -D sass
</pre>
</li>

<li><h4>CSS</h4>
<pre>
&lt;style <strong>lang="scss"</strong>&gt;
   /* 変数の宣言 */
   <strong>$bgcolor</strong>: #e1f5fe;
   <strong>$width</strong>:400px;
   <strong>$color</strong>: green;
   .sample &#123;
      background-color: <strong>$bgcolor</strong>;
      width:<strong>$width</strong>;
      padding:20px 20px;
      p &#123;
         color: <strong>$color</strong>;
      &#125;
   &#125;
&lt;/style&gt;
</pre>    
</li>
<li><h4>動作テスト</h4>	   

<pre>
&lt;div class="sample"&gt;
  &lt;p&gt;変数の使用&lt;/p&gt;
&lt;/div&gt; 
</pre>


   <div class="sample">
       <p>変数の使用</p>
   </div> 
</li>
</ol>
<br>   
</li>

<li><h2>LINKS</h2>
   <ol style="list-style-type: decimal-leading-zero;">
    <li>
      <a href="https://vite.dev/" target="_blank" rel="noreferrer">
        <img class="logo" src={viteLogo} alt="viteLogo" />
        Vite
      </a>
    </li>
    <li>
      <a href="https://svelte.dev/" target="_blank" rel="noreferrer">
        <img class="button-icon" src={svelteLogo} alt="svelteLogo" />
        Svelte
      </a>
    </li>
  </ol>
 
</li>

</ol>

</div>

<br>
<br>

<style lang="scss">

   /* 変数の宣言*/ 
   $bgcolor: #e1f5fe;
   $width: 200px;
   $color: green;

   .sample {
      font-size:1.4em;
      text-align: center;
      background-color: $bgcolor;
      width:$width;
      p {
         color: $color;
      }
      padding:26px 20px 26px 20px;
   }
   

	.btn{
		margin-right: 20px;
    font-size:3em;
		color:#fff;
		padding:1.2em;
		border:0;
		border-radius:12px;
	}

  .logo {
    height: 18px;
  }
  .button-icon {
    height: 18px;
    width: 18px;
  }

</style>

