import React from "react";
import Organic from "../Components/Organic";
import Support from "../Components/Support";
import TabsView from "../Components/TabsView";
import FreshItems from "../Components/FreshItems";
import Store from "../Components/Store";
import Carousel from "../Components/Carousel";
import Products from "../Components/Products";
import Services from "../Components/Services";
import ClientCarousel from "../Components/ClientCarousel";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Home() {
  return (
    <>
      <Header />
      <Organic />
      <Support />
      <TabsView />
      <FreshItems />
      <Carousel />
      <Store />
      <Products />
      <Services />
      <ClientCarousel />
      <Footer />
    </>
  );
}

export default Home;
