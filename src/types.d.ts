export interface Item {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

export interface CartItem {
  item: Item;
  amount: number;
}
