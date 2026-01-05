export interface Product {
  id: number;
  nom: string;
  prix: number;
  quantite: number;
  imageUrl: string;
  type: 'team-merchandise' | 'driver-gear' | 'collectibles';
}
