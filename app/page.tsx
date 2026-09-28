import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-content">
              <p className="hero-eyebrow">Personal Trainer & Online Coach</p>

              <h1 className="hero-title">
                Build a stronger
                <span> version of yourself.</span>
              </h1>

              <p className="hero-description">
                Personal training and online coaching built around your goals,
                your lifestyle and your progress.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="button button-primary">
                  Start training
                  <span aria-hidden="true">↗</span>
                </a>

                <a href="#about" className="text-link">
                  Discover my approach
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <Image
                src="/images/bogdan-dovzhenko-hero.webp"
                alt="Bogdan Dovzhenko, personal trainer and online coach"
                fill
                priority
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 48vw"
                className="hero-image"
              />

              <div className="hero-experience">
                <strong>20</strong>
                <span>years in sport</span>
              </div>
            </div>

            <div className="hero-stats">
              <div>
                <strong>20+</strong>
                <span>Years in sport</span>
              </div>

              <div>
                <strong>10+</strong>
                <span>Years bodybuilding</span>
              </div>

              <div>
                <strong>8+</strong>
                <span>Years coaching</span>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="about section">
          <div className="container">
            <div className="about-heading">
              <p className="eyebrow">About me</p>

              <h2 className="section-title">
                Experience built through
                <span> years of discipline.</span>
              </h2>
            </div>

            <div className="about-grid">
              <div className="about-image-wrapper">
                <Image
                  src="/images/bogdan-dovzhenko-about.webp"
                  alt="Bogdan Dovzhenko in the gym"
                  fill
                  sizes="(max-width: 767px) 100vw, 48vw"
                  className="about-image"
                />
              </div>

              <div className="about-content">
                <p className="about-lead">
                  Sport has been part of my life for more than 20 years.
                </p>

                <div className="about-copy">
                  <p>
                    I started training at a young age, exploring different
                    sports and disciplines while learning what my body was
                    capable of. That journey eventually led me to bodybuilding,
                    which has been a major part of my life for the past 10
                    years.
                  </p>

                  <p>
                    For more than 8 years, I&apos;ve been helping people build
                    stronger, healthier bodies through structured training,
                    consistency and an individual approach.
                  </p>

                  <p>
                    After moving from Ukraine to the UK three years ago, I
                    continued doing what I know best — helping people train with
                    purpose and create results they can maintain.
                  </p>
                </div>

                <blockquote className="about-quote">
                  <p>
                    &ldquo;Training should fit your life — not force your life
                    to fit around training.&rdquo;
                  </p>

                  <cite>Bogdan Dovzhenko</cite>
                </blockquote>

                <a href="#services" className="about-link">
                  How I can help you
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
