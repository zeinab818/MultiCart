import { StaticImageData } from "next/image";

export interface CardInterface {
  image: StaticImageData;
  category: string;
  name: string;
  rate: number;
  reviews: number;
  price: number;
  oldPrice: number;
  badge: string;
}