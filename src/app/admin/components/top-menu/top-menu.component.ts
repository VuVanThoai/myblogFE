import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  @Output() search = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSearch(value: string) {
    this.search.emit(value);
  }
}
