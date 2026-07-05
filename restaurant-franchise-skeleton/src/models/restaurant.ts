export interface Restaurant {
  id: string;
  name: string;
  location: string;
  status: 'draft' | 'active' | 'franchise-ready';
}
