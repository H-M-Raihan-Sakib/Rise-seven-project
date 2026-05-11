import { useEffect, useRef, useState } from "react";

import "./FeaturedWork.css";

const works = [
  {
    id: "sixt",

    name: "SIXT",

    years: "[2023-2025]",

    tag: "Car rental",

    hoverText: "Driving search dominance across Europe",

    image:
      "https://s3-media0.fl.yelpcdn.com/bphoto/yRW6O4gDfBTlhIwk8ocj-w/1000s.jpg",

    imageBg: "#1c1c1c",

    hoverBg: "#2a1a0a",
  },

  {
    id: "dojo",

    name: "Dojo – B2B",

    years: "[2021-2025]",

    tag: "Fintech",

    hoverText: "Social search and multi channel content to #1",

    image:
      "https://media.licdn.com/dms/image/v2/D4E12AQHUA0mgEWIMkA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1703785115583?e=2147483647&v=beta&t=9l17Fp1UtJrYoiNLE-lZSB9J4XNGxyIOsQeyXrKj77A",

    imageBg: "#3dcfaa",

    hoverBg: "#c084fc",
  },

  {
    id: "magnet",

    name: "Magnet Trade – B2B",

    years: "[2023-2024]",

    tag: "Trade",

    hoverText: "Scaling search for tradespeople nationwide",

    image:
      "https://www.interiordaily.com/remote/https/agfstorage.blob.core.windows.net/misc/ID_com/2026/01/23/dreamstime_m_295392120.jpg?preset=OgImage",

    imageBg: "#222",

    hoverBg: "#1a2a1a",
  },

  {
    id: "esim",

    name: "Leading E Sim",

    years: "[2023-2025]",

    tag: "Telecoms",

    hoverText: "Connecting millions with next-gen eSIM tech",

    image:
      "https://media.istockphoto.com/id/2202222871/vector/set-of-sim-cards-mockups.jpg?s=612x612&w=0&k=20&c=ijyNT0RNQxdPBreTIDMjQKMJsBf_ciEA0axm8MMHRJE=",

    imageBg: "#0f3460",

    hoverBg: "#0a1a40",
  },

  {
    id: "parkdean",

    name: "Parkdean Resorts",

    years: "[2019-2025]",

    tag: "UK holidays",

    hoverText: "Making UK holidays the top search result",

    image:
      "https://i2-prod.birminghammail.co.uk/incoming/article33281271.ece/ALTERNATES/s1200b/1_Parkdean-MSP-header.jpg",

    imageBg: "#1a3a2a",

    hoverBg: "#c084fc",
  },

  {
    id: "revolution",

    name: "Revolution Beauty",

    years: "[2022-2025]",

    tag: "Beauty Dupes",

    hoverText: "Owning beauty dupes across every channel",

    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-10-at-12.13.46.png?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847624&s=1297f5bff1af8057f9908e26956825ac",

    imageBg: "#f5c5b8",

    hoverBg: "#f9a8d4",
  },

  {
    id: "lloyds",

    name: "Lloyds Pharmacy",

    years: "[2022-23]",

    tag: "Healthcare",

    hoverText: "Rechargeable health content at scale",

    image:
      "https://hips.hearstapps.com/hmg-prod/images/flat-lay-composition-with-juicy-peach-on-a-red-royalty-free-image-1621957745.jpg?crop=0.513xw:0.769xh;0.244xw,0.125xh&resize=1200:*",

    imageBg: "#2e7d52",

    hoverBg: "#ff6b35",
  },

  {
    id: "plt",

    name: "PrettyLittleThing",

    years: "[2021-2023]",

    tag: "Fashion",

    hoverText: "Fashion-first search strategy for Gen Z",

    image:
      "https://img.freepik.com/premium-photo/group-models-make-up-four-girls-with-professional-make-up-posing-studio-party-beautiful-girls-friends_548821-10529.jpg",

    imageBg: "#ff6b35",

    hoverBg: "#ff9f1c",
  },
];

export default function FeaturedWork() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [cursor, setCursor] = useState({ x: -100, y: -100, visible: false });

  const panelRefs = useRef([]);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observers = panelRefs.current.map((panel, i) => {
      if (!panel) return null;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },

        { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
      );

      obs.observe(panel);

      return obs;
    });

    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const move = (e) =>
      setCursor({ x: e.clientX, y: e.clientY, visible: true });

    const enter = () => setCursor((c) => ({ ...c, visible: true }));

    const leave = () => setCursor((c) => ({ ...c, visible: false }));

    section.addEventListener("mousemove", move);

    section.addEventListener("mouseenter", enter);

    section.addEventListener("mouseleave", leave);

    return () => {
      section.removeEventListener("mousemove", move);

      section.removeEventListener("mouseenter", enter);

      section.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <section className="fw" ref={sectionRef}>
      <div
        className="fw__cursor"
        style={{
          transform: `translate(${cursor.x}px, ${cursor.y}px)`,

          opacity: cursor.visible ? 1 : 0,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M3 15L15 3M15 3H7M15 3V11"
            stroke="#0d0d0d"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* LEFT sticky */}

      <div className="fw__left">
        <span className="fw__label">Featured Work</span>

        <ul className="fw__list">
          {works.map((w, i) => {
            const state =
              i < activeIndex
                ? "past"
                : i === activeIndex
                  ? "active"
                  : "future";

            return (
              <li key={w.id} className={`fw__item fw__item--${state}`}>
                <span className="fw__name">{w.name}</span>

                <span className="fw__years">{w.years}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* RIGHT scrolling panels */}

      <div className="fw__right">
        {works.map((w, i) => (
          <div
            key={w.id}
            className={`fw__panel ${hoveredIndex === i ? "fw__panel--hovered" : ""}`}
            ref={(el) => (panelRefs.current[i] = el)}
            style={{ "--panel-bg": w.imageBg, "--hover-bg": w.hoverBg }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="fw__hover-overlay" />

            <div className="fw__hover-text">
              <p>{w.hoverText}</p>

              <div className="fw__hover-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M3 17L17 3M17 3H8M17 3V12"
                    stroke="#0d0d0d"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="fw__img-wrap">
              <img
                src={w.image}
                alt={w.name}
                className="fw__img"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>

            {/* Mobile overlay label — year + name bottom-left over image */}

            <div className="fw__mobile-label">
              <span className="fw__mobile-years">{w.years}</span>

              <span className="fw__mobile-name">{w.name}</span>
            </div>

            <div className="fw__tag">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <circle
                  cx="5"
                  cy="5"
                  r="3.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />

                <path
                  d="M7.5 7.5L11 11"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>

              {w.tag}

              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path
                  d="M1.5 9.5L9.5 1.5M9.5 1.5H4.5M9.5 1.5V6.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
