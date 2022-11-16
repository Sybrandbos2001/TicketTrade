export interface Concert {
  id: number;
  name: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  amountTickets: number;
  location: string;
  artist: string;
}

// export class Concert implements Concert
// constructor(id: number, name: string, description, startDateTime: Date, endDateTime: Date, amountTickets: number, location: string, artist: string){
//     this.id = id;
//     this.name = name;
// }
