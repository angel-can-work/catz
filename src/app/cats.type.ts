export type CatBreedDetails = {
  id: string,
  name: string,
  imageUrl: string,
  hypoallergenic: boolean,
  rare: boolean,
  hairless: boolean;
  description: string;
  temperament: string;
  wikipedia_url: string;
  origin: string;
  vca_url: string;
}

export type Filter = {
  name: string;
  isSelected?: boolean;
  class: string;
}
