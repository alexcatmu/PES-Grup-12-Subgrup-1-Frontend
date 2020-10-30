export interface Event {
  _id: number;
  name: string;
  street: string;
  date: string;
  hourIni: string;
  hourEnd: string;
  minPrice?: number;
  maxPrice?: number;
  measures?: Array<string>;
  ratings?: number;
  link?: string;
  id_manager: string;
  id_room: string;
}
