# RfsBreadcrumb

Angular 7 Breadcrumbs generated from Angular Router.  
[DEMO](https://rfs-breadcrumb.stackblitz.io)

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
  
Add the rfs-breadcrumb selector to your app:
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
