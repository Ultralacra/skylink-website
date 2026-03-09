import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_CRSeGM-Y.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DKjo3QLk.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/C%C3%A9sar/Desktop/skylink-website/","cacheDir":"file:///C:/Users/C%C3%A9sar/Desktop/skylink-website/node_modules/.astro/","outDir":"file:///C:/Users/C%C3%A9sar/Desktop/skylink-website/dist/","srcDir":"file:///C:/Users/C%C3%A9sar/Desktop/skylink-website/src/","publicDir":"file:///C:/Users/C%C3%A9sar/Desktop/skylink-website/public/","buildClientDir":"file:///C:/Users/C%C3%A9sar/Desktop/skylink-website/dist/client/","buildServerDir":"file:///C:/Users/C%C3%A9sar/Desktop/skylink-website/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.7Tk3-XOc.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/César/Desktop/skylink-website/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_B34R_g16.mjs","C:/Users/César/Desktop/skylink-website/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_jeovdIH5.mjs","C:/Users/César/Desktop/skylink-website/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.DSADbvPc.js","C:/Users/César/Desktop/skylink-website/src/components/Preloader.astro?astro&type=script&index=0&lang.ts":"_astro/Preloader.astro_astro_type_script_index_0_lang.C4Lb5RAB.js","C:/Users/César/Desktop/skylink-website/src/components/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.CetDB4Xw.js","C:/Users/César/Desktop/skylink-website/src/components/Services.astro?astro&type=script&index=0&lang.ts":"_astro/Services.astro_astro_type_script_index_0_lang.Bs8oysRc.js","C:/Users/César/Desktop/skylink-website/src/components/Process.astro?astro&type=script&index=0&lang.ts":"_astro/Process.astro_astro_type_script_index_0_lang.CKm-HomO.js","C:/Users/César/Desktop/skylink-website/src/components/Contact.astro?astro&type=script&index=0&lang.ts":"_astro/Contact.astro_astro_type_script_index_0_lang.SjjUHjeO.js","C:/Users/César/Desktop/skylink-website/src/components/CustomCursor.astro?astro&type=script&index=0&lang.ts":"_astro/CustomCursor.astro_astro_type_script_index_0_lang.fX7vdOLK.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/César/Desktop/skylink-website/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","document.querySelectorAll('a[href^=\"#\"]').forEach(e=>{e.addEventListener(\"click\",function(t){t.preventDefault();const o=document.querySelector(this.getAttribute(\"href\"));o&&o.scrollIntoView({behavior:\"smooth\",block:\"start\"})})});const d={threshold:.08,rootMargin:\"0px 0px -80px 0px\"},a=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add(\"revealed\"),a.unobserve(t.target))})},d);document.querySelectorAll(\".reveal\").forEach(e=>a.observe(e));let c=!1;window.addEventListener(\"scroll\",()=>{c||(requestAnimationFrame(()=>{const e=window.scrollY;document.querySelectorAll(\"[data-parallax]\").forEach(t=>{const o=parseFloat(t.dataset.parallax||\"0.5\");t.style.transform=`translateY(${e*o}px)`}),document.querySelectorAll(\"[data-scroll-3d]\").forEach(t=>{const o=t.getBoundingClientRect(),s=window.innerHeight,n=(s-o.top)/(s+o.height),r=Math.max(0,Math.min(1,n)),l=(1-r)*3,i=.95+r*.05;t.style.transform=`perspective(1200px) rotateX(${l}deg) scale(${i})`,t.style.opacity=`${.3+r*.7}`}),c=!1}),c=!0)});document.querySelectorAll(\".magnetic\").forEach(e=>{e.addEventListener(\"mousemove\",t=>{const o=t,s=e.getBoundingClientRect(),n=o.clientX-s.left-s.width/2,r=o.clientY-s.top-s.height/2;e.style.transform=`translate(${n*.3}px, ${r*.3}px)`}),e.addEventListener(\"mouseleave\",()=>{e.style.transform=\"translate(0px, 0px)\"})});const p=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add(\"section-visible\")})},{threshold:.05});document.querySelectorAll(\"section\").forEach(e=>p.observe(e));document.querySelectorAll(\".split-text\").forEach(e=>{const t=e.textContent||\"\";e.innerHTML=\"\";const o=t.split(\" \");o.forEach((s,n)=>{const r=document.createElement(\"span\");r.className=\"split-word\",r.style.setProperty(\"--word-i\",n.toString()),r.textContent=s,e.appendChild(r),n<o.length-1&&e.appendChild(document.createTextNode(\" \"))})});"],["C:/Users/César/Desktop/skylink-website/src/components/Preloader.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"preloader\"),o=document.getElementById(\"preloaderProgress\"),r=document.getElementById(\"preloaderPercent\");document.querySelector(\".panel-left\");document.querySelector(\".panel-right\");let e=0;const n=2200,d=n/100,l=setInterval(()=>{e++,o&&(o.style.width=e+\"%\"),r&&(r.textContent=e+\"%\"),e>=100&&(clearInterval(l),setTimeout(()=>{t?.classList.add(\"loaded\"),setTimeout(()=>{document.body.classList.add(\"page-loaded\")},800),setTimeout(()=>{t?.remove()},1800)},300))},d);"],["C:/Users/César/Desktop/skylink-website/src/components/Navbar.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"navbar\"),t=document.getElementById(\"mobileToggle\"),l=document.getElementById(\"mobileMenu\");let o=0;window.addEventListener(\"scroll\",()=>{const s=window.scrollY;s>80?e?.classList.add(\"scrolled\"):e?.classList.remove(\"scrolled\"),s>o&&s>400&&!e?.classList.contains(\"menu-open\")?e?.classList.add(\"hidden\"):e?.classList.remove(\"hidden\"),o=s});function c(){t?.classList.add(\"active\"),l?.classList.add(\"active\"),e?.classList.add(\"menu-open\"),e?.classList.remove(\"hidden\"),document.body.style.overflow=\"hidden\"}function n(){t?.classList.remove(\"active\"),l?.classList.remove(\"active\"),e?.classList.remove(\"menu-open\"),document.body.style.overflow=\"\"}t?.addEventListener(\"click\",()=>{l?.classList.contains(\"active\")?n():c()});l?.querySelectorAll(\"a\").forEach(s=>{s.addEventListener(\"click\",()=>n())});"],["C:/Users/César/Desktop/skylink-website/src/components/Services.astro?astro&type=script&index=0&lang.ts","document.querySelectorAll(\".service-card\").forEach(e=>{e.addEventListener(\"mousemove\",r=>{const t=r,n=e.getBoundingClientRect(),o=(t.clientX-n.left)/n.width,c=(t.clientY-n.top)/n.height,a=e.querySelector(\".card-shine\");a&&(a.style.background=`radial-gradient(circle at ${o*100}% ${c*100}%, rgba(96,176,224,0.07) 0%, transparent 60%)`);const s=e.querySelector(\".card-glow-border\");s&&(s.style.background=`radial-gradient(circle at ${o*100}% ${c*100}%, rgba(96,176,224,0.25), transparent 50%)`)}),e.addEventListener(\"mouseleave\",()=>{const r=e.querySelector(\".card-shine\");r&&(r.style.background=\"transparent\");const t=e.querySelector(\".card-glow-border\");t&&(t.style.background=\"transparent\")})});"],["C:/Users/César/Desktop/skylink-website/src/components/Process.astro?astro&type=script&index=0&lang.ts","const i=document.getElementById(\"timelineProgress\"),c=document.getElementById(\"timelineGlow\"),s=document.querySelector(\".process\");i&&s&&window.addEventListener(\"scroll\",()=>{const t=s.getBoundingClientRect(),o=s.offsetHeight,n=window.innerHeight,e=Math.min(Math.max((n-t.top)/(o+n)*100,0),100);i.style.width=e+\"%\",c&&(c.style.width=e+\"%\")});document.querySelectorAll(\".step-content\").forEach(t=>{t.addEventListener(\"mousemove\",o=>{const n=o,e=t.getBoundingClientRect(),l=(n.clientX-e.left)/e.width,r=((n.clientY-e.top)/e.height-.5)*8,m=(l-.5)*-8;t.style.transform=`perspective(600px) rotateX(${r}deg) rotateY(${m}deg) translateY(-8px)`}),t.addEventListener(\"mouseleave\",()=>{t.style.transform=\"\"})});"],["C:/Users/César/Desktop/skylink-website/src/components/Contact.astro?astro&type=script&index=0&lang.ts","const o=document.getElementById(\"contactForm\"),e=document.getElementById(\"contactSubmitBtn\"),s=e?.querySelector(\".submit-label\"),a=document.getElementById(\"contactSuccessModal\"),r=document.getElementById(\"contactModalCloseBtn\"),i=t=>{a&&(a.classList.toggle(\"is-open\",t),a.setAttribute(\"aria-hidden\",String(!t)),document.body.style.overflow=t?\"hidden\":\"\")};r?.addEventListener(\"click\",()=>i(!1));a?.addEventListener(\"click\",t=>{const n=t.target;n instanceof HTMLElement&&n.hasAttribute(\"data-close-modal\")&&i(!1)});window.addEventListener(\"keydown\",t=>{t.key===\"Escape\"&&i(!1)});o?.addEventListener(\"submit\",async t=>{if(t.preventDefault(),!(o instanceof HTMLFormElement)||!(e instanceof HTMLButtonElement))return;const n=new FormData(o),c=Object.fromEntries(n.entries());e.disabled=!0,e.classList.add(\"is-loading\"),s&&(s.textContent=\"Enviando...\");try{if(!(await fetch(\"/api/contact\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(c)})).ok)throw new Error(\"No se pudo enviar el formulario\");o.reset(),i(!0)}catch{window.alert(\"No pudimos enviar tu mensaje en este momento. Intenta de nuevo en unos minutos.\")}finally{e.disabled=!1,e.classList.remove(\"is-loading\"),s&&(s.textContent=\"Enviar Mensaje\")}});"],["C:/Users/César/Desktop/skylink-website/src/components/CustomCursor.astro?astro&type=script&index=0&lang.ts","const u=document.getElementById(\"cursor\"),t=u?.querySelector(\".cursor-dot\"),r=u?.querySelector(\".cursor-ring\");let o=0,s=0,n=0,i=0;const l=document.getElementById(\"cursorTrail\");let c=0,a=0;if(window.innerWidth>768){let d=function(){n+=(o-n)*.15,i+=(s-i)*.15,c+=(o-c)*.08,a+=(s-a)*.08,r&&(r.style.left=n+\"px\",r.style.top=i+\"px\"),l&&(l.style.left=c+\"px\",l.style.top=a+\"px\"),requestAnimationFrame(d)};document.addEventListener(\"mousemove\",e=>{o=e.clientX,s=e.clientY,t&&(t.style.left=o+\"px\",t.style.top=s+\"px\")}),d(),document.querySelectorAll(\"a, button, .interactive\").forEach(e=>{e.addEventListener(\"mouseenter\",()=>{r?.classList.add(\"hover\"),t?.classList.add(\"hover\")}),e.addEventListener(\"mouseleave\",()=>{r?.classList.remove(\"hover\"),t?.classList.remove(\"hover\")})})}"]],"assets":["/_astro/index.7Tk3-XOc.css","/favicon.svg","/NQUbam0dqFbjpm2eo0thkkx7lM.avif","/logos/S Blanco.png","/logos/S negro.png","/logos/S.png","/logos/Scf.png","/logos/SKLINK blanco.png","/logos/SKLINK negro.png","/logos/ss.png","/logos/SSKLINK blanco.png","/logos/SSKLINK negro.png","/logos/Untitled Project - Artboard 1.png","/logos/logos-clientes/logo-academia.jpg","/logos/logos-clientes/logo-alto-dominicos.jpg","/logos/logos-clientes/logo-animalaria.webp","/logos/logos-clientes/logo-chile-adicto.svg","/logos/logos-clientes/logo-euclides.svg","/logos/logos-clientes/logo-indrasolutions.webp","/logos/logos-clientes/logo-juste.png","/logos/logos-clientes/logo-klaims.svg","/logos/logos-clientes/logo-MYH.png","/logos/logos-clientes/logo-navegue.png","/logos/logos-clientes/logo-santiago-adicto.svg","/logos/logos-clientes/logo-stickys.webp","/logos/logos-clientes/logo-tcrm.png","/logos/logos-clientes/logo-waw.webp"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"Pp+N50RyzhW5tUfaz/taLCk70x9iyeB+TqRS4utln3o="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
