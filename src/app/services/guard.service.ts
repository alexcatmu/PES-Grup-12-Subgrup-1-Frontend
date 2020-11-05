import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private router: Router,
              private storageService: StorageService) {
  }

  canActivate(): boolean {
    console.log(this.storageService.isAuthenticated());
    if (this.storageService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/']).then(r => console.log(r));
    return false;
  }
}