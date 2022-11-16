import { Component, OnInit } from '@angular/core';
import { InMemoryDbService } from 'src/app/in-memory-db.service';
import { Concert } from 'src/app/models/concert.model';

@Component({
  selector: 'app-concert-list',
  templateUrl: './concert-list.component.html',
  styleUrls: ['./concert-list.component.css'],
})
export class ConcertListComponent implements OnInit {
  concerts: Concert[];
  constructor(private list: InMemoryDbService) {
    //Toevoegen van data | -InMemoryDB
    this.concerts = list.allConcerts();
  }

  ngOnInit(): void {}
}
