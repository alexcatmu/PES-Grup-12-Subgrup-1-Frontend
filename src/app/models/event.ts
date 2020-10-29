export interface Event {
  _id: number;
  name: string;
  street: string;
  date: string;
  hourIni: string;
  hourEnd: string;
  min?: number;
  max?: number;
  measures?: string;
  ratings?: number;
  link?: string;
}
