import { Component, OnInit } from '@angular/core';
import {StorageService} from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public storageService: StorageService) { }

  ngOnInit(): void {
    console.log(this.storageService.getCurrentUser());
  }

}
