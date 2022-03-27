import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Partner from "./components/Partner";
import Sliders from "./components/Sliders";
import Flower from "./components/Flower";
import Locations from "./components/Locations";
import Cta from "./components/Cta";
import Services from "./components/Services";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";

function App() {
return (

// Using the newly created Header
// component in this main component
    <React.Fragment>
        <Header />
        <Hero />
        <Products />
        <Products />
        <Products />
        <Reviews />
        <Services />
        <Cta />
        <Partner />
        <About />
        <Flower />
        <Locations/> 
        <Footer />
    </React.Fragment>
 
);
}
export default App;
