<script lang="ts">
	import logo from './assets/svelte.png'
	import vite from './assets/vite.svg'
	import Counter from './lib/Counter.svelte'

	export let name: string;
	const buttons: string = [
	     { name: "foo", color: "red"  },
	     { name: "bar", color: "blue" },
	     { name: "baz", color: "green"}
	];
</script>

<div class="container">

<div class="main">

  <img src={logo} alt="Svelte Logo" />
  <img src={vite} alt="Vite Logo" />

  <h1>Hello {name}!</h1>
  <h1>Svelte - Vite<br> Boilerplate</h1>
  <h3>Typescript - SCSS - IE11</h3>

  <Counter />

</div>


<h2 class="left">設定手順</h2>

<ol class="left">

 <li><h3>Typescript：</h3>
	<ul>
		<li><strong>Typescript</strong> はそのまま使えます。
	</ul>	 
	 
   <h4>動作テスト</h4>

<pre>
   <div>
&lt;script <strong>lang="ts"</strong>&gt;

   const buttons<strong>: string</strong> = [
     &#123; name: "foo", color: "red"  &#125;,
     &#123; name: "bar", color: "blue" &#125;,
     &#123; name: "baz", color: "green"&#125;
   ];

&lt;/script&gt;

   </div>
</pre>    

     <div style="text-align:center;">
         {#each buttons as {name, color}, i}

            <button class="btn" 
                    style="background-color:{color};">
               {name}
            </button>

         {/each}
     </div>
   
    </li>
   
   <li><h3>SCSS：</h3>
   
   <ul>
     <li><strong>sass</strong> のインストールのみで使用可となっています。
   </ul>

   <h4>動作テスト</h4>	   
	   
<pre>    
   <div>
&lt;style <strong>lang="scss"</strong>&gt;

   //変数の宣言 
   <strong>$bgcolor</strong>: #e1f5fe;
   <strong>$width</strong>:400px;
   <strong>$color</strong>: green;

   .sample &#123;
      background-color: <strong>$bgcolor</strong>;
      width:<strong>$width</strong>;
      .content p &#123;
         color: <strong>$color</strong>;
      &#125;
   &#125;
   
&lt;/style&gt;
   </div>
   
</pre>    

   <div class="sample">
     <h3>SCSS テスト</h3>
     <div class="content">
       <p>変数の使用</p>
     </div>
   </div> 
   
</li>


<li>
   <h3>IE11 対応</h3>
   <ul>
     <li><strong>@vitejs/plugin-legacy</strong> をインストールしています。</li>
   </ul>

   <h4>./vite.config.js</h4>
	
<pre>

import &#123; defineConfig &#125; from 'vite';
import &#123; svelte &#125; from '@sveltejs/vite-plugin-svelte';

// IE11 対応
<strong>import legacy from '@vitejs/plugin-legacy'</strong>

export default defineConfig(&#123;

   plugins: [
   
      svelte(),

      <strong>
      // IE11 対応
     legacy(&#123;
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
     &#125;)
      </strong>
      
   ],
   
   server: &#123;
      // PORT 変更：必要なければ不要（default：3000）　　
      port: 5000
   &#125;,
  
   // 表示エラーの出力修正： "/assets/..." => "./assets/..."　
   base : './',
   
&#125;)

</pre>
   <p></p>
   
</li>

<li>
   <h3>エラー対応</h3>
   <ul>
      <li>./dist/index.html を開いても表示されない場合、ディレクトリ指定を「./」とする必要があります。<br>
      ※ ブラウザ依存であるかは未確定（環境：Firefox - Debian）。
      </li>
      <li>
         build 時に "/assets/" が "<strong>.</strong>/assets/" となる様に指定します。
      </li>
   </ul>

   <h4>./vite.config.js</h4>
	
<pre>
export default defineConfig(&#123;
   ....
   
   <strong>base : './'</strong>
</pre>
</li>

</ol>

  <p>
    Visit <a href="https://svelte.dev">svelte.dev</a> and <a href="https://ja.vitejs.dev/" target="_blank">Vitejs</a> to learn how to build Svelte
    apps.
  </p>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>
  
</div>

<style lang="scss">

  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

	.left {
		text-align: left;
	}

	.main{
		text-align: center;
	}

	.container {
		padding-top: 4em;
		width: 700px;
		margin: 0 auto;
	}

	img {
		width: 40px;
		height: 40px;
	}


	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
	}

	//変数の宣言 
	$bgcolor: #e1f5fe;  
	$width: 400px;
	$color: green;

	pre {
		background-color: #f4f9ff;
		padding: 12px;
	}

	.sample {
		background-color: $bgcolor;
		width:$width;
		margin: 0 auto;
		padding: 14px 24px;

		h3 {
			 margin: 20px;
			 font-size: 24px;
		}
		.content p {
			 color: $color;
		}
	}

	strong {
		color: $color;
	}

	.btn{
		margin-right: 20px;
		color:#fff;
		padding:16px;
		border:0;
		border-radius:12px;
	}


	@media (min-width: 640px) {
		.main {
			max-width: none;
		}
	}
</style>
