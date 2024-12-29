(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const m=["ability","able","about","above","accept","according","account","across","act","action","activity","actually","add","address","administration","admit","adult","affect","after","again","against","age","agency","agent","ago","agree","agreement","ahead","air","all","allow","almost","alone","along","already","also","although","always","American","among","amount","analysis","and","animal","another","answer","any","anyone","anything","appear","apply","approach","area","argue","arm","around","arrive","art","article","artist","as","ask","assume","at","attack","attention","attorney","audience","author","authority","available","avoid","away","baby","back","bad","bag","ball","bank","bar","base","be","beat","beautiful","because","become","bed","before","begin","behavior","behind","believe","benefit","best","better","between","beyond","big","bill","billion","bit","black","blood","blue","board","body","book","born","both","box","boy","break","bring","brother","budget","build","building","business","but","buy","by","call","camera","campaign","can","cancer","candidate","capital","car","card","care","career","carry","case","catch","cause","cell","center","central","century","certain","certainly","chair","challenge","chance","change","character","charge","check","child","choice","choose","church","citizen","city","civil","claim","class","clear","clearly","close","coach","cold","collection","college","color","come","commercial","common","community","company","compare","computer","concern","condition","conference","Congress","consider","consumer","contain","continue","control","cost","could","country","couple","course","court","cover","create","crime","cultural","culture","cup","current","customer","cut","dark","data","daughter","day","dead","deal","death","debate","decade","decide","decision","deep","defense","degree","Democrat","democratic","describe","design","despite","detail","determine","develop","development","die","difference","different","difficult","dinner","direction","director","discover","discuss","discussion","disease","do","doctor","dog","door","down","draw","dream","drive","drop","drug","during","each","early","east","easy","eat","economic","economy","edge","education","effect","effort","eight","either","election","else","employee","end","energy","enjoy","enough","enter","entire","environment","environmental","especially","establish","even","evening","event","ever","every","everybody","everyone","everything","evidence","exactly","example","executive","exist","expect","experience","expert","explain","eye","face","fact","factor","fail","fall","family","far","fast","father","fear","federal","feel","feeling","few","field","fight","figure","fill","film","final","finally","financial","find","fine","finger","finish","fire","firm","first","fish","five","floor","fly","focus","follow","food","foot","for","force","foreign","forget","form","former","forward","four","free","friend","from","front","full","fund","future","game","garden","gas","general","generation","get","girl","give","glass","go","goal","good","government","great","green","ground","group","grow","growth","guess","gun","guy","hair","half","hand","hang","happen","happy","hard","have","he","head","health","hear","heart","heat","heavy","help","her","here","herself","high","him","himself","his","history","hit","hold","home","hope","hospital","hot","hotel","hour","house","how","however","huge","human","hundred","husband","I","idea","identify","if","image","imagine","impact","important","improve","in","include","including","increase","indeed","indicate","individual","industry","information","inside","instead","institution","interest","interesting","international","interview","into","investment","involve","issue","it","item","its","itself","job","join","just","keep","key","kid","kill","kind","kitchen","know","knowledge"],l={EASY:{words:10},MEDIUM:{words:25},HARD:{words:50}},h=Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),y=Array.from("АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"),f=["абалан","абашец","абовец","абсиды","абсурд","аванцо","аварин","авенин","агафит","агирты","агитка","агрест","адагия","адакна","адитум","адонай","азавак","азимут","азофор","айлант","айован","акабар","акарон","акинак","акриец","аксион","аксоны","аламак","аланил","алисма","алкион","аллоза","алпаут","алтаит","альгин","аляска","амбань","амиант","амиста","амомам","аналав","аналой","анархо","андара","анелар","анетол","анизол","анисия","антриб","антунг","апиоид","апогей","аптека","аралец","арвалы","ардаит","арения","ареола","арецин","ариман","арсола","артроз","арфист","асбест","асидол","аскари","атриум","аудиал","афория","аффера","ачарья","аширит","бабакх","бабуся","байкер","бакаут","бально","бандал","банджо","банщик","баронг","бартер","бархан","барыня","баскет","батько","беглая","бейрец","бейсик","бекеша","белена","белуха","бенгал","бензоя","бенуар","беньёз","бердыш","берикс","берула","биграф","бинард","биндер","биовид","биотип","биофит","бирмит","бислой","бланка","блокер","блокус","блонды","богема","бодони","бойкий","боксёр","бонанг","борзый","босота","боярин","брамин","брехун","бридер","бромин","бромюр","брызга","брюхач","бугаку","будели","буерак","бузила","бузина","буларх","бумага","буржуа","буртит","бурщик","бурьян","бусека","бучина","бушмен","ваалит","вампир","вантуз","ванчес","варево","вгонка","вемале","венула","вечник","веялка","взгляд","визуал","винтик","винтёр","винчит","вираго","вирник","висайя","витрен","виттис","виуэла","вишист","внучок","ворчун","вощина","вскрик","всхрип","вулкан","выброс","выкорм","вышина","выщелк","гаврош","гаджет","галеит","галета","галлат","галубе","гарпия","гарсон","гафель","гейбец","геккон","гексен","гемоль","геофон","гермол","гжелец","гиббон","гидрол","гипнос","гитара","глагол","гладит","глазок","глезер","глупыш","глюкон","гнильё","гоблин","гоголь","гонгал","гормон","грелка","грибок","гривка","гривня","гризин","гробок","грудка","грымза","гуджар","гурьба","гэбист","даймио","даллия","дамара","дамаск","дамнат","датель","двайта","дверка","дворец","дворик","дейция","деколь","деманд","дереза","деспот","джингл","дзибан","диабаз","диазот","диамил","диарея","дикуша","диоптр","дирхем","дискоз","дитиол","диурез","дициан","днёвка","догмат","дождик","долька","домком","донжон","донник","дореит","дориец","дорник","доскок","дранье","драхма","дромос","другой","дрьюит","дублон","дугонг","дударь","дульце","дуриан","дуэньо","дуэнья","дымарь","дымина","дьячок","дягиль","евклаз","евхиты","едомец","екзарх","ентиол","есилец","жадина","жилище","жируэт","жнивье","жность","жранье","журьба","жёлтый","жёлудь","завмаг","заводь"],g={EN:"english",RU:"russian"},d={[g.EN]:{selectDifficulty:"Select difficulty:",easy:"Easy (10 words)",medium:"Medium (25 words)",hard:"Hard (50 words)",triesLeft:"TRIES LEFT:",wordCount:"Word",of:"of",win:"Correct! Get ready for the next word!",nextWord:"Next Word",congratulations:"Congratulations! You've completed all",words:"words!",playAgain:"Play Again",youLost:"You lost :(",theWordWas:"The word was:",tryAgain:"Try Again",quit:"Quit",quitConfirm:"Are you sure you want to quit and lose progress?",darkMode:"Dark mode"},[g.RU]:{selectDifficulty:"Выберите сложность:",easy:"Легко (10 слов)",medium:"Средне (25 слов)",hard:"Сложно (50 слов)",triesLeft:"ОСТАЛОСЬ ПОПЫТОК:",wordCount:"Слово",of:"из",win:"Правильно! Готовься к следующему слову!",nextWord:"Следующее слово",congratulations:"Поздравляем! Вы завершили все",words:"слов!",playAgain:"Играть снова",youLost:"Вы проиграли :(",theWordWas:"Загаданное слово:",tryAgain:"Попробовать снова",quit:"Выйти",quitConfirm:"Вы уверены, что хотите выйти и потерять прогресс?"}},r="/hangman-game";class p{constructor(e){const n=sessionStorage.getItem("language")||"english";this.words=n==="russian"?f:m,this.maxWrongGuesses=10,this.initialize(e.words)}initialize(e){if(this.originalWords=[...this.words].sort(()=>Math.random()-.5).slice(0,e),!this.originalWords.length)throw new Error("Массив слов пуст");this.reset()}reset(){this.availableWords=[...this.originalWords],this.currentWord="",this.guessedLetters=new Set,this.wrongGuesses=0}getNextWord(){this.availableWords.length===0&&(this.availableWords=[...this.originalWords]);const e=Math.floor(Math.random()*this.availableWords.length);return this.currentWord=this.availableWords[e].toUpperCase(),this.availableWords.splice(e,1),this.guessedLetters.clear(),this.wrongGuesses=0,this.currentWord}guessLetter(e){return e=e.toUpperCase(),this.guessedLetters.has(e)?!1:(this.guessedLetters.add(e),this.currentWord.includes(e)?!0:(this.wrongGuesses++,!1))}isGameOver(){return this.wrongGuesses>=this.maxWrongGuesses}hasWon(){return[...this.currentWord].every(e=>this.guessedLetters.has(e))}}function u(t){const e=document.getElementById("game"),n=document.getElementById("logo");e.innerHTML="",n.classList.add("logo-sm");const i=t.getNextWord(),o=b(),a=w(i),s=x(t);e.appendChild(o),e.appendChild(a),e.appendChild(s)}function b(){const t=document.createElement("img");return t.src=`${r}/images/hg-0.png`,t.id="hangman",t.className="h-48 mb-8",t}function w(t){const e=document.createElement("div");return e.id="word",e.className="mb-8 flex gap-2",t.split("").forEach(()=>{const n=document.createElement("span");n.className="letter text-4xl font-bold",n.textContent="_",e.appendChild(n)}),e}function v(t){const n=document.getElementById("word").getElementsByClassName("letter");[...t.currentWord].forEach((i,o)=>{n[o].textContent=t.guessedLetters.has(i)?i:"_"})}function x(t){const e=document.createElement("div");return e.id="keyboard",e.className="grid grid-cols-7 gap-2",((sessionStorage.getItem("language")||"english")==="russian"?y:h).forEach(o=>{const a=document.createElement("button");a.className="keyboard-btn bg-gray-200 p-2 rounded hover:bg-gray-300",a.textContent=o,a.dataset.letter=o,a.addEventListener("click",()=>{a.disabled||E(o,t,a)}),e.appendChild(a)}),e}function E(t,e,n){if(n.disabled=!0,n.classList.add("opacity-50"),!e.guessLetter(t)){const o=document.getElementById("hangman");o.src=`${r}/images/hg-${e.wrongGuesses}.png`}v(e),e.hasWon()?k(e):e.isGameOver()&&L(e)}function k(t){const e=document.getElementById("hangman");e.src=`${r}/images/hg-win.png`,setTimeout(()=>{t.availableWords.length>0?u(t):W()},1500)}function L(t){I(t.currentWord)}function I(t){const e=document.getElementById("game"),n=sessionStorage.getItem("language")||"english",i=d[n];e.innerHTML=`
        <div class="game-over mt-4 text-center">
            <img src="${r}/images/hg-10.png" class="h-48 mb-8 mx-auto" alt="Game Over">
            <h2 class="text-xl mb-2">${i.youLost}</h2>
            <p class="mb-4">${i.theWordWas} ${t}</p>
            <button id="tryAgainBtn" class="button-primary px-6 py-2">${i.tryAgain}</button>
        </div>
    `,document.getElementById("tryAgainBtn").addEventListener("click",()=>{window.location.href=`${r}/`})}function W(){const t=document.getElementById("game"),e=sessionStorage.getItem("language")||"english",n=d[e];t.innerHTML=`
        <div class="game-complete text-center">
            <img src="${r}/images/hg-win.png" class="h-48 mb-8 mx-auto" alt="You Won">
            <h2 class="text-xl mb-2">${n.congratulations}</h2>
            <button id="playAgainBtn" class="button-primary mt-4 px-6 py-2">${n.playAgain}</button>
        </div>
    `,document.getElementById("playAgainBtn").addEventListener("click",()=>{window.location.href=`${r}/`})}function A(){const t=sessionStorage.getItem("language")||"english",e=d[t];document.querySelector(".difficulty-select h2").textContent=e.selectDifficulty,document.getElementById("easy").textContent=e.easy,document.getElementById("medium").textContent=e.medium,document.getElementById("hard").textContent=e.hard}function c(t){const e=new p(t);return u(e),e}function S(){const e=(sessionStorage.getItem("language")||"english")==="english"?"russian":"english";sessionStorage.setItem("language",e);const n=document.getElementById("language-icon");n&&(n.src=`/hangman-game/images/${e==="english"?"uk-flag":"ru-flag"}.png`,n.alt=e==="english"?"English":"Русский"),window.location.reload()}const B=()=>{const t=document.documentElement.classList.toggle("dark");localStorage.setItem("darkMode",t);const e=document.querySelector(".theme-toggle");e.classList.toggle("dark",t);const n='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>',i='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';e.innerHTML=t?n:i},C=()=>{const t=localStorage.getItem("darkMode")==="true";document.documentElement.classList.toggle("dark",t);const e=document.querySelector(".theme-toggle");if(e){e.classList.toggle("dark",t);const i='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>',o='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';e.innerHTML=t?i:o}const n=document.getElementById("theme-toggle");n==null||n.addEventListener("click",B)},D=()=>{C(),M(),T(),G(),A()},M=()=>{const t=document.getElementById("language-toggle");if(t){t.addEventListener("click",S);const e=sessionStorage.getItem("language")||"english",n=document.getElementById("language-icon");n&&(n.src=`/images/${e==="english"?"uk-flag":"ru-flag"}.png`,n.alt=e==="english"?"English":"Русский")}},T=()=>{var e,n,i;const t=document.querySelector(".difficulty-select");(e=document.getElementById("easy"))==null||e.addEventListener("click",()=>{t.style.display="none",c(l.EASY)}),(n=document.getElementById("medium"))==null||n.addEventListener("click",()=>{t.style.display="none",c(l.MEDIUM)}),(i=document.getElementById("hard"))==null||i.addEventListener("click",()=>{t.style.display="none",c(l.HARD)})},G=()=>{document.addEventListener("keydown",t=>{const e=t.key.toUpperCase(),n=document.querySelector(`button[data-letter="${e}"]`);n&&!n.disabled&&n.click()})};D();
