"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Compass,
  DollarSign,
  Factory,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MoveUpRight,
  PanelsTopLeft,
  Phone,
  Plus,
  Quote,
  Ruler,
  Truck,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";

const whatsapp =
  "https://wa.me/50768272867?text=Hola%2C%20vi%20la%20p%C3%A1gina%20de%20CONCREBOX%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20casas%20modulares.";

function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" />
    </svg>
  );
}

const navItems = [
  ["Inicio", "#inicio"],
  ["Preguntas frecuentes", "#faq"],
  ["Beneficios", "#beneficios"],
  ["Modelos", "#modelos"],
  ["Proceso", "#proceso"],
  ["Inversión", "#inversion"],
  ["Contacto", "#contacto"],
];

const benefits = [
  {
    icon: Clock3,
    title: "Menos tiempo de construcción",
    text: "Procesos paralelos en planta y sitio que hacen avanzar tu proyecto con precisión.",
  },
  {
    icon: DollarSign,
    title: "Mayor control de costos",
    text: "Planificación, materiales y alcance definidos para reducir imprevistos en obra.",
  },
  {
    icon: Ruler,
    title: "Diseño personalizado",
    text: "Distribución, acabados y carácter arquitectónico creados alrededor de tu idea.",
  },
  {
    icon: Factory,
    title: "Fabricación en planta",
    text: "Un entorno controlado que mejora la consistencia, la supervisión y los acabados.",
  },
  {
    icon: Truck,
    title: "Casas transportables",
    text: "Módulos concebidos para trasladarse e instalarse eficientemente en el terreno.",
  },
  {
    icon: MoveUpRight,
    title: "Ideal para inversión y Airbnb",
    text: "Una solución atractiva para crear experiencias memorables y activos rentables.",
  },
];

const models = [
  {
    name: "Modelo Compacto",
    eyebrow: "Esencial",
    image: "/images/compact.png",
    text: "Un refugio eficiente y sofisticado para parejas, huéspedes o escapadas privadas.",
  },
  {
    name: "Modelo Familiar",
    eyebrow: "Versátil",
    image: "/images/family.png",
    text: "Espacios amplios y conectados para vivir con comodidad, luz y naturaleza.",
  },
  {
    name: "Modelo Premium",
    eyebrow: "Signature",
    image: "/images/premium.png",
    text: "Arquitectura modular de autor con mayor escala, acabados y presencia.",
  },
  {
    name: "Modelo Inversión",
    eyebrow: "Hospitality",
    image: "/images/investment.png",
    text: "Un concepto repetible para Airbnb, glamping y destinos de alto valor.",
  },
];

const process = [
  ["01", "Asesoría", "Entendemos tu visión, terreno y objetivo."],
  ["02", "Diseño personalizado", "Definimos espacios, materialidad y alcance."],
  ["03", "Fabricación en planta", "Construimos bajo condiciones controladas."],
  ["04", "Transporte", "Coordinamos la logística hasta el sitio."],
  ["05", "Instalación", "Posicionamos y conectamos cada módulo."],
  ["06", "Entrega final", "Revisamos los detalles y entregamos tu espacio."],
];

const gallery = [
  {
    src: "/images/hero.png",
    title: "Residencia tropical",
    className: "gallery-item--wide",
  },
  {
    src: "/images/interior.png",
    title: "Interior a medida",
    className: "gallery-item--tall",
  },
  {
    src: "/images/installation.png",
    title: "Instalación en sitio",
    className: "",
  },
  {
    src: "/images/premium.png",
    title: "Casa frente al mar",
    className: "",
  },
  {
    src: "/images/investment.png",
    title: "Retiro de inversión",
    className: "gallery-item--wide",
  },
];

const brandEditorials = [
  {
    src: "/images/brand-editorial-01.jpg",
    title: "Tu inversión ideal",
    className: "",
  },
  {
    src: "/images/brand-editorial-02.jpg",
    title: "Precisión modular",
    className: "",
  },
  {
    src: "/images/brand-editorial-03.jpg",
    title: "Lujo inteligente",
    className: "",
  },
  {
    src: "/images/brand-editorial-04.jpg",
    title: "Inversión frente al paraíso",
    className: "",
  },
  {
    src: "/images/brand-editorial-05.jpg",
    title: "Ideal para Airbnb",
    className: "",
  },
  {
    src: "/images/terrain-wide.jpg",
    title: "Pensada para tu terreno",
    className: "",
  },
];

