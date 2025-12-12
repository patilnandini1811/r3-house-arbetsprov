import Header from "./components/Header";
import HeroText from "./components/HeroText";
import heroMainImage from "./assets/hero-main-house@2x.png";
import ContentBlock from "./components/ContentBlock";
import GallerySection from "./components/GallerySection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <main>
      <section className="relative w-full h-[697px]">
        <img
          src={heroMainImage}
          alt="Hero Main House"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 px-6">
          <Header />
          <HeroText />
        </div>
      </section>
      <section><ContentBlock /></section>
        
      <section><GallerySection /></section>
      </main>
      <section><Footer /></section>
    </div>
  );
}

export default App;
