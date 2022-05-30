import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import ShopLinks from "../components/ShopLinks";
import AboutUs from "../components/AboutUs";
import "./HomeScreen.css";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, [products]);

  return (
    <main className="home">
      <PageTitle title="Audiophile e-commerce website" />
      <section className="hero">
        <div className="container">
          <span className="subheading">New product</span>
          <h1 className="heading">XX99 Mark II Headphones</h1>
          <p className="paragraph">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to="/" className="btn btn-solid">
            See product
          </Link>
        </div>
      </section>
      <ShopLinks />
      <div className="grid container">
        <section className="grid-product">
          <div className="wrapper">
            <h2 className="heading">ZX9 speaker</h2>
            <p className="paragraph">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link to="/" className="btn btn-solid-alt">
              See product
            </Link>
          </div>
        </section>
        <section className="grid-product">
          <h2 className="heading">ZX7 speaker</h2>
          <Link to="/" className="btn btn-outline">
            See product
          </Link>
        </section>
        <div className="grid-product"></div>
        <section className="grid-product">
          <h2 className="heading">YX1 earphones</h2>
          <Link to="/" className="btn btn-outline">
            See product
          </Link>
        </section>
      </div>
      <AboutUs />
    </main>
  );
};

export default HomeScreen;
