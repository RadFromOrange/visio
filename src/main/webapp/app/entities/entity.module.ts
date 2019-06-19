import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#VisioRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#VisioCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#VisioLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#VisioDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#VisioTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#VisioEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#VisioJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#VisioJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VisioEntityModule {}
