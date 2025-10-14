import React, { useEffect, useRef } from "react";

export default function BannerCarousel({ banners, interval = 5000 }) {
  const [current, setCurrent] = React.useState(0);
  const timeoutRef = useRef();

  useEffect(() => {
    if (banners.length <= 1) return;
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, interval);
    return () => clearTimeout(timeoutRef.current);
  }, [current, banners.length, interval]);

  const goTo = (idx) => setCurrent(idx);

  return (
    <div
      className="banner-carousel"
      role="region"
      aria-label="Promoções e avisos"
    >
      <div className="banner-container">
        {banners.map((banner, idx) => (
          <div
            key={idx}
            className={`banner-slide${idx === current ? " active" : ""}${
              banner.className ? ` ${banner.className}` : ""
            }`}
            aria-hidden={idx !== current}
          >
            {banner.content}
          </div>
        ))}
      </div>
      <div
        className="banner-dots"
        role="tablist"
        aria-label="Navegação do carrossel de banners"
      >
        {banners.map((_, idx) => (
          <span
            key={idx}
            className={`banner-dot${idx === current ? " active" : ""}`}
            tabIndex={0}
            role="tab"
            aria-selected={idx === current}
            aria-label={`Banner ${idx + 1}`}
            onClick={() => goTo(idx)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && goTo(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
}
