import Image from "next/image";
import Header from "@/components/Header";
import SocialMenu from "@/components/SocialMenu";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
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

        {/* ABOUT */}
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

        {/* GOALS */}
        <section className="goals section" aria-labelledby="goals-title">
          <div className="container">
            <div className="goals-heading">
              <p className="eyebrow">Your goals</p>

              <h2 id="goals-title" className="section-title">
                What can we
                <span> work on?</span>
              </h2>

              <p className="goals-intro">
                No two people start from the same place. Your training should
                reflect your goals, experience and lifestyle.
              </p>
            </div>

            <div className="goals-grid">
              <article className="goal-card">
                <div className="goal-card-top">
                  <span className="goal-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <div>
                  <h3>Lose weight</h3>

                  <p>
                    Build sustainable habits, improve your fitness and reduce
                    body fat without extreme routines.
                  </p>
                </div>
              </article>

              <article className="goal-card">
                <div className="goal-card-top">
                  <span className="goal-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <div>
                  <h3>Build muscle</h3>

                  <p>
                    Follow structured, progressive training designed to help you
                    gain muscle and develop your physique.
                  </p>
                </div>
              </article>

              <article className="goal-card">
                <div className="goal-card-top">
                  <span className="goal-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <div>
                  <h3>Get stronger</h3>

                  <p>
                    Improve your technique, increase strength and train with a
                    clear progression instead of guessing.
                  </p>
                </div>
              </article>

              <article className="goal-card">
                <div className="goal-card-top">
                  <span className="goal-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <div>
                  <h3>Feel healthier</h3>

                  <p>
                    Move better, build confidence and create a training routine
                    that supports your everyday life.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="services section">
          <div className="container">
            <div className="services-heading">
              <p className="services-eyebrow">Services</p>

              <h2 className="services-title">
                Coaching built
                <span> around you.</span>
              </h2>

              <p className="services-intro">
                Choose the level of support that works for you — from personal
                sessions to fully structured online coaching.
              </p>
            </div>

            <div className="services-list">
              <article className="service-item">
                <div className="service-main">
                  <h3>Personal Training</h3>

                  <p>
                    One-to-one sessions focused on your goals, technique and
                    progression, with every workout adapted to your current
                    level.
                  </p>

                  <ul className="service-features">
                    <li>1-to-1 coaching</li>
                    <li>Individual training approach</li>
                    <li>Technique guidance</li>
                    <li>Progressive training</li>
                  </ul>
                </div>

                <a href="#contact" className="service-link">
                  Enquire
                  <span aria-hidden="true">↗</span>
                </a>
              </article>

              <article className="service-item">
                <div className="service-main">
                  <h3>Online Coaching</h3>

                  <p>
                    Train wherever you are with personalised guidance, structure
                    and ongoing support to keep you moving towards your goals.
                  </p>

                  <ul className="service-features">
                    <li>Personalised programme</li>
                    <li>Online support</li>
                    <li>Progress tracking</li>
                    <li>Programme adjustments</li>
                  </ul>
                </div>

                <a href="#contact" className="service-link">
                  Enquire
                  <span aria-hidden="true">↗</span>
                </a>
              </article>

              <article className="service-item">
                <div className="service-main">
                  <h3>Training Programme</h3>

                  <p>
                    A structured monthly training plan created around your
                    goals, experience, schedule and available equipment.
                  </p>

                  <ul className="service-features">
                    <li>4-week programme</li>
                    <li>Exercise selection</li>
                    <li>Sets &amp; repetitions</li>
                    <li>Progression structure</li>
                  </ul>
                </div>

                <a href="#contact" className="service-link">
                  Enquire
                  <span aria-hidden="true">↗</span>
                </a>
              </article>

              <article className="service-item">
                <div className="service-main">
                  <h3>Nutrition Plan</h3>

                  <p>
                    A practical monthly nutrition plan designed around your
                    goals, routine and food preferences.
                  </p>

                  <ul className="service-features">
                    <li>4-week nutrition plan</li>
                    <li>Goal-based structure</li>
                    <li>Practical meal guidance</li>
                    <li>Training + nutrition option</li>
                  </ul>
                </div>

                <a href="#contact" className="service-link">
                  Enquire
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            </div>

            <div className="services-bottom">
              <p>Not sure which option is right for you?</p>

              <a href="#contact">
                Let&apos;s talk about your goals
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="pricing section">
          <div className="container">
            <div className="pricing-heading">
              <div>
                <p className="eyebrow">Pricing</p>

                <h2 className="section-title">
                  Simple pricing.
                  <span> Serious training.</span>
                </h2>
              </div>

              <p className="pricing-intro">
                Choose the session length that works for you, or save with a
                block of 10 sessions.
              </p>
            </div>

            <div className="pricing-layout">
              <div className="pricing-main">
                <div className="pricing-main-heading">
                  <div>
                    <span className="pricing-label">Online training</span>
                    <h3>Training sessions</h3>
                  </div>

                  <span className="pricing-small-label">
                    Single / Block of 10
                  </span>
                </div>

                <div className="session-list">
                  <div className="session-group">
                    <div className="session-row">
                      <h4>30 Minute Session</h4>
                      <strong>£30</strong>
                    </div>

                    <div className="session-block">
                      <div>
                        <span>Block of 10</span>
                        <small>Save £50</small>
                      </div>

                      <strong>£250</strong>
                    </div>
                  </div>

                  <div className="session-group">
                    <div className="session-row">
                      <h4>45 Minute Session</h4>
                      <strong>£35</strong>
                    </div>

                    <div className="session-block">
                      <div>
                        <span>Block of 10</span>
                        <small>Save £55</small>
                      </div>

                      <strong>£295</strong>
                    </div>
                  </div>

                  <div className="session-group">
                    <div className="session-row">
                      <h4>1 Hour Session</h4>
                      <strong>£40</strong>
                    </div>

                    <div className="session-block">
                      <div>
                        <span>Block of 10</span>
                        <small>Save £40</small>
                      </div>

                      <strong>£360</strong>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="pricing-cta">
                <span className="pricing-cta-label">Ready to start?</span>

                <h3>Let&apos;s build a plan around your goals.</h3>

                <p>
                  Not sure which session is right for you? Get in touch and we
                  can discuss your goals, experience and training preferences.
                </p>

                <a href="#contact">
                  Start training
                  <span aria-hidden="true">↗</span>
                </a>
              </aside>
            </div>
          </div>
        </section>
        {/* ACHIEVEMENTS */}
        <section id="achievements" className="achievements section">
          <div className="container">
            <div className="achievements-heading">
              <div>
                <p className="eyebrow">Achievements</p>

                <h2 className="section-title">
                  Built on experience.
                  <span> Proven in competition.</span>
                </h2>
              </div>

              <p className="achievements-intro">
                Years of training, discipline and competitive experience have
                shaped the way I approach coaching today.
              </p>
            </div>

            <div className="certificates-grid">
              <article className="certificate-card">
                <div className="certificate-image-wrapper">
                  <Image
                    src="/images/certificate1.webp"
                    alt="Bogdan Dovzhenko bench press championship certificate"
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className="certificate-image"
                  />
                </div>

                <div className="certificate-content">
                  <span className="certificate-location">
                    Kyiv, Ukraine 2020
                  </span>

                  <h3>Ukraine National Bench Press Championship</h3>

                  <p>
                    First place in the Open division, competing in the -105 kg
                    weight class with a recorded bench press of 235 kg.
                  </p>
                </div>
              </article>

              <article className="certificate-card">
                <div className="certificate-image-wrapper">
                  <Image
                    src="/images/certificate2.webp"
                    alt="Bogdan Dovzhenko kettlebell lifting championship certificate"
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className="certificate-image"
                  />
                </div>

                <div className="certificate-content">
                  <span className="certificate-location">
                    Lviv, Ukraine 2022
                  </span>

                  <h3>Ukraine Open Kettlebell Lifting Championship</h3>

                  <p>
                    First place in the Long Cycle Snatch discipline using a 24
                    kg kettlebell, with a recorded result of 245 repetitions.
                  </p>
                </div>
              </article>

              <article className="certificate-card">
                <div className="certificate-image-wrapper">
                  <Image
                    src="/images/certificate3.webp"
                    alt="Bogdan Dovzhenko bicep curl championship certificate"
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className="certificate-image"
                  />
                </div>

                <div className="certificate-content">
                  <span className="certificate-location">
                    Kyiv, Ukraine 2024
                  </span>

                  <h3>Ukraine Bicep Curl Championship</h3>

                  <p>
                    First place in the Open division, competing in the -93 kg
                    weight class with a winning lift of 85 kg.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* REVIEWS */}
        <section id="reviews" className="reviews section">
          <div className="container">
            <div className="reviews-heading">
              <p className="eyebrow">Client reviews</p>

              <h2 className="section-title">
                What clients
                <span> say.</span>
              </h2>
            </div>

            <div className="reviews-grid">
              {/* Review 1 */}
              <article className="review-card">
                <h3 className="review-name">Anastasia Quinton-Smith</h3>

                <div className="review-info">
                  <div className="review-stars" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>

                  <div className="review-source">
                    <span className="review-source-icon google">
                      <FcGoogle />
                    </span>

                    <span>Google Review</span>
                  </div>
                </div>

                <blockquote>
                  &ldquo;Bogdan is incredibly knowledgeable and makes every
                  session feel welcoming and supportive. He explains everything
                  clearly and adapts the training to your individual level and
                  goals.&rdquo;
                </blockquote>

                <time dateTime="2025-11-05">05.11.2025</time>
              </article>

              {/* Review 2 */}
              <article className="review-card">
                <h3 className="review-name">Maire Gibson</h3>

                <div className="review-info">
                  <div className="review-stars" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>

                  <div className="review-source">
                    <span className="review-source-icon facebook">
                      <FaFacebookF />
                    </span>

                    <span>Facebook Review</span>
                  </div>
                </div>

                <blockquote>
                  &ldquo;Bogdan is very experienced and really takes the time to
                  work with you as an individual. The training feels structured,
                  professional and focused on your personal progress.&rdquo;
                </blockquote>

                <time dateTime="2025-12-18">18.12.2025</time>
              </article>

              {/* Review 3 */}
              <article className="review-card">
                <h3 className="review-name">Laura</h3>

                <div className="review-info">
                  <div className="review-stars" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>

                  <div className="review-source">
                    <span className="review-source-icon instagram">
                      <FaInstagram />
                    </span>

                    <span>Instagram Review</span>
                  </div>
                </div>

                <blockquote>
                  &ldquo;Bogdan is friendly, welcoming and really takes the time
                  to teach you the correct technique for every exercise. I would
                  highly recommend training with him.&rdquo;
                </blockquote>

                <time dateTime="2026-02-09">09.02.2026</time>
              </article>
            </div>
          </div>
        </section>
      </main>

      <SocialMenu />
    </>
  );
}
