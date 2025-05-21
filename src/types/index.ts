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

export type videoTypes = {
  videoUrl: string;
  controls: boolean;
  loop: boolean;
  autoPlay: boolean;
};

export type buttonProps = {
  children: React.ReactNode
  classNames?: string
}

