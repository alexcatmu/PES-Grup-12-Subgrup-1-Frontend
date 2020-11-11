import { Measure } from './measures';

export interface Event {
  _id: string;
  name: string;
  date: string;
  hourIni: string;
  hourEnd: string;
  minPrice?: number;
  maxPrice?: number;
  measures?: Array<String>;
  ratings?: number;
  link?: string;
  id_manager: number;
  id_room: string;
}
