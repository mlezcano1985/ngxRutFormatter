# NgxRutFormatter

Angular module to format and validate rut (Chile) number using [https://github.com/mlezcano1985/rut](https://github.com/mlezcano1985/rut)

# How to install?
```
npm install --save @mlezcano1985/ngx-rut-formatter
```

# How to use it?
Once you have installed it, you can import `NgxRutFormatterModule` from `@mlezcano1985/ngx-rut-formatter` in any application module. E.g.

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxRutFormatterModule } from '@mlezcano1985/ngx-rut-formatter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxRutFormatterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Use as directive
```
<form name="f">
  <input type="text" name="rut" ngxRutFormatter name="text" [(ngModel)]="modelRut" #modelRutInput="ngModel" required>
  <input type="button" value="submit" [disabled]="modelRutInput.errors">
</form>
```

## Use as Pipe
```
{{'12345444' | ngxRutFormatter}}
```
**Output**: 1.234.544-4 

```
{{'23,ll' | ngxRutFormatter }}
```
**Output**: empty string

## Use as Service
```
import { NgxRutFormatterService } from '@mlezcano1985/ngx-rut-formatter';
```

```
 const value = 12345444;
 const clear = this.rutService.clean(value);
 const val = this.rutService.format(clear);
 return val;
```

# Support
If you are having general issues with this package, feel free to contact me on [Twitter](https://twitter.com/mlezcano1985).

If you believe you have found an issue, please report it using the [GitHub issue tracker](https://github.com/mlezcano1985/rut/issues), or better yet, fork the repository and submit a pull request.

If you're using this package, I'd love to hear your thoughts. Thanks!

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Code scaffolding

Run `ng generate component component-name --project NgxRutFormatter` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project NgxRutFormatter`.
> Note: Don't forget to add `--project NgxRutFormatter` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build NgxRutFormatter` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build NgxRutFormatter`, go to the dist folder `cd dist/ngx-rut-formatter` and run `npm publish`.

## Running unit tests

Run `ng test NgxRutFormatter` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
