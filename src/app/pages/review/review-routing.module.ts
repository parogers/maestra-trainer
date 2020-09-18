/*
 * Maestra trainer - Practice counting the beat
 *
 * Copyright 2020 Peter Rogers (peter.rogers@gmail.com)
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewPage } from './review.page';

const routes: Routes = [
    {
        path: '',
        component: ReviewPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ReviewPageRoutingModule {}
