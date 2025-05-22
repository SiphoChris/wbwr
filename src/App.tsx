import Nav from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import { HeroVideoProvider } from "./contexts/HeroVideoContext";

function App() {
  return (
    <>
      <Nav />
      <HeroVideoProvider>
        <HomePage />
      </HeroVideoProvider>
      <Footer />
    </>
  );
}

export default App;
