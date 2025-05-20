import type { imageProps } from "../../types";

function BestGearCard({ title, imageUrl }: imageProps) {
  return (
    <article className="size-64">
        <img src={imageUrl} alt={title} />
    </article>
  );
}

export default BestGearCard;
