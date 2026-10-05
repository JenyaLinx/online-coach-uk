"use client";

export default function StartTrainingButton() {
  const openSocialMenu = () => {
    window.dispatchEvent(new Event("open-social-menu"));
  };

  return (
    <button
      type="button"
      className="contact-cta-button"
      onClick={openSocialMenu}
    >
      Start training
      <span aria-hidden="true">→</span>
    </button>
  );
}
