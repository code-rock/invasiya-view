var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function o(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c,l;function i(t,e){return c||(c=document.createElement("a")),c.href=e,t===c.href}function u(t,e,n,s){return t[1]&&s?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](s(e))):n.ctx}function $(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function d(){return t=" ",document.createTextNode(t);var t}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t){l=t}const x=[],h=[],_=[],z=[],v=Promise.resolve();let y=!1;function C(t){_.push(t)}const b=new Set;let w=0;function k(){const t=l;do{for(;w<x.length;){const t=x[w];w++,g(t),E(t.$$)}for(g(null),x.length=0,w=0;h.length;)h.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];b.has(e)||(b.add(e),e())}_.length=0}while(x.length);for(;z.length;)z.pop()();y=!1,b.clear(),g(t)}function E(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const M=new Set;function j(t,e){t&&t.i&&(M.delete(t),t.i(e))}function A(t,e,n,s){if(t&&t.o){if(M.has(t))return;M.add(t),undefined.c.push((()=>{M.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function T(t){t&&t.c()}function H(t,n,r,c){const{fragment:l,on_mount:i,on_destroy:u,after_update:$}=t.$$;l&&l.m(n,r),c||C((()=>{const n=i.map(e).filter(o);u?u.push(...n):s(n),t.$$.on_mount=[]})),$.forEach(C)}function L(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,e){-1===t.$$.dirty[0]&&(x.push(t),y||(y=!0,v.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(e,o,r,c,i,u,$,a=[-1]){const p=l;g(e);const d=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(p?p.$$.context:[])),callbacks:n(),dirty:a,skip_bound:!1,root:o.target||p.$$.root};$&&$(d.root);let m=!1;if(d.ctx=r?r(e,o.props||{},((t,n,...s)=>{const o=s.length?s[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),m&&N(e,t)),n})):[],d.update(),m=!0,s(d.before_update),d.fragment=!!c&&c(d.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();o.intro&&j(e.$$.fragment),H(e,o.target,o.anchor,o.customElement),k()}g(p)}class S{$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function q(t){let e,n,s,o,r,c,l;const g=t[3].default,x=function(t,e,n,s){if(t){const o=u(t,e,n,s);return t[0](o)}}(g,t,t[2],null);return{c(){e=p("section"),n=p("div"),s=p("img"),r=d(),c=p("div"),x&&x.c(),i(s.src,o=t[0])||m(s,"src",o),m(s,"alt",t[1]),m(s,"class","image svelte-1nwsw03"),m(n,"class","card__image svelte-1nwsw03"),m(c,"class","card__description svelte-1nwsw03"),m(e,"class","card svelte-1nwsw03")},m(t,o){a(t,e,o),$(e,n),$(n,s),$(e,r),$(e,c),x&&x.m(c,null),l=!0},p(t,[e]){(!l||1&e&&!i(s.src,o=t[0]))&&m(s,"src",o),(!l||2&e)&&m(s,"alt",t[1]),x&&x.p&&(!l||4&e)&&function(t,e,n,s,o,r){if(o){const c=u(e,n,s,r);t.p(c,o)}}(x,g,t,t[2],l?function(t,e,n,s){if(t[2]&&s){const o=t[2](s(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|o[s];return t}return e.dirty|o}return e.dirty}(g,t[2],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[2]),null)},i(t){l||(j(x,t),l=!0)},o(t){A(x,t),l=!1},d(t){t&&f(e),x&&x.d(t)}}}function B(t,e,n){let{$$slots:s={},$$scope:o}=e,{url:r}=e,{description:c}=e;return t.$$set=t=>{"url"in t&&n(0,r=t.url),"description"in t&&n(1,c=t.description),"$$scope"in t&&n(2,o=t.$$scope)},[r,c,o,s]}class P extends S{constructor(t){super(),O(this,t,B,q,r,{url:0,description:1})}}function D(t){let e,n,s,o,r;return{c(){e=p("p"),e.textContent="Перед вами карта с 70 полями.",n=d(),s=p("p"),s.textContent="Стрелочки указываю возможные направления движения.",o=d(),r=p("p"),r.textContent="Даже если вы совсем незнакомы с игрой Инвазия * Кровоток, очень скоро вы сможете наслаждаться ею."},m(t,c){a(t,e,c),a(t,n,c),a(t,s,c),a(t,o,c),a(t,r,c)},d(t){t&&f(e),t&&f(n),t&&f(s),t&&f(o),t&&f(r)}}}function F(t){let e,n,s,o,r,c,l;return{c(){e=p("h4"),e.textContent="Инвазия * Кровоток - игра на захват конкретных полей.",n=d(),s=p("p"),s.textContent="Они обозначены крупными кругами и дальше будут называться замками. \n\t\tВ игре их 10.",o=d(),r=p("p"),r.textContent="Побеждает тот, кто захватит любые 3 замка одновременно.",c=d(),l=p("dfn"),l.textContent="Хотя возможны вариации игры и с другим количеством захватываемых замков."},m(t,i){a(t,e,i),a(t,n,i),a(t,s,i),a(t,o,i),a(t,r,i),a(t,c,i),a(t,l,i)},d(t){t&&f(e),t&&f(n),t&&f(s),t&&f(o),t&&f(r),t&&f(c),t&&f(l)}}}function G(t){let e,n,s,o,r;return{c(){e=p("p"),e.textContent="В ходе игры вам обязательно встретится поле c круговыми стрелками на самом поле и жирной стрелочкой рядом, это разветвление и их 7.",n=d(),s=p("p"),s.textContent="Стрелки указываю какое направление потока в данный момент являеться основным.",o=d(),r=p("ol"),r.innerHTML='<li class="list__item svelte-g7zmzn">Игрок чья фишка стоит на этом поле самой верхней может изменить направления одной стрелки во время своего хода.</li> \n\t\t<li class="list__item svelte-g7zmzn">За один ход игрок может сходить одной фишкой и изменить направление потока в одном любом месте, где верхняя его фишка. Сделать это можно до хода фишкой или после на свое усмотрение.</li> \n\t    <li class="list__item svelte-g7zmzn">Когда игрок ходит фишкой он вправе выбрать любое направление не взирая на направление основного потока.</li> \n\t\t<li class="list__item svelte-g7zmzn">Устанавливать поток против указанного стрелочками возможного направлеения движения запрещено.</li>',m(r,"class","list svelte-g7zmzn")},m(t,c){a(t,e,c),a(t,n,c),a(t,s,c),a(t,o,c),a(t,r,c)},d(t){t&&f(e),t&&f(n),t&&f(s),t&&f(o),t&&f(r)}}}function I(t){let e,n,s,o,r;return{c(){e=p("p"),e.textContent="Уголками обозначено поле клапан.",n=d(),s=p("p"),s.textContent="Когда фишка поподает на это поле, она ининциирует непроизвольное движение потока. То есть она сама и все стоящие перед ней фишки в направлении основного потока до ближайшего пустого места сдвигаются на один шаг вперед, тем самым оставляя поле клапана вновь пустым.",o=d(),r=p("h4"),r.textContent="Если по направлению основного потока все поля кром клапанов заняты и фишка после хода не оставляет пустого места, то происходит сбой и на ближайшем разветвлении, где аналогичной ситуации не наблюдается основной поток в непроизвольном порядке меняет свое направление, стрелка поворачивается и остается в таком положении. Дальше все происходит обычным образом. Фишки смещаются на шаг."},m(t,c){a(t,e,c),a(t,n,c),a(t,s,c),a(t,o,c),a(t,r,c)},d(t){t&&f(e),t&&f(n),t&&f(s),t&&f(o),t&&f(r)}}}function J(t){let e,n,s,o,r,c,l,i,u;return{c(){e=p("p"),e.textContent="Поле старт.",n=d(),s=p("p"),s.textContent="Все фишки вводятся в игру ходом от поля старт на 1, 2 или 3 шага вперед. Если на поле старт стоят фишки это не препятствует вводу новых фишек.",o=d(),r=p("h4"),r.textContent="Фишки запрещается вводить в игру, только при условии, что все поля кроме клапанов на поле уже заняты и единственный вариант для хода новой фишкой это сходить на клапан.",c=d(),l=p("p"),l.textContent="При желании пересекая это поле можно забирать фишки из игры. Любой чья фишка пересекла поле, даже не на своем ходе, может воспользоваться этой возможностью.",i=d(),u=p("h4"),u.textContent="Каждый раз, совершая полный круг по любой из траекторий и пересекая поле старт игрок получает фишку аналогичную той, что пересекла старт себе в банк фишек, которыми может пользоваться, вне зависимости от хода все игроки, кто пересек поле старт, в количестве фишек, которые его пересекли."},m(t,$){a(t,e,$),a(t,n,$),a(t,s,$),a(t,o,$),a(t,r,$),a(t,c,$),a(t,l,$),a(t,i,$),a(t,u,$)},d(t){t&&f(e),t&&f(n),t&&f(s),t&&f(o),t&&f(r),t&&f(c),t&&f(l),t&&f(i),t&&f(u)}}}function K(t){let e;return{c(){e=p("ol"),e.innerHTML='<li class="list__item svelte-g7zmzn">На пустые поля можно ставить фишки любого размера.</li> \n\t\t<li class="list__item svelte-g7zmzn">На другие фишки можно ставить только фишки меньшего размера.</li> \n\t\t<li class="list__item svelte-g7zmzn">Фишки можно cтавить на свои и соперников тоже.</li> \n\t\t<li class="list__item svelte-g7zmzn">Фишки на которых сверху стоят другие блокируются и не могут совершать ходы.</li> \n\t\t<li class="list__item svelte-g7zmzn">За ход можно передвигать всего одну фишку.</li>'},m(t,n){a(t,e,n)},d(t){t&&f(e)}}}function Q(t){let e;return{c(){e=p("ol"),e.innerHTML='<li class="list__item svelte-g7zmzn">Ставить фишки на фишки такого же размера запрещено.</li> \n\t\t<li class="list__item svelte-g7zmzn">Ставить фишки на фишки меньшего размера запрещено.</li> \n\t\t<li class="list__item svelte-g7zmzn">Двигать собравшуюся одноцветную пирамидку целеком запрещено. Один ход - одна фишка.</li>'},m(t,n){a(t,e,n)},d(t){t&&f(e)}}}function R(t){let e,n,s,o,r,c,l,i,u,$,g,x,h,_,z,v,y,C,b,w,k,E,M,N,O,S,q,B;return r=new P({props:{url:"/assets/rules/1.png",description:"Схема игры Инвазия * Кровоток",$$slots:{default:[D]},$$scope:{ctx:t}}}),u=new P({props:{url:"/assets/rules/2.png",description:"Поля подлежащие захвату",$$slots:{default:[F]},$$scope:{ctx:t}}}),g=new P({props:{url:"/assets/rules/3.png",description:"Поля разветвлений и их расположение на карте игры",$$slots:{default:[G]},$$scope:{ctx:t}}}),h=new P({props:{url:"/assets/rules/4.png",description:"Поля клапанов и их расположение на карте игры",$$slots:{default:[I]},$$scope:{ctx:t}}}),z=new P({props:{url:"/assets/rules/5.png",description:"Поле старт на карте игры",$$slots:{default:[J]},$$scope:{ctx:t}}}),M=new P({props:{url:"/assets/rules/good-steps.png",description:"Позитивная постановка фишек в игре",$$slots:{default:[K]},$$scope:{ctx:t}}}),q=new P({props:{url:"/assets/rules/bad-steps.png",description:"Позитивная постановка фишек в игре",$$slots:{default:[Q]},$$scope:{ctx:t}}}),{c(){e=p("h1"),e.textContent="Инвазия * Кровоток",n=d(),s=p("h2"),s.textContent="Правила - это очень просто!",o=d(),T(r.$$.fragment),c=d(),l=p("h2"),l.textContent="Разновидности полей",i=d(),T(u.$$.fragment),$=d(),T(g.$$.fragment),x=d(),T(h.$$.fragment),_=d(),T(z.$$.fragment),v=d(),y=p("p"),y.textContent="Все остальные поля в игре не несут особой логики.",C=d(),b=p("h3"),b.textContent="В начале игры всем игрокам раздается по пять фишек каждого размера",w=d(),k=p("h2"),k.textContent="Возможные ходы",E=d(),T(M.$$.fragment),N=d(),O=p("h2"),O.textContent="Запрещенные ходы",S=d(),T(q.$$.fragment),m(e,"class","svelte-g7zmzn"),m(s,"class","svelte-g7zmzn"),m(l,"class","svelte-g7zmzn"),m(k,"class","svelte-g7zmzn"),m(O,"class","svelte-g7zmzn")},m(t,f){a(t,e,f),a(t,n,f),a(t,s,f),a(t,o,f),H(r,t,f),a(t,c,f),a(t,l,f),a(t,i,f),H(u,t,f),a(t,$,f),H(g,t,f),a(t,x,f),H(h,t,f),a(t,_,f),H(z,t,f),a(t,v,f),a(t,y,f),a(t,C,f),a(t,b,f),a(t,w,f),a(t,k,f),a(t,E,f),H(M,t,f),a(t,N,f),a(t,O,f),a(t,S,f),H(q,t,f),B=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),r.$set(n);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),u.$set(s);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),g.$set(o);const c={};1&e&&(c.$$scope={dirty:e,ctx:t}),h.$set(c);const l={};1&e&&(l.$$scope={dirty:e,ctx:t}),z.$set(l);const i={};1&e&&(i.$$scope={dirty:e,ctx:t}),M.$set(i);const $={};1&e&&($.$$scope={dirty:e,ctx:t}),q.$set($)},i(t){B||(j(r.$$.fragment,t),j(u.$$.fragment,t),j(g.$$.fragment,t),j(h.$$.fragment,t),j(z.$$.fragment,t),j(M.$$.fragment,t),j(q.$$.fragment,t),B=!0)},o(t){A(r.$$.fragment,t),A(u.$$.fragment,t),A(g.$$.fragment,t),A(h.$$.fragment,t),A(z.$$.fragment,t),A(M.$$.fragment,t),A(q.$$.fragment,t),B=!1},d(t){t&&f(e),t&&f(n),t&&f(s),t&&f(o),L(r,t),t&&f(c),t&&f(l),t&&f(i),L(u,t),t&&f($),L(g,t),t&&f(x),L(h,t),t&&f(_),L(z,t),t&&f(v),t&&f(y),t&&f(C),t&&f(b),t&&f(w),t&&f(k),t&&f(E),L(M,t),t&&f(N),t&&f(O),t&&f(S),L(q,t)}}}class U extends S{constructor(t){super(),O(this,t,null,R,r,{})}}function V(e){let n,s,o,r,c;return s=new U({}),{c(){n=p("main"),T(s.$$.fragment),o=d(),r=p("p"),r.textContent="© 2022 Все права защищены, Инвазия * Кровоток",m(r,"class","copyright svelte-i8sv8f"),m(n,"class","svelte-i8sv8f")},m(t,e){a(t,n,e),H(s,n,null),$(n,o),$(n,r),c=!0},p:t,i(t){c||(j(s.$$.fragment,t),c=!0)},o(t){A(s.$$.fragment,t),c=!1},d(t){t&&f(n),L(s)}}}return new class extends S{constructor(t){super(),O(this,t,null,V,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
