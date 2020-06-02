<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Dillinger_0"></a>READMEE</h1>
<p class="has-line-data" data-line-start="2" data-line-end="3"><a href="https://nodesource.com/products/nsolid"><img src="https://cldup.com/dTxpPi9lDf.thumb.png" alt="N|Solid"></a></p>
<p class="has-line-data" data-line-start="4" data-line-end="5"><a href="https://travis-ci.org/joemccann/dillinger"><img src="https://travis-ci.org/joemccann/dillinger.svg?branch=master" alt="Build Status"></a></p>
<p class="has-line-data" data-line-start="6" data-line-end="7">Proyecto web con integracion de NODEJS + EXPRESS + BULMA SCSS FRAMEWORK + VanillaJS</p>
<h3 class="code-line" data-line-start=9 data-line-end=10 ><a id="Tech_9"></a>Tech</h3>
<p class="has-line-data" data-line-start="11" data-line-end="12">Dillinger uses a number of open source projects to work properly:</p>
<ul>
<li class="has-line-data" data-line-start="13" data-line-end="14"><a href="http://twitter.github.com/bootstrap/">Twitter Bootstrap</a> - great UI boilerplate for modern web apps</li>
<li class="has-line-data" data-line-start="14" data-line-end="15"><a href="http://nodejs.org">node.js</a> - evented I/O for the backend</li>
<li class="has-line-data" data-line-start="15" data-line-end="16"><a href="http://expressjs.com">Express</a> - fast node.js network app framework <a href="http://twitter.com/tjholowaychuk">@tjholowaychuk</a></li>
<li class="has-line-data" data-line-start="16" data-line-end="17"><a href="http://gulpjs.com">Gulp</a> - the streaming build system</li>
<li class="has-line-data" data-line-start="17" data-line-end="18">[<a href="http://bulma.io">bulma.io</a>] Bulma is a free, open source CSS framework based on Flexbox</li>
<li class="has-line-data" data-line-start="18" data-line-end="20"><a href="http://jquery.com">jQuery</a> - duh</li>
</ul>
<p class="has-line-data" data-line-start="20" data-line-end="22">And of course Dillinger itself is open source with a <a href="https://github.com/joemccann/dillinger">public repository</a><br>
on GitHub.</p>
<h3 class="code-line" data-line-start=23 data-line-end=24 ><a id="setup_23"></a>setup</h3>
<p class="has-line-data" data-line-start="25" data-line-end="26">este proyecto requiere de node <a href="https://nodejs.org/">Node.js</a> v4+ para correr</p>
<p class="has-line-data" data-line-start="27" data-line-end="28">.</p>
<pre><code class="has-line-data" data-line-start="30" data-line-end="35" class="language-sh">$ <span class="hljs-built_in">cd</span> TuCarpetaParaLaApp
$ npm init
$ npm install express --save
$ express --view=pug myapp (PUG ES OPCIONAL SE PUEDE ELEGIR OTRO ESQUELETO DE APP)
</code></pre>
<p class="has-line-data" data-line-start="36" data-line-end="53">create : myapp<br>
create : myapp/package.json<br>
create : myapp/app.js<br>
create : myapp/public<br>
create : myapp/public/javascripts<br>
create : myapp/public/images<br>
create : myapp/routes<br>
create : myapp/routes/index.js<br>
create : myapp/routes/users.js<br>
create : myapp/public/stylesheets<br>
create : myapp/public/stylesheets/style.css<br>
create : myapp/views<br>
create : myapp/views/index.pug<br>
create : myapp/views/layout.pug<br>
create : myapp/views/error.pug<br>
create : myapp/bin<br>
create : myapp/bin/www</p>
<pre><code class="has-line-data" data-line-start="56" data-line-end="60" class="language-sh"><span class="hljs-built_in">cd</span> myapp
$ npm install
$ <span class="hljs-built_in">set</span> DEBUG=myapp:* &amp; npm start
</code></pre>
<p class="has-line-data" data-line-start="60" data-line-end="66">CONFIGURACION PARA COMPULAR SASS A CSS<br>
para compilar el sass ejecutar el siguiente comando<br>
y esto tambien compilara en tiempo de ejecucion los cambios en el sass y lo<br>
compilara a CSS<br>
este comando esta declarado en el start en package.json en scripts<br>
“watch:sass”: “node-sass -w public/scss/main.scss public/css/main.css --output-style compressed”</p>
<pre><code class="has-line-data" data-line-start="68" data-line-end="71" class="language-sh"><span class="hljs-variable">$npm</span> run sass:watch
<span class="hljs-variable">$npm</span> start
</code></pre>
<pre><code class="has-line-data" data-line-start="74" data-line-end="76" class="language-sh"><span class="hljs-number">127.0</span>.<span class="hljs-number">0.1</span>:<span class="hljs-number">3000</span>
</code></pre>
<h2 class="code-line" data-line-start=77 data-line-end=79 ><a id="License_77"></a>License</h2>
<p class="has-line-data" data-line-start="80" data-line-end="81">MIT</p>
<p class="has-line-data" data-line-start="83" data-line-end="84"><strong>Free Software, Hell Yeah!</strong></p>
