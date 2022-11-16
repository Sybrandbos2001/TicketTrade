import { Component, OnInit } from '@angular/core';
import { InMemoryDbService } from 'src/app/in-memory-db.service';
import { Concert } from 'src/app/models/concert.model';

@Component({
  selector: 'app-concert-detail',
  templateUrl: './concert-detail.component.html',
  styleUrls: ['./concert-detail.component.css'],
})
export class ConcertDetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
