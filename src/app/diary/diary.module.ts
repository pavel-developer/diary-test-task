import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DiaryRouting} from './diary.routing';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {PickerModule} from '@ctrl/ngx-emoji-mart';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

import {InputComponent} from './components/input/input.component';
import {ListComponent} from './components/list/list.component';
import {CustomDate} from './pipes/custom_date.pipe';

@NgModule({
  declarations: [
    InputComponent,
    ListComponent,
    CustomDate
  ],
  imports: [
    CommonModule,
    DiaryRouting,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    PickerModule,
    FormsModule,
    MatCardModule
  ]
})
export class DiaryModule {
}
