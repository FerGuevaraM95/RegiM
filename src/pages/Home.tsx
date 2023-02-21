import { Navbar } from "../components/Navbar";
import { Hero } from "../sections/Hero";
import { Features } from "../sections/Features";
import { Integrations } from "../sections/Integrations";

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
    </>
  )
}

export default Home;
