export interface Event {
  _id: string;
  name: string;
  date: string;
  hourIni: string;
  hourEnd: string;
  minPrice?: number;
  maxPrice?: number;
  measures?: Array<string>;
  ratings?: number;
  link?: string;
  seats?: string;
  id_manager: number;
  id_room: string;
  matrix?: string[][];
}
