import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private _footerYear: number = 0;

  constructor() { }

  ngOnInit(): void {
    this._footerYear = new Date().getFullYear()
  }

  get footerYear(): number {
    return this._footerYear
  }

}
