import { useEffect, useRef, useState } from 'react';
import './NewThings.css';

const posts = [
  {
    category: 'News',
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    author: 'Carrie Rose',
    readTime: '2 mins',
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1777514348&s=161c413ad12ef90895fad390f5521371',
  },
  {
    category: 'Food/Hospitality/Drink',
    title: "Rise at Seven Appointed by Coney's to Drive Demand and Retail Growth in the Chocolate Confectionery Category",
    author: 'Ray Saddiq',
    readTime: '2 mins',
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/3-copy.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1776098692&s=7e87c1bafadd66b362a16649188663d6',
  },
  {
    category: 'Food/Hospitality/Drink',
    title: 'Rise at Seven Appointed by Langtins to Drive Demand and Retail Growth for Noomz',
    author: 'Carrie Rose',
    readTime: '2 mins',
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/Noomz1-4.jpg?w=1080&h=1350&q=100&auto=format&fit=crop&dm=1775034474&s=210ed78a74e52af8566a68c66f40d85a',
  },
];

export default function NewThings() {
  const [cursor, setCursor] = useState({ x: -200, y: -200, visible: false });
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const move  = (e) => setCursor({ x: e.clientX, y: e.clientY, visible: true });
    const enter = ()  => setCursor((c) => ({ ...c, visible: true }));
    const leave = ()  => setCursor((c) => ({ ...c, visible: false }));
    section.addEventListener('mousemove', move);
    section.addEventListener('mouseenter', enter);
    section.addEventListener('mouseleave', leave);
    return () => {
      section.removeEventListener('mousemove', move);
      section.removeEventListener('mouseenter', enter);
      section.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <section className="newthings" ref={sectionRef}>

      {/* Custom cursor */}
      <div
        className="newthings__cursor"
        style={{
          transform: `translate(${cursor.x}px, ${cursor.y}px)`,
          opacity: cursor.visible ? 1 : 0,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 15L15 3M15 3H7M15 3V11" stroke="#0d0d0d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="newthings__inner">
        {/* Header */}
        <div className="newthings__header">
          <h2 className="newthings__title">
            What's
            <span className="newthings__title-img">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=200" alt="" />
            </span>
            New
          </h2>
          <a href="#" className="newthings__more">Explore More Thoughts ↗</a>
        </div>

        {/* Grid */}
        <div className="newthings__grid">
          {posts.map((post, i) => (
            <article key={i} className="newthings__card">
              <div className="newthings__card-img">
                <img src={post.img} alt={post.title} />
                <span className="newthings__badge">{post.category}</span>
                <span className="newthings__hover">View ↗</span>
              </div>
              <div className="newthings__card-body">
                <div className="newthings__meta">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="newthings__card-title">{post.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}