import React from "react";

import Carousel from "./Carousel.jsx";
import BannerCarousel from "./BannerCarousel.jsx";

export default function Home({ onNavigate }) {
  // Imagens do carrossel de pets
  const petImages = [
    {
      src: "/Caramelo1.png",
      alt: "Cão vira-lata caramelo 1",
      aria: "Cão caramelo 1",
    },
    {
      src: "/Caramelo2.png",
      alt: "Cão vira-lata caramelo 2",
      aria: "Cão caramelo 2",
    },
    {
      src: "/Caramelo3.png",
      alt: "Cão vira-lata caramelo 3",
      aria: "Cão caramelo 3",
    },
    {
      src: "/Caramelo4.png",
      alt: "Cão vira-lata caramelo 4",
      aria: "Cão caramelo 4",
    },
    {
      src: "/Caramelo5.png",
      alt: "Cão vira-lata caramelo 5",
      aria: "Cão caramelo 5",
    },
  ];

  return (
    <div className="home-container" id="main-content" style={{ color: "#222" }}>
      {/* Banner Carousel */}
      <BannerCarousel
        banners={[
          {
            content: (
              <div className="banner-content">
                <h2 className="banner-title">Fim de mês tá osso? 🦴</h2>
                <p className="banner-subtitle">
                  Na Meu Caramelo, amor e cuidado pro seu pet nunca ficam pra
                  depois.
                </p>
                <p className="banner-text">
                  Temos as melhores formas de pagamento!
                </p>
              </div>
            ),
          },
          {
            content: (
              <div className="banner-content">
                <h2 className="banner-title">🎉 Promoção Especial!</h2>
                <p className="banner-subtitle">
                  Cadastre 3 pets e ganhe desconto exclusivo em todos os
                  serviços.
                </p>
                <p className="banner-text">
                  Aproveite essa oportunidade única!
                </p>
              </div>
            ),
          },
          {
            className: "banner-with-image",
            content: (
              <>
                <div className="banner-image">
                  <img
                    src="/cao_telefone.png"
                    alt="Cão no telefone"
                    loading="lazy"
                    aria-label="Cão no telefone"
                  />
                </div>
                <div className="banner-content">
                  <h2 className="banner-title">📞 Fale Conosco!</h2>
                  <p className="banner-subtitle">
                    Quer agendar uma consulta, um tratamento ou mesmo encomendar
                    algo para o seu cãozinho?
                  </p>
                  <p className="banner-text">Liga para gente!</p>
                </div>
              </>
            ),
          },
        ]}
        interval={5000}
      />

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Bem-vindo ao Meu Caramelo!</h1>
          <p className="hero-subtitle">
            O melhor pet shop para cuidar dos seus companheiros de quatro patas
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => onNavigate("new")}
            >
              Cadastrar Pet
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => onNavigate("pets")}
            >
              Ver Pets
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="caramelo-carousel">
            <div className="carousel-container">
              <Carousel
                items={petImages}
                interval={3000}
                dotsAriaLabel="Navegação do carrossel de pets"
                renderItem={(item, isActive) => (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`carousel-image${isActive ? " active" : ""}`}
                    loading="lazy"
                    aria-label={item.aria}
                  />
                )}
              />
            </div>
            <p className="carousel-caption">
              Conheça os pets que estão arrasando neste mês!
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Pets Felizes</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Satisfação</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Suporte</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5★</div>
            <div className="stat-label">Avaliação</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="card">
        <h2 className="section-title">
          <span className="section-icon">✨</span>
          Por que escolher o Meu Caramelo?
        </h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🐕</div>
            <h3 className="feature-title">Cadastro Completo</h3>
            <p className="feature-description">
              Mantenha um registro detalhado de todos os seus pets com
              informações importantes
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3 className="feature-title">Cuidado Especial</h3>
            <p className="feature-description">
              Oferecemos o melhor atendimento e carinho personalizado para cada
              amiguinho
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3 className="feature-title">Qualidade Premium</h3>
            <p className="feature-description">
              Produtos e serviços de alta qualidade garantindo o bem-estar dos
              seus pets
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3 className="feature-title">Fácil de Usar</h3>
            <p className="feature-description">
              Interface simples e intuitiva para gerenciar seus pets de forma
              prática
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3 className="feature-title">Seguro</h3>
            <p className="feature-description">
              Seus dados e informações dos pets são protegidos com máxima
              segurança
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💝</div>
            <h3 className="feature-title">Gratuito</h3>
            <p className="feature-description">
              Plataforma completamente gratuita para organizar a vida dos seus
              pets
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2 className="section-title">
          <span className="section-icon">💬</span>O que nossos clientes dizem
        </h2>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "O Meu Caramelo facilitou muito o acompanhamento das vacinas do
              meu cachorro. Recomendo para todos os tutores de cães!"
            </p>
            <div className="testimonial-author">
              <strong>Maria Silva</strong> • Dona do Rex
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "Meu cachorro Thor adora os serviços do Meu Caramelo. Atendimento
              excelente e muito carinho com os cães!"
            </p>
            <div className="testimonial-author">
              <strong>João Santos</strong> • Dono do Thor
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "Finalmente encontrei um lugar onde meu cão é tratado como parte
              da família. Super indico para quem tem cachorro!"
            </p>
            <div className="testimonial-author">
              <strong>Ana Costa</strong> • Dona do Caramelo
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Pronto para começar?</h2>
          <p className="cta-subtitle">
            Cadastre seu primeiro pet e descubra como é fácil organizar a vida
            dos seus companheiros!
          </p>
          <button
            className="btn btn-large btn-primary"
            onClick={() => onNavigate("new")}
          >
            🐾 Cadastrar Meu Primeiro Pet
          </button>
        </div>
      </div>
    </div>
  );
}
