import type { imageProps } from "../../types";

function PromotionalCard({ imageUrl }: imageProps) {
  return (
    <article className="size-64">
        <img src={imageUrl} />
    </article>
  );
}

export default PromotionalCard;