const faqs = [
  [
    "¿Las casas son transportables?",
    "Sí. Nuestro sistema se diseña desde el inicio considerando fabricación, transporte e instalación. La viabilidad final depende del modelo, el acceso y las condiciones del terreno.",
  ],
  [
    "¿Puedo personalizar el diseño?",
    "Sí. Adaptamos distribución, dimensiones, fachadas, materiales y acabados para responder a tu estilo de vida, terreno y presupuesto.",
  ],
  [
    "¿Cuánto tarda el proceso?",
    "El plazo varía según el tamaño, nivel de personalización, permisos y condiciones del sitio. Tras conocer tu proyecto, preparamos una ruta de trabajo clara.",
  ],
  [
    "¿Puedo usarla para Airbnb?",
    "Sí. Podemos diseñar unidades enfocadas en privacidad, experiencia del huésped, eficiencia operativa y atractivo fotográfico.",
  ],
  [
    "¿Dónde están ubicados?",
    "Estamos en Parque Industrial Tocumen Storage, Ciudad de Panamá, Panamá.",
  ],
  [
    "¿Trabajan fuera de Panamá?",
    "Evaluamos cada proyecto según destino, logística, normativas y accesibilidad. Escríbenos para revisar la viabilidad de tu ubicación.",
  ],
];

function WhatsAppButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`button button--gold ${className}`}
    >
      <span>{children}</span>
      <ArrowRight size={17} strokeWidth={1.7} />
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <Reveal className={`section-heading ${light ? "section-heading--light" : ""}`}>
      <span className="eyebrow">
        <span />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}

