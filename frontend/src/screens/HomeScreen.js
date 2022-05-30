import { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle";

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
      product Bringing you the best audio gear Located at the heart of New York
      City, Audiophile is the premier store for high end headphones, earphones,
      speakers, and audio accessories. We have a large showroom and luxury
      demonstration rooms available for you to browse and experience a wide
      range of our products. Stop by our store to meet some of the fantastic
      people who make Audiophile the best place to buy your portable audio
      equipment.
    </div>
  );
};

export default HomeScreen;
