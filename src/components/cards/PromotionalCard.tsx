import type { imageProps } from "../../types";

function PromotionalCard({ imageUrl }: imageProps) {
  return (
    <article>
        <img src={imageUrl} />
    </article>
  );
}

export default PromotionalCard;
