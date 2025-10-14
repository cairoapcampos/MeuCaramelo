// Componente de carrossel reutilizável para imagens ou banners
import React, { useEffect, useRef } from "react";

export default function Carousel({
  items,
  renderItem,
  interval = 3000,
  dotsAriaLabel = "Navegação do carrossel",
}) {
  const [current, setCurrent] = React.useState(0);
  const timeoutRef = useRef();

  useEffect(() => {
    if (items.length <= 1) return;
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearTimeout(timeoutRef.current);
  }, [current, items.length, interval]);

  const goTo = (idx) => setCurrent(idx);

  return (
    <div className="carousel" role="region">
      <div className="carousel-items">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`carousel-slide${idx === current ? " active" : ""}`}
            aria-hidden={idx !== current}
          >
            {renderItem(item, idx === current)}
          </div>
        ))}
      </div>
      <div className="carousel-dots" role="tablist" aria-label={dotsAriaLabel}>
        {items.map((_, idx) => (
          <span
            key={idx}
            className={`dot${idx === current ? " active" : ""}`}
            tabIndex={0}
            role="tab"
            aria-selected={idx === current}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => goTo(idx)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && goTo(idx)}
          />
        ))}
      </div>
    </div>
  );
}
