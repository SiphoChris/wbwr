import BestGearCard from "../cards/BestGearCard";
import { bestGearCatergories } from './../../constants/data';

function BestGearSection() {
  return (
    <section className="flex justify-center">
      <div>
          <div>
            <h3>Our best gear</h3>
            <p>Unlock your potential with the best UA Gear</p>
          </div>
          <div className="flex space-x-4">
            {
              bestGearCatergories.map((category) => (
                <BestGearCard key={category.id} title={category.title} imageUrl={category.imageUrl} />
              ))
            }
          </div>
      </div>
    </section>
  );
}

export default BestGearSection;
