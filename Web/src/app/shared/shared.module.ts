import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const COMPONENTS = [];

const DIRECTIVES = [];

const PIPES = [];

const MODULES = [CommonModule, RouterModule, ReactiveFormsModule];

@NgModule({
  declarations: [
    //...COMPONENTS,
    // ...DIRECTIVES,
    // ...PIPES
  ],
  imports: [...MODULES],
  exports: [
    ...MODULES,
    //...COMPONENTS,
    // ...DIRECTIVES,
    // ...PIPES
  ],
})
export class SharedModule {}
