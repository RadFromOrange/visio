import { NgModule } from '@angular/core';

import { VisioSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [VisioSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [VisioSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class VisioSharedCommonModule {}
