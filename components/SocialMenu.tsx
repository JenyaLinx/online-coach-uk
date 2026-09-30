"use client";

import { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
  FaFacebookF,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://www.whatsapp.com/",
    icon: FaWhatsapp,
    className: "social-whatsapp",
  },
  {
    name: "Telegram",
    href: "https://telegram.org/",
    icon: FaTelegramPlane,
    className: "social-telegram",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
    className: "social-instagram",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/",
    icon: FaTiktok,
    className: "social-tiktok",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: FaFacebookF,
    className: "social-facebook",
  },
  {
    name: "Email",
    href: "mailto:hello@example.com",
    icon: FcGoogle,
    className: "social-google",
  },
];

export default function SocialMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className={`social-menu ${isOpen ? "is-open" : ""}`}>
      <div
        id="social-links"
        className="social-menu-links"
        aria-hidden={!isOpen}
      >
        {socialLinks.map((social, index) => {
          const Icon = social.icon;

          return (
            <a
              key={social.name}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={
                social.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className={`social-menu-link ${social.className}`}
              aria-label={social.name}
              tabIndex={isOpen ? 0 : -1}
              style={{
                transitionDelay: isOpen ? `${index * 45}ms` : "0ms",
              }}
            >
              <Icon aria-hidden="true" />
            </a>
          );
        })}
      </div>

      <button
        type="button"
        className="social-menu-toggle"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
        aria-expanded={isOpen}
        aria-controls="social-links"
      >
        {isOpen ? (
          <IoClose aria-hidden="true" />
        ) : (
          <HiOutlineChatBubbleOvalLeft aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
