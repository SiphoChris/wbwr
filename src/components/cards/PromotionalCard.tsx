import type { imageProps } from "../../types";

function PromotionalCard({ imageUrl }: imageProps) {
  return (
    <article className="size-64 hover:scale-[1.03] transition ease-in-out duration-300">
        <img src={imageUrl} />
    </article>
  );
}

export default PromotionalCard;
