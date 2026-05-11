import { useState } from "react";
import "./Service.css";

const services = [
  { name: "Digital PR", img: "https://miro.medium.com/1*2RmAHI9XoMT34FxlCxsisA.png" },
  { name: "Organic Social & Content", img: "https://media.sproutsocial.com/uploads/2024/07/Social-media-monitoring-vs.-social-media-listening-Final.svg" },
  { name: "Search & Growth Strategy", img: "https://www.thestrategyinstitute.org/images/business-growth-strategies-for-scaling-in-the-modern-economy.jpg" },
  { name: "Content Experience", img: "https://framerusercontent.com/images/hlGaHKt9CsiBWKNa26hno7om6M8.png?width=2200&height=1200" },
  { name: "Data & Insights", img: "https://futransolutions.com/wp-content/uploads/2024/04/data-analytics.jpg" },
  { name: "Onsite SEO", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0HFBJTcyDLiUWWCI8YmvrqlUrwUsvKAIysw&s" },
];

export default function Service() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="service">

      {/* HEADER */}
      <div className="service__head">
        <h2>
          Our
          <span className="service__img-inline">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=200" alt="" />
          </span>
          Services
        </h2>

        {/* Desktop CTA — hidden on mobile via CSS */}
        <button className="service__cta service__cta--desktop">
          View All Services ↗
        </button>
      </div>

      {/* GRID */}
      <div className="service__grid">
        {services.map((s, i) => (
          <div
            key={i}
            className="service__item"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className={`service__bg ${hovered === i ? "active" : ""}`}
              style={{ backgroundImage: `url(${s.img})` }}
            />
            <div className="service__mobile-thumb">
              <img src={s.img} alt={s.name} />
            </div>
            <h3>{s.name}</h3>
          </div>
        ))}
      </div>

      {/* Mobile CTA — hidden on desktop via CSS, sits after grid so it's at the bottom */}
      <button className="service__cta service__cta--mobile">
        View All Services ↗
      </button>

    </section>
  );
}