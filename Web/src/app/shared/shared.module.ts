import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { SectionsComponent } from './components/sections/sections.component';

const COMPONENTS = [SectionsComponent];

const DIRECTIVES = [];

const PIPES = [];

const MODULES = [CommonModule, RouterModule, ReactiveFormsModule, CarouselModule, ButtonModule];

@NgModule({
  declarations: [
    ...COMPONENTS,
    // ...DIRECTIVES,
    // ...PIPES
  ],
  imports: [...MODULES],
  exports: [
    ...MODULES,
    ...COMPONENTS,
    // ...DIRECTIVES,
    // ...PIPES
  ],
})
export class SharedModule {}
