export type CatBreedDetails = {
  id: string,
  name: string,
  imageUrl: string,
  description: string;
  temperament: string;
  wikipedia_url: string;
  origin: string;
  vca_url: string;
  filters: Filter[];
}

export type Filter = {
  name: string;
  isSelected?: boolean;
  class: string;
}
