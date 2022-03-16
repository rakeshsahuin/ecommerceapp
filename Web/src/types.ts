export type ProductType = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: string;
  category: string;
};
// Omit, Pick
export type CartType = Omit<ProductType, 'description' | 'category'> & {
  qty: number;
};
