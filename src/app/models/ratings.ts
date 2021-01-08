interface IRatings {
  _id: string;
  author: string;
  rate: number;
  comment: string;
  id_event: string;
}

export class Ratings implements IRatings {
  _id: string;
  author: string;
  rate: number;
  comment: string;
  id_event: string;
}
