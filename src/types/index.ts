export interface typesForLatestPromotions {
  id: number;
  imageUrl: string;
}

export interface typesForBestGearCatergories extends typesForLatestPromotions {
  title: string;
}

export type imageProps = {
  imageUrl: string;
};
