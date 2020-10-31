import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'SecurEvent';


  constructor(protected authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout().subscribe( (response) => {
      console.log(response);
      localStorage.removeItem('token');
    }, (error) => {
      console.error('Error with logout', error);
    });
  }
}
