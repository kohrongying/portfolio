var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function g(){return l(" ")}function h(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}let p;function m(t){p=t}const d=[],f=[],b=[],y=[],$=Promise.resolve();let v=!1;function k(t){b.push(t)}function w(){const t=new Set;do{for(;d.length;){const t=d.shift();m(t),_(t.$$)}for(;f.length;)f.pop()();for(let e=0;e<b.length;e+=1){const n=b[e];t.has(n)||(n(),t.add(n))}b.length=0}while(d.length);for(;y.length;)y.pop()();v=!1}function _(t){t.fragment&&(t.update(t.dirty),o(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(k))}const x=new Set;let S;function A(t,e){t&&t.i&&(x.delete(t),t.i(e))}function C(t,e,n,o){if(t&&t.o){if(x.has(t))return;x.add(t),S.c.push(()=>{x.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function j(t,n,i){const{fragment:s,on_mount:c,on_destroy:a,after_update:u}=t.$$;s.m(n,i),k(()=>{const n=c.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(k)}function E(t,e){t.$$.fragment&&(o(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function T(t,e){t.$$.dirty||(d.push(t),v||(v=!0,$.then(w)),t.$$.dirty=n()),t.$$.dirty[e]=!0}function z(e,r,i,s,c,a){const u=p;m(e);const l=r.props||{},g=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:null};let h=!1;var d;g.ctx=i?i(e,l,(t,n,o=n)=>(g.ctx&&c(g.ctx[t],g.ctx[t]=o)&&(g.bound[t]&&g.bound[t](o),h&&T(e,t)),n)):l,g.update(),h=!0,o(g.before_update),g.fragment=s(g.ctx),r.target&&(r.hydrate?g.fragment.l((d=r.target,Array.from(d.childNodes))):g.fragment.c(),r.intro&&A(e.$$.fragment),j(e,r.target,r.anchor),w()),m(u)}class B{$destroy(){E(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function H(e){var n,o,r,i;return{c(){n=u("section"),o=u("img"),r=g(),(i=u("div")).innerHTML='<a class="contact-link svelte-3bmuwg" href="https://blog.rongying.co"><img src="face-icon.png" alt="person" width="30"></a> <a class="contact-link svelte-3bmuwg" href="https://github.com/kohrongying"><img src="github-icon.png" alt="github" width="40"></a> <a class="contact-link svelte-3bmuwg" href="mailto:kohrongying@gmail.com?Subject=Hello"><img src="mail-icon.png" alt="mail" width="25"></a> <a class="contact-link svelte-3bmuwg" href="https://sg.linkedin.com/in/rongyingkoh"><img src="lnkedin-icon.png" alt="linkedin" width="30"></a>',h(o,"id","me"),h(o,"src",N),h(o,"alt","pic"),h(o,"width","100"),h(o,"class","svelte-3bmuwg"),h(i,"id","contactme"),h(i,"class","svelte-3bmuwg"),h(n,"id","left-fixed"),h(n,"class","svelte-3bmuwg")},m(t,e){c(t,n,e),s(n,o),s(n,r),s(n,i)},p:t,i:t,o:t,d(t){t&&a(n)}}}const N="pic.png";class I extends B{constructor(t){super(),z(this,t,null,H,i,[])}}const M=[{name:"Expense Tracker",desc:"PWA that helps to keep track of your daily expenses",url:"https://imma-save-more-money.netlify.com/",github_url:"https://github.com/kohrongying/expenses-tracker"},{name:"Telegram News Bot",desc:"A Telegram bot that delivers news",url:"https://telegram.me/ry_news_chat_bot",github_url:"https://github.com/kohrongying/telegram-news-bot"},{name:"Hex 2 RGB",desc:"Convert rgba to hex (with transparency support)",url:"https://kohrongying.github.io/hex-to-rgba/",github_url:"https://github.com/kohrongying/hex-to-rgba"},{name:"Avatar Generator",desc:"A python CLI tool to generate avatar sprites",url:"https://github.com/kohrongying/avatar-generator",github_url:"https://github.com/kohrongying/avatar-generator"},{name:"CSS Battle",desc:"My participation in cssbattle.dev",url:"https://github.com/kohrongying/css-battle",github_url:"https://github.com/kohrongying/css-battle"},{name:"CSS Images",desc:"Images made from pure CSS",url:"https://kohrongying.github.io/css-images",github_url:"https://github.com/kohrongying/css-images"},{name:"Danang",desc:"A picture journey of my trip to Danang, Vietnam",url:"https://kohrongying.github.io/danang/",github_url:"https://github.com/kohrongying/danang"},{name:"Spotlight",desc:"A CSS solution that creates new insight when you hover over the picture.",url:"https://kohrongying.github.io/spotlight/",github_url:"https://github.com/kohrongying/spotlight"},{name:"Hoppip",desc:"A framework-less solution to full page transitions",url:"https://kohrongying.github.io/hoppip/",github_url:"https://github.com/kohrongying/hoppip"}];function O(t,e,n){const o=Object.create(t);return o.repo=e[n],o}function D(e){var n,o,r,i,p,m,d,f,b,y,$,v=e.repo.name+"",k=e.repo.desc+"";return{c(){n=u("div"),o=u("div"),r=u("a"),i=l(v),p=g(),m=u("a"),d=u("img"),f=g(),b=u("span"),y=l(k),$=g(),h(r,"href",e.repo.url),h(d,"src","github-icon.png"),h(d,"alt","github"),h(d,"width","40"),h(m,"href",e.repo.github_url),h(o,"class","title-container svelte-1oetzmb"),h(n,"class","card svelte-1oetzmb")},m(t,e){c(t,n,e),s(n,o),s(o,r),s(r,i),s(o,p),s(o,m),s(m,d),s(n,f),s(n,b),s(b,y),s(n,$)},p:t,d(t){t&&a(n)}}}function G(e){var n,o;let r=M,i=[];for(let t=0;t<r.length;t+=1)i[t]=D(O(e,r,t));return{c(){n=u("section"),o=u("div");for(let t=0;t<i.length;t+=1)i[t].c();h(o,"id","card-container"),h(o,"class","svelte-1oetzmb"),h(n,"id","right-fixed"),h(n,"class","svelte-1oetzmb")},m(t,e){c(t,n,e),s(n,o);for(let t=0;t<i.length;t+=1)i[t].m(o,null)},p(t,e){if(t.repos){let n;for(r=M,n=0;n<r.length;n+=1){const s=O(e,r,n);i[n]?i[n].p(t,s):(i[n]=D(s),i[n].c(),i[n].m(o,null))}for(;n<i.length;n+=1)i[n].d(1);i.length=r.length}},i:t,o:t,d(t){t&&a(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(i,t)}}}class L extends B{constructor(t){super(),z(this,t,null,G,i,[])}}function P(e){var n,o,r,i=new I({}),l=new L({});return{c(){n=u("div"),i.$$.fragment.c(),o=g(),l.$$.fragment.c()},m(t,e){c(t,n,e),j(i,n,null),s(n,o),j(l,n,null),r=!0},p:t,i(t){r||(A(i.$$.fragment,t),A(l.$$.fragment,t),r=!0)},o(t){C(i.$$.fragment,t),C(l.$$.fragment,t),r=!1},d(t){t&&a(n),E(i),E(l)}}}function q(t){return{}}return new class extends B{constructor(t){super(),z(this,t,q,P,i,[])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map