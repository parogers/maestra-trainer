/*
 * Maestra trainer - Practice counting the beat
 *
 * Copyright 2020 Peter Rogers (peter.rogers@gmail.com)
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'record',
                children: [
                    {
                        path: '',
                        loadChildren: '../record/record.module#RecordPageModule'
                    }
                ],
            },
            {
                path: 'review',
                children: [
                    {
                        path: '',
                        loadChildren: '../review/review.module#ReviewPageModule'
                    }
                ],
            },
            {
                path: 'about',
                children: [
                    {
                        path: '',
                        loadChildren: '../about/about.module#AboutPageModule'
                    }
                ],
            },
            {
                path: '',
                redirectTo: '/record',
                pathMatch: 'full'
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule {}
