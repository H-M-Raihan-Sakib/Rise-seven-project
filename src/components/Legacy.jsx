import { useEffect, useRef, useState } from "react";
import "./Legacy.css";

const cards = [
  {
    id: 1,
    theme: "dark",
    title: "Pioneers",
    body: "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
    body2: "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=69735376fddade35059585570e316087",
    imageAlt: "Person holding sign in front of Google",
  },
  {
    id: 2,
    theme: "mint",
    title: "Award Winning",
    body: "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London.",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=9b6e0a98f94b563a89840f3250cd1656",
    imageAlt: "Two people holding award",
  },
  {
    id: 3,
    theme: "white",
    title: "Speed",
    body: "Google is moving fast, but humans are moving faster. We chase consumers, not algorithms.",
    image: "https://media.licdn.com/dms/image/v2/D4E22AQFGsD0DB7uQdw/feedshare-shrink_800/B4EZaMcm8KHMAg-/0/1746113035395?e=2147483647&v=beta&t=aWsqalBdySO4lLkoaBQMvE-ebSOv8lZOa3KYzI2U678",
    imageAlt: "SEO week event",
    accentTriangle: true,
  },
];

export default function ScrollCards() {
  const scrollRef = useRef(null);
  const sliderRef = useRef(null);
  const snapPagesRef = useRef([]);

  const [activeIndex, setActiveIndex] = useState(0);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isDragging = useRef(false);

  const isMobile = () => window.innerWidth <= 768;

  /* ───────────────── DESKTOP: IntersectionObserver ───────────────── */
  useEffect(() => {
    if (isMobile()) return;

    const el = scrollRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            const idx = parseInt(entry.target.dataset.index, 10);
            setActiveIndex(idx);
          }
        });
      },
      { root: el, threshold: 0.6 }
    );

    snapPagesRef.current.forEach((page) => {
      if (page) observer.observe(page);
    });

    return () => observer.disconnect();
  }, []);

  /* ───────────────── MOBILE SLIDER ───────────────── */
  useEffect(() => {
    if (!isMobile()) return;

    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.children[activeIndex];
    if (card) {
      card.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  /* ───────────────── TOUCH HANDLERS ───────────────── */
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current = false;
  };

  const onTouchMove = (e) => {
    const dx = Math.abs(e.touches[0].clientX - touchStartX.current);
    const dy = Math.abs(e.touches[0].clientY - touchStartY.current);
    if (dx > dy && dx > 8) {
      isDragging.current = true;
      e.preventDefault();
    }
  };

  const onTouchEnd = (e) => {
    if (!isDragging.current) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx < -40 && activeIndex < cards.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
    if (dx > 40 && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
    isDragging.current = false;
  };

  return (
    <div className="sc-section">
      <p className="legacy__eyebrow">Legacy In The Making</p>

      {/* ───────────── DESKTOP ───────────── */}
      <div className="sc-desktop">
        <div className="sc-scroll" ref={scrollRef}>
          {cards.map((_, i) => (
            <div
              className="sc-snap-page"
              key={i}
              data-index={i}
              ref={(el) => (snapPagesRef.current[i] = el)}
            />
          ))}
        </div>

        <div className="sc-stage">
          {cards.map((card, i) => {
            const offset = i - activeIndex;

            let translateY = 0;
            let scale = 1;
            let opacity = 1;
            let rotate = 0;

            const zIndex = cards.length - Math.abs(offset);

            if (offset < 0) {
              translateY = -120 + offset * 20;
              scale = 0.92 + offset * 0.04;
              opacity = 0;
              rotate = offset * -3;
            } else if (offset > 0) {
              translateY = offset * 18;
              scale = 1 - offset * 0.04;
              opacity = 1 - offset * 0.3;
              rotate = offset * 2;
            } else {
              rotate = -2;
            }

            return (
              <div
                key={card.id}
                className={`sc-card sc-card--${card.theme}`}
                style={{
                  transform: `translateY(${translateY}%) scale(${scale}) rotate(${rotate}deg)`,
                  opacity,
                  zIndex,
                  transition:
                    "transform 0.55s cubic-bezier(0.32,0.72,0,1), opacity 0.45s ease",
                }}
              >
                {card.accentTriangle && <div className="sc-triangle" />}

                <div className="sc-img-wrap">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="sc-img"
                  />
                </div>

                <h2 className="sc-title">{card.title}</h2>
                <p className="sc-body">{card.body}</p>
                {card.body2 && (
                  <p className="sc-body sc-body--mt">{card.body2}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ───────────── MOBILE ───────────── */}
      <div className="sc-mobile">
        <div
          className="sc-slider"
          ref={sliderRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {cards.map((card, i) => (
            <div
              key={card.id}
              className={`sc-slide sc-card--${card.theme} ${
                activeIndex === i ? "sc-slide--active" : ""
              }`}
              onClick={() => setActiveIndex(i)}
            >
              {card.accentTriangle && <div className="sc-triangle" />}

              <div className="sc-img-wrap">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="sc-img"
                />
              </div>

              <h2 className="sc-title">{card.title}</h2>
              <p className="sc-body">{card.body}</p>
              {card.body2 && (
                <p className="sc-body sc-body--mt">{card.body2}</p>
              )}
            </div>
          ))}
        </div>

        <div className="sc-dots-mobile">
          {cards.map((_, i) => (
            <button
              key={i}
              className={`sc-dot ${activeIndex === i ? "sc-dot--active" : ""}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}