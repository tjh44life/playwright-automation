export interface Franchise {
  id: string;
  restaurantId: string;
  ownerName: string;
  territory: string;
  status: 'pending' | 'approved' | 'active';
}
