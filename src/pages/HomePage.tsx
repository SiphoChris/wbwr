import Main from "../components/Main"
import BestGearSection from "../components/sections/BestGearSection";
import HeroSection from './../components/sections/HeroSection';

function HomePage() {
  return (
    <Main>
      <HeroSection/>
      <BestGearSection/>
    </Main>
  )
}

export default HomePage