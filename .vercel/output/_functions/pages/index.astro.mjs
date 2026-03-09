import { e as createComponent, k as renderHead, l as renderSlot, n as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute, u as unescapeHTML, o as renderComponent } from '../chunks/astro/server_CRSeGM-Y.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="Skylink - Agencia de desarrollo de software y soluciones digitales a medida. Transformamos ideas en tecnología."><link rel="icon" type="image/png" href="/logos/S.png"><link rel="apple-touch-icon" href="/logos/S.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body> <div class="noise"></div> ${renderSlot($$result, $$slots["default"])} ${renderScript($$result, "C:/Users/C\xE9sar/Desktop/skylink-website/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html> `;
}, "C:/Users/C\xE9sar/Desktop/skylink-website/src/layouts/Layout.astro", void 0);

const $$Preloader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="preloader" id="preloader" data-astro-cid-whrugjgn> <div class="preloader-inner" data-astro-cid-whrugjgn> <div class="preloader-logo" data-astro-cid-whrugjgn> <img src="/logos/S Blanco.png" alt="" width="80" height="80" data-astro-cid-whrugjgn> <div class="logo-ring" data-astro-cid-whrugjgn></div> <div class="logo-ring ring-2" data-astro-cid-whrugjgn></div> <div class="logo-ring ring-3" data-astro-cid-whrugjgn></div> </div> <div class="preloader-text" data-astro-cid-whrugjgn> <span class="preloader-letter" style="--i:0" data-astro-cid-whrugjgn>S</span> <span class="preloader-letter" style="--i:1" data-astro-cid-whrugjgn>K</span> <span class="preloader-letter" style="--i:2" data-astro-cid-whrugjgn>Y</span> <span class="preloader-letter" style="--i:3" data-astro-cid-whrugjgn>L</span> <span class="preloader-letter" style="--i:4" data-astro-cid-whrugjgn>I</span> <span class="preloader-letter" style="--i:5" data-astro-cid-whrugjgn>N</span> <span class="preloader-letter" style="--i:6" data-astro-cid-whrugjgn>K</span> </div> <div class="preloader-bar" data-astro-cid-whrugjgn> <div class="preloader-progress" id="preloaderProgress" data-astro-cid-whrugjgn></div> </div> <div class="preloader-percent" id="preloaderPercent" data-astro-cid-whrugjgn>0%</div> </div> <!-- Cinematic reveal panels --> <div class="reveal-panel panel-left" data-astro-cid-whrugjgn></div> <div class="reveal-panel panel-right" data-astro-cid-whrugjgn></div> </div> ${renderScript($$result, "C:/Users/C\xE9sar/Desktop/skylink-website/src/components/Preloader.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/C\xE9sar/Desktop/skylink-website/src/components/Preloader.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="navbar" id="navbar" data-astro-cid-5blmo7yk> <div class="nav-container" data-astro-cid-5blmo7yk> <a href="#" class="nav-logo" data-astro-cid-5blmo7yk> <img src="/logos/S Blanco.png" alt="Skylink" class="logo-img" width="36" height="36" data-astro-cid-5blmo7yk> <img src="/logos/SKLINK blanco.png" alt="Skylink" class="logo-text-img" height="24" data-astro-cid-5blmo7yk> </a> <div class="nav-links" data-astro-cid-5blmo7yk> <a href="#servicios" class="nav-link" data-astro-cid-5blmo7yk>Servicios</a> <a href="#proceso" class="nav-link" data-astro-cid-5blmo7yk>Proceso</a> <a href="#nosotros" class="nav-link" data-astro-cid-5blmo7yk>Nosotros</a> <a href="#contacto" class="nav-link" data-astro-cid-5blmo7yk>Contacto</a> </div> <a href="#contacto" class="nav-cta magnetic" data-astro-cid-5blmo7yk> <span data-astro-cid-5blmo7yk>Comenzar Proyecto</span> <div class="cta-glow" data-astro-cid-5blmo7yk></div> </a> <button class="mobile-toggle" id="mobileToggle" aria-label="Menú" data-astro-cid-5blmo7yk> <span data-astro-cid-5blmo7yk></span> <span data-astro-cid-5blmo7yk></span> <span data-astro-cid-5blmo7yk></span> </button> </div> <!-- Mobile menu --> <div class="mobile-menu" id="mobileMenu" data-astro-cid-5blmo7yk> <div class="mobile-menu-inner" data-astro-cid-5blmo7yk> <a href="#servicios" class="mobile-link" data-astro-cid-5blmo7yk>Servicios</a> <a href="#proceso" class="mobile-link" data-astro-cid-5blmo7yk>Proceso</a> <a href="#nosotros" class="mobile-link" data-astro-cid-5blmo7yk>Nosotros</a> <a href="#contacto" class="mobile-link" data-astro-cid-5blmo7yk>Contacto</a> <a href="#contacto" class="mobile-cta" data-astro-cid-5blmo7yk>Comenzar Proyecto →</a> <div class="mobile-social" data-astro-cid-5blmo7yk> <a href="https://www.instagram.com/skylink" target="_blank" rel="noopener noreferrer" class="mobile-social-link" aria-label="Instagram" data-astro-cid-5blmo7yk> <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-5blmo7yk> <rect x="2" y="2" width="20" height="20" rx="5" data-astro-cid-5blmo7yk></rect> <circle cx="12" cy="12" r="5" data-astro-cid-5blmo7yk></circle> <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" data-astro-cid-5blmo7yk></circle> </svg> </a> </div> </div> </div> </nav> ${renderScript($$result, "C:/Users/C\xE9sar/Desktop/skylink-website/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/C\xE9sar/Desktop/skylink-website/src/components/Navbar.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" id="hero" data-astro-cid-bbe6dxrz> <div class="hero-content" data-astro-cid-bbe6dxrz> <div class="hero-logo" data-astro-cid-bbe6dxrz> <img src="/logos/S Blanco.png" alt="" width="60" height="60" data-astro-cid-bbe6dxrz> </div> <div class="hero-badge" data-astro-cid-bbe6dxrz> <span class="badge-dot" data-astro-cid-bbe6dxrz></span> <span data-astro-cid-bbe6dxrz>Desarrollo de Software</span> </div> <h1 class="hero-title" data-astro-cid-bbe6dxrz> <span data-astro-cid-bbe6dxrz>Transformando Ideas en</span> <span class="text-gradient" data-astro-cid-bbe6dxrz>Soluciones Digitales</span> </h1> <div class="hero-image" data-astro-cid-bbe6dxrz> <img src="/NQUbam0dqFbjpm2eo0thkkx7lM.avif" alt="Skylink - Soluciones Digitales" data-astro-cid-bbe6dxrz> </div> <p class="hero-description" data-astro-cid-bbe6dxrz>
Desarrollo de software a medida, plugins para WordPress y SEO optimizado.
      Creamos tecnología que impulsa tu negocio hacia el éxito.
</p> </div> </section> `;
}, "C:/Users/C\xE9sar/Desktop/skylink-website/src/components/Hero.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="10" width="36" height="28" rx="3" stroke="currentColor" stroke-width="2"/><path d="M16 22L20 26L16 30" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="24" y1="30" x2="32" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
      title: "Desarrollo de Software a Medida",
      description: "Creamos aplicaciones web y m\xF3viles personalizadas que se adaptan perfectamente a las necesidades espec\xEDficas de tu negocio.",
      tags: ["Aplicaciones Web", "APIs REST", "Sistemas de Gesti\xF3n", "Integraci\xF3n"],
      gradient: "gradient-purple",
      number: "01"
    },
    {
      icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="18" r="8" stroke="currentColor" stroke-width="2"/><path d="M12 30C12 30 14 24 24 24C34 24 36 30 36 30" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M24 38V32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18 36L24 32L30 36" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      title: "An\xE1lisis de Factibilidad T\xE9cnica",
      description: "Evaluamos la viabilidad t\xE9cnica de tu proyecto, identificando riesgos, recursos necesarios y la mejor estrategia.",
      tags: ["Evaluaci\xF3n", "An\xE1lisis de Riesgos", "Estimaci\xF3n", "Roadmap"],
      gradient: "gradient-cyan",
      number: "02"
    },
    {
      icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 8L28 16L38 18L30 26L32 36L24 32L16 36L18 26L10 18L20 16L24 8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,
      title: "Mantenimiento y Arquitectura Cloud",
      description: "Dise\xF1amos, implementamos y mantenemos infraestructuras cloud escalables y seguras para tu aplicaci\xF3n.",
      tags: ["Cloud", "DevOps", "Monitoreo 24/7", "Escalabilidad"],
      gradient: "gradient-blue",
      number: "03"
    },
    {
      icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" stroke-width="2"/><path d="M16 28V32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M24 22V32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M32 16V32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
      title: "E-commerce",
      description: "Desarrollamos tiendas online completas con sistemas de pago seguros, gesti\xF3n de inventario y UX optimizada.",
      tags: ["Tiendas Online", "Pasarelas de Pago", "Inventario", "Analytics"],
      gradient: "gradient-orange",
      number: "04"
    },
    {
      icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="6" width="20" height="36" rx="4" stroke="currentColor" stroke-width="2"/><circle cx="24" cy="36" r="2" fill="currentColor"/><line x1="20" y1="10" x2="28" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
      title: "Aplicaciones M\xF3viles",
      description: "Creamos aplicaciones m\xF3viles nativas e h\xEDbridas para iOS y Android con interfaces intuitivas y rendimiento \xF3ptimo.",
      tags: ["Apps Nativas", "Apps H\xEDbridas", "UI/UX M\xF3vil", "Stores"],
      gradient: "gradient-pink",
      number: "05"
    },
    {
      icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="16" stroke="currentColor" stroke-width="2"/><path d="M24 16V24L30 28" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 12L12 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M32 12L36 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
      title: "Desarrollo de Herramientas IA",
      description: "Integramos inteligencia artificial en tus procesos con chatbots, an\xE1lisis predictivo y automatizaci\xF3n inteligente.",
      tags: ["Chatbots IA", "Machine Learning", "An\xE1lisis Predictivo", "Automatizaci\xF3n"],
      gradient: "gradient-green",
      number: "06"
    },
    {
      icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16H36V36H12V16Z" stroke="currentColor" stroke-width="2"/><path d="M20 16V12H28V16" stroke="currentColor" stroke-width="2"/><circle cx="24" cy="26" r="4" stroke="currentColor" stroke-width="2"/></svg>`,
      title: "Plugins para WordPress",
      description: "Desarrollamos plugins personalizados que extienden la funcionalidad de tu sitio WordPress con caracter\xEDsticas \xFAnicas.",
      tags: ["Plugins", "Temas a Medida", "Optimizaci\xF3n WP", "Mantenimiento"],
      gradient: "gradient-purple",
      number: "07"
    },
    {
      icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="8" stroke="currentColor" stroke-width="2"/><path d="M24 8V14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M24 34V40" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M8 24H14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M34 24H40" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
      title: "SEO y Optimizaci\xF3n",
      description: "Mejoramos la visibilidad de tu sitio web en los motores de b\xFAsqueda con estrategias SEO probadas y efectivas.",
      tags: ["SEO T\xE9cnico", "Contenido", "Competencia", "Reportes"],
      gradient: "gradient-cyan",
      number: "08"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="services" id="servicios" data-scroll-3d data-astro-cid-g5jplrhu> <div class="services-container" data-astro-cid-g5jplrhu> <div class="section-header reveal" data-astro-cid-g5jplrhu> <span class="section-tag" data-astro-cid-g5jplrhu> <span class="tag-pulse" data-astro-cid-g5jplrhu></span>
Nuestros Servicios
</span> <h2 class="section-title" data-astro-cid-g5jplrhu>
Soluciones tecnológicas <br data-astro-cid-g5jplrhu><span class="text-gradient" data-astro-cid-g5jplrhu>integrales</span> para tu negocio
</h2> <p class="section-description" data-astro-cid-g5jplrhu>
Ofrecemos un ecosistema completo de servicios digitales diseñado para impulsar el crecimiento de tu empresa
</p> </div> <div class="services-grid" data-astro-cid-g5jplrhu> ${services.map((service, i) => renderTemplate`<article${addAttribute(`service-card reveal reveal-delay-${i % 4 + 1} interactive ${service.gradient}`, "class")} data-astro-cid-g5jplrhu> <div class="card-glow-border" data-astro-cid-g5jplrhu></div> <div class="card-shine" data-astro-cid-g5jplrhu></div> <div class="card-holographic" data-astro-cid-g5jplrhu></div> <div class="card-inner" data-astro-cid-g5jplrhu> <div class="card-number" data-astro-cid-g5jplrhu>${service.number}</div> <div class="card-icon" data-astro-cid-g5jplrhu>${unescapeHTML(service.icon)}</div> <h3 class="card-title" data-astro-cid-g5jplrhu>${service.title}</h3> <p class="card-description" data-astro-cid-g5jplrhu>${service.description}</p> <div class="card-tags" data-astro-cid-g5jplrhu> ${service.tags.map((tag) => renderTemplate`<span class="card-tag" data-astro-cid-g5jplrhu>${tag}</span>`)} </div> <div class="card-arrow" data-astro-cid-g5jplrhu> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" data-astro-cid-g5jplrhu> <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-g5jplrhu></path> </svg> </div> </div> </article>`)} </div> </div> </section> ${renderScript($$result, "C:/Users/C\xE9sar/Desktop/skylink-website/src/components/Services.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/C\xE9sar/Desktop/skylink-website/src/components/Services.astro", void 0);

const $$Process = createComponent(($$result, $$props, $$slots) => {
  const steps = [
    {
      number: "01",
      title: "Consulta Inicial",
      description: "Analizamos tus necesidades y objetivos para entender exactamente lo que tu negocio requiere.",
      icon: `<svg viewBox="0 0 40 40" fill="none"><path d="M20 8C13.4 8 8 13.4 8 20C8 26.6 13.4 32 20 32C26.6 32 32 26.6 32 20C32 13.4 26.6 8 20 8Z" stroke="currentColor" stroke-width="1.5"/><path d="M20 14V20L24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`
    },
    {
      number: "02",
      title: "Estrategia y Dise\xF1o",
      description: "Creamos un plan detallado y dise\xF1amos la arquitectura perfecta para tu soluci\xF3n.",
      icon: `<svg viewBox="0 0 40 40" fill="none"><rect x="8" y="8" width="24" height="24" rx="3" stroke="currentColor" stroke-width="1.5"/><path d="M14 20H26" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M14 15H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M14 25H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`
    },
    {
      number: "03",
      title: "Desarrollo",
      description: "Nuestro equipo desarrolla tu proyecto usando las mejores pr\xE1cticas y tecnolog\xEDas modernas.",
      icon: `<svg viewBox="0 0 40 40" fill="none"><path d="M15 14L9 20L15 26" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M25 14L31 20L25 26" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 10L18 30" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`
    },
    {
      number: "04",
      title: "Lanzamiento y Soporte",
      description: "Desplegamos tu proyecto y proporcionamos soporte continuo para garantizar su \xE9xito.",
      icon: `<svg viewBox="0 0 40 40" fill="none"><path d="M20 8L24 16L32 18L26 24L28 32L20 28L12 32L14 24L8 18L16 16L20 8Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="process" id="proceso" data-scroll-3d data-astro-cid-fz4tclxl> <div class="process-container" data-astro-cid-fz4tclxl> <div class="section-header reveal" data-astro-cid-fz4tclxl> <span class="section-tag" data-astro-cid-fz4tclxl> <span class="tag-pulse" data-astro-cid-fz4tclxl></span>
Nuestro Proceso
</span> <h2 class="section-title" data-astro-cid-fz4tclxl>
Un enfoque estructurado para<br data-astro-cid-fz4tclxl><span class="text-gradient" data-astro-cid-fz4tclxl>resultados excepcionales</span> </h2> <p class="section-description" data-astro-cid-fz4tclxl>
Metodología probada que garantiza calidad, transparencia y entrega a tiempo en cada proyecto
</p> </div> <div class="process-timeline" data-astro-cid-fz4tclxl> <div class="timeline-line" data-astro-cid-fz4tclxl> <div class="timeline-progress" id="timelineProgress" data-astro-cid-fz4tclxl></div> <div class="timeline-glow" id="timelineGlow" data-astro-cid-fz4tclxl></div> </div> ${steps.map((step, i) => renderTemplate`<div${addAttribute(`process-step reveal reveal-delay-${i + 1}`, "class")} data-astro-cid-fz4tclxl> <div class="step-marker" data-astro-cid-fz4tclxl> <span class="step-number" data-astro-cid-fz4tclxl>${step.number}</span> <div class="step-pulse" data-astro-cid-fz4tclxl></div> <div class="step-ring" data-astro-cid-fz4tclxl></div> </div> <div class="step-content glass" data-astro-cid-fz4tclxl> <div class="step-content-glow" data-astro-cid-fz4tclxl></div> <div class="step-icon" data-astro-cid-fz4tclxl>${unescapeHTML(step.icon)}</div> <h3 class="step-title" data-astro-cid-fz4tclxl>${step.title}</h3> <p class="step-description" data-astro-cid-fz4tclxl>${step.description}</p> </div> </div>`)} </div> </div> </section> ${renderScript($$result, "C:/Users/C\xE9sar/Desktop/skylink-website/src/components/Process.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/C\xE9sar/Desktop/skylink-website/src/components/Process.astro", void 0);

const $$Features = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      icon: `<svg viewBox="0 0 32 32" fill="none"><rect x="4" y="6" width="24" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 26H24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M16 22V26" stroke="currentColor" stroke-width="1.5"/><rect x="12" y="6" width="8" height="3" rx="1" stroke="currentColor" stroke-width="1"/></svg>`,
      title: "Responsive Design",
      description: "Todos nuestros desarrollos se adaptan perfectamente a cualquier dispositivo"
    },
    {
      icon: `<svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="1.5"/><path d="M16 8V16H24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M4 16H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
      title: "Alcance Global",
      description: "Soluciones escalables preparadas para audiencias internacionales"
    },
    {
      icon: `<svg viewBox="0 0 32 32" fill="none"><path d="M6 24L16 8L26 24H6Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M16 16V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="16" cy="22" r="0.5" fill="currentColor"/></svg>`,
      title: "Alto Rendimiento",
      description: "Optimizamos cada l\xEDnea de c\xF3digo para m\xE1xima velocidad y eficiencia"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="features" id="nosotros" data-scroll-3d data-astro-cid-vnivfuh2> <div class="features-container" data-astro-cid-vnivfuh2> <div class="section-header reveal" data-astro-cid-vnivfuh2> <span class="section-tag" data-astro-cid-vnivfuh2> <span class="tag-pulse" data-astro-cid-vnivfuh2></span>
Tecnologías
</span> <h2 class="section-title" data-astro-cid-vnivfuh2>
Construimos con las tecnologías <br data-astro-cid-vnivfuh2><span class="text-gradient" data-astro-cid-vnivfuh2>más avanzadas de la industria</span> </h2> <p class="section-description" data-astro-cid-vnivfuh2>
Elegimos cada herramienta con precisión quirúrgica para que tu producto tenga rendimiento, escalabilidad y seguridad de clase mundial. Desde frameworks de última generación hasta infraestructura cloud de nivel enterprise — tu proyecto merece la misma tecnología que usan las startups más disruptivas del planeta.
</p> </div> <div class="features-marquee" data-astro-cid-vnivfuh2> <div class="marquee-wrapper" data-astro-cid-vnivfuh2> <div class="marquee-track" data-astro-cid-vnivfuh2> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" class="tech-logo" width="44" height="44" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>React</span> </div> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/nextdotjs/ffffff" alt="Next.js" class="tech-logo" width="44" height="44" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>Next.js</span> </div> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/nodedotjs/5FA04E" alt="Node.js" class="tech-logo" width="44" height="44" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>Node.js</span> </div> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" class="tech-logo" width="44" height="44" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>Python</span> </div> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" class="tech-logo" width="44" height="44" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>TypeScript</span> </div> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="PostgreSQL" class="tech-logo" width="44" height="44" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>PostgreSQL</span> </div> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/amazonaws/FF9900" alt="AWS" class="tech-logo" width="44" height="44" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>AWS</span> </div> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" class="tech-logo" width="44" height="44" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>Docker</span> </div> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/kubernetes/326CE5" alt="Kubernetes" class="tech-logo" width="44" height="44" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>Kubernetes</span> </div> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/flutter/02569B" alt="Flutter" class="tech-logo" width="44" height="44" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>Flutter</span> </div> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/wordpress/21759B" alt="WordPress" class="tech-logo" width="44" height="44" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>WordPress</span> </div> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/tensorflow/FF6F00" alt="TensorFlow" class="tech-logo" width="44" height="44" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>TensorFlow</span> </div> <!-- Duplicado para loop continuo --> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" class="tech-logo" width="44" height="44" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>React</span> </div> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/nextdotjs/ffffff" alt="Next.js" class="tech-logo" width="44" height="44" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>Next.js</span> </div> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/nodedotjs/5FA04E" alt="Node.js" class="tech-logo" width="44" height="44" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>Node.js</span> </div> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" class="tech-logo" width="44" height="44" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>Python</span> </div> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" class="tech-logo" width="44" height="44" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>TypeScript</span> </div> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="PostgreSQL" class="tech-logo" width="28" height="28" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>PostgreSQL</span> </div> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/amazonaws/FF9900" alt="AWS" class="tech-logo" width="44" height="44" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>AWS</span> </div> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" class="tech-logo" width="44" height="44" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>Docker</span> </div> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/kubernetes/326CE5" alt="Kubernetes" class="tech-logo" width="44" height="44" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>Kubernetes</span> </div> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/flutter/02569B" alt="Flutter" class="tech-logo" width="44" height="44" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>Flutter</span> </div> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/wordpress/21759B" alt="WordPress" class="tech-logo" width="44" height="44" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>WordPress</span> </div> <div class="tech-item" data-astro-cid-vnivfuh2> <img src="https://cdn.simpleicons.org/tensorflow/FF6F00" alt="TensorFlow" class="tech-logo" width="44" height="44" loading="lazy" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>TensorFlow</span> </div> </div> </div> </div> <div class="features-grid" data-astro-cid-vnivfuh2> ${features.map((feature, i) => renderTemplate`<div${addAttribute(`feature-card reveal reveal-delay-${i + 1}`, "class")} data-astro-cid-vnivfuh2> <div class="feature-card-bg" data-astro-cid-vnivfuh2></div> <div class="feature-icon-wrap" data-astro-cid-vnivfuh2> <div class="feature-icon" data-astro-cid-vnivfuh2>${unescapeHTML(feature.icon)}</div> <div class="feature-glow" data-astro-cid-vnivfuh2></div> <div class="feature-ring" data-astro-cid-vnivfuh2></div> </div> <h3 class="feature-title" data-astro-cid-vnivfuh2>${feature.title}</h3> <p class="feature-description" data-astro-cid-vnivfuh2>${feature.description}</p> </div>`)} </div> <div class="cta-banner reveal glass" data-astro-cid-vnivfuh2> <div class="cta-bg" data-astro-cid-vnivfuh2> <div class="cta-orb cta-orb-1" data-astro-cid-vnivfuh2></div> <div class="cta-orb cta-orb-2" data-astro-cid-vnivfuh2></div> <div class="cta-particles" data-astro-cid-vnivfuh2></div> </div> <div class="cta-content" data-astro-cid-vnivfuh2> <h2 class="cta-title" data-astro-cid-vnivfuh2>¿Tienes un proyecto en mente?</h2> <p class="cta-text" data-astro-cid-vnivfuh2>Cuéntanos tu idea y te ayudamos a hacerla realidad con la mejor tecnología</p> </div> <a href="#contacto" class="btn-primary" data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>Hablemos</span> <svg viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-vnivfuh2> <path d="M4 10H16M16 10L11 5M16 10L11 15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-vnivfuh2></path> </svg> </a> </div> </div> </section> `;
}, "C:/Users/C\xE9sar/Desktop/skylink-website/src/components/Features.astro", void 0);

const $$Clients = createComponent(($$result, $$props, $$slots) => {
  const clients = [
    { src: "/logos/logos-clientes/logo-academia.jpg", alt: "Academia" },
    { src: "/logos/logos-clientes/logo-alto-dominicos.jpg", alt: "Alto Dominicos" },
    { src: "/logos/logos-clientes/logo-animalaria.webp", alt: "Animalaria" },
    { src: "/logos/logos-clientes/logo-chile-adicto.svg", alt: "Chile Adicto" },
    { src: "/logos/logos-clientes/logo-euclides.svg", alt: "Euclides" },
    { src: "/logos/logos-clientes/logo-indrasolutions.webp", alt: "Indra Solutions" },
    { src: "/logos/logos-clientes/logo-juste.png", alt: "Juste" },
    { src: "/logos/logos-clientes/logo-klaims.svg", alt: "Klaims" },
    { src: "/logos/logos-clientes/logo-MYH.png", alt: "MYH" },
    { src: "/logos/logos-clientes/logo-navegue.png", alt: "Navegue" },
    { src: "/logos/logos-clientes/logo-santiago-adicto.svg", alt: "Santiago Adicto" },
    { src: "/logos/logos-clientes/logo-stickys.webp", alt: "Stickys" },
    { src: "/logos/logos-clientes/logo-tcrm.png", alt: "TCRM" },
    { src: "/logos/logos-clientes/logo-waw.webp", alt: "WAW" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="clients" id="clientes" data-astro-cid-cktvhckl> <div class="clients-container" data-astro-cid-cktvhckl> <div class="clients-header reveal" data-astro-cid-cktvhckl> <span class="section-tag" data-astro-cid-cktvhckl> <span class="tag-pulse" data-astro-cid-cktvhckl></span>
Clientes
</span> <h2 class="clients-title" data-astro-cid-cktvhckl>
Empresas que <span class="text-gradient" data-astro-cid-cktvhckl>confían</span> en nosotros
</h2> <p class="clients-subtitle" data-astro-cid-cktvhckl>
Hemos tenido el privilegio de trabajar con marcas que nos desafían a dar lo mejor
</p> </div> <div class="clients-marquee reveal reveal-delay-2" data-astro-cid-cktvhckl> <div class="clients-track" data-astro-cid-cktvhckl> ${clients.map((client) => renderTemplate`<div class="client-logo-wrap" data-astro-cid-cktvhckl> <img${addAttribute(client.src, "src")}${addAttribute(client.alt, "alt")} class="client-logo" loading="lazy" data-astro-cid-cktvhckl> </div>`)} ${clients.map((client) => renderTemplate`<div class="client-logo-wrap" data-astro-cid-cktvhckl> <img${addAttribute(client.src, "src")}${addAttribute(client.alt, "alt")} class="client-logo" loading="lazy" data-astro-cid-cktvhckl> </div>`)} </div> </div> <div class="clients-marquee clients-marquee-reverse reveal reveal-delay-3" data-astro-cid-cktvhckl> <div class="clients-track clients-track-reverse" data-astro-cid-cktvhckl> ${[...clients].reverse().map((client) => renderTemplate`<div class="client-logo-wrap" data-astro-cid-cktvhckl> <img${addAttribute(client.src, "src")}${addAttribute(client.alt, "alt")} class="client-logo" loading="lazy" data-astro-cid-cktvhckl> </div>`)} ${[...clients].reverse().map((client) => renderTemplate`<div class="client-logo-wrap" data-astro-cid-cktvhckl> <img${addAttribute(client.src, "src")}${addAttribute(client.alt, "alt")} class="client-logo" loading="lazy" data-astro-cid-cktvhckl> </div>`)} </div> </div> </div> </section> `;
}, "C:/Users/C\xE9sar/Desktop/skylink-website/src/components/Clients.astro", void 0);

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const services = [
    { value: "", label: "Selecciona un servicio" },
    { value: "software", label: "Desarrollo de Software a Medida" },
    { value: "cloud", label: "Arquitectura Cloud" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "mobile", label: "Aplicaciones M\xF3viles" },
    { value: "ia", label: "Herramientas IA" },
    { value: "wordpress", label: "Plugins WordPress" },
    { value: "seo", label: "SEO y Optimizaci\xF3n" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="contact" id="contacto" data-scroll-3d data-astro-cid-xmivup5a> <div class="contact-container" data-astro-cid-xmivup5a> <div class="section-header reveal" data-astro-cid-xmivup5a> <span class="section-tag" data-astro-cid-xmivup5a> <span class="tag-pulse" data-astro-cid-xmivup5a></span>
Contacto
</span> <h2 class="section-title" data-astro-cid-xmivup5a>
¿Listo para <span class="text-gradient" data-astro-cid-xmivup5a>comenzar</span>?
</h2> <p class="section-description" data-astro-cid-xmivup5a>
Cuéntanos sobre tu proyecto y te ayudaremos a convertir tu idea en realidad
</p> </div> <div class="contact-grid" data-astro-cid-xmivup5a> <form class="contact-form glass reveal reveal-delay-1" id="contactForm" data-astro-cid-xmivup5a> <div class="form-group" data-astro-cid-xmivup5a> <label for="name" data-astro-cid-xmivup5a>Nombre completo</label> <input type="text" id="name" name="name" required placeholder="Tu nombre" autocomplete="name" data-astro-cid-xmivup5a> <div class="input-line" data-astro-cid-xmivup5a></div> </div> <div class="form-group" data-astro-cid-xmivup5a> <label for="email" data-astro-cid-xmivup5a>Email</label> <input type="email" id="email" name="email" required placeholder="tu@email.com" autocomplete="email" data-astro-cid-xmivup5a> <div class="input-line" data-astro-cid-xmivup5a></div> </div> <div class="form-group" data-astro-cid-xmivup5a> <label for="service" data-astro-cid-xmivup5a>Servicio de interés</label> <div class="select-shell" data-astro-cid-xmivup5a> <select id="service" name="service" data-astro-cid-xmivup5a> ${services.map((service) => renderTemplate`<option${addAttribute(service.value, "value")} data-astro-cid-xmivup5a>${service.label}</option>`)} </select> <svg class="select-icon" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-xmivup5a> <path d="M5 7.5L10 12.5L15 7.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xmivup5a></path> </svg> </div> </div> <div class="form-group" data-astro-cid-xmivup5a> <label for="message" data-astro-cid-xmivup5a>Mensaje</label> <textarea id="message" name="message" rows="4" placeholder="Cuéntanos sobre tu proyecto..." required data-astro-cid-xmivup5a></textarea> <div class="input-line" data-astro-cid-xmivup5a></div> </div> <button type="submit" class="submit-btn" id="contactSubmitBtn" data-astro-cid-xmivup5a> <span class="submit-label" data-astro-cid-xmivup5a>Enviar Mensaje</span> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" data-astro-cid-xmivup5a> <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xmivup5a></path> </svg> </button> </form> <div class="contact-modal" id="contactSuccessModal" aria-hidden="true" data-astro-cid-xmivup5a> <div class="contact-modal-backdrop" data-close-modal data-astro-cid-xmivup5a></div> <div class="contact-modal-card glass" role="dialog" aria-modal="true" aria-labelledby="contactModalTitle" data-astro-cid-xmivup5a> <div class="modal-icon" data-astro-cid-xmivup5a> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" data-astro-cid-xmivup5a> <path d="M5 13L9 17L19 7" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xmivup5a></path> </svg> </div> <h3 id="contactModalTitle" data-astro-cid-xmivup5a>Mensaje enviado</h3> <p data-astro-cid-xmivup5a>
Recibimos tu solicitud correctamente. Te responderemos pronto desde Skylink.
</p> <button type="button" class="modal-close-btn" id="contactModalCloseBtn" data-astro-cid-xmivup5a>Cerrar</button> </div> </div> <div class="contact-info reveal reveal-delay-2" data-astro-cid-xmivup5a> <div class="info-card glass" data-astro-cid-xmivup5a> <div class="info-icon" data-astro-cid-xmivup5a> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-xmivup5a> <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xmivup5a></path> </svg> </div> <div data-astro-cid-xmivup5a> <h4 data-astro-cid-xmivup5a>Email</h4> <a href="mailto:contacto@valinkgroup.com" class="info-link primary-link" data-astro-cid-xmivup5a>contacto@valinkgroup.com</a> <span class="info-badge" data-astro-cid-xmivup5a>Respuesta en 24 horas</span> </div> </div> <div class="info-card glass" data-astro-cid-xmivup5a> <div class="info-icon" data-astro-cid-xmivup5a> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-xmivup5a> <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.77 20.99 20.48 21 20 21C10.61 21 3 13.39 3 4C3 3.52 3.01 3.23 3.03 3C3.07 2.44 3.52 2 4.08 2H7.08C7.56 2 7.98 2.34 8.07 2.81L8.82 6.81C8.9 7.23 8.74 7.66 8.41 7.93L6.41 9.53C7.7 12.15 9.85 14.3 12.47 15.59L14.07 13.59C14.34 13.26 14.77 13.1 15.19 13.18L19.19 13.93C19.66 14.02 20 14.44 20 14.92V16.92Z" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xmivup5a></path> </svg> </div> <div data-astro-cid-xmivup5a> <h4 data-astro-cid-xmivup5a>Teléfono</h4> <a href="tel:+584125958838" class="info-link primary-link" data-astro-cid-xmivup5a>+58 412-5958838</a> <span class="info-badge" data-astro-cid-xmivup5a>Lun - Vie, 9:00 - 18:00</span> </div> </div> <div class="info-card glass highlight-card" data-astro-cid-xmivup5a> <div class="highlight-glow" data-astro-cid-xmivup5a></div> <div class="info-icon accent" data-astro-cid-xmivup5a> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-xmivup5a> <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-xmivup5a></path> </svg> </div> <div data-astro-cid-xmivup5a> <h4 data-astro-cid-xmivup5a>¿Proyecto urgente?</h4> <p data-astro-cid-xmivup5a>Contáctanos directamente para una consulta inmediata</p> <a href="tel:+584125958838" class="info-link" data-astro-cid-xmivup5a>Llamar Ahora →</a> </div> </div> </div> </div> </div> </section> ${renderScript($$result, "C:/Users/C\xE9sar/Desktop/skylink-website/src/components/Contact.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/C\xE9sar/Desktop/skylink-website/src/components/Contact.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="footer-container" data-astro-cid-sz7xmlte> <!-- Top: Logo centered + nav + social --> <div class="footer-top" data-astro-cid-sz7xmlte> <a href="#" class="footer-logo" data-astro-cid-sz7xmlte> <img src="/logos/S Blanco.png" alt="Skylink" width="24" height="24" style="object-fit:contain" data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte>Skylink</span> </a> <nav class="footer-nav" data-astro-cid-sz7xmlte> <a href="#servicios" data-astro-cid-sz7xmlte>Servicios</a> <a href="#proceso" data-astro-cid-sz7xmlte>Proceso</a> <a href="#nosotros" data-astro-cid-sz7xmlte>Nosotros</a> <a href="#contacto" data-astro-cid-sz7xmlte>Contacto</a> </nav> <a href="https://www.instagram.com/skylink" target="_blank" rel="noopener noreferrer" class="footer-ig" aria-label="Instagram" data-astro-cid-sz7xmlte> <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sz7xmlte> <rect x="2" y="2" width="20" height="20" rx="5" data-astro-cid-sz7xmlte></rect> <circle cx="12" cy="12" r="5" data-astro-cid-sz7xmlte></circle> <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" data-astro-cid-sz7xmlte></circle> </svg> </a> </div> <!-- Divider --> <div class="footer-divider" data-astro-cid-sz7xmlte></div> <!-- Bottom --> <div class="footer-bottom" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; 2026 Skylink. Todos los derechos reservados.</p> </div> </div> </footer> `;
}, "C:/Users/C\xE9sar/Desktop/skylink-website/src/components/Footer.astro", void 0);

const $$CustomCursor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="cursor" id="cursor" data-astro-cid-ofxtmv4x> <div class="cursor-dot" data-astro-cid-ofxtmv4x></div> <div class="cursor-ring" data-astro-cid-ofxtmv4x></div> <div class="cursor-trail" id="cursorTrail" data-astro-cid-ofxtmv4x></div> </div> ${renderScript($$result, "C:/Users/C\xE9sar/Desktop/skylink-website/src/components/CustomCursor.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/C\xE9sar/Desktop/skylink-website/src/components/CustomCursor.astro", void 0);

const $$WhatsAppButton = createComponent(($$result, $$props, $$slots) => {
  const phone = "584125958838";
  const message = "Hola, me gustar\xEDa obtener m\xE1s informaci\xF3n sobre sus servicios de desarrollo de software.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="whatsapp-float interactive" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp" data-astro-cid-iehx2mtc> <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-iehx2mtc> <path d="M16.003 3.2A12.79 12.79 0 003.2 16c0 2.254.588 4.454 1.707 6.396L3.2 28.8l6.595-1.73A12.762 12.762 0 0016.003 28.8 12.79 12.79 0 0028.8 16 12.79 12.79 0 0016.003 3.2zm0 23.41a10.58 10.58 0 01-5.4-1.48l-.387-.23-4.015 1.053 1.07-3.913-.252-.4A10.56 10.56 0 015.39 16c0-5.855 4.76-10.615 10.614-10.615S26.618 10.145 26.618 16s-4.76 10.61-10.615 10.61zm5.82-7.948c-.32-.16-1.887-.93-2.18-1.036-.293-.107-.506-.16-.72.16-.213.319-.826 1.036-1.013 1.25-.186.212-.373.238-.693.079-.32-.16-1.35-.497-2.572-1.586-.95-.847-1.592-1.893-1.779-2.213-.187-.32-.02-.493.14-.652.145-.143.32-.373.48-.56.16-.186.213-.319.32-.532.106-.213.053-.4-.027-.559-.08-.16-.72-1.733-.986-2.373-.26-.623-.524-.539-.72-.549-.186-.008-.4-.01-.613-.01a1.176 1.176 0 00-.853.4c-.293.32-1.12 1.093-1.12 2.666s1.147 3.093 1.307 3.306c.16.213 2.256 3.444 5.468 4.83.764.33 1.36.527 1.825.674.767.244 1.466.21 2.018.127.615-.092 1.887-.771 2.153-1.517.267-.745.267-1.383.187-1.517-.08-.133-.293-.213-.613-.373z" fill="currentColor" data-astro-cid-iehx2mtc></path> </svg> <span class="whatsapp-tooltip" data-astro-cid-iehx2mtc>¿Hablamos?</span> </a> `;
}, "C:/Users/C\xE9sar/Desktop/skylink-website/src/components/WhatsAppButton.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Skylink | Transformando Ideas en Soluciones Digitales" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Preloader", $$Preloader, {})} ${renderComponent($$result2, "CustomCursor", $$CustomCursor, {})} ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Process", $$Process, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Clients", $$Clients, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, {})} ` })}`;
}, "C:/Users/C\xE9sar/Desktop/skylink-website/src/pages/index.astro", void 0);

const $$file = "C:/Users/César/Desktop/skylink-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
