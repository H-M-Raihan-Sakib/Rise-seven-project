import './AgencyBehind.css';

const logos = [
  {
    name: 'Xbox',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Xbox_Logo.svg/1280px-Xbox_Logo.svg.png',
  },
  {
    name: 'PlayStation',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/960px-PlayStation_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail',
  },
  {
    name: 'Sixt',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Sixt-Logo.svg/3840px-Sixt-Logo.svg.png',
  },
  {
    name: 'Revolut',
    logo: 'https://theindustry.beauty/wp-content/uploads/2022/08/revolutionbeauty.jpg',
  },
  {
    name: 'AXA',
    logo: 'https://icon2.cleanpng.com/20180703/qhx/kisspng-axa-assurance-regnier-b-et-chaudre-v-home-insuranc-5b3b079472f585.8033078315305952204709.jpg',
  },
  {
    name: 'Emirates',
    logo: 'https://e7.pngegg.com/pngimages/467/280/png-clipart-dubai-flight-emirates-airline-etihad-airways-fly-emirates-logo-text-economy-class-thumbnail.png',
  },
  {
    name: 'Red Bull',
    logo: 'https://www.citypng.com/public/uploads/preview/hd-red-bull-energy-logo-png-701751694778707w00dbzhxd1.png',
  },
  {
    name: 'SharkNinja',
    logo: 'https://w7.pngwing.com/pngs/259/175/png-transparent-shark-ninja-logo-robot-vacuums-brands.png',
  },
  {
    name: 'Capital One',
    logo: 'https://img.favpng.com/12/23/8/logo-capital-one-credit-card-bank-brand-png-favpng-QynuBfxyS5vJ8FNq0R3KaTUJs.jpg',
  },
];

export default function AgencyBehind() {
  return (
    <section className="agency-stripe">
      <div className="agency-stripe__fade agency-stripe__fade--left" />
      <div className="agency-stripe__fade agency-stripe__fade--right" />

      <div className="agency-stripe__marquee">
        <div className="agency-stripe__sticky">The Agency Behind</div>
        <div className="agency-stripe__blur" />
        
        <div className="agency-stripe__track">
          {logos.concat(logos).map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="agency-stripe__item">
              <img src={logo.logo} alt={logo.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
