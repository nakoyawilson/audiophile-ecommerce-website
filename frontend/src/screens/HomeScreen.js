import { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import AboutUs from "../components/AboutUs";

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
    <div>
      <PageTitle title="Audiophile e-commerce website" />
      <h1>{products.map((product) => product.name)}</h1>
      New product XX99 Mark II Headphones Experience natural, lifelike audio and
      exceptional build quality made for the passionate music enthusiast. See
      product Headphones Shop Speakers Shop Earphones Shop ZX9 speaker Upgrade
      to premium speakers that are phenomenally built to deliver truly
      remarkable sound. See product ZX7 speaker See product YX1 earphones See
      product
      <AboutUs />
    </div>
  );
};

export default HomeScreen;
