interface IRoom {
  _id: string;
  name: string;
  id_manager: number;
  street: string;
  capacity: number;
  rows: number;
  columns: number;
  distance_between_seats: number;
  seats_size: number;
}


export class Room implements IRoom {
  _id: string;
  name: string;
  id_manager: number;
  street: string;
  capacity: number;
  rows: number;
  columns: number;
  distance_between_seats: number;
  seats_size: number;
}
