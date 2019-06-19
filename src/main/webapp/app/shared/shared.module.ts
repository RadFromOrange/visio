import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VisioSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [VisioSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [VisioSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VisioSharedModule {
  static forRoot() {
    return {
      ngModule: VisioSharedModule
    };
  }
}
