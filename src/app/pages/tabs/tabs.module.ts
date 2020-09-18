/*
 * Maestra trainer - Practice counting the beat
 *
 * Copyright 2020 Peter Rogers (peter.rogers@gmail.com)
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TabsPageRoutingModule
    ],
    declarations: [TabsPage]
})
export class TabsPageModule {}
