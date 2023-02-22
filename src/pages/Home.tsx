import { Navbar } from "../components/Navbar";
import { Hero } from "../sections/Hero";
import { Features } from "../sections/Features";
import { Integrations } from "../sections/Integrations";
import { Footer } from "../sections/Footer";

const Home = () => {

  return (
    <>
    <header>
      <Navbar />
    </header>
      <main>
        <Hero />
        <Features />
        <Integrations />
      </main>
      <Footer />
    </>
  )
}

export default Home;
