/*
 * Maestra trainer - Practice counting the beat
 *
 * Copyright 2020 Peter Rogers (peter.rogers@gmail.com)
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

describe('TabsPage', () => {
    let component: TabsPage;
    let fixture: ComponentFixture<TabsPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TabsPage ],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(TabsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
