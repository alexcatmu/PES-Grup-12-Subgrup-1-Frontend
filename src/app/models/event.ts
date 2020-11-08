import { Measure } from './measures';

export interface Event {
  _id: string;
  name: string;
  street: string;
  date: string;
  hourIni: string;
  hourEnd: string;
  minPrice?: number;
  maxPrice?: number;
  measures?: Array<Measure>;
  ratings?: number;
  link?: string;
  id_manager: string;
  id_room: string;
}