export function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<(typeof gallery)[number] | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.86], [1, 0.2]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox || menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox, menuOpen]);

  return (
    <main>
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <a
          href="#inicio"
          aria-label="CONCREBOX PTY, inicio"
        >
          <Logo />
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map(([label, href]) => (
            <a
              href={href}
              key={label}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          className="nav-cta"
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          Cotizar ahora <ArrowRight size={15} />
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
        >
          <Menu />
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mobile-menu__top">
              <Logo />
              <button onClick={() => setMenuOpen(false)} aria-label="Cerrar menú">
                <X />
              </button>
            </div>
            <nav>
              {navItems.map(([label, href], index) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span>0{index + 1}</span>
                  {label}
                </motion.a>
              ))}
            </nav>
            <WhatsAppButton>Empezar mi proyecto</WhatsAppButton>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="inicio" ref={heroRef} className="hero">
        <motion.div className="hero__image" style={{ y: heroY, opacity: heroOpacity }}>
          <Image
            src="/images/hero.png"
            alt="Casa modular de lujo CONCREBOX rodeada de naturaleza tropical"
            fill
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="hero__overlay" />
        <div className="hero__grain" />
        <div className="hero__content">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hero__kicker"
          >
            Arquitectura modular · Panamá
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            Tu casa modular
            <br />
            está más cerca de
            <br />
            lo que imaginas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42 }}
          >
            Diseñamos y construimos casas modulares personalizadas con eficiencia,
            sostenibilidad y arquitectura moderna.
          </motion.p>
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <WhatsAppButton>Cotizar mi proyecto</WhatsAppButton>
            <a
              className="button button--ghost"
              href="#modelos"
            >
              Ver modelos <ArrowDown size={17} />
            </a>
          </motion.div>
        </div>
        <div className="hero__facts">
          {[
            "100% transportables",
            "Fabricadas en planta",
            "Sistema innovador",
            "Instalación eficiente",
          ].map((fact, index) => (
            <motion.div
              key={fact}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.08 }}
            >
              <Check size={16} /> {fact}
            </motion.div>
          ))}
        </div>
        <div className="hero__scroll">
          <span>Descubrir</span>
          <i />
        </div>
      </section>

      <section id="beneficios" className="benefits section section--light">
        <div className="container">
          <SectionHeading
            eyebrow="Una forma distinta de construir"
            title="Construcción inteligente para vivir o invertir"
            text="Más control, mejor diseño y un proceso pensado para transformar tu terreno en una oportunidad."
          />
          <div className="benefits-grid">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Reveal key={benefit.title} delay={index * 0.055}>
                  <article className="benefit-card">
                    <span className="benefit-card__number">0{index + 1}</span>
                    <Icon size={27} strokeWidth={1.35} />
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                    <span className="benefit-card__line" />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="manifesto">
        <div className="container manifesto__inner">
          <Reveal className="manifesto__label">
            <Compass size={20} strokeWidth={1.4} />
            <span>Diseño que se mueve contigo</span>
          </Reveal>
          <Reveal className="manifesto__quote" delay={0.1}>
            <p>
              No construimos cajas.
              <br />
              <em>Diseñamos posibilidades.</em>
            </p>
          </Reveal>
          <Reveal className="manifesto__copy" delay={0.2}>
            <p>
              Cada proyecto CONCREBOX nace de una conversación y se convierte en
              una arquitectura precisa, transportable y profundamente personal.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="system section">
        <div className="system__image-wrap">
          <Image
            src="/images/system.png"
            alt="Sistema estructural modular de precisión CONCREBOX"
            fill
            sizes="(max-width: 900px) 100vw, 52vw"
          />
          <div className="system__image-label">
            <span>Precisión en planta</span>
            <PanelsTopLeft size={19} />
          </div>
        </div>
        <div className="system__content">
          <SectionHeading
            eyebrow="Ingeniería + arquitectura"
            title="Sistema constructivo innovador"
            text="Utilizamos paneles modulares de alta precisión que permiten reducir tiempos, optimizar costos y mantener un alto estándar de calidad."
            light
          />
          <div className="system__metrics">
            {[
              ["01", "Entorno controlado", "Fabricación protegida de las variables del sitio."],
              ["02", "Calidad por etapas", "Supervisión ordenada de estructura y acabados."],
              ["03", "Llegar e instalar", "Logística coordinada para una ejecución eficiente."],
            ].map(([number, title, text]) => (
              <Reveal key={number} className="metric">
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <WhatsAppButton>Conocer el sistema</WhatsAppButton>
          </Reveal>
        </div>
      </section>

      <section id="modelos" className="models section section--light">
        <div className="container">
          <div className="models__heading">
            <SectionHeading
              eyebrow="Catálogo adaptable"
              title="Modelos de casas modulares"
              text="Cuatro puntos de partida. Infinitas formas de hacerlos tuyos."
            />
            <Reveal className="models__note">
              Todos nuestros modelos pueden adaptarse a tu terreno, programa y
              lenguaje arquitectónico.
            </Reveal>
          </div>
          <div className="models-grid">
            {models.map((model, index) => (
              <Reveal key={model.name} delay={index * 0.07}>
                <article className="model-card">
                  <div className="model-card__image">
                    <Image
                      src={model.image}
                      alt={model.name}
                      fill
                      sizes="(max-width: 700px) 100vw, 50vw"
                    />
                    <span>{model.eyebrow}</span>
                  </div>
                  <div className="model-card__body">
                    <span>0{index + 1}</span>
                    <div>
                      <h3>{model.name}</h3>
                      <p>{model.text}</p>
                    </div>
                    <a
                      href={whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Consultar ${model.name} por WhatsApp`}
                    >
                      <ArrowRight />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="process section">
        <div className="container">
          <SectionHeading
            eyebrow="Un proceso claro"
            title="De la idea a tu casa"
            text="Te acompañamos desde la primera conversación hasta el momento de abrir la puerta."
            light
          />
          <div className="process-line">
            {process.map(([number, title, text], index) => (
              <Reveal key={number} className="process-step" delay={index * 0.06}>
                <div className="process-step__dot">
                  <span>{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="process__cta">
            <span>Tu proyecto puede comenzar hoy.</span>
            <WhatsAppButton>Agendar una asesoría</WhatsAppButton>
          </Reveal>
        </div>
      </section>

      <section id="inversion" className="investment">
        <div className="investment__image">
          <Image
            src="/images/investment.png"
            alt="Conjunto de casas modulares para inversión y Airbnb"
            fill
            sizes="100vw"
          />
        </div>
        <div className="investment__overlay" />
        <div className="container investment__content">
          <Reveal className="investment__panel">
            <span className="eyebrow">
              <span />
              Inversión modular
            </span>
            <h2>Diseños que generan ingresos</h2>
            <p>
              Creamos espacios que combinan una experiencia memorable con una
              operación eficiente y un alto atractivo visual.
            </p>
            <div className="investment__uses">
              {[
                "Airbnb",
                "Glamping",
                "Alquiler vacacional",
                "Fincas",
                "Terrenos familiares",
                "Inversión inmobiliaria",
              ].map((item) => (
                <span key={item}>
                  <Plus size={14} /> {item}
                </span>
              ))}
            </div>
            <WhatsAppButton>Quiero invertir</WhatsAppButton>
          </Reveal>
        </div>
      </section>

      <section className="brand-stories section">
        <div className="container">
          <div className="brand-stories__heading">
            <SectionHeading
              eyebrow="Visión CONCREBOX"
              title="Una idea. Muchos destinos."
              text="Vivienda, descanso o inversión: la arquitectura modular se adapta a la oportunidad que imaginas."
              light
            />
            <Reveal className="brand-stories__aside">
              <span>Diseño real para el trópico</span>
              <p>
                Una colección de conceptos de CONCREBOX creados para terrenos,
                paisajes y nuevas formas de generar valor.
              </p>
            </Reveal>
          </div>
          <div className="brand-stories__grid">
            {brandEditorials.map((item, index) => (
              <Reveal
                key={item.src}
                className="brand-story"
                delay={(index % 3) * 0.06}
              >
                <button onClick={() => setLightbox(item)}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 700px) 82vw, 33vw"
                  />
                  <span className="brand-story__index">0{index + 1}</span>
                  <span className="brand-story__title">{item.title}</span>
                  <span className="brand-story__view">
                    Ampliar <Plus size={14} />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
          <Reveal className="brand-stories__footer">
            <p>
              ¿Cuál de estas posibilidades se parece más a lo que tienes en mente?
            </p>
            <WhatsAppButton>Conversemos sobre tu idea</WhatsAppButton>
          </Reveal>
        </div>
      </section>

      <section className="gallery section section--light">
        <div className="container">
          <div className="gallery__top">
            <SectionHeading
              eyebrow="Arquitectura que inspira"
              title="Proyectos e inspiración"
              text="Una mirada a las posibilidades de vivir, recibir e invertir mejor."
            />
            <Reveal>
              <a
                href="https://www.instagram.com/concrebox_pty/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                <InstagramIcon size={17} /> Seguir en Instagram <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <Reveal
                key={item.title}
                className={`gallery-item ${item.className}`}
                delay={index * 0.05}
              >
                <button onClick={() => setLightbox(item)}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 720px) 100vw, 50vw"
                  />
                  <span>{item.title}</span>
                  <i>
                    <Plus size={22} />
                  </i>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="lightbox__close"
              onClick={() => setLightbox(null)}
              aria-label="Cerrar imagen"
            >
              <X />
            </button>
            <motion.div
              className="lightbox__image"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image src={lightbox.src} alt={lightbox.title} fill sizes="95vw" />
              <span>{lightbox.title}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="testimonials section">
        <div className="container">
          <SectionHeading
            eyebrow="La experiencia CONCREBOX"
            title="Espacios que cambian la forma de vivir"
            light
          />
          <div className="testimonial-grid">
            {[
              [
                "Entendieron la idea desde el primer día y la convirtieron en un proyecto mucho más claro, funcional y especial.",
                "Familia residencial",
              ],
              [
                "Buscábamos una unidad distinta para renta vacacional. El enfoque modular nos dio una ruta concreta para invertir.",
                "Proyecto de inversión",
              ],
              [
                "El nivel de diseño y la posibilidad de personalizar cada detalle hicieron que el proyecto se sintiera realmente nuestro.",
                "Casa de descanso",
              ],
            ].map(([quote, author], index) => (
              <Reveal key={author} className="testimonial" delay={index * 0.08}>
                <Quote size={28} strokeWidth={1.2} />
                <p>“{quote}”</p>
                <div>
                  <span>0{index + 1}</span>
                  <strong>{author}</strong>
                </div>
                <small>Testimonio de ejemplo</small>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="faq section section--light">
        <div className="container faq__inner">
          <div className="faq__intro">
            <SectionHeading
              eyebrow="Antes de comenzar"
              title="Preguntas frecuentes"
              text="Estas son algunas de las dudas que suelen aparecer al pensar en una casa modular."
            />
            <Reveal>
              <div className="faq__contact">
                <MessageCircle size={22} />
                <p>
                  ¿Tienes otra pregunta?
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hablemos por WhatsApp
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>
                  <span>0{index + 1}</span>
                  {question}
                  <ChevronDown size={20} />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="contacto" className="contact section">
        <div className="container">
          <div className="contact__grid">
            <div className="contact__content">
              <SectionHeading
                eyebrow="El primer paso"
                title="Hablemos de tu proyecto"
                text="Cuéntanos qué quieres construir, dónde y para qué. Nosotros te ayudamos a convertirlo en una ruta clara."
                light
              />
              <Reveal className="contact__actions">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-action contact-action--primary"
                >
                  <MessageCircle />
                  <div>
                    <span>WhatsApp</span>
                    <strong>+507 6827-2867</strong>
                  </div>
                  <ArrowRight />
                </a>
                <a
                  href="https://www.instagram.com/concrebox_pty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-action"
                >
                  <InstagramIcon />
                  <div>
                    <span>Instagram</span>
                    <strong>@concrebox_pty</strong>
                  </div>
                  <ArrowRight />
                </a>
                <a
                  href="mailto:concreboxpty@hotmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-action"
                >
                  <Mail />
                  <div>
                    <span>Correo</span>
                    <strong>concreboxpty@hotmail.com</strong>
                  </div>
                  <ArrowRight />
                </a>
              </Reveal>
            </div>
            <Reveal className="map-card" delay={0.15}>
              <div className="map-card__grid" />
              <div className="map-card__route route-one" />
              <div className="map-card__route route-two" />
              <div className="map-card__marker">
                <span>
                  <MapPin />
                </span>
                <div>
                  <strong>CONCREBOX PTY</strong>
                  <small>Parque Industrial Tocumen Storage</small>
                </div>
              </div>
              <div className="map-card__meta">
                <span>Panamá</span>
                <span>09.0699° N · 79.3835° W</span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Parque+Industrial+Tocumen+Storage+Panama"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir ubicación <MoveUpRight size={16} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div>
              <Logo />
              <p>
                Arquitectura modular personalizada
                <br />
                para vivir, vacacionar e invertir.
              </p>
            </div>
            <div className="footer__statement">
              <span>Tu próximo espacio comienza con una conversación.</span>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Escribir por WhatsApp <ArrowRight />
              </a>
            </div>
          </div>
          <div className="footer__middle">
            <div>
              <span>Explorar</span>
              {navItems.slice(0, 6).map(([label, href]) => (
                <a
                  href={href}
                  key={label}
                >
                  {label}
                </a>
              ))}
            </div>
            <div>
              <span>Contacto</span>
              <a
                href="tel:+50768272867"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone size={14} /> +507 6827-2867
              </a>
              <a
                href="mailto:concreboxpty@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={14} /> Correo
              </a>
              <a
                href="https://www.instagram.com/concrebox_pty/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon size={14} /> Instagram
              </a>
            </div>
            <div>
              <span>Ubicación</span>
              <p>
                Parque Industrial Tocumen Storage
                <br />
                Panama City, Panamá
              </p>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} CONCREBOX PTY</span>
            <span>Construcción modular · Panamá</span>
            <a
              href="#inicio"
            >
              Volver arriba ↑
            </a>
          </div>
        </div>
      </footer>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Contactar a CONCREBOX por WhatsApp"
      >
        <MessageCircle />
        <span>Hablemos</span>
      </a>
    </main>
  );
}
