import { twMerge } from "tailwind-merge";
import type { carouselProps } from "../types"; 

function Carousel({ data, classNames }: carouselProps) {
  return (
    <div className={twMerge("flex overflow-x-auto scroll-snap-x snap-x snap-mandatory space-x-4 px-4", classNames )}>
      {data.map((item) => (
        <div key={item.id} className="flex-shrink-0 snap-center w-[300px]">
          <img src={item.imageUrl} alt="image" className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
}

export default Carousel;
