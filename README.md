# RfsBreadcrumb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Installation

Using npm: 
  
`
$ npm i rfs-breadcrumb
`

## Usage
  
You'll need to add BreadcrumbModule to your application module.  
  
```
import { BreadcrumbModule } from 'rfs-breadcrumb';
...
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BreadcrumbModule,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
```
  
Add the rfs-breadcrumb attribute to your app:
```
@Component({
  selector: 'sample',
  template:`
    <rfs-breadcrumb></rfs-breadcrumb>
    <router-outlet></router-outlet>
  `,
  styles: []
})
class SampleComponent {}
```  
  
## Contributing
  
Feel free to open a Pull-Request.
