import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AuthService ]
})
export class AppComponent {
  title = 'SecurEvent';
  langs: string[] = [];

  constructor( private translate: TranslateService ) {
    this.translate.setDefaultLang('es');
  }
}
