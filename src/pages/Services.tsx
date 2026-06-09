// @ts-nocheck
import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { servicesData } from "@/data/servicesData";

const Services = () => {
  const servicesGrid = useScrollAnimation();
  const appUrl = 'https://agencia-vela.com';

  const services = servicesData.map((s) => ({
    slug: s.slug,
    title: s.title,
    description: s.description,
    image: s.image,
    features: s.features.slice(0, 5),
  }));

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Serviços de Marketing Digital - Agência Vela",
    "description": "Serviços de marketing digital, web design, SEO e branding no Algarve e em todo Portugal",
    "numberOfItems": services.length,
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "url": `${appUrl}/services/${service.slug}`,
        "provider": {
          "@type": "ProfessionalService",
          "name": "Agência Vela",
          "areaServed": [
            { "@type": "AdministrativeArea", "name": "Algarve" },
            { "@type": "AdministrativeArea", "name": "Tavira" },
            { "@type": "Country", "name": "Portugal" }
          ]
        }
      }
    }))
  };

  const canonical = `${appUrl}/services`;

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Serviços | Agência de Marketing Algarve e Empresa de Websites</title>
        <meta name="description" content="Serviços da Agência Vela: Agência de Marketing no Algarve especializada em websites desde 700€, SEO, Redes Sociais e Brading. Empresa que faz sites com resultados." />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Serviços | Agência de Marketing Algarve e Empresa de Websites" />
        <meta property="og:description" content="Especialistas em websites Algarve, SEO e Marketing Digital. Sites a partir de 700€ para pequenos e médios negócios." />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${appUrl}/og-image.png`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={`${appUrl}/og-image.png`} />
        <meta property="og:locale" content="pt_PT" />
        <meta name="keywords" content="agência de marketing, agência de marketing algarve, agência de marketing no algarve, websites algarve, empresa de websites, empresa que faz sites, empresa de sites, marketing algarve, agência criativa, web design algarve, web design tavira, criação de website, SEO, gestão de redes sociais, branding" />
        <script type="application/ld+json">{JSON.stringify(servicesJsonLd)}</script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-44 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Web Design, Branding e <span className="text-primary">Marketing Digital</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Agência profissional de criação de websites, gestão de redes sociais, SEO e Google Meu Negócio com preços acessíveis
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesGrid.elementRef} className="py-20">
        <div className={`container mx-auto px-4 transition-all duration-700 ${servicesGrid.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                description={service.description}
                image={service.image}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interessado nos nossos serviços?
          </h2>
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

export default Services;
