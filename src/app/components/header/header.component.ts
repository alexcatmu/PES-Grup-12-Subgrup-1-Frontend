import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(protected authService: AuthService,
              private breakpointObserver: BreakpointObserver,
              public storageService: StorageService,
              ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout().subscribe( () => {
      this.storageService.logout();
    }, () => {
      this.storageService.logout();
    });
  }
}
