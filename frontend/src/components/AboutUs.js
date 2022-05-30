import bestGearDesktop from "../assets/shared/desktop/image-best-gear.jpg";
import bestGearTablet from "../assets/shared/tablet/image-best-gear.jpg";
import bestGearMobile from "../assets/shared/mobile/image-best-gear.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us container">
      <picture>
        <source media="(max-width: 499px)" srcSet={bestGearMobile} />
        <source
          media="(max-width: 899px) and (min-width: 500px)"
          srcSet={bestGearTablet}
        />
        <source media="(min-width: 900px)" srcSet={bestGearDesktop} />
        <img
          src={bestGearMobile}
          alt="Man wearing headphones"
          className="about-img"
        />
      </picture>
      <div className="wrapper">
        <h2 className="heading">
          Bringing you the <span className="accent">best</span> audio gear
        </h2>
        <p className="paragraph">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
