export interface Ticket {
  id: number;
  name: string;
  quantity: number;
  race: string;
  type: 'weekend-pass' | 'grandstand';
}
