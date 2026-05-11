// Intro.jsx

import './Intro.css';

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro__container">

        {/* LEFT */}
        <div className="intro__left">
          <p>
            A global team of search-first content marketers engineering semantic
            relevancy & category signals for both the internet and people
          </p>
        </div>

        {/* RIGHT */}
        <div className="intro__right">

          <div className="intro__badge">
            #1 MOST RECOMMENDED
            <br />
            CONTENT MARKETING AGENCY
          </div>

          <h1>
            Driving Demand
            <br />
            & Discovery

            <span className="intro__image">
              <img
                src="https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=69735376fddade35059585570e316087"
                alt="inline visual"
              />
            </span>
          </h1>

          <div className="intro__buttons">
            <button className="btn primary">
              Our Story ↗
            </button>

            <button className="btn secondary">
              Our Services ↗
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}