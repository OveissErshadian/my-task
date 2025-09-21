export interface IEvent {
  createdAt: number;
    title: string;
    description: string;
    price: number;
    cover: string;
    category: string;
    capacity: number;
    imageAddress: string;
    id: string;
    organizerId: string;
    participants: string[];
}