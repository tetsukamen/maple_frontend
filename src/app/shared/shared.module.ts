import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MessageComponent,
  ]
})
export class SharedModule { }
