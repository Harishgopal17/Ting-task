import { Nav } from "./components/Nav";
import Hero from "./sections/Hero";
import Shop from "./sections/Shop";
import Standards from "./sections/Standards";

function App() {
  return (
    <>
      <Nav />
      <main className="min-h-screen relative text-white">
        <section className="mb-16">
          <Hero />
        </section>
        <section className="mb-20">
          <Shop />
        </section>
        <section className="mb-20">
          <Standards />
        </section>
      </main>
    </>
  );
}

export default App;
