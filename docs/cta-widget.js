(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('.cta{position:fixed;right:0;bottom:0;left:0;z-index:1000;width:calc(100% - 32px);max-width:1180px;margin:0 auto}@media (max-width: 767px){.cta{width:100%}}.cta__content{position:relative;display:grid;align-items:center;grid-template-columns:1fr auto;gap:8px;padding:20px 24px 20px 80px;background:linear-gradient(-145deg,#8785f2,#2b2a7b);border-top-left-radius:16px;border-top-right-radius:16px}@media (max-width: 767px){.cta__content{grid-template-columns:1fr;gap:16px;padding-right:140px;padding-left:24px}}@media (max-width: 479px){.cta__content{padding-right:24px}}.cta__text{margin:0;font-size:18px;line-height:24px;font-weight:700;color:#fff;text-wrap:pretty}@media (max-width: 767px){.cta__text{font-size:16px;line-height:20px}}.cta__promocode{padding:0;font-size:22px;line-height:1;font-weight:700;color:#ffcc02;background-color:transparent;border:none;border-bottom:1px dashed #ffcc02;cursor:pointer}@media (max-width: 767px){.cta__promocode{font-size:20px}}.cta__promocode:hover{color:#f4d75c;border-bottom:none}.cta__tooltip{position:relative;display:inline-flex}.cta__tooltip-trigger{display:inline-flex;justify-content:center;align-items:center;width:24px;height:24px;cursor:help}.cta__tooltip-trigger svg{width:20px;height:20px}.cta__tooltip-trigger:hover~.cta__tooltip-text{transform:translate(-35%);opacity:1;pointer-events:initial}.cta__tooltip-text{position:absolute;bottom:calc(100% + 15px);left:50%;z-index:2;max-width:280px;padding:16px;font-weight:400;background-color:#fff;border-radius:8px;box-shadow:0 0 45px #00000040;transform:translate(-35%,20px);opacity:0;transition:opacity .3s ease,transform .3s ease;pointer-events:none}@media (max-width: 767px){.cta__tooltip-text{max-width:240px}}.cta__tooltip-text *{font-size:14px;line-height:18px}.cta__tooltip-text *:first-child,.cta__tooltip-text *:last-child{margin:0}.cta__tooltip-text:after{content:"";position:absolute;right:0;bottom:-15px;left:0;width:100%;height:15px;background-color:transparent}.cta__tooltip-text:before{content:"";position:absolute;bottom:-5px;left:35%;width:10px;height:10px;margin-left:-5px;background-color:#fff;transform:rotate(45deg)}.cta__tooltip-text:hover{transform:translate(-35%);opacity:1;pointer-events:initial}.cta__action{position:relative;z-index:1;margin-left:auto;padding:8px 16px;font-size:16px;line-height:20px;font-weight:700;color:#030715;text-decoration:none;background-color:#ffcc02;border-radius:8px;transition:background .3s ease,box-shadow .3s ease}@media (max-width: 767px){.cta__action{width:max-content;margin-left:initial;font-size:14px;line-height:18px}}.cta__action:hover{background-color:#f4d75c;box-shadow:0 0 15px #ffffff40}.cta__close{position:absolute;top:-20px;right:-10px;z-index:1;display:flex;justify-content:center;align-items:center;width:40px;height:40px;padding:0;font-size:22px;line-height:1;font-weight:400;color:#030715;background-color:#fff;border:none;border-radius:50%;box-shadow:0 0 15px #00000040;cursor:pointer;transition:background .3s ease,box-shadow .3s ease}@media (max-width: 767px){.cta__close{top:-16px;right:0;width:32px;height:32px;font-size:20px}}.cta__close:hover,.cta__close:focus{background-color:#f4d75c}.cta__copy-message{position:fixed;top:16px;right:16px;padding:8px 16px;font-size:16px;line-height:20px;font-weight:700;color:#fff;background:linear-gradient(-145deg,#8785f2,#2b2a7b);border-radius:8px;transform:scale(0);opacity:0;transition:opacity .3s ease,transform .3s ease}@media (max-width: 767px){.cta__copy-message{font-size:14px;line-height:18px}}.cta__copy-message.show{transform:scale(1);opacity:1}.cta__calc-image{position:absolute;top:-105px;right:-25px;width:200px;height:200px;transform:rotate(15deg)}@media (max-width: 767px){.cta__calc-image{top:initial;right:-10px;bottom:-10px;width:160px;height:160px;margin-left:initial}}@media (max-width: 479px){.cta__calc-image{top:initial;right:0;width:110px;height:110px;margin-left:initial}}')),document.head.appendChild(t)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
(function(){"use strict";class o{constructor(c){if(!(c!=null&&c.baseUrl))throw new Error("baseUrl is required");this.baseUrl=c.baseUrl,this.debug=c.debug||!1,this.authTokenFactory=c.authTokenFactory,this.debug&&this.useDebugLogs()}async getFirstActivePromotion(){return await this.callApi({url:"/promotions?state=active",method:"GET"})}async getPromotionByCode(c){return await this.callApi({url:`/promotions?code=${c}`,method:"GET"})}addRandomToUrl(c){return c.indexOf("?")===-1?c+"?rnd="+Math.random().toString():c+"&rnd="+Math.random().toString()}async callApi(c){const l=c.method??"GET",e=l==="GET"?this.addRandomToUrl(c.url):c.url;try{const t=await fetch(this.baseUrl+e,{method:l,headers:{"Content-Type":"application/json",...await this.getAuthHeader()},body:l==="GET"?null:JSON.stringify(c.requestData)});if(t.status>=200&&t.status<400)return await t.json();throw new Error(`API call failed with status: ${t.status}`)}catch(t){throw console.error("Failed to call API",t),t}}async getAuthHeader(){if(this.authTokenFactory){const c=await this.authTokenFactory();if(c)return{Authorization:`Bearer ${c}`}}return{}}useDebugLogs(){const c=fetch;window.fetch=async(...l)=>{const[e,t]=l;console.info("Calling API",e,t==null?void 0:t.body);const r=await c(...l);return console.info("Got response from API",e,await r.clone().json()),r}}}const s=`<svg class="cta__calc-image" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
    <g><circle cx="77" cy="13" r="1" fill="#f1bc19"></circle><circle cx="50" cy="50" r="37" fill="#e4e4f9"></circle><circle cx="83" cy="15" r="4" fill="#f1bc19"></circle><circle cx="87" cy="24" r="2" fill="#8889b9"></circle><circle cx="81" cy="76" r="2" fill="#fbcd59"></circle><circle cx="15" cy="63" r="4" fill="#fbcd59"></circle><circle cx="25" cy="87" r="2" fill="#8889b9"></circle><circle cx="18.375" cy="54.5" r="2.5" fill="#fff"></circle><circle cx="77.5" cy="30.5" r="1.5" fill="#fff"></circle><path fill="#fdfcef" d="M66.719,73H35.281C31.26,73,28,69.74,28,65.719V34.281C28,30.26,31.26,27,35.281,27h31.438 C70.74,27,74,30.26,74,34.281v31.438C74,69.74,70.74,73,66.719,73z"></path><path fill="#472b29" d="M67.719,27.4c3.243,0,5.881,2.638,5.881,5.881v33.438c0,3.243-2.638,5.881-5.881,5.881H34.281 c-3.243,0-5.881-2.638-5.881-5.881V33.281c0-3.243,2.638-5.881,5.881-5.881H67.719 M67.719,26H34.281C30.26,26,27,29.26,27,33.281 v33.438C27,70.74,30.26,74,34.281,74h33.438C71.74,74,75,70.74,75,66.719V33.281C75,29.26,71.74,26,67.719,26L67.719,26z"></path><path fill="#472b29" d="M31.5,40.167c-0.276,0-0.5-0.224-0.5-0.5v-4.333C31,32.393,33.393,30,36.333,30H55.5 c0.276,0,0.5,0.224,0.5,0.5S55.776,31,55.5,31H36.333C33.943,31,32,32.944,32,35.333v4.333C32,39.943,31.776,40.167,31.5,40.167z"></path><path fill="#472b29" d="M31.5,55.245c-0.276,0-0.5-0.224-0.5-0.5V42.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v12.245 C32,55.021,31.776,55.245,31.5,55.245z"></path><path fill="#472b29" d="M39.583,70h-3.25C33.393,70,31,67.607,31,64.667v-6.241c0-0.276,0.224-0.5,0.5-0.5 s0.5,0.224,0.5,0.5v6.241C32,67.056,33.943,69,36.333,69h3.25c0.276,0,0.5,0.224,0.5,0.5S39.859,70,39.583,70z"></path><path fill="#472b29" d="M65.667,70h-22.75c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h22.75 C68.057,69,70,67.056,70,64.667v-5.083c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v5.083C71,67.607,68.607,70,65.667,70z"></path><path fill="#472b29" d="M70.5,56.167c-0.276,0-0.5-0.224-0.5-0.5V35.333C70,32.944,68.057,31,65.667,31h-0.75 c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h0.75C68.607,30,71,32.393,71,35.333v20.333C71,55.943,70.776,56.167,70.5,56.167z"></path><path fill="#472b29" d="M62.5,31h-3.25c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h3.25c0.276,0,0.5,0.224,0.5,0.5 S62.776,31,62.5,31z"></path><path fill="#1c1c1c" d="M58.191,65H43.809C42.257,65,41,63.743,41,62.191V37.809C41,36.257,42.257,35,43.809,35h14.383 C59.743,35,61,36.257,61,37.809v24.383C61,63.743,59.743,65,58.191,65z"></path><path fill="#7c7c7c" d="M57.734,44H44.266C43.567,44,43,43.433,43,42.734v-4.468C43,37.567,43.567,37,44.266,37h13.468 C58.433,37,59,37.567,59,38.266v4.468C59,43.433,58.433,44,57.734,44z"></path><g><path fill="#d3d3d1" d="M51,62H45c-1.104,0-2-0.895-2-2v0c0-1.104,0.895-2,2-2H51c1.104,0,2,0.895,2,2v0 C53,61.105,52.105,62,51,62z"></path></g><g><circle cx="45" cy="54" r="2" fill="#d3d3d1"></circle></g><g><circle cx="51" cy="54" r="2" fill="#d3d3d1"></circle></g><g><circle cx="57" cy="54" r="2" fill="#fe9200"></circle></g><g><circle cx="57" cy="60" r="2" fill="#fe9200"></circle></g><g><circle cx="45" cy="48" r="2" fill="#d3d3d1"></circle></g><g><circle cx="51" cy="48" r="2" fill="#d3d3d1"></circle></g><g><circle cx="57" cy="48" r="2" fill="#fe9200"></circle></g></g>
</svg>
`,n=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="#fff" d="m15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 0 0-2-2a2 2 0 0 0-2 2H8a4 4 0 0 1 4-4a4 4 0 0 1 4 4a3.2 3.2 0 0 1-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10" />
</svg>
`;function d({title:i,offer:c,promocode:l}){const e=document.createElement("div");return e.classList.add("cta"),e.id="cta-widget",e.innerHTML=`
        <div class="cta__content">
            <div class="cta__text">
                Рассчитай стоимость работы с промокодом ${i}:
                <button class="cta__promocode" title="Копировать промокод">${l}</button>
                <div class="cta__tooltip">
                    <span class="cta__tooltip-trigger" title="Узнать условия акции">${n}</span>
                    <div class="cta__tooltip-text">${c}</div>
                </div>
            </div>
            <a class="cta__action" href="/order/">Калькулятор цены</a>
        </div>
        <button class="cta__close" aria-label="Закрыть виджет">×</button>
        <div class="cta__copy-message">Промокод скопирован</div>
        ${s}
    `,e}function h(i,c){const l=i.querySelector(".cta__promocode"),e=i.querySelector(".cta__close"),t=i.querySelector(".cta__copy-message");l.addEventListener("click",()=>{navigator.clipboard.writeText(c).then(()=>{t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),2e3)}).catch(r=>console.error("Ошибка копирования промокода:",r))}),e.addEventListener("click",()=>{i.style.display="none"})}(async function(){try{const l=await new o({baseUrl:"https://api.fstfn.com/",debug:process.env.NODE_ENV==="development"}).getFirstActivePromotion(),{title:e,offer:t,promocode:r}=await l,a=d({title:e,offer:t,promocode:r});document.body.appendChild(a),h(a,r)}catch(c){console.error("Ошибка загрузки данных для виджета:",c)}})()})();
