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
      </main>
    </>
  );
}
