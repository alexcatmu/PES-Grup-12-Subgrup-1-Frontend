import {NgModule, Optional, SkipSelf} from '@angular/core';
import {StorageService} from './services/storage.service';
import {GuardUser} from './guards/guard.user';

@NgModule({
  declarations: [  ],
  imports: [],
  providers: [
    StorageService,
    GuardUser
  ],
  bootstrap: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
