import { ICategory } from "./CategoryTypes";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  category?: ICategory | null;
  cover?: string | null;
}

export interface IProductCreate extends Omit<IProduct, "id"> {}
