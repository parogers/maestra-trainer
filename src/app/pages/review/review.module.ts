/*
 * Maestra trainer - Practice counting the beat
 *
 * Copyright 2020 Peter Rogers (peter.rogers@gmail.com)
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewPageRoutingModule } from './review-routing.module';

import { ReviewPage } from './review.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReviewPageRoutingModule
    ],
    declarations: [ReviewPage]
})
export class ReviewPageModule {}
