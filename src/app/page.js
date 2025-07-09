import Head from "next/head";

import AdvantageCards from "./components/AdvantageCards";
import ProductShowcase from "./components/ProductShowcase";
import AboutUs from "./components/AboutUs";

// Import the hero section from the previously built code

import Hero from "./components/Hero"; // You can refactor the existing hero code into this

export default function Home() {
  return (
    <>
      <Head>
        <title>Fike – Discover Your Ride</title>
        <meta name="description" content="Explore the future of biking with our high-tech, smart, and stylish bicycles." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      
      <Hero />
      
      <AdvantageCards />
      <AboutUs />
      <ProductShowcase />
      
    </>
  );
}
