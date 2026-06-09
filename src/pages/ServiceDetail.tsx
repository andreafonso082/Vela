// @ts-nocheck
import { useParams, Link, Navigate } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import { getServiceBySlug, servicesData } from "@/data/servicesData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ServiceDetail = () => {
  const params = useParams({ strict: false }) as { slug?: string };
  const slug = params.slug;
  const service = slug ? getServiceBySlug(slug) : undefined;

  const benefitsAnim = useScrollAnimation();
  const processAnim = useScrollAnimation();
  const faqAnim = useScrollAnimation();

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const appUrl = 'https://agencia-vela.com';
  const canonical = `${appUrl}/services/${service.slug}`;
  const relatedServices = servicesData.filter((s) => s.slug !== service.slug).slice(0, 3);

  // Define unique theme colors for each service
  const getServiceTheme = (slug: string) => {
    switch (slug) {
      case "criacao-de-websites":
        return { gradient: "from-red-600/20 to-primary/20", accent: "text-red-500", bg: "bg-red-500/10" };
      case "seo-google-meu-negocio":
        return { gradient: "from-orange-600/20 to-red-600/20", accent: "text-orange-500", bg: "bg-orange-500/10" };
      case "gestao-de-redes-sociais":
        return { gradient: "from-rose-600/20 to-red-600/20", accent: "text-rose-500", bg: "bg-rose-500/10" };
      case "branding-e-logotipos":
        return { gradient: "from-amber-600/20 to-orange-600/20", accent: "text-amber-500", bg: "bg-amber-500/10" };
      case "google-ads":
        return { gradient: "from-red-600/20 to-primary/20", accent: "text-primary", bg: "bg-primary/10" };
      case "agentes-ia":
        return { gradient: "from-red-500/20 to-rose-500/20", accent: "text-red-400", bg: "bg-red-400/10" };
      default:
        return { gradient: "from-primary/20 to-primary/20", accent: "text-primary", bg: "bg-primary/10" };
    }
  };

  const theme = getServiceTheme(service.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seoDescription,
    provider: {
      "@type": "ProfessionalService",
      name: "Agência Vela",
      legalName: "Agência Vela - Marketing & Tecnologia",
      areaServed: [
        { "@type": "AdministrativeArea", name: "Algarve" },
        { "@type": "AdministrativeArea", name: "Tavira" },
        { "@type": "Country", name: "Portugal" },
      ],
      logo: `${appUrl}/vela-logo.png`,
      address: {
        "@type": "PostalAddress",
        "addressLocality": "Tavira",
        "addressRegion": "Algarve",
        "addressCountry": "PT"
      }
    },
    url: canonical,
    image: `${appUrl}${service.image}`,
    offers: {
      "@type": "Offer",
      "description": "Orçamento personalizado gratuito",
      "availability": "https://schema.org/InStock",
      "areaServed": "PT"
    }
  };

  const navLinks = [
    { label: "Sobre", id: "sobre" },
    { label: "Vantagens", id: "vantagens" },
    { label: "Processo", id: "processo" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{service.seoTitle}</title>
        <meta name="description" content={service.seoDescription} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:type" content="service" />
        <meta property="og:title" content={service.seoTitle} />
        <meta property="og:description" content={service.seoDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${appUrl}/og-image.png`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={`${appUrl}/og-image.png`} />
        <meta property="og:locale" content="pt_PT" />
        <meta name="keywords" content={service.keywords} />
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className={`pt-44 pb-16 relative overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} blur-3xl -z-10 opacity-50`} />
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <nav className="flex items-center gap-4 mb-8 text-sm overflow-x-auto pb-2 scrollbar-none">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                <ArrowLeft size={14} />
                Voltar
              </Link>
              <div className="h-4 w-px bg-white/10 hidden sm:block" />
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                  {service.title}
                </h1>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/quote">
                    <Button size="lg" className="text-base">
                      Pedir Orçamento Gratuito
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="text-base text-white border-white/20 hover:bg-white/10">
                      Falar Connosco
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  title={`${service.title} - Agência Vela`}
                  className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Features */}
      <section id="sobre" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sobre {service.shortTitle}</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                {service.longDescription.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold text-white mb-6">O que garantimos</h3>
              <ul className="space-y-3">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary flex-shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="vantagens" ref={benefitsAnim.elementRef} className="py-20 scroll-mt-24">
        <div
          className={`container mx-auto px-4 transition-all duration-700 ${
            benefitsAnim.isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Vantagens de Escolher a <span className="text-primary font-bold">Agência Vela</span>
              </h2>
              <p className="text-white/60">
                Foco total em resultados e crescimento do seu negócio.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.benefits.map((b, i) => (
                <div
                  key={i}
                  className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-500 group"
                >
                  <div className={`h-12 w-12 rounded-xl ${theme.bg} ${theme.accent} flex items-center justify-center text-xl font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{b.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="processo" ref={processAnim.elementRef} className="py-20 scroll-mt-24">
        <div
          className={`container mx-auto px-4 transition-all duration-700 ${
            processAnim.isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Metodologia de Trabalho</h2>
              <p className="text-white/60">Transparência e eficiência em cada etapa do projeto.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((p, i) => (
                <div key={i} className="relative group">
                  <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 h-full hover:border-primary/20 transition-colors">
                    <div className={`text-6xl font-black ${theme.accent} opacity-5 absolute -top-4 -right-2`}>0{i + 1}</div>
                    <h3 className={`text-lg font-semibold text-white mb-2 relative z-10`}>{p.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed relative z-10">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" ref={faqAnim.elementRef} className="py-20 scroll-mt-24">
        <div
          className={`container mx-auto px-4 transition-all duration-700 ${
            faqAnim.isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Perguntas Frequentes (FAQ)</h2>
              <p className="text-white/60">Tire todas as suas dúvidas sobre o serviço de {service.shortTitle}.</p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {service.faq.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl px-6"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-white hover:no-underline py-5">
                    {f.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 leading-relaxed pb-6">
                    {f.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">Outros serviços</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group bg-card/60 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.12] hover:-translate-y-1 transition-all duration-500"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {s.shortTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{s.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm text-primary font-medium">
                    Saber mais <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Pronto para começar?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Peça o seu orçamento gratuito e sem compromisso. Respondemos em menos de 24 horas.
          </p>
          <Link to="/quote">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              Pedir Orçamento Gratuito
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
