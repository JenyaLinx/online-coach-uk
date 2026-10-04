"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const reviews = [
  {
    title: "Incredibly Knowledgeable",
    text: "Bogdan is incredibly knowledgeable and makes every session feel welcoming and supportive. He explains everything clearly and adapts the training to your individual level and goals.",
    name: "Anastasia Quinton-Smith",
    source: "Google Review",
    date: "05.11.2025",
    platform: "google",
  },
  {
    title: "Experienced & Professional",
    text: "Bogdan is very experienced and really takes the time to work with you as an individual. The training feels structured, professional and focused on your personal progress.",
    name: "Maire Gibson",
    source: "Facebook Review",
    date: "18.12.2025",
    platform: "facebook",
  },
  {
    title: "Friendly & Welcoming",
    text: "Bogdan is friendly, welcoming and really takes the time to teach you the correct technique for every exercise. I would highly recommend training with him.",
    name: "Laura",
    source: "Instagram Review",
    date: "09.02.2026",
    platform: "instagram",
  },
];

function PlatformIcon({ platform }: { platform: string }) {
  if (platform === "google") {
    return (
      <span className="review-platform-icon google">
        <FcGoogle />
      </span>
    );
  }

  if (platform === "facebook") {
    return (
      <span className="review-platform-icon facebook">
        <FaFacebookF />
      </span>
    );
  }

  return (
    <span className="review-platform-icon instagram">
      <FaInstagram />
    </span>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  const review = reviews[current];

  const previousReview = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="reviews section">
      <div className="container reviews-layout">
        <div className="reviews-overview">
          <p className="eyebrow">Client reviews</p>

          <h2 className="section-title">
            What clients
            <span> say.</span>
          </h2>

          <div className="reviews-rating">
            <strong>5.0</strong>

            <div>
              <div className="reviews-rating-stars">★★★★★</div>
              <span>Client rating</span>
            </div>
          </div>
        </div>

        <div className="review-featured">
          <div className="review-top">
            <div className="review-stars">★★★★★</div>

            <span className="review-count">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")}
            </span>
          </div>

          <h3>{review.title}</h3>

          <blockquote>&ldquo;{review.text}&rdquo;</blockquote>

          <div className="review-person">
            <strong>{review.name}</strong>

            <div className="review-source-row">
              <div className="review-source">
                <PlatformIcon platform={review.platform} />
                <span>{review.source}</span>
              </div>

              <span className="review-date">{review.date}</span>
            </div>
          </div>

          <div className="review-navigation">
            <button
              type="button"
              onClick={previousReview}
              aria-label="Previous review"
            >
              <FiArrowLeft />
            </button>

            <button type="button" onClick={nextReview} aria-label="Next review">
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
