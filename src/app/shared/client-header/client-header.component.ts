import {Component, OnInit} from '@angular/core';
import {Categories} from "../shared.constant";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit {

  categories = Categories;

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }
}
