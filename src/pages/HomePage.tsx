import Main from "../components/Main";
import HeroSection from "./../components/sections/HeroSection";
import BestGearSection from "../components/sections/PromotionalSection";
import LatestPromotionsSection from "../components/sections/PromotionalSection";
import BestGearCard from "../components/cards/PromotionalCard";
import LatestPromotionsCard from "../components/cards/PromotionalCard";
import ThemeSection from "../components/sections/ThemeSection";
import GallerySection from "../components/sections/GallerySection";

import { bestGearCatergories, latestPromotions } from "../constants/data";

function HomePage() {
  return (
    <>
      <HeroSection />
      <Main>
        <BestGearSection>
          <div className="mb-4">
            <h3>Our best gear</h3>
            <p>Unlock your potential with the best UA Gear</p>
          </div>
          <div className="flex space-x-4">
            {bestGearCatergories.map((category) => (
              <div key={category.id}>
                <BestGearCard imageUrl={category.imageUrl} />
                <p>Shop now</p>
              </div>
            ))}
          </div>
        </BestGearSection>
        <ThemeSection />
        <LatestPromotionsSection>
          <div>
            <h3>Discover our latest promotions</h3>
            <p>Get the best deals on the best gear.</p>
          </div>
          <div className="flex space-x-4">
            {latestPromotions.map((promotion) => (
              <div key={promotion.id}>
                <LatestPromotionsCard imageUrl={promotion.imageUrl} />
              </div>
            ))}
          </div>
        </LatestPromotionsSection>
        <GallerySection />
      </Main>
    </>
  );
}

export default HomePage;
