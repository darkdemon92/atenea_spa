if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const f=e=>n(e,c),a={module:{uri:c},exports:o,require:f};i[c]=Promise.all(r.map((e=>a[e]||f(e)))).then((e=>(s(...e),o)))}}define(["./workbox-30e9d199"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"0848d339b7857d81c2f003fb82203c1b"},{url:"android-chrome-256x256.png",revision:"3bf7ca95f80be78ce893b258a3694e35"},{url:"apple-touch-icon.png",revision:"8c5b83986c150ba29b3a44884a848095"},{url:"assets/index-53f85f30.js",revision:null},{url:"assets/index-9ce4224f.css",revision:null},{url:"AteneaSPA.png",revision:"c22c2f0b0cd5811b3cae02485e1c192e"},{url:"favicon-16x16.png",revision:"623065faf765187e363d4fab1113e5ae"},{url:"favicon-32x32.png",revision:"38af2fd1a85e1167fb8a135b5cda5962"},{url:"favicon.ico",revision:"03222254e1576f3882f8690fd2b87170"},{url:"index.html",revision:"e5d4a3f0ce288a8eca49e983c6ad6284"},{url:"mstile-150x150.png",revision:"0b113ab7ae74d4286207c3b45b03c905"},{url:"registerSW.js",revision:"096005c91374cd51488afbe17f2a43fc"},{url:"safari-pinned-tab.svg",revision:"d4fe4dd5937fe1c29ce05cddbe656b55"},{url:"manifest.webmanifest",revision:"529fc9c715eaad53a374f60daf9fbf2e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map