import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Session} from '../models/session';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private localStorageService: Storage;
  private currentSession: any;

  constructor(private router: Router) {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
  }

  setCurrentSession(session: Session): void {
    this.currentSession = session;
    this.localStorageService.setItem('currentUser', JSON.stringify(session));
  }


  loadSessionData(): Session {
    const sessionStr = this.localStorageService.getItem('currentUser');
    return (sessionStr) ? JSON.parse(sessionStr) as Session : null;
  }

  getCurrentSession(): Session {
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentUser');
    this.currentSession = null;
  }

  getCurrentUser(): User {
    const session: Session = this.getCurrentSession();
    console.log('getcurrentuser', session);
    return (session && session.user) ? session.user : null;
  }

  isAuthenticated(): boolean {
    return (this.getCurrentSession() != null);
  }

  getCurrentToken(): string {
    const session = this.getCurrentSession();
    return (session && session.token) ? session.token : null;
  }

  logout(): void {
    this.removeCurrentSession();
    this.router.navigate(['/']).then(r => console.log(r));
  }
}
