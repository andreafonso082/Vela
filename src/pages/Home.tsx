// @ts-nocheck
import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { Zap, Pen, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Footer from "@/components/Footer";
import TextType from "@/components/TextType";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroVideo from "@/assets/hero-video.mp4";
import websiteImage from "@/assets/service-website.jpg";
import socialImage from "@/assets/service-social.jpg";
import aiImage from "@/assets/service-ai.jpg";
import seoImage from "@/assets/service-seo.jpg";
import brandingImage from "@/assets/service-branding.jpg";
import googleAdsImage from "@/assets/service-google-ads.jpg";
import specialistsBg from "@/assets/specialists-bg.avif";
import CardSwap, { Card } from "@/components/CardSwap";
const Home = () => {
  const appUrl = 'https://agencia-vela.com';
  const servicesSection = useScrollAnimation();
  const pillarsSection = useScrollAnimation();
  const specialistsSection = useScrollAnimation();
  const processSection = useScrollAnimation();
  const processStep1 = useScrollAnimation();
  const processStep2 = useScrollAnimation();
  const processStep3 = useScrollAnimation();
  const processStep4 = useScrollAnimation();
  const stepAnimations = [processStep1, processStep2, processStep3, processStep4];
  const testimonialsSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();
  const processSteps = [{
    step: "Passo 1",
    title: "Primeiro Contacto",
    description: "Seja contactado, contacte ou peça um orçamento"
  }, {
    step: "Passo 2",
    title: "Reunião Online",
    description: "Marque uma reunião online, grátis e sem compromisso"
  }, {
    step: "Passo 3",
    title: "Análise do Negócio",
    description: "Analisamos o seu negócio para avaliar como o iremos ajudar"
  }, {
    step: "Passo 4",
    title: "Sucesso",
    description: "Aplicamos as nossas melhores estratégias e métodos validados e juntos, crescemos o seu negócio como nunca antes!"
  }];
  const services = [{
    slug: "criacao-de-websites",
    title: "Criação de Websites e Web Design",
    description: "Sites profissionais, modernos e responsivos desde 700€",
    image: websiteImage
  }, {
    slug: "seo-google-meu-negocio",
    title: "SEO e Google Meu Negócio",
    description: "Otimização para máxima visibilidade local",
    image: seoImage
  }, {
    slug: "gestao-de-redes-sociais",
    title: "Gestão de Redes Sociais",
    description: "Presença consistente e profissional nas redes",
    image: socialImage
  }, {
    slug: "branding-e-logotipos",
    title: "Branding e Criação de Logotipos",
    description: "Identidade visual moderna e profissional",
    image: brandingImage
  }, {
    slug: "google-ads",
    title: "Campanhas Google Ads",
    description: "Publicidade otimizada para máximo retorno",
    image: googleAdsImage
  }, {
    slug: "agentes-ia",
    title: "Integração de Agentes IA",
    description: "Automatize a comunicação do seu negócio",
    image: aiImage
  }];
  const pillars = [{
    icon: Zap,
    title: "Entrega Rápida",
    description: "Projetos concluídos em tempo recorde sem comprometer a qualidade"
  }, {
    icon: "€",
    title: "Preço Acessível",
    description: "Marketing profissional ao alcance de pequenos negócios"
  }, {
    icon: Pen,
    title: "Web Design Moderno",
    description: "Web design profissional e elegante que destaca a sua marca online"
  }];
  const testimonials = [{
    name: "Paixão Criação",
    role: "Salão Cabeleireiro e Estética",
    content: "A Vela fez um website com a cara do nosso salão, por um preço muito justo e com marcações online!",
    website: "https://paixaocriacao.com"
  }, {
    name: "Ivânia Shiatsu",
    role: "Terapêuta",
    content: "O meu perfil do google não existia sequer, em dois dias fiquei em 9o de 38! Eles realmente sabem o que fazem!",
    website: "https://www.google.com/search?sca_esv=d59444dfc678413a&sxsrf=AE3TifM3lFWUURFob40-Ntz8C-vd0HXTKw:1765892273489&q=Iv%C3%A2nia+Shiatsu&si=AMgyJEs9DArPE9xmb5yVYVjpG4jqWDEKSIpCRSjmm88XZWnGNQSNN-pGzI8TV-PvyK080jNHQ8n-2joJ6VO8XCmmiWU-EsNroved10ls3CZPL1sXR3V2o47-ac_watO4PNoM4ELfgc0y&sa=X&ved=2ahUKEwj_4LCtncKRAxXaKvsDHQYQE_oHegQIKRAB&biw=1920&bih=911&dpr=1"
  }, {
    name: "Pedro Santos",
    role: "Consultor",
    content: "Excelente serviço de SEO. Já apareço nas primeiras pesquisas do Google!",
    website: "https://example.com"
  }];
  return <div className="min-h-screen">
      <Helmet>
        <title>Agência Vela | Agência de Marketing Algarve e Empresa de Websites</title>
        <meta name="description" content="Agência Vela — Agência de Marketing no Algarve especializada em criar websites. Empresa de websites e marketing digital em Tavira com sites desde 700€. SEO e Branding." />
        <link rel="canonical" href={`${appUrl}/`} />
        <meta property="og:title" content="Agência Vela | Agência de Marketing Algarve e Empresa de Websites" />
        <meta property="og:description" content="Agência de Marketing no Algarve especializada em criação de websites e marketing digital. Sites desde 700€ com SEO e gestão de redes sociais." />
        <meta property="og:url" content={`${appUrl}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${appUrl}/og-image.png`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={`${appUrl}/og-image.png`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "name": "Agência Vela - Agência de Marketing e Empresa de Websites",
              "url": `${appUrl}/`,
              "logo": `${appUrl}/og-image.png`,
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+351-968-334-043",
                "contactType": "customer service",
                "areaServed": "PT",
                "availableLanguage": ["Portuguese"]
              }
            },
            {
              "@type": "LocalBusiness",
              "name": "Agência Vela - Empresa que faz sites e Marketing Algarve",
              "image": `${appUrl}/og-image.png`,
              "url": `${appUrl}/`,
              "telephone": "+351-968-334-043",
              "priceRange": "€€",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tavira",
                "addressRegion": "Algarve",
                "addressCountry": "PT"
              }
            }
          ]
        })}</script>
        <meta name="keywords" content="agência de marketing, agência de marketing algarve, agência de marketing no algarve, websites algarve, empresa de websites, empresa que faz sites, empresa de sites, marketing algarve, agência criativa, marketing digital, web design, criação de websites, SEO, google meu negócio, gestão de redes sociais, branding, tavira" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-24 pb-12">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/65" />
        </div>
        
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1] min-h-[1.2em] text-balance">
            <span className="sr-only">
              Bem-vindo à Vela! A tua agência de marketing e webdesign no Algarve e todo Portugal!
            </span>
            <span aria-hidden="true">
              <TextType
                text={[
                  "Bem-vindo à Vela!",
                  "Marketing e Webdesign no Algarve e...",
                  "todo Portugal!"
                ]}
                typingSpeed={75}
                pauseDuration={2000}
                deletingSpeed={50}
                showCursor
                cursorCharacter="|"
                cursorBlinkDuration={0.5}
                className="text-white"
                highlightWords={["Vela!", "Algarve e...", "Portugal!"]}
                highlightClassName="text-primary"
              />
            </span>
          </h1>
          <p className="text-base md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed font-normal text-balance px-2">
            Especialistas em criação de websites, web design, SEO, Google Meu Negócio e gestão de redes sociais. Sites desde <span className="text-primary font-bold">700€</span>. Marketing acessível profissional para pequenos negócios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/quote" className="w-full sm:w-auto">
              <Button size="lg" className="text-sm sm:text-lg px-6 sm:px-10 py-4 sm:py-7 w-full sm:w-auto shadow-2xl shadow-primary/20">
                Peça um orçamento
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="text-sm sm:text-lg px-6 sm:px-10 py-4 sm:py-7 text-white border-white/20 hover:bg-white/10 w-full sm:w-auto backdrop-blur-sm">
                Fale connosco
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section ref={servicesSection.elementRef} className="py-20 overflow-hidden">
        <div className={`container mx-auto px-4 transition-all duration-700 ${servicesSection.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            {/* Left: Title + CTA */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Web Design e Serviços de Marketing Digital
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                Agência especializada em criação de websites, branding, gestão de redes sociais, SEO, Google Ads e integração de IA para potenciar o seu negócio.
              </p>
              <div className="hidden lg:block">
                <Link to="/services">
                  <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                    Ver mais
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative h-[600px] hidden lg:block">
              <CardSwap width={560} height={420} cardDistance={70} verticalDistance={80} delay={3500} pauseOnHover>
                {services.map((service, index) => (
                  <Card key={index} className="cursor-pointer">
                    <Link to={`/services/${service.slug}`} className="block h-full w-full">
                      <div className="relative h-1/2 overflow-hidden">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </Link>
                  </Card>
                ))}
              </CardSwap>
            </div>

            {/* Mobile Carousel */}
            <div className="lg:hidden mt-12">
              <div className="flex overflow-x-auto gap-5 pb-10 snap-x snap-mandatory scrollbar-none -mx-6 px-6">
                {services.map((service, index) => (
                  <Link 
                    key={index} 
                    to={`/services/${service.slug}`} 
                    className="shrink-0 w-[300px] bg-card/40 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl snap-center transition-transform hover:scale-[1.02]"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 leading-tight">{service.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="flex justify-center px-4">
                <Link to="/services" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground w-full py-7 text-lg group">
                    Ver todos os serviços
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Vela */}
      <section ref={pillarsSection.elementRef} className="py-20">
        <div className={`container mx-auto px-4 transition-all duration-700 ${pillarsSection.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Porquê escolher a Vela
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className="group text-center p-8 sm:p-10 rounded-3xl bg-card/40 backdrop-blur-2xl border border-white/10 shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-500 ease-out"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/15 mb-6 group-hover:scale-110 transition-transform duration-500">
                  {typeof pillar.icon === 'string' ? (
                    <span className="text-primary text-3xl font-semibold">{pillar.icon}</span>
                  ) : (
                    <pillar.icon size={30} className="text-primary" />
                  )}
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{pillar.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/quote" className="inline-block w-full sm:w-auto">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                Peça o seu orçamento gratuito
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section ref={specialistsSection.elementRef} className="relative py-20 text-white">
        <div className="absolute inset-0 z-0" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${specialistsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
        <div className={`container mx-auto px-4 text-center relative z-10 transition-all duration-700 ${specialistsSection.isVisible ? 'animate-scale-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Agência de Marketing em Tavira e Algarve
          </h2>
          <p className="text-xl text-secondary-foreground/80 max-w-3xl mx-auto mb-8">
            Especialistas digitais dedicados ao crescimento e impulsão de pequenos negócios. Oferecemos automatização, otimização de negócio e estratégias personalizadas de marketing acessível que cabem no seu orçamento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/quote" className="w-full sm:w-auto">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground w-full sm:w-auto">
                Peça um orçamento grátis
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/about" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary w-full sm:w-auto">
                Conheça-nos melhor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Como Trabalhamos */}
      <section ref={processSection.elementRef} className="pt-12 pb-40">
        <div className={`container mx-auto px-4 transition-all duration-700 ${processSection.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="text-center mb-28">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Como Trabalhamos</h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary/50"></div>
              <span className="text-primary font-semibold">•</span>
              <div className="h-px w-12 bg-primary/50"></div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto relative md:py-[100px]">
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-screen h-0.5 bg-primary/30 hidden md:block">
              <div className={`h-full bg-primary transition-all duration-[2000ms] ease-out ${processStep1.isVisible ? 'w-full' : 'w-0'}`} />
            </div>
            
            <div className="flex flex-col gap-8 md:hidden relative">
              <div className="absolute left-[31px] top-4 bottom-4 w-0.5 bg-primary/20 z-0"></div>
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative z-10 flex gap-6 items-start transition-all duration-700 ${processSection.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} 
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-card border border-white/10 flex items-center justify-center shadow-xl text-primary font-bold text-xl relative">
                    <div className="absolute -inset-1 bg-primary/10 blur rounded-2xl -z-10"></div>
                    {index + 1}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:grid md:grid-cols-4 gap-4">
              {processSteps.map((step, index) => <div key={index} ref={stepAnimations[index].elementRef} className="text-center relative">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary z-10" />
                  <div className={`absolute left-1/2 -translate-x-1/2 w-full transition-all duration-700 ease-out ${index % 2 === 0 ? 'bottom-1/2 pb-6' : 'top-1/2 pt-6'} ${stepAnimations[index].isVisible ? 'opacity-100 translate-y-0' : `opacity-0 ${index % 2 === 0 ? '-translate-y-8' : 'translate-y-8'}`}`} style={{
                transitionDelay: `${index * 500}ms`
              }}>
                    <span className="text-sm font-semibold text-primary mb-2 block">{step.step}</span>
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm px-2">{step.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsSection.elementRef} className="py-20">
        <div className={`container mx-auto px-4 transition-all duration-700 ${testimonialsSection.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              O que dizem os nossos clientes
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Carousel opts={{
            align: "start",
            loop: true
          }} className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => <CarouselItem key={index} className="basis-full lg:basis-1/1">
                    <div className="bg-card/40 backdrop-blur-2xl border border-white/10 p-8 sm:p-10 rounded-3xl shadow-xl h-full mx-1 sm:mx-2 flex flex-col">
                      <Quote className="text-primary/80 mb-5" size={36} />
                      <p className="text-foreground/90 mb-8 text-lg leading-relaxed font-light">"{testimonial.content}"</p>
                      <div className="flex items-end justify-between gap-4 mt-auto pt-4 border-t border-white/[0.06]">
                        <div>
                          <p className="font-semibold tracking-tight text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground mt-0.5">{testimonial.role}</p>
                        </div>
                        <a href={testimonial.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center gap-1 whitespace-nowrap transition-colors">
                          Visitar site <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious className="bg-card border-border text-foreground hover:bg-accent" />
              <CarouselNext className="bg-card border-border text-foreground hover:bg-accent" />
            </Carousel>
          </div>

          <div className="text-center mt-10">
            <a href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-primary hover:text-primary-foreground">
                Deixa a tua avaliação
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaSection.elementRef} className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-radial opacity-60" />
        <div className={`container mx-auto px-4 text-center relative z-10 transition-all duration-700 ${ctaSection.isVisible ? 'animate-scale-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 text-balance">
            Pronto para começar?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Peça o seu orçamento gratuito e sem compromisso. Respondemos em menos de 24 horas.
          </p>
          <Link to="/quote" className="inline-block w-full sm:w-auto">
            <Button size="lg" className="bg-white text-primary hover:bg-white/95 text-base px-8 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)] w-full sm:w-auto">
              Pedir Orçamento Gratuito
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Home;