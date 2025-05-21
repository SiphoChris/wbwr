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
          <div className="mb-6">
            <h3 className="text-[24px] font-plak-bold">Our best gear</h3>
            <p className="text-[14px] font-plak-regular">Unlock your potential with the best UA Gear</p>
          </div>
          <div className="flex space-x-4">
            {bestGearCatergories.map((category) => (
              <div key={category.id} className="hover:scale-[1.025] hover:shadow-lg transition ease-in-out duration-300 pb-4">
                <BestGearCard imageUrl={category.imageUrl} />
                <p className="mt-2 text-[14px] font-plak-semibold underline"><a href="#">Shop now</a></p>
              </div>
            ))}
          </div>
        </BestGearSection>
        <ThemeSection />
        <LatestPromotionsSection>
          <div className="mb-6">
            <h3 className="text-[24px] font-plak-bold">Discover our latest promotions</h3>
            <p className="text-[14px] font-plak-regular">Get the best deals on the best gear.</p>
          </div>
          <div className="flex space-x-4">
            {latestPromotions.map((promotion) => (
              <div key={promotion.id} className="hover:scale-[1.025] hover:shadow-lg transition ease-in-out duration-300">
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
